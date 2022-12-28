import { IHttp, IRequestOption } from "./interface";

class Http implements IHttp {
  async request(requestOption: IRequestOption): Promise<any> {
    const options: RequestInit = { method: requestOption.method };

    if (requestOption?.headers)
      options.headers = new Headers(requestOption.headers);
    if (requestOption?.body) options.body = JSON.stringify(requestOption.body);

    return fetch(requestOption.url, options)
      .then((res) => res.json())
      .catch((e) => console.log(e));
  }
}

export default Http;
