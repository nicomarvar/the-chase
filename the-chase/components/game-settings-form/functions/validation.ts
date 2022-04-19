import { uid } from "uid";

import * as T from "../settings-form.types";

//Trim form Data
const trimData = (e:  
    React.FormEvent<HTMLFormElement>): T.TFormElement[] => {

    const target = e.target as HTMLFormElement;
    const elements = target.elements

    return Array.from(elements).filter((element) => element.tagName !== "BUTTON").map( (element, id) => {
        const inputElement = element as HTMLInputElement;
        return {
            tag: inputElement.tagName,
            field: inputElement.name,
            value: inputElement.value
        }
    })
}

//Check for empty fields
const validateInputs = (trimmedData: T.TFormElement[]) => {

    trimmedData = trimmedData.filter(elmnt => elmnt.tag === "INPUT");

    if(!trimmedData.every(elmnt => elmnt.value !== "")){
        return {
            isValid: false,
            message:"All players must provide a name."
        }
    }
    
    if(!trimmedData.every(
        elmnt => elmnt.tag === "INPUT" && /[A-Za-z]$/i.test(elmnt.value))){
        return {
            isValid: false,
            message: "Names can only have letters."
        }
    }

    return {
        isValid: true,
        message: "Success"
    }
}

export function validation(e:  
    React.FormEvent<HTMLFormElement>){

        const data = trimData(e);
        const validation = validateInputs(data)
        return {
            isValid: validation.isValid,
            message: validation.message,
            data: data
        }

}

