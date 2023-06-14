import React, { useEffect, useState } from 'react'
import "./css/drawer.css"
import { dataHeader } from "./dataBase/dataHeader"
function Drawer() {
    const [defaultWith, setDefaultWith] = useState(0)
    const [value, setValue] = useState([])
    function openNav() {
        setDefaultWith(`${100}%`)
    }

    function closeNav() {
        setDefaultWith(0)
    }
    useEffect(() => {
        setValue(dataHeader)
    }, [])
    console.log(dataHeader);
    return (
        <div>
            <div style={{ width: `${defaultWith}` }} className="sidenav py-10">
                <span className="closebtn cursor-pointer text-[#AFAEB1]  px-[24px]" onClick={closeNav}>&times;</span>
                <ul>
                    <nav className='flex flex-col space-y-12'>
                        {
                            dataHeader.map((el) => {
                                return (
                                    <li key={el.id} className='text-[#AFAEB1] leading-[20px] cursor-pointer'>{el.nav_items}</li>
                                )
                            })
                        }
                    </nav>
                </ul>
            </div>
            <span className="text-[30px]  cursor-pointer" onClick={openNav}>&#9776;</span>
        </div>
    )
}

export default Drawer