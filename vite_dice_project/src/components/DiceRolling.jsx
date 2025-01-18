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
    const [isRolling, setIsRolling] = useState(false)

    const rollDice = () => {
        setIsRolling(true);
        
        setTimeout(() =>{
            setIsRolling(false);
            setDie1(sides[Math.floor(Math.random() * sides.length)]);
            setDie2(sides[Math.floor(Math.random() * sides.length)]);
        },1000);
    };

    const dieClassname = `die ${isRolling ? 'die-shaking' : ''}`
    return (
        <div className="dice-container">
            <h2>Dice Rolling</h2>
            <div className="dice">
                <div className={dieClassname}>{die1}</div>
                <div className={dieClassname}>{die2}</div>
            </div>
            <button disabled={isRolling} onClick={rollDice}>{isRolling ? 'Rolling' : 'Roll Dice!'} </button>
        </div>
    );
};

export default DiceRolling;