import React from 'react';
import { Table } from 'react-bootstrap';

const HomeTable = () => {
  return (
    <Table className={'table w-100  text-center'}>
      <thead>
        <tr>
          <td colSpan={1}>
            <div className='t-span'>#</div>
          </td>
          <td colSpan={2}>
            <div className='t-span'>Product Name</div>
          </td>
          <td colSpan={1}>
            <div className='t-span'>Orders Count</div>
          </td>
          <td colSpan={1}>
            <div className='t-span'>Total</div>
          </td>
          {/* {['#', 'Product Name', 'Orders Count', 'Total'].map((el, i) => {
            return (
              <td key={i} colSpan={1}>
                <div className='t-span'>{el}</div>
              </td>
            );
          })} */}
        </tr>
      </thead>

      <tbody>
        {[...new Array(6)].map((el, i) => (
          <tr key={i}>
            {[1, 2, 3, 4].map((el, i) => {
              return (
                <td key={i}>
                  <div className='t-span'>{el}</div>
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default HomeTable;
