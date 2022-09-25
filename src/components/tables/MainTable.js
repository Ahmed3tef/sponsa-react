import React, { useState } from 'react';
// import { Col, Container, Row } from 'react-bootstrap';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import './mainTable.css';
import { useDispatch, useSelector } from 'react-redux';
import { APIBase } from '../../store/reducers/api';
import editIcon from '../../assets/Edit.svg';
import deleteIcon from '../../assets/Delete.svg';

import axios from 'axios';
import { loadAds } from '../../store/reducers/ads';
export default function MainTable(props) {
  const dispatch = useDispatch();
  console.log(props);
  const config = {
    headers: {
      authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiMSIsInVzZXJJZCI6IjYzMjc0ZjUwNmFjNTAwOTE4ZDFhMTA1MCIsInN0YXR1cyI6MSwiaWF0IjoxNjY0MTE4MjYwLCJleHAiOjE2NjY3MTAyNjB9.gJIQtAyXlwtPILXM7E2JsTgXiDNS-AR2cIDjs47BluQ',
      lang: 'en',
    },
  };

  const cols = [
    {
      field: 'position',
      headerName: '#',
      width: 30,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'imgUrl',
      headerName: props.image.title,
      width: props.image.width,
      sortable: false,

      headerAlign: 'center',
      align: 'center',
      renderCell: params => {
        return (
          <div className='t-prod'>
            <img
              src={`${APIBase}${params.row.imgUrl}`}
              alt={params.row.imgAlt}
            />
          </div>
        );
      },
    },
    {
      field: 'englishName',
      headerName: props.englishName.title,
      width: props.englishName.width,

      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'arabicName',
      headerName: props.arabicName.title,
      headerAlign: 'center',
      align: 'center',
      width: props.arabicName.width,
    },

    {
      field: 'englishDesc',
      headerName: props.englishDesc ? props.englishDesc.title : '',
      width: props.englishDesc ? props.englishDesc.width : '',
      headerAlign: 'center',
      align: 'center',
      hide: props.englishDesc ? props.englishDesc.hide : true,
    },
    {
      field: 'arabicDesc',
      headerName: props.arabicDesc ? props.arabicDesc.title : '',
      width: props.arabicDesc ? props.arabicDesc.width : '',
      headerAlign: 'center',
      align: 'center',
      hide: props.arabicDesc ? props.arabicDesc.hide : true,
    },
    // ...colData,
    {
      field: 'Actions',
      headerName: 'Actions  الإجراءات',
      width: 180,
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      renderCell: params => {
        return (
          <div className='e-d-icons'>
            <img
              src={editIcon}
              alt='edit icon'
              className='pe-4'
              onClick={() => {
                props.setUpdatedPage(params.row);

                props.setShowAddAD(true);
              }}
            />
            <img
              src={deleteIcon}
              alt='delete icon'
              onClick={e => {
                axios.delete(`${APIBase}ads?id=${params.row.id}`, config);
                dispatch(loadAds());
              }}
            />
          </div>
        );
      },
    },
  ];

  return (
    <Box sx={{ height: 730, width: '100%' }}>
      <DataGrid
        rows={props.data}
        columns={cols}
        pageSize={4}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick={true}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
