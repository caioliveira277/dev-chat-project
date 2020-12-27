interface IParamsResponse {
  message: string;
  code: number;
};

export class Exception {
  protected message: string;
  protected code: number;
  
  constructor(message: string, code: number) {
    this.message = message;
    this.code = code;
  }

  public static interceptErrors(params: any): IParamsResponse {
    const { code, message } = params;
    if(code){
      return { code, message };
    }else {
      console.log('❌  ', params);
      return { code: 500, message: 'Erro ao processar chamada' };
    }
  }
}