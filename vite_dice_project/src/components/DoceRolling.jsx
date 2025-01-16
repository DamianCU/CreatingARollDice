import { 
    FaDiceOne, 
    FaDiceTwo, 
    FaDiceThree, 
    FaDiceFour, 
    FaDiceFive, 
    FaDiceSix
} from "react-icons/fa";

const sides = [
    <FaDiceOne />, 
    <FaDiceTwo />, 
    <FaDiceThree />, 
    <FaDiceFour />, 
    <FaDiceFive />, 
    <FaDiceSix />
];

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