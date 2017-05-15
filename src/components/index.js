import React, { Component } from 'react';

import NavBar from './nav-bar';
import App from '../containers/app';
import StoryList from '../containers/story-list';
import Background from '../images/adventure.jpg';



class Index extends Component {

  constructor(props) {
    super(props);

    this.state = {
 			img: require('../images/adventure.jpg')
 		};

  }
  render () {

    const style = {
      "background-image": "url(" + this.state.img + ")",
    }

    console.log(style);

    return (

      <div className="index-container">
        <div className="genre-img" style={style}></div>
        <NavBar/>
        <App updateImg = {img => this.setState({ img })}/>

        <div className="container-fluid">
          <div className="row story-list">
            <div className="col-md-10 col-md-offset-1">
                <StoryList />
            </div>
          </div>
        </div>
    </div>

    );
  }

}

export default Index;
