import AXIOS from "../Config/Axios";
import headers from "../helpers/headers";

const User = {
  update(data) {
    return AXIOS.put(
      `/user/${data.id}`,
      {
        ...data
      },
      { headers: headers() }
    );
  },
  checkEmail(email) {
    return AXIOS.get(
      `user/check/${email}`,
      { headers: headers() }
    );
  }
};

export default User;
