import api from './api';
import history from './history';
import { showMessage } from './message';

export const STATUS = "@login";

//AUTENTICAÇÃO
export const auth = (login) => {
  return dispatch => {
    api.post('/auth', login)
    .then(Response => {
      localStorage.setItem(STATUS, Response.data.msg);
      history.push('/app');
    }).catch(error => {
      if(error.response){
        dispatch(
          showMessage(error.response.data.err),
        )
      }else{
        dispatch(
          showMessage("Servidor indisponível, tente mais tarde!"),
        );
      };
    });
  };
};

//VERIFICA SE ESTÁ AUTENTICADO
export const isAuthenticated = () => {
  if(localStorage.getItem(STATUS) !== null){
    return true;
  }
  return false;
};

//LOGOUT
export const logout = () => {
  history.push('/');
  localStorage.removeItem(STATUS);
};