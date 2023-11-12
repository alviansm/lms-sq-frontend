'use client';

import React from "react";
import { Navbar, Button, Modal, Dropdown, Spinner } from 'flowbite-react';
import { ImExit } from "react-icons/im";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useRouter } from "next/navigation";

interface Questions {
  number: number;
  content: string;
  multiple_choices: string[];
  userAnswer: string;
  isFlagged: string;
}

const CreateQuizButton: React.FC<any> = ({numSelected, questions2, navigate, navigateNext, navigatePrev} : {numSelected: number, questions2: Questions[] | any, navigate: Function, navigateNext: Function, navigatePrev: Function}) => {
  // organic
  const [openModal, setOpenModal] = React.useState<string | undefined>();
  const [openModalExit, setOpenModalExit] = React.useState(false);
  const properties = { openModal, setOpenModal };  
  const [seconds, setSeconds] = React.useState(60);
  const router = useRouter();

  // inherited
  const [userNumSelected, setUserNumSelected] = React.useState(numSelected+1);
  const [inheritedQuestions, setInheritedQuestions] = React.useState<Questions | any>(null);

  React.useEffect(() => {
    setUserNumSelected(numSelected+1);
    setInheritedQuestions(questions2);
  }, [numSelected, questions2]);

  React.useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds(-1)
    }
  })

  const exitQuiz = (bool: boolean) => {
    router.push('/', {scroll: false});
    setOpenModalExit(bool);
  }

    return (
      <div className="flex md:order-2">

          <Button size="sm" outline className='mr-2'>
            {seconds}
          </Button>

          <Button size="sm" outline onClick={() => properties.setOpenModal('dismissible')}>
            {userNumSelected} dari {questions2?questions2.length:"x"} soal
          </Button>

          <Modal show={properties.openModal === 'dismissible'} onClose={() => properties.setOpenModal(undefined)}>
            <Modal.Header className="text-sm font-semibold text-slate-800">
              <Dropdown className="text-sm font-semibold text-slate-800" label="Opsi" inline>
                <Dropdown.Item icon={ImExit} onClick={() => setOpenModalExit(true)}>
                  Keluar
                </Dropdown.Item>
              </Dropdown>
              
              <Modal show={openModalExit} size="md" onClose={() => setOpenModalExit(false)} popup>
                <Modal.Header />
                <Modal.Body>
                  <div className="text-center">
                    <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                      Apakah Anda benar-benar ingin meninggalkan proses ini?
                    </h3>
                    <div className="flex justify-center gap-4">
                      {/* Temporarily back to homepage */}
                      <Button color="failure" onClick={() => exitQuiz(false)}>
                        {"Ya"}
                      </Button>
                      <Button color="gray" onClick={() => setOpenModalExit(false)}>
                        Tidak
                      </Button>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>

              
            </Modal.Header>
            <Modal.Body>
              <div className="grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-2">
                
                {
                  inheritedQuestions ? 
                  (
                    inheritedQuestions.map((item: any) => {
                      return (
                        <Button
                          className="relative inline-flex items-center px-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
                          key={item["number"]} 
                          disabled={
                            (parseInt(item["number"]) == userNumSelected)
                          ? true
                          : false
                          }

                          onClick={() => navigate(parseInt(item["number"])-1)}
                        >
                          {item["number"]}
                          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-blue-500 border-2 border-white rounded-full -top-2 -end-2 -right-2 dark:border-gray-900">
                            <svg className="w-2.5 h-2.5 text-blue-100 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                            </svg>
                          </div>
                        </Button>
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
            </Modal.Body>
            <Modal.Footer className="right-0">
              <Button color="success" onClick={() => properties.setOpenModal(undefined)}>
                Selesai
              </Button>
              <Button onClick={() => properties.setOpenModal(undefined)}>
                Lanjut Kerjakan Soal
              </Button>
              <div>
                <p className="font-bold text-sm">
                  <em><span className="text-red-900">Kurang 4</span> soal</em>
                </p>
              </div>
            </Modal.Footer>
          </Modal> {/* End of modal*/}

      </div>
    )
}

export default function QuizNavbar({numSelected, questions, navigate, navigatePrev, navigateNext} : {numSelected: number, questions: Questions[] | any, navigate: Function, navigatePrev: Function, navigateNext: Function}) {
  const [inheritedQuestions, setInheritedQuestions] = React.useState<Questions | any>(null);
  const [endUserNumSelected, setEndUserNumSelected] = React.useState(numSelected);

  React.useEffect(() => {
    setInheritedQuestions(questions);
    setEndUserNumSelected(numSelected);
    console.log("Question Number: ", numSelected);
  }, [numSelected]);
  
  return (
    <Navbar fluid rounded className='fixed w-full z-20 top-0 left-0 mb-20 bg-slate-200'>
      <Navbar.Brand>
        <svg width="32px" height="32px" viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M625.6 516.8l19.2 81.6 104-38.4 4.8 14.4-110.4 40L560 824l-14.4-6.4 83.2-203.2-169.6-25.6 64 217.6c3.2 8-1.6 17.6-11.2 19.2s-17.6-1.6-19.2-11.2l-68.8-232-153.6-22.4 1.6-16 145.6 22.4-28.8-96-116.8 59.2-14.4-28.8 129.6-65.6L480 217.6 254.4 499.2l-12.8-9.6L480 190.4l9.6 6.4 27.2 11.2-96 227.2 177.6 41.6-64-268.8 16-3.2 67.2 278.4 136 32c8 1.6 14.4 11.2 11.2 19.2-1.6 8-11.2 14.4-19.2 11.2l-120-28.8zM608 512l-185.6-43.2 30.4 102.4 176 25.6L608 512z m-46.4-313.6l12.8-9.6L784 484.8l-12.8 9.6-209.6-296zM768 588.8l12.8 9.6-201.6 240-12.8-9.6 201.6-240z m-278.4 240l-11.2 11.2-232-243.2 11.2-11.2 232 243.2z" fill="#050D42" /><path d="M400 448m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="#2F4BFF" /><path d="M640 608m-56 0a56 56 0 1 0 112 0 56 56 0 1 0-112 0Z" fill="#2F4BFF" /><path d="M208 624c-44.8 0-80-35.2-80-80s35.2-80 80-80 80 35.2 80 80-35.2 80-80 80z m0-32c27.2 0 48-20.8 48-48s-20.8-48-48-48-48 20.8-48 48 20.8 48 48 48zM528 960c-44.8 0-80-35.2-80-80s35.2-80 80-80 80 35.2 80 80-35.2 80-80 80z m0-32c27.2 0 48-20.8 48-48s-20.8-48-48-48-48 20.8-48 48 20.8 48 48 48zM528 224c-44.8 0-80-35.2-80-80s35.2-80 80-80 80 35.2 80 80-35.2 80-80 80z m0-32c27.2 0 48-20.8 48-48s-20.8-48-48-48-48 20.8-48 48 20.8 48 48 48zM816 624c-44.8 0-80-35.2-80-80s35.2-80 80-80 80 35.2 80 80-35.2 80-80 80z m0-32c27.2 0 48-20.8 48-48s-20.8-48-48-48-48 20.8-48 48 20.8 48 48 48z" fill="#2F4BFF" /></svg>
        <span className="self-center whitespace-nowrap text-sm font-semibold dark:text-white">Simple Quiz</span>
      </Navbar.Brand>      
      <CreateQuizButton
        numSelected={endUserNumSelected}
        questions2={inheritedQuestions}
        navigate={navigate}
        navigateNext={navigateNext}
        navigatePrev={navigatePrev}
      />  
    </Navbar>
  )
}