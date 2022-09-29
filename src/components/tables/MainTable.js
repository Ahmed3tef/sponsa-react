import React, { useState } from 'react';
// import { Col, Container, Row } from 'react-bootstrap';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import './mainTable.css';
import { useDispatch, useSelector } from 'react-redux';
import { APIBase } from '../../store/reducers/api';
import editIcon from '../../assets/Edit.svg';
import deleteIcon from '../../assets/Delete.svg';
import reviewsIcon from '../../assets/Product Reviews.svg';
import editImgIcon from '../../assets/Product Details.svg';

import axios from 'axios';
import { loadAds } from '../../store/reducers/ads';
export default function MainTable(props) {
  const dispatch = useDispatch();
  // console.log(props);
  const config = {
    headers: {
      authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiMSIsInVzZXJJZCI6IjYzMjc0ZjUwNmFjNTAwOTE4ZDFhMTA1MCIsInN0YXR1cyI6MSwiaWF0IjoxNjY0MTE4MjYwLCJleHAiOjE2NjY3MTAyNjB9.gJIQtAyXlwtPILXM7E2JsTgXiDNS-AR2cIDjs47BluQ',
    },
  };

  let cols;

  if (props.path === 'products') {
    cols = [
      {
        field: 'position',
        headerName: '#',
        width: 30,
        headerAlign: 'center',
        align: 'center',
      },
      {
        field: 'imgUrl',
        headerName: 'Photo',
        width: 150,
        sortable: false,

        headerAlign: 'center',
        align: 'center',
        renderCell: params => {
          return (
            <div className='p-img'>
              <img
                src={`${APIBase}${params.row.imgUrl}`}
                alt={params.row.imgAlt}
              />
            </div>
          );
        },
      },
      {
        field: 'names',
        headerName: 'Title',
        width: 120,

        headerAlign: 'center',
        align: 'center',
        renderCell: ({ row }) => {
          return (
            <div>
              <p>{`${row.name.english}`}</p>
              <p>{`${row.name.arabic}`}</p>
            </div>
          );
        },
      },
      {
        field: 'category',
        headerName: 'Category',
        headerAlign: 'center',
        align: 'center',
        width: 150,
        renderCell: ({ row }) => {
          return (
            <div>
              <p>{`${row.category.names.english}`}</p>
              <p>{`${row.category.names.arabic}`}</p>
            </div>
          );
        },
      },

      {
        field: 'subcategory',
        headerName: 'Subcategory',
        width: 150,
        headerAlign: 'center',
        align: 'center',
        renderCell: ({ row }) => {
          return <p>{`${row.subcategory.names.english}`}</p>;
        },
      },
      {
        field: 'size',
        headerName: 'Weight or Size',
        width: 150,
        headerAlign: 'center',
        align: 'center',
        // renderCell: ({ row }) => {
        //   return (
        //     <p>
        //       {row.prices.map(price => {
        //         return `${price.size}.`;
        //       })}
        //     </p>
        //   );
        // },
      },
      {
        field: 'prices',
        headerName: 'Price',
        width: 120,
        headerAlign: 'center',
        align: 'center',
        renderCell: ({ row }) => {
          return (
            <div>
              {row.prices.map(price => {
                return (
                  <>
                    {price.discountPrice && (
                      <p>{`EGP ${price.discountPrice}.`}</p>
                    )}
                    <p
                      style={{
                        textDecoration: price.discountPrice
                          ? 'line-through'
                          : 'none',
                      }}>{`EGP ${price.currentPrice}.`}</p>
                  </>
                );
              })}
            </div>
          );
        },
      },
      {
        field: 'hintText',
        headerName: 'Hint Description',
        headerAlign: 'center',
        align: 'center',
        width: 230,
        renderCell: ({ row }) => {
          return (
            <div>
              <p className='hint-text mb-4'>{`${row.hintText.english}`}</p>
              <p className='hint-text'>{`${row.hintText.arabic}`}</p>
            </div>
          );
        },
      },

      {
        field: 'Actions',
        headerName: 'Actions  الإجراءات',
        width: 180,
        headerAlign: 'center',
        align: 'center',
        sortable: false,
        renderCell: params => {
          return (
            <div>
              <div className='e-d-icons mb-4'>
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
              <div className='e-d-icons'>
                <img
                  src={editImgIcon}
                  alt='edit icon'
                  className='pe-4'
                  onClick={() => {
                    props.setUpdatedPage(params.row);

                    props.setShowAddAD(true);
                  }}
                />
                <img
                  src={reviewsIcon}
                  alt='delete icon'
                  onClick={e => {
                    axios.delete(`${APIBase}ads?id=${params.row.id}`, config);
                    dispatch(loadAds());
                  }}
                />
              </div>
            </div>
          );
        },
      },
    ];
  } else {
    cols = [
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
            <div className='t-img'>
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
  }

  return (
    <Box sx={{ height: 730, width: '100%' }}>
      {/* {props.product && (
        <DataGrid
          rows={props.data}
          columns={props.columns}
          pageSize={4}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick={true}
          experimentalFeatures={{ newEditingApi: true }}
        />
      )} */}
      {/* {!props.product && ( */}
      {/* )} */}
      <DataGrid
        rows={props.data}
        columns={cols}
        pageSize={6}
        rowsPerPageOptions={[7]}
        disableSelectionOnClick={true}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
