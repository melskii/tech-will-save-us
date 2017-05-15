import React from 'react';




const SaveNew = ({saveStory})=>  {

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-md-offset-4 col-xs-12">
            <div className="save-new">
              <button type="button" onClick= {saveStory} >
                <span className="glyphicon glyphicon-plus"></span> SAVE STORY
              </button>
            </div>
          </div>
        </div>
      </div>
    );


}

export default SaveNew;
