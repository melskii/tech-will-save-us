import React, {Component} from 'react';
import { connect } from 'react-redux';


class Genre extends Component {


  constructor(props) {
    super(props);

    const _ = this.props.genres[0].name;

    this.props.onGenreSelect(_, this.getURL(_));

  }

  renderList() {

    const genres = this.props.genres;

    return (
      genres.map((genre) => {

          return (
            <option value={genre.name}>{genre.name}</option>
          );
      }));
  }



  render() {

    const style = {
      "border-radius": "100px"
    };

    return (

      <div className="input-group input-group-lg">

        <select className="form-control input-lg select" onChange = {(event => this.selectChange(event.target.value))}>
          {this.renderList()}
        </select>
        <span className="input-group-addon" id="sizing-addon1">Story!!</span>
      </div>

  );
  }

  selectChange (genre) {

    this.props.updateImg(this.getURL(genre));
    this.props.onGenreSelect(genre, this.getURL(genre));
  }

  getURL(name) {

    let img = null;
    this.props.genres.map((genre) => {

      if (name == genre.name) {
          console.log(genre.img);
          img = genre.img;
      }



    });

    return img;
  }
}

function mapStateToProps(state) {

  return {
    genres: state.genres
  };
}


export default connect(mapStateToProps)(Genre);
