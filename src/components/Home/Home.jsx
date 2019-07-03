import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { fetchBio, getOnePerson } from "../../redux/actions/actions";
import Header from "../Header/Header";
import Footer from "../Footer";
import logo from "./like.jpeg";
import "./Home.scss";

class Home extends Component {
  componentWillMount() {
    this.props.fetchBio();
    var today = new Date();
				var dd = today.getDate();
				var mm = today.getMonth()+1; 
				var yyyy = today.getFullYear();

				today = mm + '/' + dd + '/' + yyyy;
				console.log('today ++', today);
				if (today === '7/3/2019'){
          console.log('today        +++', today);
          this.props.getOnePerson(43);
				}
				else if(today === '6/18/2019'){
					this.props.getOnePerson(1);
				}
				else if(today === '6/19/2019'){
					this.props.getOnePerson(1);
				}
				else if(today === '6/20/2019'){
          this.props.getOnePerson(1);
				}
				else if(today === '6/21/2019'){
					this.props.getOnePerson(1);
				}
				else if(today === '6/22/2019'){
					this.props.getOnePerson(1);
				}
				else if(today === '6/23/2019'){
					this.props.getOnePerson(1);
				}
				else if(today === '6/24/2019'){
					this.props.getOnePerson(1);
				}
				else if(today === '6/25/2019'){
					this.props.getOnePerson(1);
				}
				else if(today === '6/26/2019'){
					this.props.getOnePerson(1);
				}
				else if(today === '6/27/2019'){
					this.props.getOnePerson(1);
				}
				else if(today === '6/28/2019'){
					this.props.getOnePerson(1);
				}
				else if(today === '6/29/2019'){
					this.props.getOnePerson(1);
				}
				else if(today === '6/30/2019'){
					this.props.getOnePerson(1);
				}
				else if(today === '6/22/2019'){
					this.props.getOnePerson(1);
				}
				else if(today === '6/23/2019'){
					this.props.getOnePerson(1);
				}
				else if(today === '6/24/2019'){
					this.props.getOnePerson(1);
				}
				else if(today === '6/25/2019'){
					this.props.getOnePerson(1);
				}
				else if(today === '6/26/2019'){
					this.props.getOnePerson(1);
				}
				else if(today === '6/27/2019'){
					this.props.getOnePerson(1);
				}
				else if(today === '6/28/2019'){
					this.props.getOnePerson(1);
				}
				else if(today === '6/29/2019'){
					this.props.getOnePerson(1);
				}
				else if(today === '6/30/2019'){
					this.props.getOnePerson(1);
				}
				else if(today === '7/1/2019'){
					this.props.getOnePerson(1);
				}
				else if(today === '7/2/2019'){
					this.props.getOnePerson(1);
				}
				// else if(today === '7/3/2019'){
				// 	this.props.getOnePerson(1);
				// }
				else if(today === '6/4/2019'){
					this.props.getOnePerson(1);
				}
				else if(today === '6/5/2019'){
					this.props.getOnePerson(1);
				}
				else if(today === '6/6/2019'){
					this.props.getOnePerson(1);
				}
				else if(today === '6/7/2019'){
					this.props.getOnePerson(1);
				}
				else if(today === '6/8/2019'){
          this.props.getOnePerson(1);
				}
				else if(today === '6/9/2019'){
					this.props.getOnePerson(1);
				}
				else if(today === '6/10/2019'){
					this.props.getOnePerson(1);
				}
				else if(today === '6/11/2019'){
					this.props.getOnePerson(1);
				}
				else if(today === '6/12/2019'){
					this.props.getOnePerson(1);
				}
				else if(today === '6/13/2019'){
					this.props.getOnePerson(1);
				}
				else if(today === '6/14/2019'){
					this.props.getOnePerson(1);
				}
				else if(today === '6/15/2019'){
					this.props.getOnePerson(1);
				}
				else if(today === '6/16/2019'){
					this.props.getOnePerson(1);
				}
  }
   /*Render slider */
  renderPeople = image => {
    return image.map(info => (
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
    ));
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
    const {singlePerson: {data}} = this.props;
    return data ? (
      <div>
        <p className="educ-of-the-day">Educator of the Day</p>
        <p className="name">{data.name}</p>
        {data.bio}
        <Link to='/content'>read more...</Link>
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
    console.log('this.props', this.props);
    return (
      <div>
        <Header />
        {images ? this.renderSlider(images): ''}
        {this.renderMainBody()}
        <Footer />
      </div>
    )
  }
}
Home.propTypes = {
  data: PropTypes.object
};
const mapStateToProps = state => ({
  bio: state.bioReducer,
  singlePerson: state.singlePersonreducer
});
const mapDispatchToProps = {
  fetchBio,
  getOnePerson
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
