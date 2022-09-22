import React from 'react';
// import { Col, Container, Row } from 'react-bootstrap';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: params =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const ads = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function MainTable() {
  return (
    <Box sx={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={ads}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}

// const MainTable = () => {
//   return (

//     // <div className='ads__table'>
//     //   <Container fluid>
//     //     <Row className='t-head'>
//     //       <Col sm={1}>
//     //         <div className='t-span'>#</div>
//     //       </Col>
//     //       <Col sm={2} className='p-0'>
//     //         AD Photo صورة الإعلان
//     //       </Col>
//     //       <Col sm={2}>AD Title Count</Col>
//     //       <Col sm={1}>عنوان الإعلان</Col>
//     //       <Col sm={2}>AD Description</Col>
//     //       <Col sm={2}>وصف الإعلان</Col>
//     //       <Col sm={2}>Actions الإجراءات</Col>
//     //     </Row>
//     //   </Container>

//     //   <Container fluid>
//     //     {tableData.map((prod, i) => (
//     //       <Row key={i} className='t-body'>
//     //         <Col sm={1}>
//     //           <div className='t-span'>{prod.position}</div>
//     //         </Col>
//     //         <Col sm={2} className='p-0'>
//     //           <div className='t-span t-prod '>
//     //             <img
//     //               src={`${URL}${prod.image.imageUrl}`}
//     //               alt={prod.image.alt}
//     //               className='img-fluid'
//     //             />
//     //           </div>
//     //         </Col>
//     //         <Col sm={2}>
//     //           <div className='t-span'>{prod.names.english}</div>
//     //         </Col>
//     //         <Col sm={1}>
//     //           <div className=' t-span'>{prod.names.arabic}</div>
//     //         </Col>
//     //         <Col sm={2}>
//     //           <div className=' t-span '>{prod.description.english}</div>
//     //         </Col>
//     //         <Col sm={2}>
//     //           <div className=' t-span'>{prod.description.arabic}</div>
//     //         </Col>
//     //         <Col sm={2}>
//     //           <div className=' t-span'>{prod.description.arabic}</div>
//     //         </Col>
//     //       </Row>
//     //     ))}
//     //   </Container>
//     // </div>
//   );
// };

// export default MainTable;
