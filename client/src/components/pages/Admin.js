import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

export default withAuth(class Staff extends Component {
    state = { authenticated: null };

    checkAuthentication = async () => {
        const authenticated = await this.props.auth.isAuthenticated();
        if (authenticated !== this.state.authenticated) {
            this.setState({ authenticated });
        }
    }

    async componentDidMount() {
        this.checkAuthentication();
    }

    async componentDidUpdate() {
        this.checkAuthentication();
    }

    login = async () => {
        this.props.auth.login('/');
    }

    logout = async () => {
        this.props.auth.logout('/');
    }

    render() {
        if (this.state.authenticated === null) return null;

        const mainContent = this.state.authenticated ? (
            <div>
                <p className="lead">You have entered the OAS Staff Portal, <Link to="/staff">click here.</Link></p>
                <button className="waves-effect waves-light btn-large" onClick={this.logout}>Logout</button>
            </div>
        ) : (
                <div>
                    <p className="lead">If you are a staff member, please get your credentials from a supervisor.</p>
                <button className="waves-effect waves-light btn-large" onClick={this.login}>Login</button>
                </div>
            );

        return (
            <div className="jumbotron" style={{ color: "black" }}>
                <h1 className="display-4">OAS Portal</h1>
                {mainContent}
            </div>
        );
    }
});