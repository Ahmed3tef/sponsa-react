import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { DatePick } from '..';
import { loadMostSelling } from '../../store/reducers/reports';
import './ReportsLayout.css';
import { BsSearch } from 'react-icons/bs';
const ReportsDates = props => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // useEffect(() => {

  //   // console.log({
  //   //   from: startDate ? startDate.toISOString() : null,
  //   //   to: endDate ? endDate.toISOString() : null,
  //   // });
  // }, [startDate, endDate]);
  const searchHandler = e => {
    props.setRange({
      from: startDate ? startDate.toISOString() : null,
      to: endDate ? endDate.toISOString() : null,
    });
  };
  return (
    <div className='reports-dates'>
      <DatePick
        value={startDate}
        setValue={setStartDate}
        label={'Add Start Date'}
      />
      <DatePick value={endDate} setValue={setEndDate} label={'Add End Date'} />
      <div className='reports-search' onClick={searchHandler}>
        <BsSearch />
      </div>
    </div>
  );
};

export default ReportsDates;
