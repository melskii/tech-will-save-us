import React from 'react';


const ClassScale = (props) => {

  const classNames = 'scale-progress ' + props.classifier;

  const scale = ()=> {

      if (props.scale >= 4) {
          return 0;
      }
      else {
          return (-180 + (45*props.scale))
      }
  };


  const rotate = "rotate(" + scale() + "deg)"

  const style = {
    "WebkitTransformOrigin": "50% 100%",
    "MozTransformOrigin": "50% 100%",
    "msTransformOrigin": "50% 100%",
    "transformOrigin": "50% 100%",
    "WebkitTransformOrigin": rotate,
    "MozTransformOrigin": rotate,
    "msTransformOrigin": rotate,
    "transform": rotate
  };

  return (

    
      <div className="outer">
        <div className="scale-circle"></div>
        <div className={ classNames } style={style}></div>
      </div>




  );

}

export default ClassScale;
