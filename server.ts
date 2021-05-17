import { serve } from "https://deno.land/std@0.95.0/http/server.ts";
const server = serve({ port: 8001 });
console.log("http://localhost:8000/");

for await (const req of server) {
  req.respond({ body: "Hello World\n" });
}
