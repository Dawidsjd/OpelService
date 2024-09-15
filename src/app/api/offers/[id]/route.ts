import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

// API route to handle fetching a single offer by its ID
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    // Fetch the specific offer by id from the database
    const result = await sql`
      SELECT * FROM market_items WHERE id = ${id}
    `;

    // If no product is found, return a 404 error
    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    // Return the product details as JSON
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    return NextResponse.json({ error: 'Error fetching product.' }, { status: 500 });
  }
}
