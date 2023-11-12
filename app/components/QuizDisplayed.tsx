'use client';

import React from 'react';
import { Spinner } from 'flowbite-react';
import Latex from 'react-latex-next'
/*
    Parent -> quiz/ongoing/[slug]/page.tsx
*/

interface Questions {
    number: number;
    content: string;
    multiple_choices: string[];
    userAnswer: string;
    isFlagged: string;
}

const QuizDisplayed = (props: any) => {
    const [text, setText] = React.useState<any>(null);
    const [strict, setStrict] = React.useState<any>(null);
    const [macros, setMacros] = React.useState<any>(null);
    const [number, setNumber] = React.useState<any>(null);
    const [content, setContent] = React.useState<any>(null);
    const [multipleChoices, setMultipleChoices] = React.useState<any>(null);
    const [questionsList, setQuestionsList] = React.useState<Questions[] | any> (props.questionsList);

    React.useEffect(() => {
        setText(props.text);
        setStrict(props.strict);
        setMacros(props.macros);
        setNumber(props.number);
        setContent(props.content);
        setMultipleChoices(props.multipleChoices);
        setQuestionsList(questionsList);
    }, [props]);

    React.useEffect(() => {
        console.log("Question List: ", questionsList);
    }, [props]);

    return (
        <>
        <p className="text-black font-medium text-md dark:text-white">
            <Latex strict={strict} macros={macros}>
                {content ? 
                (content)
                : ("Loading...")}
            </Latex>
        </p>

        <div className="flex flex-col mt-8">
            {multipleChoices ?
            (
                props.multipleChoices?.map((item: any, i: any) => {                    
                    return (
                        <div 
                            key={String(item).trim()+String(i)} 
                            className="flex items-center mb-4 mt-0 pl-4 border border-gray-200 rounded dark:border-gray-700"
                            onClick={() => props.saveUserAnswer(item, props.questionsList, props.numSelected)}
                        >
                            <input id={"option-"+String(i)} type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor={"option-"+String(i)} className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                <Latex strict={strict} macros={macros}>
                                    {item}
                                </Latex>
                            </label>
                        </div>
                    )
                })
            )
            : (
                <div className="text-center">
                    <Spinner aria-label="Center-aligned spinner example" />
                </div>
            )
            }
        </div>
        </>
    )
};

export default QuizDisplayed;