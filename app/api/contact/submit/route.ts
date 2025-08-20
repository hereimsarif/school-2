import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@lib/validators';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const result = contactSchema.safeParse(data);
    if (!result.success) {
      return NextResponse.json({ error: result.error.flatten() }, { status: 400 });
    }
    // TODO: Save to DB or send notification (demo: just return ok)
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
