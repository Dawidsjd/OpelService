// src/app/api/offers/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET(request: NextRequest) {
  try {
    const result = await sql`
      SELECT id, title, price, url AS image, category
      FROM market_items
    `;
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Error fetching offers:', error);
    return NextResponse.json({ error: 'Error fetching offers' }, { status: 500 });
  }
}
