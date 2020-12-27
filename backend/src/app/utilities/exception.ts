export class Exception {
  protected message: string;
  protected code: number;
  
  constructor(message: string, code: number) {
    this.message = message;
    this.code = code;
  }
}
