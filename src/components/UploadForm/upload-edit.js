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
  updatedType = null
) {
  if (updatedType === 'image') {
    const updateImagesPromise = axios
      .patch(`${APIBase}${route}/updateimage`, fd, config)
      .then(res => {
        console.log(res);
        goBackHandler();
      })
      .catch(err => console.log(err));

    toast.promise(updateImagesPromise, {
      pending: `Updating your ${msg}
      please wait a second`,
      success: `${msg} updated successfully 👌`,
      error: 'upload failed ⛔',
    });
    return;
  }
  if (updatedType === 'text') {
    const updateImagesPromise = axios
      .patch(`${APIBase}${route}/updateimage`, fd, config)
      .then(res => {
        console.log(res);
        goBackHandler();
      })
      .catch(err => console.log(err));

    toast.promise(updateImagesPromise, {
      pending: `Updating your ${msg}
      please wait a second`,
      success: `${msg} updated successfully 👌`,
      error: 'upload failed ⛔',
    });
    return;
  }
  if (updatedPage) {
    const updatePromise = axios
      .patch(`${APIBase}${route}/update`, fd, config)
      .then(res => {
        console.log(res);
        if (goBackHandler) {
          goBackHandler();
        }
      })
      .catch(err => console.log(err));
    toast.promise(updatePromise, {
      pending: `Updating your ${msg} 
          please wait a second`,
      success: `${msg} updated successfully 👌`,
      error: 'Update failed! ⛔',
    });
    return;
  }
  const postPromise = axios
    .post(`${APIBase}${route}/create`, fd, config)
    .then(res => {
      console.log(res);
      goBackHandler();
    })
    .catch(err => console.log(err));

  toast.promise(postPromise, {
    pending: `Uploading your ${msg} 
      please wait a second`,
    success: `${msg} uploaded successfully 👌`,
    error: 'upload failed ⛔',
  });
}
