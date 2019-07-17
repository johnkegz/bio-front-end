import React, { Component } from "react";
import { connect } from 'react-redux';
import { login } from '../../redux/actions/actions';

class Login extends Component {
    initialState = {
        username: '',
        password: ''
    }
    state = this.initialState;
    handleChange = event =>  {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }
    handleSubmit = () => {
        this.props.login(this.state)
        this.setState(this.initialState)
    }

  render() {
      const {username, password} = this.state;
    return (
    <div>
        <form>
            <input type='text' name='username' value={username} onChange={this.handleChange}/>
            <input type='password' name='password' value={password} onChange={this.handleChange}/>
            <input type='submit' value='submit' onClick={this.handleSubmit} />
        </form>
    </div>);
  }
}
const mapStateToProps = state =>  ({
    login: state.loginReducer
})
const mapDispatchToProps = ({
    login
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Login);
