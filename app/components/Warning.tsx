'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opcaity: 0, x: 0, y: 20 },
};

const Warning = () => {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <div className="flex justify-end mx-8">
        <p>
          Tujuan belajar Anda masih <b>belum ditetapkan</b> •{' '}
        </p>
        <Link href={'/'}>
          <span className="text-blue-600">Tetapkan sekarang</span>
        </Link>
      </div>
    </motion.div>
  );
};

export default Warning;
