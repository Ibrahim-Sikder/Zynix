'use client'

import './Header.css'


import { useState } from 'react';
import TopBar from './TopBar';
import Link from 'next/link';
import { HiOutlineChevronDown, HiOutlineGlobeAlt, HiOutlineSearch } from 'react-icons/hi';
import { BsPerson } from 'react-icons/bs';
import { CgShoppingCart } from 'react-icons/cg';
import { MdExpandMore } from 'react-icons/md';
import { StaticGenerationAsyncStorage } from 'next/dist/client/components/static-generation-async-storage.external';
import LogoutBtn from '@/components/LogoutBtn';
import Container from '@/ui/Container';

type sessionProps = {
  user: {
    name: string,
    email: string,
    image: string,
  }
}

const Header = ({ session }: { session: sessionProps }) => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const handleToggle = () => {
    setToggleMenu((toggleMenu) => !toggleMenu)
  }



  return (
    <div>
      <div className='navBarWrap'>
       <div>
       <TopBar />
        <div className="">
          <Container className=''>
            <div className="header">

              {/* mobile toggle menu  */}
              <div className='hideBar' onClick={handleToggle}>
                <div className={toggleMenu ? `bar` : ` bar activeMenuBar`}>
                  <span className={toggleMenu ? ` ` : `bar1`}></span>
                  <span className={toggleMenu ? ` ` : `bar2`}></span>
                  <span className={toggleMenu ? ` ` : `bar3`}></span>
                </div>
              </div>
              <Link href='/'> <h3 className="text-4xl font-bold">Zynix</h3></Link>
              <div className='search'>
                <input type="text" placeholder='Search in Zynix' autoComplete='off' />
                <button className='searchIconWrap'><HiOutlineSearch className='searchIcon' /> </button>
              </div>

              <div className="flex items-center space-x-3">
                <div className="onlinShopping">
                  <Link href='/my-account'> <BsPerson className='personIcon' /></Link>
                </div>
                <div className='flex items-center ml-3'>

                  {
                    session?.user ? (
                      <LogoutBtn />
                    ) : (
                     <Link href='/login'> <button>Login</button></Link>

                    )

                  }
                </div>
                <div className="flex items-center ">
                  <HiOutlineGlobeAlt className='mr-1 personIcon'/>
                  <span>BN</span>
                  <HiOutlineChevronDown/>
                </div>
                <div className="cart">
                <div className="shoppingCart">
                      <CgShoppingCart className='shoopingCartIcon' />
                      <h6 className="price">0</h6>
                    </div>

                </div>
              </div>
            </div>
           
          </Container>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Header;