import React from 'react';

const Filter = (props) => (
    <div className="filter">
      <p>
        Search :   
        <input style={{marginLeft: '5px'}}
            data-element="query-field" 
            onChange={props.queryChange}
        ></input>
      </p>
      <p>
        Sort by : 
        <select style={{marginLeft: '5px'}}
            data-element="order-field"
            onChange = {
                props.orderChange
            }
        >
            <option value="name">Alphabetical</option>
            <option value="age">Newest</option>
        </select>
      </p>
    </div>
);

export default Filter;