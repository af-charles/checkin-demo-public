export default async (request, context) => {
  const creds = Netlify.env.get("BASIC_AUTH");

  if (!creds) return context.next();

  const expected = "Basic " + btoa(creds);
  const got = request.headers.get("authorization");

  if (got !== expected) {
    return new Response("Auth required", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Demo"' },
    });
  }

  return context.next();
};
