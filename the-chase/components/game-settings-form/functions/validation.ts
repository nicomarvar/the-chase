import { uid } from "uid";

import * as T from "../settings-form.types";

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


