import http from "./_axios";
import querystring from "query-string";
export class MethodGet {
  /**
   *
   * @param {string}url
   * @param {object}data
   */
  public requests = async (url: string, data: object) => {
    return await new Promise<object>((resolve, reject) => {
      const uri = data ? `${url}?${querystring.stringify(data)}` : url;
      http
        .get(uri)
        .then((res: object) => resolve(res))
        .catch((error: object) => reject(error));
    });
  };
}
