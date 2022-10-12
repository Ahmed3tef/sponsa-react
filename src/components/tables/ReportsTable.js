import React, { useState } from 'react';
// import { Col, Container, Row } from 'react-bootstrap';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import './reportsTable.css';
import { useDispatch, useSelector } from 'react-redux';
import { APIBase } from '../../store/reducers/api';
import axios from 'axios';

const ReportsTable = props => {
  // const dispatch = useDispatch();

  // const config = {
  //   headers: {
  //     authorization: props.token,
  //   },
  // };
  let cols;
  let width;
  if (props.path === 'most-product') {
    width = 850;
    cols = [
      {
        field: 'position',
        headerName: '#',
        width: 180,
        headerAlign: 'center',
        align: 'center',
      },
      {
        field: 'name',
        headerName: 'Product Name',
        width: 350,

        headerAlign: 'center',
        align: 'center',
        renderCell: ({ row }) => {
          return (
            <div>
              <span>{`${row.name.english}`}</span> -
              <span>{`${row.name.arabic}`}</span>
            </div>
          );
        },
      },
      {
        field: 'count',
        headerName: 'Orders Count',
        width: 350,

        headerAlign: 'center',
        align: 'center',
        // renderCell: ({ row }) => {
        //   return (
        //     <div>
        //       <p>{`${row.name.english}`}</p>
        //       <p>{`${row.name.arabic}`}</p>
        //     </div>
        //   );
        // },
      },
    ];
  }
  return (
    <Box sx={{ height: 380, width: width }}>
      <DataGrid
        rows={props.data}
        columns={cols}
        pageSize={6}
        rowsPerPageOptions={[6]}
        disableSelectionOnClick={true}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
};

export default ReportsTable;
