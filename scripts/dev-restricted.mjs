// Alternativa local ao supervisor de `next dev` para ambientes que bloqueiam fork().
// A produção continua usando `next build` e `next start` normalmente.
import { createServer } from "node:http";
import next from "next";

const port = Number(process.env.PORT || 3000);
const hostname = "127.0.0.1";
const app = next({ dev: true, hostname, port });
const handle = app.getRequestHandler();
await app.prepare();
const server = createServer((request, response) => {
  Promise.resolve(handle(request, response)).catch((error) => {
    console.error(error);
    if (!response.headersSent) response.writeHead(500);
    response.end("Não foi possível carregar a página.");
  });
});
server.listen(port, hostname, () => console.log(`Portfólio: http://${hostname}:${port}`));
async function stop() {
  server.close();
  await app.close();
  process.exit(0);
}
process.on("SIGINT", stop);
process.on("SIGTERM", stop);
