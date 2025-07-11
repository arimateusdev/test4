export const runtime = 'edge';

export default function handler(req: Request) {
  return new Response(
    JSON.stringify({ message: 'Hello World' }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    }
  );
}
