import axios from "axios";

const loginController = {
  login: async (data) => {
    debugger;
    const result = await axios.post("http://127.0.0.1:8000/login", data);
    debugger;
    return result;
  },
};

export default loginController;
