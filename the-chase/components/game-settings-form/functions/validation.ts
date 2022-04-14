import { uid } from "uid";

import * as T from "../settings-form.types";



export const baseOptions: T.TGlobalSettings = {
    id: "id",
    phase: {
        cashBuilder: false,
        headToHead: false,
        finalChase: false
    },
    players: {
        playerOne: {
            cash: 0,
            name:"pc",
            quizLevel: "normal",
            wasCaught: false
        },
        playerTwo: {
            cash: 0,
            name:"pc",
            quizLevel: "normal",
            wasCaught: false
        },
        playerThree: {
            cash: 0,
            name:"pc",
            quizLevel: "normal",
            wasCaught: false
        },
        playerFour: {
            cash: 0,
            name:"pc",
            quizLevel: "normal",
            wasCaught: false
        }
    },
    questions:{
        finalChase:{
            setA: undefined,
            setB: undefined
        },
        playerOne: undefined,
        playerTwo: undefined,
        playerThree: undefined,
        playerFour: undefined,
    }
}

//Trim form Data
export const trimData = (elements) => {
    return Array.from(elements).filter((element) => element.tagName !== "BUTTON").map( (element) => {
        return {
            tag: element.tagName,
            field: element.name,
            value: element.value
        }
    })
}

//Check for empty fields
const validateInputs = (trimmedData: T.TFormElementArr[]) => {

    trimmedData = trimmedData.filter(elmnt => elmnt.tag === "INPUT");

    if(!trimmedData.every(elmnt => elmnt.value !== "")){
        return "All players must provide a name."
    }
    
    if(!trimmedData.every(
        elmnt => elmnt.tag === "INPUT" && /[A-Za-z]$/i.test(elmnt.value))){
        return "Names can only have letters."
    }

    return true
}


