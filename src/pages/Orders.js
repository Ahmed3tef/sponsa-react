import React from 'react';
import { useSelector } from 'react-redux';
import { MainPageLayout } from '../components';
import { loadOrders } from '../store/reducers/orders';

const Orders = () => {
  const orders = useSelector(state => state.orders.orders);
  return (
    <MainPageLayout
      path='orders'
      data={orders}
      action={loadOrders()}
      title='Active Orders'
    />
  );
};

export default Orders;
