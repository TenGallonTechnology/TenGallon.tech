import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import logo from '../public/pbits.png';

export const Header = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>PBITS</title>
        <meta
          name="description"
          content="A software company based in Dublin GA specializing in web development and data analytics"
        />
        <link rel="canonical" href="https://www.pbits.online/" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <link rel="icon" href="/pbits.ico" />
      </Head>

      <Navbar bg="dark" variant="dark" expand="md">
        <div style={{ width: '65px', marginLeft: '10px' }}>
          <Image src={logo} alt="PBITS" />
        </div>

        <Navbar.Toggle
          className="navbar-toggler-right"
          aria-controls="basic-navbar-nav"
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="text-end me-2">
            <Link href="#services" passHref>
              <a
                className={
                  router.pathname.includes('services')
                    ? 'nav-item nav-link  text-primary'
                    : 'nav-item nav-link'
                }
              >
                services
              </a>
            </Link>

            <Link href="#contact" passHref>
              <a
                className={
                  router.pathname.includes('contact')
                    ? 'nav-item nav-link  text-primary'
                    : 'nav-item nav-link'
                }
              >
                contact
              </a>
            </Link>

            <Link href="#about" passHref>
              <a
                className={
                  router.pathname.includes('#about')
                    ? 'nav-item nav-link  text-primary'
                    : 'nav-item nav-link'
                }
              >
                about
              </a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
