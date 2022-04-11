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

type TQuestions = {
    question: string;
    correctAnswer: string;
    answers: [string, string, string, string] | [string, string];
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
            setA: TQuestions[];
            setB: TQuestions[];
        };
        playerOne: TPlayerQuestions;
        playerTwo: TPlayerQuestions;
        playerThree: TPlayerQuestions;
        playerFour: TPlayerQuestions;
    }
}