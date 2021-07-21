import React from 'react';
import digitalCrafts from '../dc.png';
import './MemoryCard.css';

class MemoryCard extends React.Component {
    render() {
        const memoryCardInnerClass = "MemoryCardInner";
        const flippedClass = 'flipped'
        return (
            <div className="MemoryCard" onClick={this.props.pickCard}>
                <div className={this.props.isFlipped ? (memoryCardInnerClass + ' ' + flippedClass) : (memoryCardInnerClass)}>
                    <div className="MemoryCardBack">
                        <img src={digitalCrafts} alt="DigitalCrafts Logo"/>
                    </div>
                    <div className="MemoryCardFront">
                        <p>{this.props.symbol}</p>
                    </div>
                </div>
            </div>
        );
    }

}
export default MemoryCard;