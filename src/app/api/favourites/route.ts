import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

async function getUserIdByEmail(email: string): Promise<number | null> {
  const result = await sql`
    SELECT id
    FROM Users
    WHERE email = ${email}
  `;
  return result.rows.length > 0 ? result.rows[0].id : null;
}

export async function POST(request: NextRequest) {
  try {
    const { email, title, action } = await request.json();

    if (!email || !title || !action) {
      return NextResponse.json({ error: 'Email, title, and action are required.' }, { status: 400 });
    }

    const userId = await getUserIdByEmail(email);
    
    if (!userId) {
      return NextResponse.json({ error: 'User not found.' }, { status: 404 });
    }

    // Formatujemy tytuł jako tablicę tekstów
    const formattedTitleArray = `{${title}}`;

    if (action === 'add') {
      // Dodaj film do ulubionych
      await sql`
        WITH updated AS (
          UPDATE Users_data
          SET favourites_videos = (
            SELECT array(
              SELECT DISTINCT elem
              FROM unnest(favourites_videos) AS elem
            ) || ${formattedTitleArray}::TEXT[]
            FROM Users_data
            WHERE user_id = ${userId}
          )
          WHERE user_id = ${userId}
          RETURNING *
        )
        INSERT INTO Users_data (user_id, favourites_videos)
        SELECT ${userId}, ${formattedTitleArray}::TEXT[]
        WHERE NOT EXISTS (SELECT 1 FROM updated);
      `;
    } else if (action === 'remove') {
      // Usuń film z ulubionych
      await sql`
        UPDATE Users_data
        SET favourites_videos = (
          SELECT array(
            SELECT elem
            FROM unnest(favourites_videos) AS elem
            WHERE elem <> ${title}
          )
          FROM Users_data
          WHERE user_id = ${userId}
        )
        WHERE user_id = ${userId};
      `;
    } else {
      return NextResponse.json({ error: 'Invalid action.' }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating favourites:', error);
    return NextResponse.json({ error: 'Error updating favourites.' }, { status: 500 });
  }
}
