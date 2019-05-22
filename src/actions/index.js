import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './type';


export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      'https://liveup.mybluemix.net/users/signup',
      formProps
    );

    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
  }
};

export const signin = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post('https://liveup.mybluemix.net/users/signin',
      formProps
    );
    
    dispatch({ type: AUTH_USER, payload: response.data.token});
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('user',formProps.username)
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials' });
  }
};

export const signout = () => {
  localStorage.removeItem('token');

  return {
    type: AUTH_USER,
    payload: ''
  };
};