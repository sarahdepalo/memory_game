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
        const memoryCardInnerClass = "MemoryCardInner";
        const flippedClass = 'flipped'
        return (
            <div className="MemoryCard" onClick={this.clickHandler}>
                <div className={this.state.isFlipped ? (memoryCardInnerClass + ' ' + flippedClass) : (memoryCardInnerClass)} id="MemoryCardInner">
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