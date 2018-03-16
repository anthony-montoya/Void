import React, { Component } from 'react';

class Profile extends Component {
    componentDidMount() {
        console.log(this.props.match.params)
    }
    render() {
        return (
            <div>
                PROFILE FOR {this.props.match.params.vb_username}
            </div>
        );
    }
}

export default Profile;