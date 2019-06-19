import React from 'react';
import Phone from './Phone';
import PhonesService from './API';

class Catalog extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            phones: []
        }
    }
    componentDidMount() {
        this.getAll();
    }

    componentDidUpdate() {
        this.getAll();
    }

    getAll(){
        PhonesService.getAll(this.props.filter).then(data => {
            this.setState({
                phones: data,
            })
        })
    }

    renderPhones() {
        const { onPhoneClicked, onAddClicked} = this.props;
    	return (this.state.phones.map((phone) => {
      		return (
            <Phone
            	id = {phone.id}
                key = {phone.id}
                name = {phone.name}
                image = {phone.imageUrl}
                snippet = {phone.snippet}
                onLinkClicked = {() => {
                    onPhoneClicked(phone.id)
                }}
                onAddClick = {() => {
                    onAddClicked(phone.name)
                }}
            />
            )
        }))
    }

	render() {
	    return <ul className="phones">{this.renderPhones()}</ul>
	}
}

export default Catalog;