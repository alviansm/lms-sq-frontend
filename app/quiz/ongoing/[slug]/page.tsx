'use client';

import React from "react";

import 'katex/dist/katex.min.css'
import QuizNavbar from "../../../components/QuizNavbar";
import ButtonQuizNavGroup from "../../../components/ButtonQuizNavGroup";
import QuizDisplayed from "../../../components/QuizDisplayed";

const INITIAL_TEXT_WITH_LATEX = "We give illustrations for the three processes $e^+e^-$, gluon-gluon and some macros: $\\f\\relax{x} = 1$";
const INITIAL_STRICT_FLAG = false;
const INITIAL_MACROS = { "\\f": "#1f(#2)" };

interface Questions {
    number: number;
    content: string;
    multiple_choices: string[];
    userAnswer: string;
    isFlagged: string;
}

const questions_list: Questions[] = [
    {
        "number": 1,
        "content": INITIAL_TEXT_WITH_LATEX,
        "multiple_choices": [
            "21", "22", "23", "24", "None of the above correct"
        ],
        "userAnswer": "",
        "isFlagged": "false"
    },
    {
        "number": 2,
        "content": "macros: $\\f\\relax{x} = 1$",
        "multiple_choices": [
            "macros: $\\f\\relax{x} = 1$", "macros: $\\f\\relax{x} = 1$", "macros: $\\f\\relax{x} = 1$", "macros: $\\f\\relax{x} = 1$", "All correct"
        ],
        "userAnswer": "",
        "isFlagged": "false"
    },
    {
        "number": 3,
        "content": "macros: $\\f\\relax{x} = 2$",
        "multiple_choices": [
            "macros: $\\f\\relax{x} = 1$", "macros: $\\f\\relax{x} = 1$", "macros: $\\f\\relax{x} = 1$", "macros: $\\f\\relax{x} = 1$", "All correct"
        ],
        "userAnswer": "",
        "isFlagged": "false"
    },
    {
        "number": 4,
        "content": "macros: $\\f\\relax{x} = 3$",
        "multiple_choices": [
            "macros: $\\f\\relax{x} = 1$", "macros: $\\f\\relax{x} = 1$", "macros: $\\f\\relax{x} = 1$", "macros: $\\f\\relax{x} = 1$", "All correct"
        ],
        "userAnswer": "",
        "isFlagged": "false"
    },
    {
        "number": 5,
        "content": "macros: $\\f\\relax{x} = 4$",
        "multiple_choices": [
            "macros: $\\f\\relax{x} = 1$", "macros: $\\f\\relax{x} = 1$", "macros: $\\f\\relax{x} = 1$", "macros: $\\f\\relax{x} = 1$", "All correct"
        ],
        "userAnswer": "",
        "isFlagged": "false"
    },
];

const QuizOngoing = () => {  
    const [text, setText] = React.useState(INITIAL_TEXT_WITH_LATEX);
    const [strict, setStrict] = React.useState(INITIAL_STRICT_FLAG);
    const [macros, setMacros] = React.useState(INITIAL_MACROS);
    const [numSelected, setNumSelected] = React.useState(0);
    const [number, setNumber] = React.useState("");
    const [content, setContent] = React.useState("");
    const [multipleChoices, setMultipleChoices] = React.useState<any>(null);
    const [userAnswer, setUserAnswer]= React.useState<any>(null);
    const [questionsList, setQuestionsList] = React.useState<Questions[] | any> (questions_list);

    React.useEffect(() => {
        setQuestionsList(questions_list);
        console.log("Questions: ", questionsList);
    }, []);

    React.useEffect(() => {
        if (questionsList) {
            setNumber(String(questionsList[numSelected]?.number));
            setContent(String(questionsList[numSelected]?.content));
            setMultipleChoices(questionsList[numSelected]?.multiple_choices);
            setUserAnswer(questionsList[numSelected]?.userAnswer);
        }
    }, [numSelected]);

    const navigateToQuestionNum = (x: number) => {
        setNumSelected(x);
    }

    const navigateToNextQuestion = (x: number, y: Questions[] | any) => {
        if (y) {
            if (x < y.length-1) {
                setNumSelected(x+1);
            }
        }
    }

    const navigateToPrevQuestion = (x: number, y: Questions[] | any) => {
        if (x>0) {
            setNumSelected(x-1);
        }
    }

    const saveUserAnswer = (x: string, y: Questions[], z: number) => {
        if (y) {
            let temp_state: Questions[] = [...y];
            let temp_element = { ...temp_state[z] };
            temp_element["userAnswer"] = x;
            // @ts-ignore
            temp_state[z] = temp_element;
        } else {
            console.log("Error adding answer");
        }
    }

    return (
        <main>
            <QuizNavbar
                numSelected={numSelected}
                questions={questionsList}    
                navigate={navigateToQuestionNum}    
                navigatePrev={navigateToPrevQuestion}
                navigateNext={navigateToNextQuestion}      
            />
            <div className="mx-auto bg-slate-200 flex items-start justify-center align-middle pb-12 h-screen">

                {/* Quiz area */}
                <div className="relative p-8 bg-white flex flex-col rounded-md drop-shadow-lg mt-16 w-full max-w-screen-xl mr-4 ml-4 h-[87vh]">
                    <QuizDisplayed
                        text={text}
                        strict={strict}
                        macros={macros}
                        number={number}
                        content={content}
                        multipleChoices={multipleChoices}
                        questionsList={questionsList}
                        saveUserAnswer={saveUserAnswer}
                        numSelected={numSelected}
                    />

                    {/* Quiz navigation button group */}
                    <ButtonQuizNavGroup
                        navigatePrev={navigateToPrevQuestion}
                        navigateNext={navigateToNextQuestion}
                        numSelected={numSelected}
                        questionsList={questionsList}
                    />

                </div> {/*End of quiz area*/}

            </div>

      </main>
    )
}

export default QuizOngoing;