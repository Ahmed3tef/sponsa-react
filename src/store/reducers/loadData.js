import axios from 'axios';
import { APIBase } from './api';

export default async function loadData(thunkAPI, path) {
  return axios
    .get(`${APIBase}${path}`, thunkAPI)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err.response.data;
    });
}
