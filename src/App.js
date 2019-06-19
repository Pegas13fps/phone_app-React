import React from 'react';
import Filter from './components/Filter';
import Cart from './components/Cart';
import Catalog from './components/Catalog';
import Viewer from './components/Viewer';

import './App.css';

class Main extends React.Component {
  constructor() {
  super();

  this.state = {
    filter : {
      order : "name",
      query : ""
    },
    phoneSelected : null,
    phoneAdded : {}
    };

  this.addItem = (phone) => {
    let i = this.state.phoneAdded[phone];
     if (!this.state.phoneAdded.hasOwnProperty(phone)) {
       i = 0;
     } 
     ++i;
       this.setState ({
         phoneAdded : {
          ...this.state.phoneAdded,
           [phone] :  i} 		
       })
  };

  this.queryChange = this.queryChange.bind(this);
  this.orderChange = this.orderChange.bind(this);

this.removeItem = (phone) => {
      let i = this.state.phoneAdded[phone];
  --i;
  if (this.state.phoneAdded.hasOwnProperty(phone)){
       this.setState ({
           phoneAdded : {
            ...this.state.phoneAdded,
             [phone] :  i} 		
         })
     } 
     if (i === 0) {
       delete this.state.phoneAdded[phone];
      this.setState (this.state)
    }   
}
}

  queryChange(event) {
    this.setState ({
      filter : {
        ...this.state.filter,
          query : event.target.value
    }})
  };

  orderChange(event) {
    this.setState ({
      filter : {
        ...this.state.filter,
          order : event.target.value
    }})
  };

  handleClick = id => {
    this.setState({
          phoneSelected : id
    })
  }

  handleBackClick = ()=> {
    this.setState({
          phoneSelected : ""
    })
  }

render(){
  return(
    <div className="App">
      <div className="container-fluid">
        <div className="row">

          <div className="col-md-2">
            <Filter
              queryChange = {this.queryChange}
              orderChange = {this.orderChange}
            />
            <Cart 
              name = {this.state.phoneAdded} 
              onDeletePhone = {this.removeItem}
            />
          </div>

          <div className="col-md-10">
          {this.state.phoneSelected ? 
            (<Viewer 
                id = {this.state.phoneSelected}
                onBackClicked = {this.handleBackClick}
                onAddClicked = {this.addItem}
              />
              ) : (
            <>
            <Catalog 
              onPhoneClicked = {this.handleClick}
              onAddClicked = {this.addItem}
              filter = {this.state.filter}
               /></>)
            }
          </div>

        </div>
      </div>
    </div>
    )
  }
}

export default Main;