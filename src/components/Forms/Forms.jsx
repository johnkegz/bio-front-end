import React, { Component } from "react";
import { connect } from "react-redux";
import CKEditor from 'ckeditor4-react';

import  { handleSubmit } from '../../redux/actions/actions'
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
        console.log('evt', this.state);
        // }););
        this.setState({
            bio: evt.editor.getData()
        });
    }
    renderForm = () => {
        const { name, institution, knownfor, subject, bio } = this.state;
        return (
            <form>
                <input type='text' name='name' placeholder='name' value={name} onChange={this.handleChange}/>
                <input type='text' name='institution' placeholder='institution' value={institution} onChange={this.handleChange}/>
                <input type='text' name='knownfor' placeholder='Known for' value={knownfor} onChange={this.handleChange}/>
                <input type='text' name='subject' placeholder='subject' value={subject} onChange={this.handleChange}/>
                {/* <textarea cols='50' rows='4' name='bio' value={bio} onChange={this.handleChange}></textarea> */}
                <input
                type="button" 
                value="Submit" 
                onClick={this.submitForm} 
                />
                <CKEditor
                    data={bio}
                    onChange={this.onEditorChange}
                    />
            </form>
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
    singlePerson: state.singlePersonreducer
  });
  const mapDispatchToProps = {
    handleSubmit
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Forms);
  
