import * as React from 'react';
import * as ReactDOM from 'react-dom';

// must export a props class
export class LoginPanelProps {
    userName?: string;
    password?: string;
}


export default class LoginPanel 
    extends React.Component<LoginPanelProps, {}> {
    state: LoginPanelProps;
constructor(props?: LoginPanelProps) {
    super(props);
    this.state = { userName : '', password: ''};
    this.handleUserNameChange = 
        this.handleUserNameChange.bind(this);
    this.handlePasswordChange = 
        this.handlePasswordChange.bind(this);
    this.handleSubmit = 
        this.handleSubmit.bind(this);
}
handleUserNameChange(event) {
    this.setState({userName: event.target.value});
    console.log(`username change: ${event.target.value}`)
}

handlePasswordChange(event) {
    this.setState({password: event.target.value});
    console.log(`password change: ${event.target.value}`)
}

    render() {
return <div id="sideNav" className="login_sidenav">
        <form onSubmit={this.handleSubmit}>
        <div className="container">
            <a href="#" className="closebtn" >&times;</a>
            <div className="row">Please Login :</div>
            <div className="row">
<input className="sidenav-input" 
    type="text" 
    placeholder="Username" 
    value={this.props.userName} 
    onChange={this.handleUserNameChange} 
    /></div>
            <div className="row">
<input className="sidenav-input" 
    type="password" 
    placeholder="Password" 
    value={this.props.password} 
    onChange={this.handlePasswordChange} 
    /></div>
            <div className="row">
                <input type="submit" 
                    value="Login" className="btn btn-primary btn-lg" /></div>
        </div>
        </form>
    </div>;
    }


handleSubmit(event) {
    event.preventDefault();
    fetch('/login',{ method: 'POST',
        headers: {
                'Accept': 'application/json',
                'Content-type' : 'application/json'
        }, body : JSON.stringify({
            userName : this.state.userName,
            password : this.state.password
        })

    }).then( (response) => {
        console.log(`response : ${response.status}`);
    }).catch( (err) => {
        console.log(`err: ${err}`);
    });
}

}



