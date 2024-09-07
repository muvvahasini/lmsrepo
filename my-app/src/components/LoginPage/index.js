import {Component} from 'react';
import {useHistory} from 'react-router-dom';
import Header from '../Header';
import './index.css';

class LoginPage extends Component{
    state = {username :'' , email:'',errMsg:'',courses:'select'}

    submittedForm = event =>{
        event.preventDefault();
        const {history} = useHistory();
        const {username, email,courses} = this.state;
        let errorMsg = '';
        if (username ==='' | email ===''|courses==='select'){
            errorMsg = 'Please fill all the feilds*';
        }
        else{
            errorMsg = ''
            history.push('/',{from:"LoginPage"});
        };
        this.setState({username:'',email:'',errMsg:errorMsg,courses:'select'});
    };

    userNameEntered = event =>{
        this.setState({username:event.target.value})
    };

    emailEntered = event =>{
        this.setState({email:event.target.value})
    };

    changeSelection = event =>{
        this.setState({courses:event.target.value})
    };

    render(){
        const {username , email,errMsg,courses} = this.state
        return (
            <>
            <Header/>
            <div className='form-container'>
                <form onSubmit={this.submittedForm} className="form-control">
                    <h1 className="login-heading-element">Login/signUp</h1>
                    <div className='login-container'>
                        <label htmlFor='userName'>User Name<span>*</span> :</label>
                        <input id="userName" autoComplete='on' onChange={this.userNameEntered} value={username} placeholder='Enter user name'/>
                    </div>
                    <div className='login-container'>
                        <label htmlFor='EmailId'>Email Id<span>*</span> :</label>
                        <input id="EmailId" autoComplete='off' onChange={this.emailEntered} value={email} placeholder='Enter Email ex:email123@gmail.com'/>
                    </div>
                    <div className='login-container'>
                        <label htmlFor='courseId'>Course/Courses<span>*</span> :</label>
                        <select id="courseId" onChange={this.changeSelection} value={courses}>
                            <option className="selectoption">select</option>
                            <option>web development</option>
                            <option>python</option>
                            <option>java</option>
                            <option>java full stack</option>
                            <option>c++</option>
                            <option>machine learning</option>    
                        </select> 
                        <button className="buttonLogin" type="submit">Submit</button>
                        <p className='errorMessage'>{errMsg}</p>
                    </div>
                </form>
            </div>
            </>
);
    }};
export default LoginPage
