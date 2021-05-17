/**
 * Greeter class
 */
export class Greeter {
  public name: string;
  /**
     * Constructor of greeter class
     * @param name name of the greeter
     */
  constructor(name: string) {
    this.name = name;
  }
  /**
     * 
     * @param {string} other name of the person which should be greeted
     * @returns greeting string
     */
  public greet(other: string): string {
    return "hello" + other + "from" + this.name;
  }
}
