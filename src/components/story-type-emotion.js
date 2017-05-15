import React, { Component } from 'react';

class Emotion extends Component {

  constructor(props) {
    super(props);

    this.props.onEmotionSelect("happy");

  }

    render() {
      return (

        <div className="input-group input-group-lg">
          <span className="input-group-addon" id="sizing-addon1">Write a</span>
          <select className="form-control input-lg select" onChange = {(event => this.props.onEmotionSelect(event.target.value))}>
            <option value="happy">Happy</option>
            <option value="sad">Sad</option>
          </select>
        </div>


      );
    }
}

export default Emotion;
