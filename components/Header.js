import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import logo from '../public/tengallon.png';

export const Header = () => {
  const router = useRouter();
  return <>
    <Head>
      <title>Ten Gallon Technology</title>
      <meta
        name="description"
        content="A software company based in Dublin GA specializing in web development and data analytics"
      />
      <link rel="canonical" href="https://www.tengallon.tech/" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <link rel="icon" href="/tengallon.png" />
    </Head>

    <Navbar bg="dark" variant="dark" expand="md">
      <div className='p-1'>
        <Image src={logo}  width={100} alt="TenGallon Logo" />
      </div>

      <Navbar.Toggle
        className="navbar-toggler-right"
        aria-controls="basic-navbar-nav"
      />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="text-end me-2">
          <Link
            href="#services"
            passHref
            className={
              router.pathname.includes('services')
                ? 'nav-item nav-link  text-primary'
                : 'nav-item nav-link'
            }>
            
              services
            
          </Link>

          <Link
            href="#contact"
            passHref
            className={
              router.pathname.includes('contact')
                ? 'nav-item nav-link  text-primary'
                : 'nav-item nav-link'
            }>
            
              contact
            
          </Link>

          <Link
            href="#about"
            passHref
            className={
              router.pathname.includes('#about')
                ? 'nav-item nav-link  text-primary'
                : 'nav-item nav-link'
            }>
            
              about
            
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>;
};
