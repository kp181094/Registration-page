import React from 'react';
import { Input, message } from 'antd';
import "./login/style.less";

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state={
            firstName:'',
            lastName:'',
            Password:'',
            confirmPassword:''

        };
        this.firsthandler=this.firsthandler.bind(this);
        this.lasthandler=this.lasthandler.bind(this);
        this.passwordhandler=this.passwordhandler.bind(this);
         this.confirmhandler=this.confirmhandler.bind(this);
        this.handlesubmit=this.handlesubmit.bind(this);

    }

firsthandler(event){
    this.setState({
     firstName:event.target.value
    })
}

lasthandler(event){
    this.setState({
        lastName:event.target.value
    })
}

passwordhandler(event){
    this.setState({
        Password:event.target.value
    })
}

confirmhandler(event){
        this.setState({
            confirmPassword:event.target.value
        })
    };

//    isConfirmPassword(event){
//     if(event.passwordhandler !== event.confirmhandler){
//         alert.error('password does not match');
//     }
//    };

handlesubmit(event){
    console.log(this.state)

    const{Password,confirmPassword}=this.state;

    if(Password!== confirmPassword)
    {
        alert('password does not match');
    }
    
};


  render() {
    return (
      <div>
           <form onSubmit={this.handlesubmit}> 
                <h1>User Registration</h1>
                <input type='text' value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName.."/> <br/>
                <input type='text' value={this.state.lastName} onChange={this.lasthandler} placeholder="LastName.."/><br/>
                <input type='text' value={this.state.Password} onChange={this.passwordhandler} placeholder="Password.."/><br/><br/>
                <input type='text' value={this.state.confirmPassword} onChange={this.confirmhandler} 
                 placeholder="Confirm Password.."/><br/><br/>
                <button>Submit</button>
                <button>Cancel</button>
            </form>
      </div>
    );
  }
}

export default Register;
