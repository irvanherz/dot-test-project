export class StdResponse<D, M = any> {
  code: string = 'success';
  data?: D;
  message: string = 'Success';
  meta?: M;

  constructor(data: D) {
    this.data = data;
  }
}
