import React, { Component } from "react";
import { connect } from 'react-redux';
import { login } from '../../redux/actions/actions';
import '../Regisiter/register.scss';

class Login extends Component {
    initialState = {
        email: '',
        password: ''
    }
    state = this.initialState;

    componentWillReceiveProps(nextProps){
        if(nextProps.loginData.isAuthenticated){
            this.props.history.push('/feed')
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

    displayForm(email, password){
        return(
            <div className="registerFormContainer">
            <div className="registerForm">
            <div className="formText">Login</div>
            <form>
                <input type="email" name="email" placeholder="email" value={email} onChange={this.handleChange} className="form-control" />
                <input type="password" name="password" placeholder="password" value={password} onChange={this.handleChange} className="form-control" />
                <input type="submit" name="submit" value="submit" className="btn btn-primary form-control" onClick={this.handleSubmit}/>
            </form>
            </div>
            </div>
        )
    }
  render() {
      const {email, password} = this.state;
    return (
    <div>
    {this.displayForm(email, password)}
        {/* <form>
            <input type='text' name='email' value={email} onChange={this.handleChange}/>
            <input type='password' name='password' value={password} onChange={this.handleChange}/>
            <input type='submit' value='submit' onClick={this.handleSubmit} />
        </form> */}
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
