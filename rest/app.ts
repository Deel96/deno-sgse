import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { books } from "./books.ts";
import { Greeter } from "./greeter.ts";
/**
 * Simple Rest Server
 */
export class App {
  public app: Application;
  public greeter:Greeter;

  /**
   * Constructor of the server
   */
  constructor() {
    this.app = new Application();
    this.greeter = new Greeter("Joe");
    const router = new Router();
    router
      .get("/", (context) => {
        context.response.body = "Hello to my Bookstore";
      })
      .get("/book", (context) => {
        context.response.body = Array.from(books.values());
      })
      .get("/book/:id", (context) => {
        if (
          context.params && context.params.id && books.has(context.params.id)
        ) {
          context.response.body = books.get(context.params.id);
        }
      });

    this.app.use(router.routes());
    this.app.use(router.allowedMethods());
  }
  /**
   * 
   * @param {number} port port where the server will lsiten 
   */
  public async start(port:number): Promise<void> {
    await this.app.listen({ port: port });
  }
}
