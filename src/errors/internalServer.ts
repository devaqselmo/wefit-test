export default class InternalServerException extends Error {
  public readonly statusCode = 500;

  constructor(message: string) {
    super();

    this.message = message;
  }
}
