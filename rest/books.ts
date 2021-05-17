/**
 * Bookmap class that stores a map about books
 */
export class BookMap extends Map<string, Book> {
  /**
     * Constructor of the BookMap that creates some dummy data.
     */
  constructor() {
    super();
    this.set("1", {
      id: "1",
      title: "Clean Code",
      author: "Joanne K. Rowling",
    });
    this.set("2", {
      id: "2",
      title: "Harry Potter und der Stein der Weisen",
      author: "Robert C. Martin",
    });
    this.set("3", {
      id: "3",
      title: "Der Herr der Ringe",
      author: "J. R. R. Tolkien",
    });
  }
}
/**
 * Interface for a book
 */
export interface Book {
  /**
     * Id of the book
     */
  id: string;
  /**
     * title of the book
     */
  title: string;
  /**
     * author of the book
     */
  author: string;
}

export const books = new BookMap();
