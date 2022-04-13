import React from "react";
import { useState } from "react";

import * as T from "./settings-form.types";
import * as V from "./functions/validation"
import css from "./styles.module.css"

function SettingsForm(){

    const [gameOptions, setGameOptions] = useState<T.TGlobalSettings>(V.baseOptions)
    const [playersNumber, setPLayersNumber] = useState(1);
    const players = Array(playersNumber).fill("");
    function handleOptions(value: string){
        setPLayersNumber(Number(value))
    }

    return (
        <form onSubmit={(e) => {e.preventDefault();
            V.test(e.target.elements)}}>

            <label htmlFor="numberOfPlayers">How many players?</label>

            <select 
            name="numberOfPlayers" 
            onChange={(e) => {handleOptions(e.target.value)}}
            defaultValue={1}>
                <option value="1"> One Player </option>
                <option value="2"> Two Players </option>
                <option value="3"> Three Players </option>
                <option value="4"> Four Players </option>
            </select>

            {players.map((player,id) => {
                return(
                    <div key={id}>
                    <label 
                    key={`inputLabel${id+1}`} 
                    htmlFor={`player${id + 1}`}> 
                    Player {id + 1}: 
                    </label>

                    <input 
                        key={`input${id+1}`} 
                        name={`player${id+1}`} 
                        placeholder="Player Name" 
                        className={css.test}/>

                    <label 
                    key={`selectLabel${id+1}`} 
                    htmlFor={`playerDifficulty`}> 
                    Questions Difficulty: 
                    </label>

                    <select
                    name={`player${id+1}Difficulty`} 
                    key={`select${id+1}`}
                    defaultValue="normal"
                    >
                        <option value="easy">Easy</option>
                        <option value="normal"> Normal </option>
                        <option value="hard"> Hard </option>
                    </select>
                    </div>
                )
            })}
            
            <label htmlFor="chaserDifficulty">Chaser Level: </label>

            <select name="chaserDifficulty">
                <option value="easy"> Easy </option>
                <option value="normal"> Normal </option>
                <option value="hard"> Hard </option>
            </select>

            <button type="submit"> New Game </button>
        </form>
    )
}

export default SettingsForm