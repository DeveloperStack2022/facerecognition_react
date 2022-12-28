import { IHttp, IRequestOption } from "./interface/iHttp";
export default class HttpFormData implements IHttp {
  async request(requestOption: IRequestOption): Promise<any> {
    const options: RequestInit = { method: requestOption.method };
    if (requestOption?.headers) {
      options.headers = new Headers(requestOption.headers);
    }
    if (requestOption.body) options.body = requestOption.body;
    return await fetch(requestOption.url, options);
  }
}
