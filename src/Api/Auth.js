import AXIOS from "../Config/Axios";
import headers from "../helpers/headers";

const Auth = {
  login(data) {
    return AXIOS.post("/auth/login", {
      ...data
    });
  },
  checkLogin() {
    return AXIOS.get("/auth/check-login", { headers: headers() });
  }
};

export default Auth;
