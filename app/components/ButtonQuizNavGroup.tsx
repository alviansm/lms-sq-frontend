import { Button } from 'flowbite-react';
import { HiFlag, HiArrowRight, HiArrowLeft } from 'react-icons/hi';
import React from 'react';

interface Questions {
    number: number;
    content: string;
    multiple_choices: string[];
    userAnswer: string;
    isFlagged: string;
}

export default function ButtonQuizNavGroup({navigateNext, navigatePrev, numSelected, questionsList}: {navigateNext: Function, navigatePrev: Function, numSelected: number, questionsList: Questions[] | any}) {    
    React.useEffect(() => {

    }, []);

    return (
        <div className="absolute bottom-[1rem] left-[42%] inline-flex rounded-md shadow-sm items-center justify-center" role="group">
                        
            <Button.Group>
                <Button 
                    color="gray"
                    onClick={() => navigatePrev(numSelected, questionsList)}
                >
                    <HiArrowLeft className="mr-3 h-4 w-4" />
                </Button>
                <Button color="gray">
                    <HiFlag className="mr-3 h-4 w-4" />
                    <p className="text-slate-600 text-xs">
                        Tandai
                    </p>
                </Button>
                <Button 
                    color="gray"
                    onClick={() => navigateNext(numSelected, questionsList)}    
                >
                    <HiArrowRight className="mr-3 h-4 w-4" />
                </Button>
            </Button.Group>

        </div>
    )
}