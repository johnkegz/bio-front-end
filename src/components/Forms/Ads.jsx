import React, { Component } from "react";
import { connect } from "react-redux";
import CKEditor from "ckeditor4-react";
import { postAd, logOut } from "../../redux/actions/actions";
import "./feed.scss";

class Ads extends Component {
  initialState = {
    name: "",
    picUrl: "",
    disabled: false,
  };
  state = this.initialState;
  componentWillMount() {
    if (!this.props.loginData.isAuthenticated) {
      this.props.history.push("/login");
    }
    // this.setState({
    //   UserId: this.props.loginData.user !== undefined ? this.props.loginData.user.id : ""
    // })
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.loginData.isAuthenticated) {
      this.props.history.push("/login");
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  submitForm = e => {
    if (this.state.feed === "") {
      e.preventDefault();
      return this.setState({ ckEditorStatus: false });
    } else {
      e.preventDefault();
      this.props.postAd(this.state);
      document.getElementById("file-upload").value = "";
      return this.setState(this.initialState);
    }
    // alert("Story created");
  };

  onEditorChange = evt => {
    // evt.preventDefault()
    this.setState({
      feed: evt.editor.getData(),
      ckEditorStatus: true
    });
  };

  handleLogOut = e => {
    e.preventDefault();
    this.props.logOut();
    window.location.href = "https://bio-front.herokuapp.com/login";
    return null;
  };

  uploadImage = event => {
    this.setState({
      disabled: true
    });
    const file = event.target.files[0];
    if (file.size > 3000000) {
      file.value = "";
      return alert(
        "image should be less that 3 mbs. please select another image"
      );
    } else {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "xhqd6sno");
      return fetch("https://api.cloudinary.com/v1_1/dar5ymd2m/upload", {
        method: "POST",
        body: formData
      })
        .then(res => res.json())
        .then(response => {
          this.setState({
            picUrl: response.secure_url,
            disabled: false
          });
        });
    }
  };

  renderForm = () => {
    const { name, disabled } = this.state;

    return (
      <div className='outerRoute'>
        <div className='formContainer'>
          <button onClick={this.handleLogOut} className="btn btn-info">logout</button>
          <form onSubmit={this.submitForm}>
            <textarea
              rows='4'
              maxLength='135'
              className='textAreaField form-control'
              placeholder='name'
              value={name}
              name='name'
              onChange={this.handleChange}
              required
            />
            <input
              name='file-upload'
              id='file-upload'
              type='file'
              onChange={this.uploadImage}
              className='image-input btn btn-dark'
              required
            />
            <input
              className="btn btn-primary submit"
              type='submit'
              value='Submit'
              disabled={disabled ? "disabled" : ""}
            />
          </form>
        </div>
      </div>
    );
  };
  render() {
    return (
      <>
        {/* <Header /> */}
        {this.renderForm()}
        {/* <Footer /> */}
      </>
    );
  }
}

const mapStateToProps = state => ({
  ad: state.adReducer,
  singlePerson: state.singlePersonreducer,
  loginData: state.loginReducer
});
const mapDispatchToProps = {
  postAd,
  logOut
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ads);
