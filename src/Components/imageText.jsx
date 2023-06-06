import React from 'react'

function ImageText() {
    return (
        <div>
            <div className='w-[236px] h-[253px] absolute left-[650px] top-[265px] z-10'>
                <div className='flex flex-col justify-between h-full'>
                    <div>
                        <p className='text-[32px] text-center leading-[39px] text-[white]'>
                            ZOAR <br />
                            Բնակելի Շենք
                        </p>
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