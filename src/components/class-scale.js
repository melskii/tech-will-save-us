import React from 'react';
import ClassImg from '../components/class-img';
import ClassText from '../components/class-text';

const ClassScale = (props) => {


  return (
    <div className="container-fluid">
      <div className="class-scale">
        <ClassImg classifier = { props.classifier }
                  scale = { props.scale }/>
      </div>
      <div className="class-text">
        <ClassText emotion = { props.emotion }
                   classifier = { props.classifier }
                   scale = { props.scale }/>
      </div>
    </div>
  );

}

export default  ClassScale;
