import React, { Component } from "react";
import { connect } from 'react-redux';
import { login } from '../../redux/actions/actions';

class Login extends Component {
    initialState = {
        email: '',
        password: ''
    }
    state = this.initialState;

    componentWillReceiveProps(nextProps){
        if(nextProps.loginData.isAuthenticated){
            this.props.history.push('/forms')
        }
    }
    handleChange = event =>  {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.login(this.state)
        this.setState(this.initialState)
    }

  render() {
      const {email, password} = this.state;
    return (
    <div>
        <form>
            <input type='text' name='email' value={email} onChange={this.handleChange}/>
            <input type='password' name='password' value={password} onChange={this.handleChange}/>
            <input type='submit' value='submit' onClick={this.handleSubmit} />
        </form>
    </div>);
  }
}
const mapStateToProps = state =>  ({
    loginData: state.loginReducer
})
const mapDispatchToProps = ({
    login
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Login);
