import * as T from "../settings-form.types";

const URL: string = "https://opentdb.com/api.php?";
//https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple



function trimData(data: T.TFetchResponse[]): T.TQuestions[]{

    return data.map((obj) => {
        return {
            category: obj.category,
            question: obj.question,
            correctAnswer: obj["correct_answer"],
            answers: [...obj["incorrect_answers"], obj["correct_answer"]]
        }
    })
}

async function getQuestions(options: T.TFetchOptions): Promise<T.TFetchResponse[]> {

    let query: string= ""
    switch (options.phase) {

        case "cashBuilder":
            query = `${URL}amount=20&type=boolean&difficulty=${options.difficulty}`;
            break;

        case "headToHead":
            query = `${URL}amount=8&type=multiple&difficulty=${options.difficulty}`;
        break;

        case "finalChase":
            query = `${URL}amount=40&difficulty=${options.difficulty}`;
        break;
    
        default:
            break;
    }

    const request = await fetch(query);
    const response = await request.json();
    const data = response.results
    return data
}

const html = "What was Sir Handel&#039;s original name in &quot;The Railway Series&quot; and it&#039;s animated counterpart &quot;Thomas and Friends?&quot;"


export default async function triviaFetch(options: T.TFetchOptions){
    const fetched = await getQuestions(options)
    const trimmed = trimData(fetched)
    return trimmed
}