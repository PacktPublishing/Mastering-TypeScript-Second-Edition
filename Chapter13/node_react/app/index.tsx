import * as React from 'react';
import * as ReactDOM from 'react-dom';
import NavBar from './NavBar';
import LoginPanel from './LoginPanel';

export class App 
    extends React.Component<{}, {}> {
        render() {
            return <div>
                <LoginPanel />
                <NavBar />
            </div>;
        }
    }

ReactDOM.render(
    <App ></App>, document.getElementById('app_anchor')
);


// import LoginPanel from './LoginPanel';