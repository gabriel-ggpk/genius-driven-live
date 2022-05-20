import "./gameContainer.css";
import ColorCard from "../colorCard/ColorCard";
import {useState, useEffect} from "react";

export default function GameContainer() {
    const gameColors = ["red", "green", "blue", "yellow"];
    const gameInit = {
        colors: [],
        score: 0,
        isDisplaying: false,
        userTurn: false,
        userColors: [],
    }
    const [isOn, setIsOn] = useState(false);
    const [gameState, setGameState] = useState(gameInit);
    useEffect(() => {
        if (isOn) {
            setGameState({...gameState,isDisplaying: true});
        }
        else{
            setGameState({...gameState});
        }

    },[isOn])
    return (
        <div className="mainContainer">
            <div className="cardWrapper">
                {gameColors.map((color)=>{
                    return <ColorCard color={color}/>
                })}
                {isOn ? <div className="middleButton score">{gameState.score}</div>: <div className="middleButton start" onClick={()=>{setIsOn(true)}}>START</div>}
            </div>
        </div>


    );    

}
