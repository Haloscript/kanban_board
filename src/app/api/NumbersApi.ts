import Request from "../request-methods";
const REQUEST = new Request();
export const sendBirthdayDate = (url: string) => REQUEST.create("get", url);
