import React, { Component } from 'react';
import { connect } from 'react-redux';

class StoryList extends Component {


  render() {

    if (!this.props.stories[0]) {

        return (

            <div className="alert alert-info" role="alert">
              You have no saved stories...
            </div>

        );

    }

    return (
      <div className="well well-md">
        <ul className="media-list">
          {this.renderList()}
        </ul>

      </div>
    );
  }

  renderList() {

    const stories = this.props.stories;

    console.log("----------");
    console.log(stories);

    return (
      stories.map((story) => {

          return (
            <li className="media">

                <div className="media-left">
                   <img className="media-object" src={story.img} />
                </div>
                <div className="media-body">
                  <h3 className="media-heading">{story.genre} Story</h3>
                  <p>{story.storytext}</p>
                </div>


            </li>
          );
      }));
  }


}

function mapStateToProps(state) {
  return {
    stories: state.stories
  }
}

export default connect(mapStateToProps)(StoryList);
