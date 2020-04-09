import Axios from "axios";
import { numbersApi } from "../../../_config";
export default Axios.create({
  baseURL: numbersApi,
  headers: {
    Accept: "*/*"
  }
});
