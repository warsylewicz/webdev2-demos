export function GET() {
  const num = Math.floor(Math.random() * 3) + 1;
  const url = `http://localhost:3000/images/dog${num}.jpg`;

  // note: this API returns text, not JSON
  // my design, my rules
  return new Response(url);
}
