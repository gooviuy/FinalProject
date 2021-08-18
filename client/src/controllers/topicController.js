import client from ".";


class topicController {
  //constructor() {}
 
  async topic(data) {
  
    try {
  
      const result = await client.post("landing/", data);
      
      return result.data;
    } catch (err) {
      console.log(err);
    }
  }
}
const topicContr = new topicController();
export default topicContr;
