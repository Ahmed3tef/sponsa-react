import React from 'react';
// import { Col, Container, Row } from 'react-bootstrap';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import './mainTable.css';
import { useSelector } from 'react-redux';
import { columns } from './columnsData';

export default function MainTable() {
  const ads = useSelector(state => state.ads.ads);
  // let rows = ads.map((ad) => {...ad, });
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
