import { apiCall } from "../components/api";
import {
  REQUEST_PENDING,
  REQUEST_SUCCESS,
  REQUEST_FAILED
 } from '../components/constant'

  export const setSearchField = (text) => {
    console.log(text);
    return{
      type: 'CHANGE_SEARCHFIELD',
      payload: text
    }
  }

  export const request = () => (dispatch) => {
    dispatch({ type: REQUEST_PENDING })
    apiCall('https://jsonplaceholder.typicode.com/users')
      .then(data => dispatch({ type: REQUEST_SUCCESS, payload: data }))
      .catch(error => dispatch({ type: REQUEST_FAILED, payload: error }))
  }