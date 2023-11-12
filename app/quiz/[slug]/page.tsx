"use client";

import React from "react";
import Image from "next/image";

import ButtonStartQuiz from "../../components/ButtonStartQuiz";
import DefaultFooter from "../../components/DefaultFooter";
import DefaultNavbar from "../../components/DefaultNavbar";
import QuizInformation from "../../components/QuizInformation";

const QuizStart = (props: any) => {  
    return (
        <main>
            <DefaultNavbar
                activePage=""
            />
            <div className="mx-auto bg-slate-200 flex items-start justify-center align-middle min-h-screen pb-12">
                <div className="p-8 bg-white max-w-3xl flex flex-col rounded-md drop-shadow-lg mt-20">
                    <h4 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {props.searchParams['title']}
                    </h4>
                    <div className='flex flex-row align-middle justify-start items-center mt-2'>
                        <Image src={props.searchParams['organizer_logo_url']} width={32} height={32} alt="Logo" className='mr-2'/>
                        <p>
                            {props.searchParams['organizer']}
                        </p>
                    </div>
                    <p className="mt-2 text-sm text-slate-800">
                        {props.searchParams['description']}
                    </p>
                    <QuizInformation
                        time={props.searchParams['time']}
                        cooldown={props.searchParams['cooldown']}
                        question_sum={props.searchParams['question_sum']}
                        difficulty={props.searchParams['difficulty']}
                    />
                    <ButtonStartQuiz/>
                </div>
            </div>

            <DefaultFooter/>
      </main>
    )
}

export default QuizStart;