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
import acceptOrderIcon from '../../assets/Accept Order.svg';
import rejectOrderIcon from '../../assets/Reject Order.svg';

import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const MainTable = props => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  let height = 730;
  // console.log(props);
  const config = {
    headers: {
      authorization: props.token,
    },
  };

  let cols;

  if (props.path === 'products') {
    cols = [
      { field: 'id', hide: true },
      {
        field: 'position',
        headerName: '#',
        width: 30,
        headerAlign: 'center',
        align: 'center',
        sortable: false,
      },
      {
        field: 'imgUrl',
        headerName: 'Photo',
        width: 130,
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
        headerName: 'Actions  ??????????????????',
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
                    props.setUpdatedType('text');
                    props.setShowAddAD(true);
                  }}
                />
                <img
                  src={deleteIcon}
                  alt='delete icon'
                  onClick={() => {
                    props.setOverlay(true);
                    props.setItemId(params.row.id);
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
                    props.setUpdatedType('image');

                    props.setShowAddAD(true);
                  }}
                />
                <img
                  src={reviewsIcon}
                  alt='reviews icon'
                  onClick={() => {
                    props.setUpdatedPage(params.row);
                    props.setShowReviews(true);
                  }}
                />
              </div>
            </div>
          );
        },
      },
    ];
  } else if (props.path === 'orders') {
    cols = [
      { field: 'id', hide: true },
      {
        field: 'userInfo',
        headerName: `Customer Info ???????????? ????????????`,
        width: 135,
        headerAlign: 'center',
        align: 'center',
        renderHeader: params => {
          return (
            <div className='t-head-cell'>
              <span>Customer Info</span>
              <span>???????????? ????????????</span>
            </div>
          );
        },
        renderCell: ({ row }) => {
          return (
            <div>
              <p>{`${row.userInfo.name}`}</p>
              <p>{`${row.userInfo.phone}`}</p>
            </div>
          );
        },
      },
      {
        field: 'address',
        headerName: `Shipping Address`,
        width: 180,
        headerAlign: 'center',
        align: 'center',
        renderHeader: params => {
          return (
            <div className='t-head-cell'>
              <span>Shipping Address</span>
              <span>?????????? ??????????</span>
            </div>
          );
        },
        renderCell: ({ row }) => {
          return (
            <div>
              <p>{`${row.address.country.english} - ${row.address.government.english} - ${row.address.city.english}`}</p>
              <p>{`${row.address.address}`}</p>
            </div>
          );
        },
      },

      {
        field: 'orderNumber',
        headerName: 'Order ID',
        width: 90,

        headerAlign: 'center',
        align: 'center',
        renderHeader: params => {
          return (
            <div className='t-head-cell'>
              <span>Order ID</span>
              <span>?????? ??????????????</span>
            </div>
          );
        },
        renderCell: ({ row }) => {
          return <div>{row.orderNumber}</div>;
        },
      },
      {
        field: 'order',
        headerName: 'Order',
        width: 240,

        headerAlign: 'center',
        align: 'center',
        renderHeader: params => {
          return (
            <div className='t-head-cell'>
              <span>Order</span>
              <span>??????????????</span>
            </div>
          );
        },
        renderCell: ({ row }) => {
          return (
            <div className='t-order'>
              {row.order.map(p => (
                <p>{p.product.names.english}</p>
              ))}
            </div>
          );
        },
      },
      {
        field: 'prices',
        headerName: 'Unit Price',
        width: 80,

        headerAlign: 'center',
        align: 'center',
        renderHeader: params => {
          return (
            <div className='t-head-cell'>
              <span>Unit Price</span>
              <span>?????? ????????????</span>
            </div>
          );
        },
        renderCell: ({ row }) => {
          return (
            <div className='t-order'>
              {row.prices.map((p, i) => {
                const price = p.discountPrice
                  ? p.discountPrice
                  : p.currentPrice;
                return <p key={i}>{`EGP ${price}`}</p>;
              })}
            </div>
          );
        },
      },

      {
        field: 'quantity',
        headerName: 'quantity',
        width: 80,

        headerAlign: 'center',
        align: 'center',
        renderHeader: params => {
          return (
            <div className='t-head-cell'>
              <span>Quantity</span>
              <span>????????????</span>
            </div>
          );
        },
        renderCell: ({ row }) => {
          return (
            <div className='t-order'>
              {row.quantity.map((q, i) => {
                return <p key={i}>{q}</p>;
              })}
            </div>
          );
        },
      },
      {
        field: 'totalPrice',
        headerName: 'Cost',
        width: 80,

        headerAlign: 'center',
        align: 'center',
        renderHeader: params => {
          return (
            <div className='t-head-cell'>
              <span>Total Cost</span>
              <span>?????????????? ??????????????????</span>
            </div>
          );
        },
        renderCell: ({ row }) => {
          return <div className='t-order'>{`EGP ${row.totalPrice}`}</div>;
        },
      },
      {
        field: 'coupon',
        headerName: 'coupon',
        width: 80,

        headerAlign: 'center',
        align: 'center',
        renderHeader: params => {
          return (
            <div className='t-head-cell'>
              <span>Coupon</span>
              <span>??????????????</span>
            </div>
          );
        },
        renderCell: ({ row }) => {
          return <div>{row.coupon ? row.coupon : '_'}</div>;
        },
      },
      {
        field: 'orderStatus',
        headerName: 'orderStatus',
        width: 100,

        headerAlign: 'center',
        align: 'center',
        renderHeader: params => {
          return (
            <div className='t-head-cell'>
              <span>Order Status</span>
              <span>???????? ??????????</span>
            </div>
          );
        },
        renderCell: ({ row }) => {
          let statusMsg;
          if (row.orderStatus === 1) {
            statusMsg = 'pending';
          }
          if (row.orderStatus === 2) {
            statusMsg = 'shipping';
          }
          if (row.orderStatus === 3) {
            statusMsg = 'rejected';
          }
          if (row.orderStatus === 4) {
            statusMsg = 'success';
          }
          return <div>{statusMsg}</div>;
        },
      },
      {
        field: 'notes',
        headerName: 'notes',
        width: 120,

        headerAlign: 'center',
        align: 'center',
        renderHeader: params => {
          return (
            <div className='t-head-cell'>
              <span>Admin Notes</span>
              <span>???????????????? ??????????????</span>
            </div>
          );
        },
        renderCell: ({ row }) => {
          return <div>{row.notes ? row.notes : '_'}</div>;
        },
      },

      {
        field: 'Actions',
        headerName: 'Actions',
        width: 80,
        headerAlign: 'center',
        align: 'center',
        sortable: false,
        renderHeader: params => {
          return (
            <div className='t-head-cell'>
              <span>Actions</span>
              <span>??????????????????</span>
            </div>
          );
        },
        renderCell: params => {
          const id = params.row.id;
          let { orderStatus } = params.row;
          return (
            <div className='order-actions'>
              {orderStatus !== 4 && (
                <img
                  src={acceptOrderIcon}
                  alt='edit icon'
                  className='mb-3'
                  onClick={() => {
                    if (orderStatus === 2) {
                      orderStatus = 4;
                    }
                    if (orderStatus === 1) {
                      orderStatus = 2;
                    }
                    if (orderStatus === 3) {
                      orderStatus = 1;
                    }

                    axios
                      .patch(`${APIBase}order/updatestatus`, null, {
                        headers: {
                          authorization: props.token,
                        },
                        params: {
                          id,
                          orderStatus,
                        },
                      })
                      .then(res => dispatch(props.action))
                      .catch(err => console.log(err.response.data));
                  }}
                />
              )}
              <img
                src={rejectOrderIcon}
                alt='delete icon'
                onClick={e => {
                  console.log(params.row.id);
                  console.log(props.token);
                  axios
                    .patch(
                      `${APIBase}order/updatestatus`,
                      null,
                      {
                        headers: {
                          authorization: props.token,
                        },
                        params: {
                          id: params.row.id,
                          orderStatus: 3,
                        },
                      }
                      // params id, orderstatus
                    )
                    .then(res => dispatch(props.action))
                    .catch(err => console.log(err.response.data));
                  // dispatch(loadAds());
                }}
              />
            </div>
          );
        },
      },
    ];
  } else if (props.path === 'subCategories') {
    cols = [
      { field: 'id', hide: true },
      {
        field: 'position',
        headerName: '#',
        width: 30,
        headerAlign: 'center',
        align: 'center',
        sortable: false,
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
        width: 150,
        headerAlign: 'center',
        align: 'center',
      },
      {
        field: 'arabicName',
        headerName: props.arabicName.title,
        headerAlign: 'center',
        width: 150,
        align: 'center',
        width: props.arabicName.width,
      },
      {
        field: 'catName',
        headerName: 'Main Category   ?????????? ????????????????',
        width: 250,
        headerAlign: 'center',
        align: 'center',
        width: props.arabicName.width,
      },

      {
        field: 'Actions',
        headerName: 'Actions  ??????????????????',
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
                onClick={() => {
                  props.setOverlay(true);
                  props.setItemId(params.row.id);
                }}
              />
            </div>
          );
        },
      },
    ];
  } else {
    cols = [
      { field: 'id', hide: true },
      {
        field: 'position',
        headerName: '#',
        width: 30,
        headerAlign: 'center',
        align: 'center',
        sortable: false,
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

      {
        field: 'Actions',
        headerName: 'Actions  ??????????????????',
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
                onClick={() => {
                  props.setOverlay(true);
                  props.setItemId(params.row.id);
                }}
              />
            </div>
          );
        },
      },
    ];
  }

  return (
    <Box sx={{ height: height, width: '100%' }}>
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
        rowsPerPageOptions={[6]}
        disableSelectionOnClick={true}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
};

export default MainTable;
