import React, { useState, useEffect } from 'react';
import styles from './navbar.module.scss';
import { HashLink } from 'react-router-hash-link';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import logo from './../../assets/NIT_Durgapur_Logo.svg';
import { Link } from 'react-router-dom';

const SchoolNavbar = () => {
    
    const [isSchool, setIsSchool] = useState(false);
    const [isAdmission, setIsAdmission] = useState(false);
    const [isAcademics, setIsAcademics] = useState(false);
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 950);

    const toggleSideMenu = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
        if (window.innerWidth > 768) {
            setSidebarOpen(false);
        }
    };

    useEffect(() => {
        if (isSidebarOpen && isMobile) {
            console.log('Triggered')
            document.body.classList.add('lock-scroll');
        } else {
            document.body.classList.remove('lock-scroll');
        }
    }, [isSidebarOpen, isMobile]);


    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Dropdown toggle for mobile
    const handleDropdownClick = (dropdownSetter, isDropdownOpen) => {
        if (isMobile) {
            dropdownSetter(!isDropdownOpen);
        }
    };

    return (
        <div className={styles.snavbar}>
            {/* Logo Section */}
            <div className={styles.schooldetails}>
                <div className={styles.school_logo}>
                    <img src={logo} alt="school logo" className={styles.slogo} />
                </div>
                <div className={styles.sname}>
                    <h3>SAI CELL</h3>
                    <p>Established : 2001</p>
                </div>
            </div>

            {/* Main Navigation */}
            <div className={styles.snav}>
                <li><HashLink smooth to='/' className={styles.salumniLink}>Home</HashLink></li>
                <li><HashLink smooth to='/about' className={styles.salumniLink}>About SAIC</HashLink></li>
                <li
                    onMouseEnter={() => !isMobile && setIsSchool(true)}
                    onMouseLeave={() => !isMobile && setIsSchool(false)}
                    onClick={() => handleDropdownClick(setIsSchool, isSchool)}
                >

                    <div>
                        <p>Initiaves</p>
                        <ArrowDropDownIcon />
                    </div>
                    {(isSchool || !isMobile) && (
                        <ul className={styles.subOption}>
                            <li><HashLink smooth to='/initiaves'>Student Alumni Mentorship Program</HashLink></li>

                            <li><HashLink smooth to='/initiaves#alumni-internship'>Alumni Internship Program</HashLink></li>
                            <li><HashLink smooth to='/initiaves#alumni-recruit-connect'>Alumni Recruit Connect</HashLink></li>


                        </ul>
                    )}
                </li>
                <li
                    onMouseEnter={() => !isMobile && setIsAdmission(true)}
                    onMouseLeave={() => !isMobile && setIsAdmission(false)}
                    onClick={() => handleDropdownClick(setIsAdmission, isAdmission)}
                >
                    <div>
                        <p>Publication</p>
                        <ArrowDropDownIcon />
                    </div>
                    {(isAdmission || !isMobile) && (
                        <ul className={styles.subOption}>
                            <li><Link to='/school/admission'>News Letter</Link></li>
                            <li><HashLink smooth to='/school/admission#notice'>Year Book</HashLink></li>
                        </ul>
                    )}
                </li>

                <li><HashLink smooth to='/team' className={styles.salumniLink}><span>Team</span></HashLink></li>
            </div>

            {/* Sidebar Toggle for Mobile */}
            <button type='button' className={styles.stoggle} onClick={toggleSideMenu}>
                <MenuIcon className={styles.smenu} />
            </button>

            {/* Sidebar Menu */}
            <div className={`${styles.sidemenu} ${isSidebarOpen ? styles.active : ''}`}>
                <ul>
                    <li onClick={toggleSideMenu}><ClearIcon style={{ cursor: 'pointer', color: 'red' }} /></li>

                    <li><HashLink smooth to='/' style={{ color: 'rgb(255, 153, 0)' }} onClick={toggleSideMenu}>Home</HashLink></li>

                    <li><HashLink smooth to='/about' style={{ color: 'rgb(255, 153, 0)' }} onClick={toggleSideMenu}>About SAIC</HashLink></li>

                    <li><p>Iniatives</p></li>


                    <li><HashLink smooth to='/initiaves' onClick={toggleSideMenu}>Student Alumni Mentorship Program</HashLink></li>
                    <li><HashLink smooth to='/initiaves#alumni-internship' onClick={toggleSideMenu}>Alumni Internship Program</HashLink></li>
                    <li><HashLink smooth to='/initiaves#alumni-recruit-connect' onClick={toggleSideMenu}>Alumni Recruit Connec</HashLink></li>

                    <li><p>Publication</p></li>

                    <li><HashLink smooth to='/school/admission#notice' onClick={toggleSideMenu}>News Letter</HashLink></li>
                    <li><HashLink smooth to='/school/admission#notice' onClick={toggleSideMenu}>Year Book</HashLink></li>


                    {/* <li><HashLink smooth to='/ashram' onClick={() => { document.body.classList.remove('lock-scroll') }} style={{ color: 'rgb(255, 153, 0)', fontSize: 'large', fontWeight: 'bolder' }}>Ashram</HashLink></li> */}
                    <li><HashLink smooth to='/team' onClick={toggleSideMenu} style={{ color: 'rgb(255, 153, 0)' }}>Team</HashLink></li>

                </ul>
            </div>
        </div>
    );
};

export default SchoolNavbar;