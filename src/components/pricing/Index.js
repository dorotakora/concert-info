import React, {Component} from 'react';
import MyButton from  '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';


class Pricing extends Component {

    state={
      prices: [100,150,250],
      positions:['Trybuny', 'Płyta', 'GC Płyta'],
      description: [
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, repudiandae.',
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugiat?',
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, voluptatibus!'
      ],
        linkTo: ['http://sales/', 'http://sales/', 'http://sales/'],
        delay: [500,0,500]
    };

    showBoxes = () => (
      this.state.prices.map((box,i)=>(
          <Zoom  key={i} delay={this.state.delay[i]}>
              <div className={'pricing_item'}>
                  <div className={'pricing_inner_wrapper'}>
                      <div className="pricing_title">
                          <span>{this.state.prices[i]} zł</span>
                          <span>{this.state.positions[i]}</span>
                      </div>
                      <div className="pricing_description">
                          <span>{this.state.description[i]}</span>
                      </div>
                      <div className="pricing_buttons">
                          <MyButton
                              text={'Kup bilet'}
                              bck={'#ffa800'}
                              color={'#fff'}
                              link={this.state.linkTo[i]}
                          />
                      </div>
                  </div>
              </div>
          </Zoom>
      ))
    );

    render() {
        return (
            <div className={'bck_black'}>
                <div className={'center_wrapper pricing_section'}>
                    <h2>Ceny biletów</h2>
                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;