import React from 'react';
import banner from '../../assets/images/BannerBottom.png';
const myStyle = {
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '80vh'
}

const BannerBottom = () => {
    return (
        <div style={myStyle} className="min-h-screen">

        </div>
    );
};

export default BannerBottom;