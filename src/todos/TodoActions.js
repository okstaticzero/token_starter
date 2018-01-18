import { web3 } from '../util/web3Util';
import * as types from '../store/actionTypes';
//import Todos from '../services/TodosService';
import { setJSON } from '../util/IPFS'
import axios from 'axios';

/*
const reformatTodos = todos => {
  const newArr = [];
  for (let i = 0; i < todos[0].length; i++) {
    let obj = {};
    obj.id = todos[0][i].c[0];
    const hash1 = web3.toAscii(todos[1][i]); //convert byte32 to string
    const hash2 = web3.toAscii(todos[2][i]); //convert byte32 to string
    obj.hash = hash1 + hash2;
    obj.complete = todos[3][i];
    newArr.push(obj);
  }
  return newArr;
};

export const todosSuccess = data => {
  return {
    type: types.TODOS_SUCCESS,
    payload: data,
  };
};

export const showPreloader = (bool) => {
  return {
    type: types.SHOW_PRELOADER,
    payload: bool
  };
};

export const fetchTodos = (account) => {
  return async dispatch => {
    dispatch(showPreloader(true));
    try {
      const todos = await Todos.getMyData(account);
      const todosArr = reformatTodos(todos);
      //push all ipfs addresses into array
      const ipfsArr = [];
      todosArr.forEach((todo) => {
        const url = `https://ipfs.infura.io/ipfs/${todo.hash}`;
        ipfsArr.push(url)
      })

      ///return array of axios promises
      const getAllIPFS = () => {
        return ipfsArr.map((address, i) => {
          return axios.get(address);
        })
      }
      //load all adresses from using axios
      const axiosArr = await axios.all(getAllIPFS())
      //
      dispatch(todosSuccess(axiosArr));
      dispatch(showPreloader(false));
    } catch (error) {
      console.log(error);
      dispatch(showPreloader(false));
    }
  };
};



export const createTodo = (title, account, userAddress) => {
  return async dispatch => {
    dispatch(showPreloader(true));
    try {
      const timestamp = Math.floor(Date.now() / 1000)
      const ipfsHash = await setJSON({ title: title, timestamp: timestamp, more: "more!::::" });
      const hash1 = ipfsHash.substr(0, 32);
      const hash2 = ipfsHash.substr(32);
      const todos = await Todos.createTodo(hash1, hash2, account, userAddress);
      const todosArr = reformatTodos(todos);
      dispatch(todosSuccess(todosArr));
      dispatch(showPreloader(false));
    } catch (error) {
      console.log(error);
      dispatch(showPreloader(false));
    }
  };
};

export const toggleComplete = (account, id, userAddress) => {
  return async dispatch => {
    dispatch(showPreloader(true));
    try {
      const todos = await Todos.toggleComplete(account, id, userAddress);
      const todosArr = reformatTodos(todos);
      dispatch(todosSuccess(todosArr));
      dispatch(showPreloader(false));
    } catch (error) {
      console.log(error);
      dispatch(showPreloader(false));
    }
  };
};

export const deleteTodo = (account, id, userAddress) => {
  return async dispatch => {
    dispatch(showPreloader(true));
    try {
      const todos = await Todos.deleteTodo(account, id, userAddress);
      const todosArr = reformatTodos(todos);
      dispatch(todosSuccess(todosArr));
      dispatch(showPreloader(false));
    } catch (error) {
      console.log(error);
      dispatch(showPreloader(false));
    }
  }
}
*/