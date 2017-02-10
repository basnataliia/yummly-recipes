import React, {PropTypes} from 'react';
import './FlavourItem.css';

  class FlavourItem extends React.Component {

    constructor(props){
      super(props);

      this.state = {
          StarOne: false,
          StarTwo: false,
          StarThree: false,
          StarFour: false,
          StarFive: false,
      };
    }

    componentWillMount() {
      const flavors = this.props.recipe.flavors;
       if(flavors !== null && flavors !== undefined){
         if(Object.keys(flavors).length !== 0 && flavors.constructor === Object){
           for(let property in flavors) {
             if(property === this.props.flavour.name) {
               let flavVal = this.props.recipe.flavors[property];

               if(flavVal > 0 && flavVal < 0.2) {
                 this.setState({ StarOne: true });
               }
               else if(flavVal >= 0.2 && flavVal < 0.4) {
                 this.setState({ StarTwo: true });
               }
               else if(flavVal >= 0.4 && flavVal < 0.6) {
                 this.setState({ StarThree: true });
               }
               else if(flavVal >= 0.6 && flavVal < 0.8) {
                 this.setState({ StarFour: true });
               }
               else if(flavVal >= 0.8 && flavVal <= 1) {
                 this.setState({ StarFive: true });
               }
               else{

               }
             }
           }
         }
      }
    }


render() {
  let isDisabled = false;
  let disabledRating = "";
  if(this.props.isViewMode){
    isDisabled = true;
    disabledRating = "disabledRating";
  }

  return (
      <div className="flavourLevel">
         <div className="flavourName">{this.props.flavour.name}</div>
          <div className="rating">
            <input type="radio" id={"star5-" + this.props.flavourId} name={this.props.flavourId} disabled={isDisabled} defaultChecked={this.state.StarFive} value="0.9" onClick={() => this.props.onStartClick(0.9, this.props.flavour.name)}/>
            <label className="full" htmlFor={"star5-" + this.props.flavourId} title="5 stars" name={this.props.flavourId}></label>

            <input type="radio" id={"star4-" + this.props.flavourId} name={this.props.flavourId} disabled={isDisabled}  defaultChecked={this.state.StarFour} value="0.7" onClick={() => this.props.onStartClick(0.7, this.props.flavour.name)}/>
            <label className="full" htmlFor={"star4-" + this.props.flavourId} title="4 stars" name={this.props.flavourId}></label>

            <input type="radio" id={"star3-" + this.props.flavourId} name={this.props.flavourId} disabled={isDisabled}  defaultChecked={this.state.StarThree} value="0.5" onClick={() => this.props.onStartClick(0.5, this.props.flavour.name)}/>
            <label className="full" htmlFor={"star3-" + this.props.flavourId} title="3 stars" name={this.props.flavourId}></label>

            <input type="radio" id={"star2-" + this.props.flavourId} name={this.props.flavourId} disabled={isDisabled}  defaultChecked={this.state.StarTwo} value="0.3" onClick={() => this.props.onStartClick(0.3, this.props.flavour.name)}/>
            <label className="full" htmlFor={"star2-" + this.props.flavourId} title="2 stars" name={this.props.flavourId}></label>

            <input type="radio" id={"star1-" + this.props.flavourId} name={this.props.flavourId} disabled={isDisabled}  defaultChecked={this.state.StarOne} value="0.1" onClick={() => this.props.onStartClick(0.1, this.props.flavour.name)}/>
            <label className="full" htmlFor={"star1-" + this.props.flavourId} title="1 star" name={this.props.flavourId}></label>

        </div>
        <div className={disabledRating}></div>
      </div>
    );
  };
}

FlavourItem.propTypes = {
  flavour: PropTypes.object.isRequired,
  onStartClick: PropTypes.func.isRequired,
  flavourId: PropTypes.string.isRequired,
  recipe: PropTypes.object.isRequired,
};

export default FlavourItem;
