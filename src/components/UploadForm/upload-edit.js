import axios from 'axios';
import { APIBase } from '../../store/reducers/api';
import { toast } from 'react-toastify';

export default function uploadAndEdit(
  updatedPage,
  route,
  fd,
  config,
  goBackHandler,
  msg,
  updatedType
) {
  const id = toast.loading('please wait a second...');

  if (updatedType === 'image') {
    axios
      .patch(`${APIBase}${route}/updateimage`, fd, config)
      .then(res => {
        toast.update(id, {
          render: `${msg} updated successfully 👌`,
          type: 'success',
          isLoading: false,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        goBackHandler();
      })
      .catch(err => {
        const errMsg = err.response.data.message;
        toast.update(id, {
          render: `${errMsg} ⛔`,
          type: 'error',
          isLoading: false,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
    return;
  }
  if (updatedType === 'text') {
    axios
      .patch(`${APIBase}${route}/update`, fd, config)
      .then(res => {
        toast.update(id, {
          render: `${msg} updated successfully 👌`,
          type: 'success',
          isLoading: false,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        goBackHandler();
      })
      .catch(err => {
        const errMsg = err.response.data.message;
        toast.update(id, {
          render: `${errMsg} ⛔`,
          type: 'error',
          isLoading: false,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
    return;
  }
  if (updatedPage) {
    axios
      .patch(`${APIBase}${route}/update`, fd, config)
      .then(res => {
        toast.update(id, {
          render: `${msg} updated successfully 👌`,
          type: 'success',
          isLoading: false,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        goBackHandler();
      })
      .catch(err => {
        const errMsg = err.response.data.message;
        toast.update(id, {
          render: `${errMsg} ⛔`,
          type: 'error',
          isLoading: false,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
    return;
  }
  if (!updatedType && !updatedPage) {
    axios
      .post(`${APIBase}${route}/create`, fd, config)
      .then(res => {
        toast.update(id, {
          render: `${msg} uploaded successfully 👌`,
          type: 'success',
          isLoading: false,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        goBackHandler();
      })
      .catch(err => {
        const errMsg = err.response.data.message;
        toast.update(id, {
          render: `${errMsg} ⛔`,
          type: 'error',
          isLoading: false,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
    // const postPromise = axios
    //   .post(`${APIBase}${route}/create`, fd, config)
    //   .then(res => {
    //     console.log(res);

    //     goBackHandler();
    //   })
    //   .catch(err => {
    //     const errMsg = err.response.data.message;
    //     console.log(errMsg);
    //     toast.error(errMsg);
    //     return;
    //   });
    // if (postPromise) {
    //   toast.promise(postPromise, {
    //     pending: `Uploading your ${msg}
    //       please wait a second`,
    //     error: 'upload failed ⛔',
    //     success: `${msg} uploaded successfully 👌`,
    //   });
    // }
  }
}
