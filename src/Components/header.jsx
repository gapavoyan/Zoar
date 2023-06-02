import React, { useEffect, useState } from 'react'
import { dataHeader } from './dataHeader'
function Header() {
    const[state,setState] = useState([])
    useEffect(()=>{
        setState(dataHeader)
    },[])
    return (
        <div>
            <header className=' h-[150px] flex items-center font-montserrat-arm'>
                <div>
                    <img src='https://zoar.am/images/zoar-header-logo.svg' className='w-[102px] h-[88px] absolute bottom-[98.1%] left-[160px] top-[32px] right-[88.39%]' />
                </div>
                <div className='absolute left-[402px]'>
                    <nav>
                        <ul className='flex gap-[83px] ' >
                            {
                                state.map((el) => <li key={el.id} className='hover:text-[#0073B6] text-[#AFAEB1] leading-[20px] '>{el.nav_items}</li>)
                            }
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header