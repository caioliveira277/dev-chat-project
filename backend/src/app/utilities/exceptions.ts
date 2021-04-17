import { EventEmitter } from 'events';
const eventEmitter = new EventEmitter();

export class Exception {
  protected message: string;
  protected code: number;
  
  constructor(message: string, code: number) {
    this.message = message;
    this.code = code;
  }

  public static errorEmitter(): EventEmitter {
    return eventEmitter;
  }

  public static interceptErrors(params: any): Error {
    const { code, message } = params;
    let objReturn;

    if(code){
      objReturn = { code, message };
    }else {
      console.log('❌  ', params);
      objReturn = { code: 500, message: 'Erro ao processar chamada' };
    }

    eventEmitter.emit('requestError', objReturn);
    throw new Error;
  }
}