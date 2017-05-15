import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import StoryType from '../components/story-type';
import StoryArea from './story-area';
import SaveNew from '../components/save-and-new';

import { connect } from 'react-redux';

import { saveStory } from '../actions/index';
import { bindActionCreators } from 'redux';


class App extends Component {

  //constructor is always called with props.
 	constructor(props) {

 		super(props);

 		this.state = {
 			emotion: null,
 			genre: null,
      img: require('../images/adventure.jpg'),
      storytext: ''
 		};

  }

  render() {



    return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 col-lg-10 col-lg-offset-1">
          <div className="well well-lg well-app">

            <StoryType onEmotionSelect = { emotion => this.setState({ emotion }) }
                       onGenreSelect = { (genre, img) => (this.setState({ genre }), this.setState({img})) }
                       updateImg = { this.props.updateImg }/>

            <StoryArea emotion={this.state.emotion}
                       onStoryChange = { storytext => this.setState({ storytext })}
                       refresh = { this.state.refresh }/>

          </div>
        </div>
      </div>
      <div className="row">
          <SaveNew saveStory = { () => {this.saveStory() }}/>
      </div>
    </div>
    );
  }

  saveStory() {

    console.log(this.state.storytext);


    if (this.state.storytext != '') {
      const story = {
        storytext: this.state.storytext,
        genre: this.state.genre,
        img: this.state.img


      }

      this.setState({ storytext: ''});

      document.getElementById('story-textarea').value="";

      this.props.saveStory(story);

    }


  }
}


function mapDispatchToProps(dispatch) {
  //Whenever selectBook is called, the result should be passed to all of the reducers
  //The dispatch function will do this. this.props.selectBook
  return bindActionCreators({ saveStory: saveStory }, dispatch);
}


export default connect(null, mapDispatchToProps)(App);
