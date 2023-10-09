import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { FiUserPlus } from 'react-icons/fi'
import { AiOutlineFileSearch } from 'react-icons/ai'

const Home = () => {
    return (
        <article className='home'>
            <header>
                <figure>
                    <img src="https://static.wixstatic.com/media/097be4_8731c6a9e9b4428a8d900156b2b5bbb3~mv2.png/v1/crop/x_0,y_10,w_1115,h_945/fill/w_109,h_93,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/097be4_8731c6a9e9b4428a8d900156b2b5bbb3~mv2.png" alt="icon" />

                    <small>WILINTON ASCANIO TEST</small>

                </figure>
                <nav>
                    <ul>
                        <NavLink to="/createuser" className='link'><FiUserPlus />Agregar usuario</NavLink>
                        <NavLink to="/getuser" className='link'><AiOutlineFileSearch />Buscar usuario</NavLink>
                    </ul>

                </nav>
            </header>
            <main>
                <Outlet />

            </main>
        </article>
    )
}

export default Home