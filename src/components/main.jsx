import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { fetchBio } from "../redux/actions/actions";
import Header from './Header/Header';
import Footer from '../components/Footer';


class Main extends Component {
  renderSlider = () =>{
    return (
      <div></div>
    );
  }
  render() {
    return (
        
        <div>
            <Header />
            Hello world
            <Footer />
        </div>
        );
  }
}
Main.propTypes = {
  bio: PropTypes.array,
};
const mapStateToProps = state => ({
  bioData: state.bioReducer
});
const mapDispatchToProps = ({
  fetchBio
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
