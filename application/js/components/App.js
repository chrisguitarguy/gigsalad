import React from 'react';
import { IndexLink } from 'react-router'

export default class App extends React.Component {
    render() {
        return (
            <div className="performer-application">
                {this.renderNav()}
                {this.props.children}
                {this.renderFooter()}
            </div>
        );
    }

    renderNav() {
        return (
            <nav className="navbar navbar-inverse navbar-static-top">
                <div className="container-fluid">
                    <IndexLink to="/" className="navbar-brand">Gigsalad</IndexLink>
                </div>
            </nav>
        );
    }

    renderFooter() {
        return (
            <footer role="main" className="text-center">
                <p>Copyright message here.</p>
            </footer>
        );
    }
}
