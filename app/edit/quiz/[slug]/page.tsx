'use client';

import React from 'react';
import { Button, TextInput } from 'flowbite-react';
import { IoIosAddCircle } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { FaSave } from "react-icons/fa";
import { MdDescription } from "react-icons/md";

import DefaultNavbar from '../../../components/DefaultNavbar';
import DefaultFooter from '../../../components/DefaultFooter';
import TableEditQuestions from '../../../components/TableEditQuestions';

// modal elements
import { Label, Modal, Textarea, Select } from 'flowbite-react';
import { useState } from 'react';

export default function EditSpecificQuiz({params}: {params: {slug: string}}) {
    const [showEditTitle, setShowEditTitle] = React.useState(false);

    const [title, setTitle] = React.useState("Precalculus: Trigonometry");
    const [description, setDescription] = React.useState("");
    const [organizer, setOrganizer] = React.useState("Sumbul");
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
                                            {title + " " + params.slug}
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
                            <Modal show={openModal} size="2xl" onClose={onCloseModal} className="fixed top-0 left-0 right-0 z-20 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                                <Modal.Header>
                                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">{title}</h3>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="space-y-6">                                
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="description" value="Description" />
                                            </div>
                                            <Textarea 
                                                id="description" placeholder="Put a description for your quiz page..." 
                                                required rows={4} 
                                                value={description}
                                                onChange={(event) => setDescription(event.target.value)}
                                            />
                                        </div>   
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="organizer" value="Organizer" />
                                            </div>
                                            <TextInput
                                                id="organizer"
                                                placeholder="You/Your Organization"
                                                value={organizer}
                                                onChange={(event) => setDescription(event.target.value)}
                                                required
                                            />
                                        </div>   
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="time" value="time" />
                                            </div>
                                            <Select 
                                                id="time"
                                                required
                                            >
                                                <option>5 Menit</option>
                                                <option>10 Menit</option>
                                                <option>15 Menit</option>
                                                <option>20 Menit</option>
                                                <option>25 Menit</option>
                                                <option>30 Menit</option>
                                                <option>35 Menit</option>
                                                <option>40 Menit</option>
                                                <option>45 Menit</option>
                                                <option>50 Menit</option>
                                                <option>55 Menit</option>
                                                <option>60 Menit</option>
                                                <option>90 Menit</option>
                                                <option>120 Menit</option>
                                            </Select>
                                        </div>    
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="cooldown" value="cooldown" />
                                            </div>
                                            <Select 
                                                id="cooldown"
                                                required
                                            >
                                                <option>1 Kali Sehari</option>
                                                <option>2 Kali Sehari</option>
                                                <option>3 Kali Sehari</option>
                                                <option>4 Kali Sehari</option>
                                                <option>1 Kali</option>
                                                <option>2 Kali</option>
                                            </Select>
                                        </div>                            
                                        
                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <div className="w-full">
                                        <Button>
                                            <FaSave className="h-5 w-5"/>
                                        </Button>
                                    </div>
                                    <div className="flex justify-between w-full text-sm font-medium text-gray-500 dark:text-gray-300">
                                        Butuh bantuan?&nbsp;
                                        <a href="#" className="text-cyan-700 hover:underline dark:text-cyan-500">
                                            Baca manual kami
                                        </a>
                                    </div>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                    
                    <TableEditQuestions/>

                </div>
            </div>

            <DefaultFooter/>

        </div>
    );
}