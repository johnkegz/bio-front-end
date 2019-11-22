import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import Footer from "../Footer";
import logo from '../Home/like.jpeg'
import { getOnePerson } from "../../redux/actions/actions";
import './Content.scss';

class Content extends Component {

  componentWillMount(){
    const { match: { params: { id } } } = this.props;
    this.props.getOnePerson(id);
  }
    renderContent = (data) =>{
        return (
          <div className="row" id = "main3" >
          <div className="col-md-1"></div>
          <div className="col-md-10 main-body">
              <div className="row">
                  <div className="col-md-12">
                      <div className="story">
                         <div className='row'>
                             <div className='col-md-4'>
                                 <img src={logo} alt='ere' />
                             </div>
                             <div className='col-md-6'>
               <p>
                   <span >Educator</span>:<span className="name">{data.name}
</span>
               </p>
        <p><span >Institution</span>:<span className="name">{data.institution}

</span></p>
        <p><span>Status</span>:<span className="name">{data.status}
</span></p>
<p><span>Known for</span>:<span className="name">{data.knownfor}
</span></p>

                             </div>
                          </div> 
                          <div className='bio'>
       {data.bio}
       </div>
                      </div>
                  </div>
                  
              </div>
          </div>
          <div className="col-md-1" ></div>
      </div>
        );
    }
  render() {
    console.log("props +++", this.props);
    const { singlePerson: { data } } = this.props;
    return (
      <div>
        <Header />
        {data.length !== 0 ? this.renderContent(data): ''}
        <Footer />
      </div>
    )
  }
}
Content.propTypes = {
  data: PropTypes.object
};
const mapStateToProps = state => ({
  singlePerson: state.singlePersonreducer
});
const mapDispatchToProps = {
  getOnePerson
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
