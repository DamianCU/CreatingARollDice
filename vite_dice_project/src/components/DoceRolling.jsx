import React, {useState} from "react";

import { 
    FaDiceOne, 
    FaDiceTwo, 
    FaDiceThree, 
    FaDiceFour, 
    FaDiceFive, 
    FaDiceSix
} from "react-icons/fa";

const sides = [1, 2, 3, 4, 5, 6];

const getDieComponent = (side) => {
    const icons = {
        1: <FaDiceOne />,
        2: <FaDiceTwo />,
        3: <FaDiceThree />,
        4: <FaDiceFour />,
        5: <FaDiceFive />,
        6: <FaDiceSix />
    }
    return icons[side];
}

function DiceRolling(){
    const [die1, setDie1] = useState(sides[0]);
    const [die2, setDie2] = useState(sides[0]);
    return (
        <div className="dice-container">
            <h2>Dice Rolling</h2>
            <div className="dice">
                <div className="die">{die1}</div>
                <div className="die">{die2}</div>
            </div>
            <button>Roll Dice!</button>
        </div>
    )
}

export default DiceRolling;