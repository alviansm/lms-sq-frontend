'use client';

import React from 'react';
import { Card } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';

const QuizCard = ({item}: {item: any}) => {
  return (
    <>
      <Link
        href={{
          pathname: `/quiz/${encodeURIComponent(item.slug)}`,
          query: {
            title: item.title,
            organizer: item.organizer,
            time: item.time,
            cooldown: item.cooldown,
            question_sum: item.question_sum,
            difficulty: item.difficulty,
            description: item.description,
            organizer_logo_url: item.organizer_logo_url
          }
        }}
      >
          <Card
            imgAlt="Ilustrasi pengerjaan soal"
            imgSrc={item?.image_url}
            className='transform transition duration-500 hover:scale-110'
          >
              <div className='flex flex-row align-middle justify-start items-center'>
                  <Image src={item?.organizer_logo_url} width={32} height={32} alt="Logo" className='mr-2'/>
                  <p>{item?.organizer}</p>
              </div>
              <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item?.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                  {item?.category}
              </p>
          </Card>
      </Link>
    </>
  )
}

export default QuizCard;