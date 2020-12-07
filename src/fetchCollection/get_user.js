import Axios from 'axios';

const getAllUser = () =>{
  return new Promise((resolve)=>{
    Axios
      .get("https://reqres.in/api/users")
      .then((user)=>resolve(user.data.data))
      .catch((e)=>resolve(e))
  })
}
export default getAllUser
