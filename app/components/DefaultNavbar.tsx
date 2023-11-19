'use client';

import { Avatar, Dropdown, Button, Navbar } from 'flowbite-react';
import Link from 'next/link';

type activePageProps = {
  activePage: string
}

const CreateQuizButton = () => {
  return (
    <div className="flex md:order-2 gap-4">      
      <Dropdown
        label={<Avatar alt="User settings" img="/images/people/profile-picture-5.jpg" rounded />}
        arrowIcon={false}
        inline
      >
        <Dropdown.Header>
          <span className="block text-sm">
            Zhang Zhongchang
          </span>
          <span className="block truncate text-sm font-medium">zhangzhongchang@sq.com</span>
        </Dropdown.Header>
        <Dropdown.Item>Dasbor</Dropdown.Item>
        <Dropdown.Item>Pengaturan Akun</Dropdown.Item>
        <Dropdown.Item>Pendapatan</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Keluar Akun</Dropdown.Item>
      </Dropdown>

      <Link href={"/add"}>
        <Button outline>Buat Soal</Button>
      </Link>
      <Navbar.Toggle />
    </div>
  )
}

export default function DefaultNavbar(props: activePageProps) {
  return (
    <Navbar fluid rounded className='fixed w-full z-20 top-0 left-0 mb-20'>
      <Navbar.Brand>
        <svg width="48px" height="48px" viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M625.6 516.8l19.2 81.6 104-38.4 4.8 14.4-110.4 40L560 824l-14.4-6.4 83.2-203.2-169.6-25.6 64 217.6c3.2 8-1.6 17.6-11.2 19.2s-17.6-1.6-19.2-11.2l-68.8-232-153.6-22.4 1.6-16 145.6 22.4-28.8-96-116.8 59.2-14.4-28.8 129.6-65.6L480 217.6 254.4 499.2l-12.8-9.6L480 190.4l9.6 6.4 27.2 11.2-96 227.2 177.6 41.6-64-268.8 16-3.2 67.2 278.4 136 32c8 1.6 14.4 11.2 11.2 19.2-1.6 8-11.2 14.4-19.2 11.2l-120-28.8zM608 512l-185.6-43.2 30.4 102.4 176 25.6L608 512z m-46.4-313.6l12.8-9.6L784 484.8l-12.8 9.6-209.6-296zM768 588.8l12.8 9.6-201.6 240-12.8-9.6 201.6-240z m-278.4 240l-11.2 11.2-232-243.2 11.2-11.2 232 243.2z" fill="#050D42" /><path d="M400 448m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="#2F4BFF" /><path d="M640 608m-56 0a56 56 0 1 0 112 0 56 56 0 1 0-112 0Z" fill="#2F4BFF" /><path d="M208 624c-44.8 0-80-35.2-80-80s35.2-80 80-80 80 35.2 80 80-35.2 80-80 80z m0-32c27.2 0 48-20.8 48-48s-20.8-48-48-48-48 20.8-48 48 20.8 48 48 48zM528 960c-44.8 0-80-35.2-80-80s35.2-80 80-80 80 35.2 80 80-35.2 80-80 80z m0-32c27.2 0 48-20.8 48-48s-20.8-48-48-48-48 20.8-48 48 20.8 48 48 48zM528 224c-44.8 0-80-35.2-80-80s35.2-80 80-80 80 35.2 80 80-35.2 80-80 80z m0-32c27.2 0 48-20.8 48-48s-20.8-48-48-48-48 20.8-48 48 20.8 48 48 48zM816 624c-44.8 0-80-35.2-80-80s35.2-80 80-80 80 35.2 80 80-35.2 80-80 80z m0-32c27.2 0 48-20.8 48-48s-20.8-48-48-48-48 20.8-48 48 20.8 48 48 48z" fill="#2F4BFF" /></svg>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Simple Quiz</span>
      </Navbar.Brand>      
      { // render create quiz button 
        (props.activePage=="createQuiz")
        ? <></>
        : <CreateQuizButton/>        
      }
      {
        (props.activePage=="createQuiz")
        ? <Navbar.Toggle />
        : <></>
      }
      <Navbar.Collapse>
        <Navbar.Link href="/" active={props.activePage=="home" ? true : false}>
          <span className='text-xl transform transition duration-500 hover:scale-110'>Beranda</span>
        </Navbar.Link>
        <Navbar.Link href="/mypractices" active={props.activePage=="mypractice" ? true : false}>
          <span className='text-xl transform transition duration-500 hover:scale-110'>Latihanku</span>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}