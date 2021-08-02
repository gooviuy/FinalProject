import client from ".";

class loginController {
constructor() {
   
  }

  async login(data) {
  
    try{
    
    const result = await client.post("login/", data);
   /*const result = await fetch("http://localhost:8000/login", {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
  })*/
    
    return result.data;
  }
    catch(err){
      debugger;
      console.log(err)
    }
  }
};
const loginContr = new loginController()
export default loginContr;
