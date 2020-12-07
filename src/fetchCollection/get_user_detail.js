import Axios from 'axios';

const get_user_detail = (id) =>{
  return new Promise((resolve)=>{
    Axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((user)=>resolve(user))
      .catch((e)=>resolve(e))
  })
}
export default get_user_detail
