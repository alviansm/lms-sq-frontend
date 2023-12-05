'use client';

import QuizCard from './QuizCard';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opcaity: 0, x: 0, y: 20 },
};

const PopularQuiz = () => {
  const [isNavigating, setIsNavigating] = React.useState(false);

  const item = {
    id: '1',
    slug: 'strategic-leadership-illionis',
    title: 'Strategic Leadership',
    organizer: 'The University of Illionis at Urbana-Champaign',
    category: 'Spesialisasi Ketrampilan',
    image_url: '/images/dummy-quiz-thumbnail.jpg',
    organizer_logo_url: '/images/the-uni-of-illinois-uc.png',
    time: '60 menit',
    cooldown: '2 Kali dalam 1 hari',
    question_sum: '10 Pilihan Ganda dan 5 Isian Singkat',
    difficulty: 'Menengah',
    description: 'Serangkaian ujian pengetahuan kepemimpinan strategis. ',
  };

  const item2 = {
    id: '2',
    slug: 'precalculus-trigonometry',
    title: 'Precalculus: Trignometry',
    organizer: 'The University of Sydney',
    category: 'Ujian Akademik',
    image_url: '/images/trigonometry-intro-thumbnail.jpg',
    organizer_logo_url: '/images/the-uni-of-sydney.png',
    time: '90 menit',
    cooldown: '1 Kali dalam 1 hari',
    question_sum: '30 Pilihan Ganda dan 5 Isian Singkat',
    difficulty: 'Pemula',
    description:
      'Serangkaian ujian mengenai konsep trigonometri secara interaktif. Anda akan mendapatkan sertifikat dan analisis kelemahan beserta kelebihan Anda dalam mengerjakan ujian.',
  };

  return (
    <div className="mx-8 mt-4">
      {isNavigating ? (
        <div>Loading...</div>
      ) : (
        <AnimatePresence mode="wait" initial={true}>
          <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.4, type: 'easeInOut' }}
            style={{ position: 'relative' }}
          >
            <h4 className="text-xl tracking-tight text-gray-900 dark:text-white mb-4">
              Ujian Paling Populer
            </h4>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.4, type: 'easeInOut', delay: 0.2 }}
            style={{ position: 'relative' }}
          >
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
              <QuizCard item={item} />
              <QuizCard item={item2} />
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default PopularQuiz;
