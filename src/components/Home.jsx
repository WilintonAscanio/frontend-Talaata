import React, { useEffect } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { FiUserPlus } from 'react-icons/fi'
import { AiOutlineFileSearch } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'

const Home = () => {
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/createuser')

    }, [])

    return (
        <div className='home'>
            <header>
                <figure>
                    <img src="https://static.wixstatic.com/media/097be4_f1fd6d0e9e3742b08973847fcfe16b24~mv2.png/v1/fill/w_80,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/097be4_f1fd6d0e9e3742b08973847fcfe16b24~mv2.png" alt="icon" />

                    <small>WILINTON ASCANIO TEST</small>

                </figure>
                <nav>
                    <ul>
                        <NavLink to="/createuser" className='link'><FiUserPlus />Agregar usuario</NavLink>
                        <NavLink to="/getuser" className='link'><AiOutlineFileSearch />Buscar usuario</NavLink>
                    </ul>

                </nav>
            </header>
            <Outlet />

            <footer className='footer'>
                <a href='https://www.linkedin.com/in/wilintonascanio/' target='_blank'><BsLinkedin /></a>
                <a href='https://github.com/WilintonAscanio' target='_blank'><BsGithub /></a>
                <a href='https://www.instagram.com/wilintonascanio12/' target='_blank'><AiFillInstagram /></a>
                <a href='mailto:wilintonascanio12@hotmail.com' target='_blank'><MdEmail /></a>
            </footer>
        </div>
    )
}

export default Home