import React from 'react';


const ClassText = (props) => {


  const reaction = ()=> {

    if (props.classifier == props.emotion) {
      return (

          <div className="alert alert-success" role="alert">
              <p className="lead text-center"><b>Well done!</b><br/>
              You have successfully written a <b>{props.classifier}</b> story
            </p>
          </div>

      );
    }

    else {
      return (

        <div className="alert alert-warning" role="alert">
            <p className="lead text-center"><b>Nearly there!</b><br/>
            You haven't written a <b>{props.emotion}</b> story just yet
          </p>
        </div>

      );
    }




  }

  return (

    <div className="scale">
      <h2 className="text-center">Your story is {props.classifier}</h2>
      {reaction()}

    </div>

  );

}

export default ClassText;
