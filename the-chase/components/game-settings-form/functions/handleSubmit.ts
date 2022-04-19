import React from "react";
import { uid } from "uid";

import * as T from "../settings-form.types";
import {validation} from "./validation";
import {triviaFetch} from "./triviaFetch";

export async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<T.TGlobalSettings | string>{

    const settings = T.baseOptions;
    const validated = validation(e);
    const {data} = validated

    if(validated.isValid){
        settings.id = uid(20);
        settings.chaserDifficulty = data[data.length -1].value
        settings.players.playerOne = {
            ...settings.players.playerOne,
            name: data[1].value,
            quizLevel: data[2].value
        };

        settings.questions.playerOne = {
            cashBuilder: await triviaFetch({phase:"cashBuilder", difficulty: settings.players.playerOne.quizLevel}),
            headToHead: await triviaFetch({phase:"headToHead", difficulty: settings.players.playerOne.quizLevel})
        }
        if(Number(data[0].value) > 1){
            settings.players.playerTwo = {
                ...settings.players.playerTwo,
                name: data[3].value,
                quizLevel: data[4].value

            }
            settings.questions.playerTwo = {
                cashBuilder: await triviaFetch({phase:"cashBuilder", difficulty: settings.players.playerTwo.quizLevel}),
                headToHead: await triviaFetch({phase:"headToHead", difficulty: settings.players.playerTwo.quizLevel})
            }
            if(data[5] && data[5].field !== "chaserDifficulty"){
                settings.players.playerThree = {
                    ...settings.players.playerThree,
                    name: data[5].value,
                    quizLevel: data[6].value
                };
                
                settings.questions.playerThree = {
                    cashBuilder: await triviaFetch({phase:"cashBuilder", difficulty: settings.players.playerThree.quizLevel}),
                    headToHead: await triviaFetch({phase:"headToHead", difficulty: settings.players.playerThree.quizLevel})
                }
            }
            if(data[7] && data[7].field !== "chaserDifficulty"){
                settings.players.playerFour = {
                    ...settings.players.playerFour,
                    name: data[7].value,
                    quizLevel: data[8].value
                };
                settings.questions.playerFour= {
                    cashBuilder: await triviaFetch({phase:"cashBuilder", difficulty: settings.players.playerFour.quizLevel}),
                    headToHead: await triviaFetch({phase:"headToHead", difficulty: settings.players.playerFour.quizLevel})
                }

            }
        }

        settings.questions = {
            ...settings.questions,
            finalChase:{
                setA: await triviaFetch({phase:"finalChase", difficulty: "medium"}),
                setB: await triviaFetch({phase:"finalChase", difficulty: "medium"})
            }
        }
        return  settings  
    }



    return validated.message
}