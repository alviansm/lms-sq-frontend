'use client';

import React from "react";

import DefaultFooter from "../../components/DefaultFooter";
import DefaultNavbar from "../../components/DefaultNavbar";

const QuizOngoing = () => {  

    return (
        <main>
            <DefaultNavbar
                activePage=""
            />
            <div className="mx-auto bg-slate-200 flex items-start justify-center align-middle min-h-screen pb-12">
                <div className="p-8 bg-white max-w-3xl flex flex-col rounded-md drop-shadow-lg mt-20">
                    <h4 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Nothing to be found here!
                    </h4>                    
                </div>
            </div>

            <DefaultFooter/>
      </main>
    )
}

export default QuizOngoing;