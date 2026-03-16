import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { full_name, email, zip_code } = await req.json()

  if (!full_name || !email || !zip_code) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const baseId = process.env.AIRTABLE_BASE_ID
  const tableName = process.env.AIRTABLE_TABLE_NAME
  const pat = process.env.AIRTABLE_PAT

  const response = await fetch(
    `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName!)}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${pat}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          'First and last name': full_name,
          Email: email,
          'Zip code': Number(zip_code),
        },
      }),
    }
  )

  if (!response.ok) {
    const error = await response.json()
    console.error('Airtable error:', error)
    return NextResponse.json({ error: 'Failed to save signup' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
