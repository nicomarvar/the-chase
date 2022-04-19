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
    chaserDifficulty: string;
    chaserName: null | string;
    phase: TPhases;
    players: {
        playerOne: TPlayer;
        playerTwo: TPlayer;
        playerThree: TPlayer;
        playerFour: TPlayer;
    };
    questions: {
        finalChase: {
            setA: TQuestions[] | undefined | null;
            setB: TQuestions[] | undefined | null;
        };
        playerOne: TPlayerQuestions | undefined | null;
        playerTwo: TPlayerQuestions | undefined | null;
        playerThree: TPlayerQuestions | undefined | null;
        playerFour: TPlayerQuestions | undefined | null;
    }
}

export type TFormElement = {
    tag: string,
    field: string,
    value: string
}

export type TFetchOptions = {
    difficulty: string;
    phase: "cashBuilder" | "headToHead" | "finalChase";
}

export type TFetchResponse = {
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

export const baseOptions: TGlobalSettings = {
    id: "id",
    chaserDifficulty: "medium",
    chaserName: null,
    phase: {
        cashBuilder: false,
        headToHead: false,
        finalChase: false
    },
    players: {
        playerOne: {
            cash: 0,
            name:"pc",
            quizLevel: "medium",
            wasCaught: false
        },
        playerTwo: {
            cash: 0,
            name:"pc",
            quizLevel: "medium",
            wasCaught: false
        },
        playerThree: {
            cash: 0,
            name:"pc",
            quizLevel: "medium",
            wasCaught: false
        },
        playerFour: {
            cash: 0,
            name:"pc",
            quizLevel: "medium",
            wasCaught: false
        }
    },
    questions:{
        finalChase:{
            setA: undefined,
            setB: undefined
        },
        playerOne: undefined,
        playerTwo: null,
        playerThree: null,
        playerFour: null,
    }
}