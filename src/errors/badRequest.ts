export default class BadRequestException extends Error {
  public readonly statusCode = 400;
  public fieldValidation = false;

  constructor(message: string, fieldValidation?: boolean) {
    super();

    this.message = message;
    this.fieldValidation = fieldValidation ?? false;
  }

  toJSON(): any {
    return { statusCode: this.statusCode, message: this.message };
  }
}
