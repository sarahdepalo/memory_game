import React from 'react';
import digitalCrafts from '../dc.png';
import './MemoryCard.css';

class MemoryCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false
        };
    }
    render() {
        let memoryCardInnerClass = "MemoryCardInner";
        if (this.state.isFlipped === true) {
            const flippedClass = ' flipped'
            memoryCardInnerClass = 'MemoryCardInner' + flippedClass;
        }
        return (
            <div className="MemoryCard" onClick={this.clickHandler}>
                <div className={memoryCardInnerClass} id="MemoryCardInner">
                    <div className="MemoryCardBack">
                        <img src={digitalCrafts} alt="DigitalCrafts Logo"/>
                    </div>
                    <div className="MemoryCardFront">
                        ∆
                    </div>
                </div>
            </div>
        );
    }

    clickHandler = () => {
        this.setState({
            isFlipped: !this.state.isFlipped
        })
    }
}
export default MemoryCard;