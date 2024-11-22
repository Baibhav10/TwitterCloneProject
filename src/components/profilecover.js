import React, { Component } from 'react';
import coverImage from './cover.jpg';

class ProfileCover extends Component {
    render() {
        return (
            <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                <img src={coverImage} alt="Profile Cover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
        );
    }
}

export default ProfileCover;
