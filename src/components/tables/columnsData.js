import { APIBase } from '../../store/reducers/api';
import editIcon from '../../assets/Edit.svg';
import deleteIcon from '../../assets/Delete.svg';
import React from 'react';
import axios from 'axios';

const config = {
  headers: {
    authorization:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiMSIsInVzZXJJZCI6IjYzMjc0ZjUwNmFjNTAwOTE4ZDFhMTA1MCIsInN0YXR1cyI6MSwiaWF0IjoxNjYzOTgwNDM5LCJleHAiOjE2NjY1NzI0Mzl9.Iqfmp-AnQ03Km85vyiYM5PCLZFuktUGDXZwymps5xrA',
  },
};

export const columns = [
  {
    field: 'position',
    headerName: '#',
    width: 30,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'imgUrl',
    headerName: 'First name',
    width: 260,
    sortable: false,

    headerAlign: 'center',
    align: 'center',
    renderCell: params => {
      return (
        <div className='t-prod'>
          <img src={`${APIBase}${params.row.imgUrl}`} alt={params.row.imgAlt} />
        </div>
      );
    },
  },
  {
    field: 'englishName',
    headerName: 'AD Title',
    width: 130,

    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'arabicName',
    headerName: 'عنوان الإعلان',
    headerAlign: 'center',
    align: 'center',
    width: 130,
  },
  {
    field: 'englishDesc',
    headerName: 'AD Description',
    width: 270,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'arabicDesc',
    headerName: 'وصف الإعلان',
    width: 270,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'Actions',
    headerName: 'Actions  الإجراءات',
    width: 180,
    headerAlign: 'center',
    align: 'center',
    renderCell: params => {
      return (
        <div className='e-d-icons'>
          <img src={editIcon} alt='edit icon' className='pe-4' />
          <img
            src={deleteIcon}
            alt='delete icon'
            onClick={e => {
              console.log(params.row.id);
              axios.post(`${APIBase}/delete`, { id: params.row.id }, config);
            }}
          />
        </div>
      );
    },
  },
];
