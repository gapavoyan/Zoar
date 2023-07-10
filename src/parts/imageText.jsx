import React from 'react'

function ImageText() {
    return (
        <div>
            <div className='w-[236px] h-[253px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10'>
                <div className='flex flex-col justify-between h-full'>
                    <div className='text-center'>
                        <p className='text-[60px] text-center leading-[39px] text-[white] max-sm:text-[40px]'>
                            ZOAR
                        </p>
                            <p className='text-[32px] mt-[8px] text-[white] max-sm:text-[24px]'>Բնակելի Շենք</p>
                    </div>
                    <div>
                        <button className=' backdrop-blur-[5px] w-full h-[63px] bg-[rgb(255,255,255,0.3)] backdrop-sepia-[5%] text-[white] border border-white box-border'>
                            <p className='leading-[19.5px]'>Վիդեո տուր</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageText