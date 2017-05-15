import React from 'react';
import Emotion from './story-type-emotion';
import Genre from '../containers/story-type-genre';

const StoryType = (props) => {

    return (
        <div className="panel panel-default">
          <div className="panel-heading">
          </div>
            <div className="row">
              <div className="col-md-6 emotion-select">
                <Emotion onEmotionSelect = { props.onEmotionSelect }/>
              </div>
              <div className="col-md-6 genre-select">
                <Genre  onGenreSelect = { props.onGenreSelect }
                      updateImg = { props.updateImg }/>
              </div>
      


          </div>
        </div>


    );

}

export default StoryType;
