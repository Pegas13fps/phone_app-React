import React from 'react';

import ShopingCart from './shopping-cart';
import PhoneViewer from './phone-viewer';
import Catalog from './Catalog';
import Filter from './Filter';
import { getAll, getById } from '../services/phones-service';


class Main extends React.Component() {
    constructor(props) {
        super(props);
    
        this.state = {
          phones: getAll(),
          selectedPhone: null,
          basketItems: [],
        };
    
        this.addItem = (phoneId) => {
          this.setState((prevState) => {
            return {
              basketItems: [
                ...prevState.basketItems,
                phoneId,
              ],
            };
          });
        };
}

render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <Filter />
              <ShopingCart items={this.state.basketItems} />
            </div>

            <div className="col-md-10">
              { this.state.selectedPhone ? (
                <PhoneViewer
                  phone={this.state.selectedPhone}
                  onBack={() => {
                    this.setState({
                      selectedPhone: null,
                    });
                  }}
                />
              ) : (
                <Catalog
                  phones={this.state.phones}
                  onPhoneSelected={(phoneId) => {
                    this.setState({
                      selectedPhone: getById(phoneId),
                    });
                  }}
                  onAdd={this.addItem}
                />
              ) }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;