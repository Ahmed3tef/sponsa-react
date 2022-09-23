import React from 'react';
// import { Col, Container, Row } from 'react-bootstrap';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import './mainTable.css';
import { useSelector } from 'react-redux';
import { APIBase } from '../../store/reducers/api';

const columns = [
  { field: 'position', headerName: '#', width: 30 },
  {
    field: 'imgUrl',
    headerName: 'First name',
    width: 280,
    sortable: false,
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
  },
  {
    field: 'arabicName',
    headerName: 'عنوان الإعلان',

    width: 130,
  },
  {
    field: 'englishDesc',
    headerName: 'AD Description',
    width: 280,
  },
  {
    field: 'arabicDesc',
    headerName: 'وصف الإعلان',
    width: 280,
  },
];

export default function MainTable() {
  const ads = useSelector(state => state.ads.ads);

  return (
    <Box sx={{ height: 600, width: '100%' }}>
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
