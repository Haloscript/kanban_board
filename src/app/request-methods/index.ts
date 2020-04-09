import { MethodGet } from "./method-get";
type Methods = {
  [key: string]: any;
};
export default class Request {
  static methods: Methods = {
    get: new MethodGet()
  };
  /**
   *
   * @param {string}type
   * @param {string}url
   * @param {object}data
   */
  create = async (type: string, url: string, data?: object | null) => {
    return await new Promise<object>((resolve, reject) => {
      const Method = Request.methods[type];
      Method.requests(url, data)
        .then((res: object | undefined) => resolve(res))
        .catch((error: object | undefined) => reject(error));
    });
  };
}
