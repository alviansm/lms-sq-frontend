'use client';

import { Footer } from 'flowbite-react';

export default function DefaultFooter() {
  return (
    <Footer container className='mb-0 pb-4 bottom-0 left-0'>
      <Footer.Copyright
        by="SimpleQuiz™"
        href="/"
        year={2023}
      />
      <Footer.LinkGroup>
        <Footer.Link href="/about">
          Tentang Kami
        </Footer.Link>
        <Footer.Link href="/privacy-policy">
          Kebijakan Privasi
        </Footer.Link>
        <Footer.Link href="/licensing">
          Lisensi
        </Footer.Link>
        <Footer.Link href="/contact">
          Kontak
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  )
}


