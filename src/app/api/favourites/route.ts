// app/api/favourites/route.ts
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
    const { userId: email, title } = await request.json();

    if (!email || !title) {
      return NextResponse.json({ error: 'User ID (email) and title are required.' }, { status: 400 });
    }

    const userId = await getUserIdByEmail(email);
    
    if (!userId) {
      return NextResponse.json({ error: 'User not found.' }, { status: 404 });
    }

    // Zakładamy, że userId jest typu INTEGER
    const formattedTitleArray = `{${title}}`;

    const result = await sql`
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

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error('Error adding to favourites:', error);
    return NextResponse.json({ error: 'Error adding to favourites.' }, { status: 500 });
  }
}
