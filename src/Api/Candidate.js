import AXIOS from "../Config/Axios";
import headers from "../helpers/headers";

const Candidate = {
  getAll() {
    return AXIOS.get("/candidates", { headers: headers() });
  },
  createCandidateVote(data) {
    return AXIOS.post(
      '/candidate-vote',
      {
        ...data
      },
      { headers: headers() }
    );
  }
};

export default Candidate;
