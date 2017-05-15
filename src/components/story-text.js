import React, { Component } from 'react';


class StoryText extends Component {

  constructor(props) {

		super(props);
    this.state = { storytext: '' };

	}

  render() {



    const text = () => {

      if (this.props.refresh == true) {
          return '';

      }
      return this.props.storytext

    }

    return (
    <div className="story-text">
      <textarea
        placeholder="Start typing your story here. Will it be a happy or sad story?"
        value={text()}
        onChange={(event => this.onInputChange(event.target.value))}
        rows="15"
        id="story-textarea"
        ref="story-textarea"/>
    </div>
  );

  }

  onInputChange(storytext) {

		this.props.onStoryChange(storytext);

	}


}

export default StoryText;
