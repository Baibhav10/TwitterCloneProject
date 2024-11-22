import React, { Component } from 'react';
import profilePicture from './pp.jpg';

class ProfileInfo extends Component {
    render() {
        return (
            <div style={{ padding: '20px' }}>
                <img src={profilePicture} alt="Profile Cover" style={{ width: '40%', height: '40%', objectFit: 'cover' }} />
                <h3>Baibhav Shrestha</h3>
                <p>@baibhavvv</p>
                <p><a href="http://twitter.com/baibhavvvvvvvv" target="_blank" rel="noopener noreferrer">twitter.com/baibhavvvvvvvv</a></p>
                <p>Perth, WA</p>
                <p>Joined December 2001</p>
                <button style={{ width: '100%', padding: '10px', marginTop: '20px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px' }}>
                    Tweet to Baibhav 
                </button>
            </div>
        );
    }
}

export default ProfileInfo;
