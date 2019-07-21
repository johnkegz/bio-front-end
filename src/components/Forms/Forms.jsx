import React, { Component } from "react";
import { connect } from "react-redux";
import CKEditor from 'ckeditor4-react';

import  { handleSubmit, logOut } from '../../redux/actions/actions'
import Header from '../Header/Header';
import Footer from '../Footer';

class Forms extends Component {

    initialState = {
        name: '',
        institution: '',
        knownfor: '',
        subject: '',
        bio: '',
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
    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    onEditorChange = ( evt ) => {
        evt.preventDefault()
        this.setState({
            bio: evt.editor.getData()
        });
    }

    handleLogOut = e => {
        e.preventDefault()
        this.props.logOut()
    }

    renderEditor = (bio)=> {
        return this.props.loginData.isAuthenticated? <CKEditor
        data={bio}
        onChange={this.onEditorChange}
        /> : ''
    }
    renderForm = () => {
        const { name, institution, knownfor, subject, bio } = this.state;
        return (
            <>
            <button onClick = {this.handleLogOut}>logout</button>
            <form>
                <input type='text' name='name' placeholder='name' value={name} onChange={this.handleChange}/>
                <input type='text' name='institution' placeholder='institution' value={institution} onChange={this.handleChange}/>
                <input type='text' name='knownfor' placeholder='Known for' value={knownfor} onChange={this.handleChange}/>
                <input type='text' name='subject' placeholder='subject' value={subject} onChange={this.handleChange}/>
                <input
                type="button" 
                value="Submit" 
                onClick={this.submitForm} 
                />
                {this.renderEditor(bio)}
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
    bio: state.bioReducer,
    singlePerson: state.singlePersonreducer,
    loginData: state.loginReducer
  });
  const mapDispatchToProps = {
    handleSubmit,
    logOut
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Forms);
  
