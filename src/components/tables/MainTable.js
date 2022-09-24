import React, { useState } from 'react';
// import { Col, Container, Row } from 'react-bootstrap';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import './mainTable.css';
import { useSelector } from 'react-redux';
import { APIBase } from '../../store/reducers/api';
import editIcon from '../../assets/Edit.svg';
import deleteIcon from '../../assets/Delete.svg';

import axios from 'axios';
export default function MainTable(props) {
  const ads = useSelector(state => state.ads.ads);
  // let rows = ads.map((ad) => {...ad, });

  const config = {
    headers: {
      authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiMSIsInVzZXJJZCI6IjYzMjc0ZjUwNmFjNTAwOTE4ZDFhMTA1MCIsInN0YXR1cyI6MSwiaWF0IjoxNjYzOTgwNDM5LCJleHAiOjE2NjY1NzI0Mzl9.Iqfmp-AnQ03Km85vyiYM5PCLZFuktUGDXZwymps5xrA',
    },
  };

  const columns = [
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
            <img
              src={editIcon}
              alt='edit icon'
              className='pe-4'
              onClick={() => {
                props.setUpdatedAD(params.row);
                props.setShowAddAD(true);
              }}
            />
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

  return (
    <Box sx={{ height: 730, width: '100%' }}>
      <DataGrid
        rows={ads}
        columns={columns}
        pageSize={4}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick={true}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
