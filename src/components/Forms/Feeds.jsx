import React, { Component } from "react";
import { connect } from "react-redux";
import CKEditor from 'ckeditor4-react';

import  { submitFeed, logOut } from '../../redux/actions/actions'
import Header from '../Header/Header';
import Footer from '../Footer';


// Form validation
const CkEditorValidation = (props) =>{
    return(
    <div style={{color:"red"}}>
    {props.ckEditorStatus === false? "shouldnot be empty": "" }
    </div>);
}


class Forms extends Component {

    initialState = {
        title: '',
        feed: '',
        picUrl: '',
        disabled: false,
        ckEditorStatus: true,
    }
    state = this.initialState;
    componentWillMount(){
        if(!this.props.loginData.isAuthenticated){
            this.props.history.push('/login')
        }
    }

    componentWillReceiveProps(nextProps){
        if(!nextProps.loginData.isAuthenticated){
            this.props.history.push('/login')
        }
    }

    handleChange = event  => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        });
    }
    submitForm = (e) => {
        if(this.state.feed === ''){
            e.preventDefault();
            this.setState({ckEditorStatus: false})
        }else{
            // e.preventDefault();
            this.props.submitFeed(this.state)
            this.setState(this.initialState)
        }
        alert("Story created");
    }

    onEditorChange = ( evt ) => {
        // evt.preventDefault()
        this.setState({
            feed: evt.editor.getData(),
            ckEditorStatus: true
        });
    }

    handleLogOut = e => {
        e.preventDefault()
        this.props.logOut()
    }

    renderEditor = (feed)=> {
        return this.props.loginData.isAuthenticated? <div style={{width:"700px"}}><CKEditor
        data={feed}
        onChange={this.onEditorChange}
        /> </div>: ''
    }

    uploadImage = event => {
        this.setState({
            disabled: true
        });
        const file = event.target.files[0];
        if (file.size > 3000000){
            console.log("Size big+++++++++++++++++", file.size)
            file.value = '';
            return alert("image should be less that 3 mbs. please select another image");
        }
        else{
            console.log("Size +++++++++++++++++", file.size)
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", 'xhqd6sno');
        return fetch('https://api.cloudinary.com/v1_1/dar5ymd2m/upload', {
            method: "POST",
            body: formData
          })
            .then(res => res.json())
            .then(response => {
                this.setState({
                    picUrl:response.secure_url,
                    disabled: false
                });
            });
        }
        
        };
    
    renderForm = () => {
        const { title, feed, disabled, ckEditorStatus, picUrl } = this.state;
        console.log("picUrl:", picUrl);
        return (
            <>
            <button onClick = {this.handleLogOut}>logout</button>
            <form onSubmit={this.submitForm}>
                <textarea rows="4" cols="50" maxLength='135' placeholder="title" value={title} name='title'onChange={this.handleChange} required/>
                <input
                    name="file-upload"
                    id="file-upload"
                    type="file"
                    // value="picUrl"
                    onChange={this.uploadImage}
                    className="image-input"
                    required
                />
                 <CkEditorValidation ckEditorStatus={ckEditorStatus} />
                {this.renderEditor(feed)}
                <input
                type="submit" 
                value="Submit" 
                disabled = {(disabled)? "disabled": ""}
                />
            </form>
            </>
        );
    }
  render() {
    return (
    <div>
        <Header />
            {this.renderForm()}
        <Footer />
    </div>);
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
  
