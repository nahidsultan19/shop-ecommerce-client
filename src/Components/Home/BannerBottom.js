import React from 'react';
import banner from '../../assets/images/BannerBottom.png';
const myStyle = {
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}

const BannerBottom = () => {
    return (
        <div style={myStyle} className=" w-full">

        </div>
    );
};

export default BannerBottom;