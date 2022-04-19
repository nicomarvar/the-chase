import React from "react";
import { useState } from "react";
import { handleSubmit } from "./functions/handleSubmit";
import * as FRBS from "../../lib/firebase/fbs-db-services"

import * as T from "./settings-form.types";
import css from "./styles.module.css";
import { triviaFetch } from "./functions/triviaFetch";

function SettingsForm(){

    const [gameOptions, setGameOptions] = useState<T.TGlobalSettings>(T.baseOptions)
    const [playersNumber, setPLayersNumber] = useState(1);
    const players = Array(playersNumber).fill("");
    function handleOptions(value: string){
        setPLayersNumber(Number(value))
    }
    const test: T.TFetchOptions ={
        difficulty: "hard",
        phase: "headToHead",
    }

    return (
        <form onSubmit={async (e:  
            React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                const settingsData = await handleSubmit(e);
                if(typeof settingsData !== "string"){
                    FRBS.createDocumentinCollection("games", settingsData, settingsData?.id)
                    return "Success"
                }
                else{
                    console.log(settingsData)
                    return settingsData
                }

                console.log(settingsData)
        }}>

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
                    defaultValue="medium"
                    >
                        <option value="easy">Easy</option>
                        <option value="medium"> Normal </option>
                        <option value="hard"> Hard </option>
                    </select>
                    </div>
                )
            })}
            
            <label htmlFor="chaserDifficulty">Chaser Level: </label>

            <select name="chaserDifficulty" defaultValue="medium">
                <option value="easy"> Easy </option>
                <option value="medium"> Normal </option>
                <option value="hard"> Hard </option>
            </select>

            <button type="submit"> New Game </button>
        </form>
    )
}

export default SettingsForm