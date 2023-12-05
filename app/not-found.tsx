'use client';

import DefaultNavbar from './components/DefaultNavbar';
import DefaultFooter from './components/DefaultFooter';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const variants = {
  hidden: { x: 0, y: -20 },
  enter: { x: 0, y: 0 },
  exit: { x: 0, y: -20 },
};

export default function NotFound() {
  return (
    <div>
      {/* Navbar */}
      <DefaultNavbar activePage="" />

      {/* Content*/}
      <div className="mx-auto bg-slate-200 flex items-start justify-center align-middle min-h-[90vh] px-4 pb-12">
        <div className="flex flex-col justify-center align-middle mt-[7rem] items-center">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ ease: 'easeInOut', duration: 3, repeat: Infinity }}
            style={{ position: 'relative' }}
          >
            <Image
              src={'/images/milk.svg'}
              alt="Not found image"
              width={312}
              height={312}
            />
          </motion.div>
          <h3 className="font-bold text-slate-800 text-2xl text-center mt-4">
            Error: 404
          </h3>
          <p className="font-semibold text-slate-600 text-lg text-center">
            Halaman tidak tersedia, silahkan kembali ke{' '}
            <Link href="/">
              <span className="text-blue-900 hover:text-slate-800">
                Beranda
              </span>
            </Link>
          </p>
        </div>
      </div>

      <DefaultFooter />
    </div>
  );
}
