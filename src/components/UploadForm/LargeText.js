import React from 'react';

const LargeText = props => {
  return (
    <div className='input-container input-text-large'>
      <div className='input-label'>
        <p>{props.label}</p>
      </div>
      <textarea
        placeholder={props.placeholder}
        value={props.desc}
        onChange={e => props.setDesc(e.target.value)}
        style={{ direction: props.direction ? 'rtl' : 'ltr' }}
      />
    </div>
  );
};

export default LargeText;
