import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import { AnimatePresence, motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

import { routes } from '../data/sidebar_data';

const Sidebar = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const inputAnimation = {
        hidden: {
            width: 0,
            padding: 0,
            opacity: 0,
            transition: {
                duration: 0.2,
            },
        },
        show: {
            width: "140px",
            padding: "5px 15px",
            opacity: 1,
            transition: {
                duration: 0.2,
            },
        },
    };

    const showAnimation = {
        hidden: {
            width: 0,
            opacity: 0,
            transition: {
                duration: 0.5,
            },
        },
        show: {
            width: "auto",
            opacity: 1,
            transition: {
                duration: 0.2,
            }
        },
    };

    return (
        <div className='main-container'>
            <motion.div 
                animate={{
                    width: isOpen ? "200px": "40px", 
                    
                    transition: {
                        duration: 0.5,
                        type: "spring",
                        damping: 10,
                    },
            }} 
                className="sidebar"
            >
                <div className="top-section">
                    {isOpen && (
                        <motion.h1 
                            variants={showAnimation}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="logo"
                        >
                            SC Hub
                        </motion.h1>)}
                    <div className="bars">
                        <FontAwesomeIcon icon={faBars} onClick={toggle}/>
                    </div>
                </div>
                <div className="search">
                    <div className="search-icon">
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                    <AnimatePresence>
                        {isOpen && (
                            <motion.input 
                                initial="hidden"
                                animate="show"
                                exit="hidden" 
                                variants={inputAnimation} 
                                placeholder='Buscar...' 
                            />
                        )}
                    </AnimatePresence>
                </div>
                <section className="routes">
                    {routes.map((route) => (
                        <NavLink
                            activeClassName="active"
                            to={route.path} 
                            key={route.name} 
                            className="link"
                        >
                            <div className="icon">
                                <FontAwesomeIcon icon={route.icon} />
                            </div>
                            <AnimatePresence>                            
                                {isOpen && (
                                    <motion.div 
                                        variants={showAnimation}
                                        initial="hidden"
                                        animate="show"
                                        exit="hidden"    
                                        className="link-text"
                                    >
                                        {route.name}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </NavLink>
                    ))}
                </section>
            </motion.div>
            <main>
                {children}
            </main>
        </div>
    );
};

export default Sidebar;
