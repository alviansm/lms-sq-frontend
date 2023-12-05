'use client';

import DefaultFooter from '../components/DefaultFooter';
import DefaultNavbar from '../components/DefaultNavbar';
import TableEditQuizList from '../components/TableEditQuizList';

import Link from 'next/link';
import { Button } from 'flowbite-react';
import { MdQuiz } from 'react-icons/md';
import { FaUniversity } from 'react-icons/fa';

const CreateContent = () => {
  return (
    <div>
      {/* Navbar */}
      <DefaultNavbar activePage={'createQuiz'} />

      {/* Content*/}
      <div className="mx-auto bg-slate-200 flex items-start justify-center align-middle min-h-screen px-4 pb-12">
        <div className="p-8 bg-white min-w-full flex flex-col rounded-md drop-shadow-lg mt-20">
          <div className="flex flex-row justify-between">
            <div>
              <h4 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Organisir Kelas dan Kuis Anda
              </h4>
              <p className="mt-2 mb-4 text-sm text-slate-800">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link href="/add/quiz">
                <Button>
                  <MdQuiz className="mr-2 h-5 w-5" />
                  Buat Kuis
                </Button>
              </Link>
              <Button>
                <FaUniversity className="mr-2 h-5 w-5" />
                Buat Kelas
              </Button>
            </div>
          </div>

          <h4 className="text-xl font-bold tracking-tight text-slate-600 dark:text-white">
            Kuis
          </h4>
          <TableEditQuizList />

          <h4 className="mt-4 text-xl font-bold tracking-tight text-slate-600 dark:text-white">
            Kelas
          </h4>
          <p className="text-slate-800">Anda tidak mengorganisir kelas.</p>
        </div>
      </div>

      <DefaultFooter />
    </div>
  );
};

export default CreateContent;
