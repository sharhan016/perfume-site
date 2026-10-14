export function GET() {
  return Response.json(
    {status: 'ok', service: 'orynova'},
    {headers: {'Cache-Control': 'no-store'}}
  );
}
