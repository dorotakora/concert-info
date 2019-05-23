import React from 'react';

const Location = () => {
    return (
        <div className={'location_wrapper'}>
            <iframe src="https://www.google.com/maps/d/embed?mid=1lX6fy3fPRU6Uns5GJ9uOqO4rqC4"
                    title="This is a map"
                    width={'100%'}
                    height={'500px'}
                    frameBorder={'0'}
                    allowFullScreen
            />
            <div className={'location_tag'}>
                <div>Mapa dojazdu</div>
            </div>
        </div>
    );
};

export default Location;