type TPhases = {
    cashBuilder: boolean;
    finalChase: boolean;
    headToHead: boolean;
}

type TPlayer = {
    cash: number;
    name: string;
    quizLevel: string;
    wasCaught: boolean;
}

export type TQuestions = {
    category?: string;
    question: string;
    correctAnswer: string;
    answers: string[];
}

type TPlayerQuestions = {
    cashBuilder: TQuestions[];
    headToHead: TQuestions[];
}

export type TGlobalSettings = {
    id:string;
    phase: TPhases;
    players: {
        playerOne: TPlayer;
        playerTwo: TPlayer;
        playerThree: TPlayer;
        playerFour: TPlayer;
    };
    questions: {
        finalChase: {
            setA: TQuestions[] | undefined;
            setB: TQuestions[] | undefined;
        };
        playerOne: TPlayerQuestions | undefined;
        playerTwo: TPlayerQuestions | undefined;
        playerThree: TPlayerQuestions | undefined;
        playerFour: TPlayerQuestions | undefined;
    }
}

export type TFormElementArr = {
    tag: string,
    field: string,
    value: string
}

export type TFetchOptions = {
    difficulty: "easy" | "medium" | "hard";
    phase: "cashBuilder" | "headToHead" | "finalChase";
}

export type TFetchResponse = {[key: string] : string | string[];}[]
