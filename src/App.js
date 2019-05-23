import React from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from "./components/header_footer/Header";
import Featured from './components/featured/Index';
import VenueNfo from './components/venueNfo/Index'
import Highlights from "./components/highlights/Index";
import Pricing from "./components/pricing/Index";
import Location from "./components/location/Index";
import Footer from "./components/header_footer/Footer";


function App() {
  return (
    <div className="App" style={{height: "1500px", background: "cornflowerblue"}}>
            <Header/>
        <Element name={'featured'}>
            <Featured/>
        </Element>
        <Element name={'venue nfo'}>
            <VenueNfo/>
        </Element>
        <Element name={'highlights'}>
            <Highlights/>
        </Element>
        <Element name={'pricing'}>
            <Pricing/>
        </Element>
        <Element name={'location'}>
            <Location/>
        </Element>
        <Footer/>
    </div>
  );
}

export default App;
