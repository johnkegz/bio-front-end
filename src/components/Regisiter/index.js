import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../../redux/actions/actions';
import './register.scss';

class Register extends Component {
    initialState={
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    }
    state = this.initialState;

    static getDerivedStateFromProps(props, state){
        if(props.registerResponse.registerResponse.data === 'Registration successful'){
            return props.history.push('/login')
        }
        return state
    }

    handleOnchange = e => {
        return this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.register(this.state)
        this.setState(this.initialState)
    }
    displayForm(){
        const { firstName, lastName, email, password, confirmPassword} = this.state;
        return(
            <div className="registerFormContainer">
            <div className="registerForm">
            <div className="formText">register to post stories</div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="firstName" value={firstName} placeholder="First name" onChange={this.handleOnchange} className="form-control" required/>
                <input type="text" name="lastName" value={lastName} placeholder="Last name" onChange={this.handleOnchange} className="form-control" required/>
                <input type="email" name="email" value={email} placeholder="email" onChange={this.handleOnchange} className="form-control" required/>
                <input type="password" name="password" value={password} placeholder="password" onChange={this.handleOnchange} className="form-control" required/>
                <input type="password" name="confirmPassword" value={confirmPassword} placeholder="confirm password" onChange={this.handleOnchange} className="form-control" required/>
                <input type="submit" name="submit" value="submit" className="btn btn-primary form-control" />
            </form>
            </div>
            </div>
        )
    }
    render() {
        return this.displayForm()
    }
}

const mapStateToProps = state =>({
    registerResponse: state.loginReducer
})

const mapDispatchToProps = ({
    register
})
export default  connect(mapStateToProps, mapDispatchToProps)(Register);
