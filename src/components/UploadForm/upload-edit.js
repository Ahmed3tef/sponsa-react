import axios from 'axios';
import { APIBase } from '../../store/reducers/api';
import { toast } from 'react-toastify';

export default function uploadAndEdit(
  updatedPage,
  route,
  fd,
  config,
  goBackHandler,
  msg
) {
  if (updatedPage) {
    // console.log(updatedAD);

    const updatePromise = axios
      .patch(`${APIBase}${route}/update?id=${updatedPage.id}`, fd, config)
      .then(res => {
        console.log(res);
        goBackHandler();
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
