import { useState } from "react";
import { 
    FaDiceOne, 
    FaDiceTwo, 
    FaDiceThree, 
    FaDiceFour, 
    FaDiceFive, 
    FaDiceSix
} from "react-icons/fa";

import './DiceRolling.css';

const sides = [
    <FaDiceOne key="1" />,
    <FaDiceTwo key="2" />,
    <FaDiceThree key="3" />,
    <FaDiceFour key="4" />,
    <FaDiceFive key="5" />,
    <FaDiceSix key="6" />
];

function DiceRolling(){
    const [die1, setDie1] = useState(sides[0]);
    const [die2, setDie2] = useState(sides[0]);

    const rollDice = () => {
        setDie1(sides[Math.floor(Math.random() * sides.length)]);
        setDie2(sides[Math.floor(Math.random() * sides.length)]);
    };
    return (
        <div className="dice-container">
            <h2>Dice Rolling</h2>
            <div className="dice">
                <div className="die">{die1}</div>
                <div className="die">{die2}</div>
            </div>
            <button onClick={rollDice}>Roll Dice!</button>
        </div>
    )
}

export default DiceRolling;