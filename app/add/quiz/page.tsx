'use client';

import DefaultNavbar from '../../components/DefaultNavbar';
import DefaultFooter from '../../components/DefaultFooter';
import TableEditQuestions from '../../components/TableEditQuestions';

import React from 'react';
import { Button, Label, TextInput } from 'flowbite-react';
import { IoIosAddCircle } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { FaSave } from "react-icons/fa";
import { MdDescription } from "react-icons/md";

import ReactQuill from "react-quill";

const modules = {
    toolbar: [
        ["bold", "italic"],
        ["link", "blockquote", "code", "image"],
        [
            {
                list: "ordered",
            },
            {
                list: "bullet",
            },
        ],
    ],
};

type quizData = {
    title: string,
    description: string,
    organizer: string,
    time: string,
    cooldown: string,
    questionNum: string,
    difficulty: string,
    token: string,    
};

const QuillPopup = () => {
    const [ReactQuillText, setReactQuillText] = React.useState("");
    const [title, setTitle] = React.useState("");

    return (
        <div>
            <form>
                <input
                    className="w-full border-2 mb-2 pt-2 mt-8"
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <ReactQuill 
                    value={ReactQuillText} onChange={(value) => setReactQuillText(value)}
                    theme="snow"
                    className="w-full m-auto shadow-xl"
                    modules={modules}
                />
            </form>

        </div>  
    )
}

const CreateQuiz = () => {
    const [showEditTitle, setShowEditTitle] = React.useState(false);

    const [title, setTitle] = React.useState("Precalculus: Trigonometry");
    const [description, setDescription] = React.useState("");
    const [organizer, setOrganizer] = React.useState("");
    const [time, setTime] = React.useState("");
    const [cooldown, setCooldown] = React.useState("");
    const [questionNum, setQuestionNum] = React.useState("");
    const [difficulty, setDifficulty] = React.useState("");
    const [token, setToken] = React.useState("");    

    return (
        <div>
        {/* Navbar */}
        <DefaultNavbar
            activePage={"createQuiz"}
        />

        {/* Content*/}
        <div className="mx-auto bg-slate-200 flex items-start justify-center align-middle min-h-screen px-4 pb-12">
            <div className="p-8 bg-white min-w-full flex flex-col rounded-md drop-shadow-lg mt-20">
                <div className="flex flex-row justify-between mb-4">
                    <div>
                        {
                            showEditTitle ?
                            (
                                <div className='flex flex-row items-center align-middle justify-center'>
                                    <TextInput 
                                        onChange={(event) => setTitle(event.target.value)} 
                                        id="title" 
                                        className="text-xl font-bold tracking-tight text-gray-900 dark:text-white bg-transparent p-0 m-0 outline-none border-none" 
                                        placeholder={title}                                        
                                    />
                                    <Button onClick={() => setShowEditTitle(!showEditTitle)} className="outline-none bg-transparent hover:bg-sky-100/60 ml-4" size="sm">
                                        <FaSave color="blue" size={24} />
                                    </Button>
                                </div>
                            )
                            : (
                                <div className='flex flex-row items-center align-middle justify-center'>
                                    <h4 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        {title}
                                    </h4>
                                    <Button onClick={() => setShowEditTitle(!showEditTitle)} className="outline-none bg-transparent hover:bg-sky-100/60 ml-4" size="sm">
                                        <AiFillEdit color="blue" size={24} />
                                    </Button>
                                </div>
                            )
                        }                           
                    </div>
                    <div className="flex flex-wrap gap-2">
                    <Button className='p-2'>
                        <IoIosAddCircle size={16} />
                    </Button>
                    <Button className='p-2'>
                        <MdDescription size={16} />
                    </Button>
                    <Button className="p-2" color="failure">
                        <FaTrashAlt size={16} />
                    </Button>
                    </div>
                </div>
                
                <TableEditQuestions/>

            </div>
        </div>

        <DefaultFooter/>

    </div>
          
    )
}

export default CreateQuiz;