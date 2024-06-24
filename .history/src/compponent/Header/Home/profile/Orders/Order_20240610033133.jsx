import React from 'react'
import OrdersTop from './OrdersTop'
import OrdersBottom from './OrderBottom/OrdersBottom'

const Order = () => {
  return (
    <div className='h-screen overflow-y-auto'>
      <OrdersTop/>
      <OrdersBottom/>
    </div>
  )
}

export default Order
