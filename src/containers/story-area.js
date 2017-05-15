import React, { Component } from 'react';
import _ from 'lodash';

import StoryText from '../components/story-text';
import ClassScale from '../components/class-scale';


import { connect } from 'react-redux'; //to connect redux and react
import { classifyText } from '../actions/index';
import { bindActionCreators } from 'redux'; //This is what makes action flow through all the reducers


class StoryArea extends Component {


  constructor(props) {
  		super(props);
  		this.state = {
        emotion: 'happy'

      };
  	}

    render() {

        const storyChanged = _.debounce((storytext) => { this.storyChanged(storytext) }, 250);

        return (


          <div className="row">
            <div className="col-md-8">
                <StoryText onStoryChange = { storyChanged }
                          refresh = { this.props.storytext }/>
            </div>
            <div className="col-md-4">
                <div className="row">
                  <ClassScale emotion = { this.state.emotion }
                             classifier = {this.props.classifier.classifier}
                             scale = {this.props.classifier.scale}/>
                </div>
            </div>
          </div>



        );

    }

    storyChanged(storytext) {

      // this.setState( { storytext });
      this.props.onStoryChange(storytext);

      this.props.classifyText(storytext);
   }

   componentDidUpdate() {

     const emotion = this.props.emotion;
     if (emotion != this.state.emotion) {

         this.setState({emotion});

     }
   }

}

function mapStateToProps(state) {
  return {
    classifier: state.classifier
  };

}


function mapDispatchToProps(dispatch) {
  //Whenever selectBook is called, the result should be passed to all of the reducers
  //The dispatch function will do this. this.props.selectBook
  return bindActionCreators({ classifyText: classifyText }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(StoryArea);
