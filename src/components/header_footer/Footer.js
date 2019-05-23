import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className={'bck_red'}>
            <Fade delay={500}>
                <div className={'font_righteous footer_logo_venue'}>This house is not for sale</div>
                <div className={"footer_copyright"}>Bon Jovi 2019 Tour.All rights reserved</div>
            </Fade>
        </footer>
    );
};

export default Footer;