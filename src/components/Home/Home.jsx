import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ReactHtmlParser from 'react-html-parser';

import { Link } from "react-router-dom";
import { fetchBio, getAutoData } from "../../redux/actions/actions";
// import Header from "../Header/Header";
// import Footer from "../Footer";
import logo from "./like.jpeg";
import "./Home.scss";

class Home extends Component {
  componentWillMount() {
	this.props.fetchBio();
	this.props.getAutoData()
    // var today = new Date();
	// 			var dd = today.getDate();
	// 			var mm = today.getMonth()+1; 
	// 			var yyyy = today.getFullYear();

	// 			today = mm + '/' + dd + '/' + yyyy;
	// 			if (today === '7/8/2019'){
    //       this.props.getOnePerson(2);
	// 			}
				
  }
   /*Render slider */
  renderPeople = image => {
    return image.map(info => {
		
		return(
      <div key={info.id}>
        <div className="c">
          <img src={logo} alt="nknknk" />
          <a href="charles.html">
            <div className="overlay">
              <div className="text">{info.name}</div>
              <div className="text2">{info.institution}</div>
            </div>
          </a>
        </div>
      </div>
    )});
  };
  renderSlider = images => {
    return (
      <div>
        <section id="clients" className="wow fadeInUp">
          <div className="container">
            <div className="owl-carousel clients-carousel">
              { this.renderPeople(images)}
            </div>
          </div>
        </section>
      </div>
    );
  };
  /*End of render slider */
   /*Render main body*/
   renderShortBio = () => {
	const {autoData: {data}} = this.props;
    return data ? (
      <div>
        <p className="educ-of-the-day">Educator of the Day</p>
        <p className="name">{data.name}</p>
		
        <div className="bio">{ ReactHtmlParser(data.bio) }</div>
        <Link to={`/content/${data.id}`}>read more...</Link>
      </div>
      ): '';
   }
   renderMainBody = () => {
        return (
          <div className="row">
              <div className="col-md-9">
                  <div className="row" id = "main1"  >
                      <div className="col-md-1"></div>
                      <div className="col-md-10 main-body" >
                          <div className="row">
                                  <div className="col-md-5 display-img">
                                          <img src={logo} className='image-display' alt='fjf' />
                                      </div>
                              <div className="col-md-6" >
                                  <div className="story">
                                  
                                      {this.renderShortBio()}
                                  </div>
                              </div>
                              
                          </div>
                      </div>
                      <div className="col-md-1" ></div>
                  </div>
                  </div>
               </div>
        );
   }
   /*End of Render main body*/
  render() {
    const {
      bio: { data }
    } = this.props;
	const images = data;
	console.log('this.props ++', this.props);
    return (
      <div>
      <Link to={`/feed`} activeClassName="active">click here to create feed</Link>
        {/* <Header />
        {images ? this.renderSlider(images): ''}
        {this.renderMainBody()}
        <Footer /> */}
      </div>
    )
  }
}
Home.propTypes = {
  data: PropTypes.object
};
const mapStateToProps = state => ({
  bio: state.bioReducer,
//   singlePerson: state.singlePersonreducer,
  autoData: state.autoReducer
});
const mapDispatchToProps = {
  fetchBio,
//   getOnePerson
	getAutoData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
