import axios from 'axios';
import { APIBase } from './api';
const config = {
  headers: {
    authorization:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiMSIsInVzZXJJZCI6IjYzMTBhNzgwOThhY2M1NWFiOTNjY2JmOSIsInN0YXR1cyI6MSwiaWF0IjoxNjYzMjUyMTU3LCJleHAiOjE2NjU4NDQxNTd9.A8f2G4eFcJLS_clm_4ubdb8hxrNwfOhlaT7jyi_Bhjo',
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
