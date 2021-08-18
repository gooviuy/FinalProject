import client from ".";

class loginController {
  constructor() {}

  async login(data) {
    try {
      debugger;
      const result = await client.post("login/", data);
      debugger;
      return result.data;
    } catch (err) {
      console.log(err);
    }
  }
}
const loginContr = new loginController();
export default loginContr;
