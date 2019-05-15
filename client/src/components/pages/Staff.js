import React, { Component } from "react";

class Staff extends Component {
    state = {
        currentUserEmail: "",
        currentUserName: ""
    }

    componentDidMount() {
        const idToken = JSON.parse(localStorage.getItem("okta-token-storage"));
        this.setState({
            currentUserEmail: idToken.idToken.claims.email,
            currentUserName: idToken.idToken.claims.name
        });
    }

    render() {
        // console.log(this.state);
        const { currentUserEmail, currentUserName } = this.state;
        return (
            <div style={{ color: "white" }}>
                <h3>Welcome, { currentUserName }!</h3>
                <p>Email: {currentUserEmail}</p>
                <p>You have reached the authorized staff area of the portal.</p>
           </div>
        )
    }
}

export default Staff;