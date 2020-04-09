import { sendBirthdayDate } from "../api/NumbersApi";
import { UserData } from "@/app/types";

export default class UserService {
  saveUserData = async (data: UserData) => {
    return await new Promise<any>((resolve, reject) => {
      console.log(data);
      resolve();
      reject();
    });
  };
}
