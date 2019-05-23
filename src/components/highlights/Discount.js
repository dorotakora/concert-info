import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from "../utils/MyButton";

class Discount extends Component {

    state={
      discountStart: 0,
      discountEnd: 30
    };

    percentage = () => {
      if(this.state.discountStart < this.state.discountEnd){
          this.setState({
              discountStart: this.state.discountStart + 1
          })
      }
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        setTimeout(()=>{
            this.percentage()
        },30)
    }

    render() {
        return (
            <div className={'center_wrapper'}>
                <div className={'discount_wrapper'}>
                    <Fade
                        onReveal={()=>this.percentage()}
                    >
                        <div className={'discount_percentage'}>
                            <span>{this.state.discountStart}%</span>
                            <span>TANIEJ</span>
                        </div>
                    </Fade>
                    <Slide right>
                        <div className={'discount_description'}>
                            <h3>Kup bilety w przedsprzedaży</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque magni molestias obcaecati. Accusantium aperiam assumenda beatae deleniti facere perspiciatis rem.</p>
                            <div>
                                <MyButton text={"Kup bilety"}
                                          bck={'#ffa800'}
                                          color={'#fff'}
                                          link={'https://www.eventim.pl/bon-jovi-bilety.html?affiliate=PLE&doc=artistPages%2Ftickets&fun=artist&action=tickets&erid=1082144'}/>
                            </div>
                        </div>
                    </Slide>

                </div>
            </div>
        );
    }
}

export default Discount;