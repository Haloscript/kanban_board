import { sendBirthdayDate } from "../api/NumbersApi";

export default class BaseService {
  /**
   *
   * @param {Date}date
   */
  checkDate = async (date: string | number) => {
    return await new Promise<object>((resolve, reject) => {
      const currentDate = `/${new Date(date).getMonth() + 1}/${new Date(
        date
      ).getDate()}`;
      sendBirthdayDate(currentDate)
        .then(res => {
          resolve(res);
        })
        .catch(error => reject(error));
    });
  };
}
