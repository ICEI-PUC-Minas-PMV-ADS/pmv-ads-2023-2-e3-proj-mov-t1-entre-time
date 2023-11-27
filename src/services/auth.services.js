import API from './webapi.services.js'
import {BASE_URL} from './webapi.services.js'

export const register = async (param) => {
  try{
    return await API.post(`${BASE_URL}/register`, param).then(
        response => {
          return response.data
        }, 
        error =>{
          console.log(error)
          return null
        }
    )
  }catch(error){
    console.log(error)
    return null
  }
}