// /api/favourites/status/route.ts
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
    const { email, title } = await request.json();

    if (!email || !title) {
      return NextResponse.json({ error: 'Email and title are required.' }, { status: 400 });
    }

    const userId = await getUserIdByEmail(email);
    
    if (!userId) {
      return NextResponse.json({ error: 'User not found.' }, { status: 404 });
    }

    const result = await sql`
      SELECT EXISTS (
        SELECT 1
        FROM Users_data
        WHERE user_id = ${userId} AND ${title} = ANY(favourites_videos)
      ) AS isFavourite
    `;

    return NextResponse.json({ isFavourite: result.rows[0].isfavourite });
  } catch (error) {
    console.error('Error fetching favourite status:', error);
    return NextResponse.json({ error: 'Error fetching favourite status.' }, { status: 500 });
  }
}
