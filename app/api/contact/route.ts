import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, product, message } = body ?? {};

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ ok: false, error: 'Thi?u th?ng tin b?t bu?c' }), { status: 400 });
    }

    // Simulate internal handling: log to server output.
    console.log('CONTACT_REQUEST', { name, email, product, message, at: new Date().toISOString() });

    // If you later configure email, you can forward here using SMTP/provider.
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, error: 'L?i x? l? y?u c?u' }), { status: 500 });
  }
}
