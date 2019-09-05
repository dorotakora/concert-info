import React from 'react';
import Zoom from 'react-reveal/Zoom';

import icon_calendar from '../../resources/icons/calendar.png';
import icon_location from '../../resources/icons/location.png';

const VenueNfo = () => {
    return (
        <div className={'bck_black'}>
            <div className={'center_wrapper'}>
                <div className={'vn_wrapper'}>
                    <Zoom duration={500}>
                        <div className={'vn_item'}>
                            <div className={'vn_outer'}>
                                <div className={'vn_inner'}>
                                    <div className={'vn_icon_square bck_red'}/>
                                    <div className={'vn_icon'}
                                         style={{
                                             background: `url(${icon_calendar})`
                                         }}/>
                                    <div className={'vn_title'}>Data i miejsce</div>
                                    <div className={'vn_desc'}>12 lipiec 2022 godzina 20:00</div>

                                </div>
                            </div>
                        </div>
                    </Zoom>
                    <Zoom duration={500} delay={500}>
                        <div className={'vn_item'}>
                            <div className={'vn_outer'}>
                                <div className={'vn_inner'}>
                                    <div className={'vn_icon_square bck_yellow'}/>
                                    <div className={'vn_icon'}
                                         style={{
                                             background: `url(${icon_location})`
                                         }}/>
                                    <div className={'vn_title'}>PGE Narodowy</div>
                                    <div className={'vn_desc'}>al. Księcia Józefa Poniatowskiego 1 03-901 Warszawa</div>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                </div>
            </div>
        </div>
    );
};

export default VenueNfo;