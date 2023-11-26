'use client';

import DefaultNavbar from '../../components/DefaultNavbar';
import DefaultFooter from '../../components/DefaultFooter';
import TableEditQuestions from '../../components/TableEditQuestions';

import React from 'react';
import { Button, TextInput } from 'flowbite-react';
import { IoIosAddCircle } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { FaSave } from "react-icons/fa";
import { MdDescription } from "react-icons/md";

// modal elements
import { Checkbox, Label, Modal } from 'flowbite-react';
import { useState } from 'react';

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

    const [openModal, setOpenModal] = useState(false);

    const onCloseModal = () => {
        setOpenModal(false);
    }

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
                        <Button className='p-2' onClick={() => setOpenModal(true)}>
                            <MdDescription size={16} />
                        </Button>
                        <Button className="p-2" color="failure">
                            <FaTrashAlt size={16} />
                        </Button>

                        {/* Modal for editing quiz properties */}
                        <Modal show={openModal} size="xl" onClose={onCloseModal} popup>
                            <Modal.Header />
                            <Modal.Body>
                            <div className="space-y-6">
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white">{title}</h3>
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="description" value="Description" />
                                    </div>
                                    <TextInput
                                        id="description"
                                        placeholder="lorem ipsum dolor"
                                        value={description}
                                        onChange={(event) => setDescription(event.target.value)}
                                        required
                                    />
                                </div>   
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="description" value="Description" />
                                    </div>
                                    <TextInput
                                        id="description"
                                        placeholder="lorem ipsum dolor"
                                        value={description}
                                        onChange={(event) => setDescription(event.target.value)}
                                        required
                                    />
                                </div>   
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="description" value="Description" />
                                    </div>
                                    <TextInput
                                        id="description"
                                        placeholder="lorem ipsum dolor"
                                        value={description}
                                        onChange={(event) => setDescription(event.target.value)}
                                        required
                                    />
                                </div>                                
                                <div className="w-full">
                                    <Button>
                                        <FaSave className="h-5 w-5"/>
                                    </Button>
                                </div>
                                <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                                    Butuh bantuan?&nbsp;
                                    <a href="#" className="text-cyan-700 hover:underline dark:text-cyan-500">
                                        Baca manual kami
                                    </a>
                                </div>
                            </div>
                            </Modal.Body>
                        </Modal>
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