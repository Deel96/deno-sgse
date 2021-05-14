 /**
   * Important class that we can document here.
   */
  export class ImportantClass{
    public name: string;
    /**
     * Constructor of the important class
     * @param {name} name of the class
     */
    constructor(name:string){
      this.name= name;
    }
}

/**
 * Adds x and y.
 * @param {number} x
 * @param {number} y
 * @returns {number} Sum of x and y
 */
 export function add(x: number, y: number): number {
    return x + y;
  }
/**
 * Adds x and y.
 * @param {number} x
 * @param {number} y
 * @returns {number} Sum of x and y
 */
 export function add2(x: number, y: number): number {
    return x + y;
  }
 



  const test = new ImportantClass("John");
  console.log(test);