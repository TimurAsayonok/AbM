import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import ListOfGenre from '../../components/List';
import * as listActions from '../../actions/ListOfGenreActions';

class ListGenre extends Component {
  render() {
    const { listOfGenre } = this.props;
    const { getPhotos } =this.props.listActions;
    console.log(this.props);
    return (
      <ListOfGenre listOfGenre={listOfGenre} getPhotos={getPhotos}/>
    )
  }
}

function mapStateToProps(state){
  return{
    listOfGenre: state.listOfGenrePage
  }
}

function mapDispatchToProps(dispatch){
  return {
    listActions: bindActionCreators(listActions, dispatch)
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ListGenre);
