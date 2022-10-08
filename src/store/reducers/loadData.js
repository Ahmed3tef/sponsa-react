import axios from 'axios';
import { APIBase } from './api';
import { getAdminToken } from './auth';

const token = localStorage.getItem('token');
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
