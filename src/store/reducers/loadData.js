import axios from 'axios';
import { APIBase } from './api';
import { getAdminToken } from './auth';

const token = sessionStorage.getItem('token');
console.log(token);
const config = {
  headers: {
    authorization: token,
  },
};
export default async function loadData(thunkAPI, path) {
  return axios
    .get(`${APIBase}${path}`, config, thunkAPI)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err.response.data;
    });
}
export async function loadDataWithId(thunkAPI, path, id) {
  const configId = {
    headers: {
      authorization: token,
    },
    params: {
      id,
    },
  };
  return axios
    .get(`${APIBase}${path}`, configId, thunkAPI)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err.response.data;
    });
}
export async function loadDataWithParams(thunkAPI, path, params, data) {
  const config = {
    headers: {
      authorization: token,
    },
    params,
  };
  return axios
    .post(`${APIBase}${path}`, data, config, thunkAPI)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err.response.data;
    });
}
