import React from 'react';
import PhonesService from './API';

class Viewer extends React.Component {
	constructor(props) {
        super(props);

        this.state = {
        	mainImage: "",
        	phone : {
        	id : "",
    		images : [],
    		name : "",
		    description : ""
        	}
        }
    }

	selectImage(imageUrl) {
	    this.setState({
	    	mainImage: imageUrl,
	    });
	}

    componentDidMount() {
		let {id} = this.props;
        PhonesService.getById(id).then(data => {
            this.setState({
            	phone: data,
                mainImage: data.images[0]
  		 	})
        })
    }

    renderImgs() {
		return (this.state.phone.images.map((img, i) => {
      		return (
	          <li key ={'img' + i}>
        		<img 
		            src={img}
		            alt= "main"
		            data-element="small-preview"
		            key = {"img" + this.state.phoneId}
		            onClick={() => {
              			this.selectImage(img)
            		}}>
		        </img>
		       </li>
			)
		}))
    }

	render() {
		const {name, description} = this.state.phone;
		const {onBackClicked, onAddClicked} = this.props;
	    return (
	    	<div className="phone-viewer">
				<img 
					className="phone"
					alt={name} 
			        src={this.state.mainImage}
			        data-element="big-preview"
			    ></img>
				<button 
		        	data-element="back-button" 
			    	onClick={onBackClicked}>
			        Back
			    </button>
				<button
				    data-element="add-to-cart"  
			        onClick = {() => {
		                onAddClicked(name)}}>
		            Add to basket
		        </button>

			    <h1>{name}</h1>
			    <p>{description}</p>
			    <ul className="phone-thumbs">
			        {this.renderImgs()}
			    </ul>
		    </div>
	    )
	}
}

export default Viewer