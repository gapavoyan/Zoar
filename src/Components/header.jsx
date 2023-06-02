import React from 'react'

function Header() {
    return (
        <div>
            <header className=' h-[150px] flex items-center font-montserrat-arm'>
                <div>
                    <img src='https://zoar.am/images/zoar-header-logo.svg' className='w-[102px] h-[88px] absolute bottom-[98.1%] left-[160px] top-[32px] right-[88.39%]' />
                </div>
                <div className='absolute left-[402px] w-[938px] h-[20px] '>
                    <nav className='flex gap-[83px] text-[#AFAEB1] leading-[20px] '>
                        <ul className='flex gap-[43px] ' >
                            <li className='hover:text-[#0073B6]'>ՇԵՆՔԻ ԿԱՌՈՒՑՎԱԾՔԸ</li>
                            <li className='hover:text-[#0073B6]'>ՇԵՆՔԻ ՆԿԱՐԱԳՐՈՒԹՅՈՒՆ</li>
                        </ul>
                        <ul className='flex gap-[52px]'>
                            <li className='hover:text-[#0073B6]'>ՓԱԹԵԹՆԵՐ</li>
                            <li className='hover:text-[#0073B6]'>ՀԱՏԱԿԱԳԾԵՐ</li>
                            <li className='hover:text-[#0073B6]'>ԿԱՊ</li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header