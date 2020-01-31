import AXIOS from "../Config/Axios";
import headers from "../helpers/headers";

const Marriage = {
  getAll() {
    return AXIOS.get("/marriage", { headers: headers() });
  },
};

export default Marriage;
