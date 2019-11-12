import React, { Component } from "react";
import { connect } from "react-redux";
import CKEditor from "ckeditor4-react";
import ReactDOM from "react-dom";
import { submitFeed, logOut } from "../../redux/actions/actions";
// import Header from '../Header/Header';
// import Footer from '../Footer';
import "./feed.scss";

// Form validation
const CkEditorValidation = props => {
  return (
    <div style={{ color: "red" }}>
      {props.ckEditorStatus === false ? "shouldnot be empty" : ""}
    </div>
  );
};

class Forms extends Component {
  initialState = {
    title: "",
    feed: "",
    picUrl: "",
    disabled: false,
    ckEditorStatus: true
  };
  state = this.initialState;
  componentWillMount() {
    if (!this.props.loginData.isAuthenticated) {
      this.props.history.push("/login");
    }
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
      // e.preventDefault();
      return this.setState({ ckEditorStatus: false });
    } else {
      e.preventDefault();
      this.props.submitFeed(this.state);
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
    window.location.href = "http://greateducatorsug.org/dashboard.html";
    return null;
  };

  renderEditor = feed => {
    return this.props.loginData.isAuthenticated ? (
      <div className='editor'>
        <CKEditor data={feed} onChange={this.onEditorChange} />{" "}
      </div>
    ) : (
      ""
    );
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
    const { title, feed, disabled, ckEditorStatus, picUrl } = this.state;

    return (
      <div className='outerRoute'>
        <div className='formContainer'>
          <button onClick={this.handleLogOut}>logout</button>
          <form onSubmit={this.submitForm}>
            <textarea
              rows='4'
              maxLength='135'
              className='textAreaField'
              placeholder='title'
              value={title}
              name='title'
              onChange={this.handleChange}
              required
            />

            <CkEditorValidation ckEditorStatus={ckEditorStatus} />
            {this.renderEditor(feed)}
            <input
              name='file-upload'
              id='file-upload'
              type='file'
              onChange={this.uploadImage}
              className='image-input'
              required
            />
            <input
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
  feed: state.feedReducer,
  singlePerson: state.singlePersonreducer,
  loginData: state.loginReducer
});
const mapDispatchToProps = {
  submitFeed,
  logOut
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Forms);
