import React, { useEffect, useState } from 'react';

import up from '../Assets/icon-up.svg';
import down from '../Assets/icon-down.svg';
import fb from '../Assets/icon-facebook.svg';
import twt from '../Assets/icon-twitter.svg';
import ig from '../Assets/icon-instagram.svg';
import yt from '../Assets/icon-youtube.svg';
import '../App.css';

const HomePageComponent = () => {

    const [darkM, setDarkM] = useState<boolean>(false);

    const toggleDL = () => {
        setDarkM(!darkM);
    }

    // ternary = !darkM ? lightVariable : darkVariable
    //since darkM = false, page will always load light mode by default

    const lBG: string = "lightbg min-h-screen h-full"
    const dBG: string = "darkbg min-h-screen h-full"

    const titleL: string = "lTxt font-bold text-3xl"
    const titleD: string = "dTxt font-bold text-3xl"

    const subTiL: string = "lTxtGrey font-bold pt-1"
    const subTiD: string = "dTxtGrey font-bold pt-1"

    const modeL: string = 'mt-2 lTxtGrey font-bold'
    const modeD: string = 'mt-2 dTxtGrey font-bold'

    const FBcardL: string = "grid justify-center lCard borderFB cardW p-6"
    const TWTcardL: string = "grid justify-center lCard borderTW cardW p-6"
    const IGcardL: string = "grid justify-center lCard borderIG cardW p-6"
    const YTcardL: string = "grid justify-center lCard borderYT cardW p-6"

    const FBcardD: string = "grid justify-center dCard borderFB cardW p-6"
    const TWTcardD: string = "grid justify-center dCard borderTW cardW p-6"
    const IGcardD: string = "grid justify-center dCard borderIG cardW p-6"
    const YTcardD: string = "grid justify-center dCard borderYT cardW p-6"

    const usernameL: string = "lTxtGrey text-sm"
    const usernameD: string = "dTxtGrey text-sm"

    const bigCtxtL: string = "text-5xl lTxt font-bold"
    const bigCtxtD: string = "text-5xl dTxt font-bold"

    const followL: string = "text-sm tracking-[0.3em] lTxtGrey"
    const followD: string = "text-sm tracking-[0.3em] dTxtGrey"

    const titleTwoL: string = 'lTxtGrey font-bold text-xl'
    const titleTwoD: string = 'dTxtGrey font-bold text-xl'

    const smolCL: string = 'grid lCard cardW p-6'
    const smolCD: string = 'grid dCard cardW p-6'

    const liteL: string = 'lTxtGrey font-bold'
    const liteD: string = 'dTxtGrey font-bold'

    const numbL: string = 'lTxt text-3xl font-bold'
    const numbD: string = 'dTxt text-3xl font-bold'



    // useEffect(() => {
    //     darkM ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
    //     // if(darkM){
    //     //     document.documentElement.classList.add("dark");
    //     // }else{
    //     //     document.documentElement.classList.remove("dark");
    //     // }
    // }, [darkM]);


    return (

        <div className={!darkM ? lBG : dBG} >

            <div className='grid grid-cols-8 mx-48 pt-10'>
                <div className='col-start-1 col-span-2'>
                    <h1 className={!darkM ? titleL : titleD}>Social Media Dashboard</h1>
                    <p className={!darkM ? subTiL : subTiD}>Total Followers: 23,004</p>
                </div>
                <div className='col-end-9'>
                    <div className='grid grid-cols-2'>
                        <p className={!darkM ? modeL : modeD}>Dark Mode</p>
                        <label className='switch'>
                            <input type='checkbox' onClick={toggleDL} />
                            <span className='slider round'></span>
                        </label>
                    </div>
                </div>
            </div>

            {/* top row */}
    
            <div className='grid grid-cols-4 mx-48 gap-5 py-10'>

                <div className={!darkM ? FBcardL : FBcardD}>
                    <div className='flex justify-center pb-5'>
                        <div className='mr-1'>
                            <img src={fb} />
                        </div>
                        <div className='ml-1'>
                            <p className={!darkM ? usernameL : usernameD}>@nathanf</p>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <h1 className={!darkM ? bigCtxtL : bigCtxtD}>1987</h1>
                    </div>
                    <div className='flex justify-center mt-1'>
                        <h1 className={!darkM ? followL : followD}>FOLLOWERS</h1>
                    </div>
                    <div className='flex justify-center mt-5'>
                        <div className='flex'>
                            <img className='w-[8px] h-[4px] mt-2 mr-2' src={up} />

                            <p className='text-sm gTxt font-bold'>12 Today</p>
                        </div>
                    </div>
                </div>


                <div className={!darkM ? TWTcardL : TWTcardD}>
                    <div className='flex justify-center pb-5'>
                        <div className='mr-1'>
                            <img src={twt} />
                        </div>
                        <div className='ml-1'>
                            <p className={!darkM ? usernameL : usernameD}>@nathanf</p>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <h1 className={!darkM ? bigCtxtL : bigCtxtD}>1044</h1>
                    </div>
                    <div className='flex justify-center mt-1'>
                        <h1 className={!darkM ? followL : followD}>FOLLOWERS</h1>
                    </div>
                    <div className='flex justify-center mt-5'>
                        <div className='flex'>
                            <img className='w-[8px] h-[4px] mt-2 mr-2' src={up} />

                            <p className='text-sm gTxt font-bold'>99 Today</p>
                        </div>
                    </div>
                </div>


                <div className={!darkM ? IGcardL : IGcardD}>
                    <div className='flex justify-center pb-5'>
                        <div className='mr-1'>
                            <img src={ig} />
                        </div>
                        <div className='ml-1'>
                            <p className={!darkM ? usernameL : usernameD}>@realnathanf</p>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <h1 className={!darkM ? bigCtxtL : bigCtxtD}>11k</h1>
                    </div>
                    <div className='flex justify-center mt-1'>
                        <h1 className={!darkM ? followL : followD}>FOLLOWERS</h1>
                    </div>
                    <div className='flex justify-center mt-5'>
                        <div className='flex'>
                            <img className='w-[8px] h-[4px] mt-2 mr-2' src={up} />

                            <p className='text-sm gTxt font-bold'>1099 Today</p>
                        </div>
                    </div>
                </div>


                <div className={!darkM ? YTcardL : YTcardD}>
                    <div className='flex justify-center pb-5'>
                        <div className='mr-1'>
                            <img src={yt} />
                        </div>
                        <div className='ml-1'>
                            <p className={!darkM ? usernameL : usernameD}>Nathan F.</p>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <h1 className={!darkM ? bigCtxtL : bigCtxtD}>8239</h1>
                    </div>
                    <div className='flex justify-center mt-1'>
                        <h1 className={!darkM ? followL : followD}>FOLLOWERS</h1>
                    </div>
                    <div className='flex justify-center mt-5'>
                        <div className='flex'>
                            <img className='w-[8px] h-[4px] mt-2 mr-2' src={down} />

                            <p className='text-sm rTxt font-bold'>144 Today</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* bottom row 1 */}
            <div className='mx-48'>
                <h2 className={!darkM ? titleTwoL : titleTwoD }>Overview - Today</h2>
            </div>
            <div className='grid grid-rows-2 gap-8 mx-48 py-5'>

                <div className='grid grid-cols-4 gap-5'>


                    <div className={!darkM ? smolCL : smolCD}>
                        <div className='flex justify-between mb-5'>
                            <div className={!darkM ? liteL : liteD}>
                                <p>Page Views</p>
                            </div>
                            <div className=''>
                                <img src={fb} />
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className=''>
                                <h3 className={!darkM ? numbL : numbD }>87</h3>
                            </div>
                            <div className='flex mt-2'>
                                <img className='w-[8px] h-[4px] mt-3 mr-1' src={up} />
                                <p className='gTxt font-bold'>3%</p>
                            </div>
                        </div>
                    </div>


                    <div className={!darkM ? smolCL : smolCD}>
                        <div className='flex justify-between mb-5'>
                            <div className={!darkM ? liteL : liteD}>
                                <p>Likes</p>
                            </div>
                            <div className=''>
                                <img src={fb} />
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className=''>
                                <h3 className={!darkM ? numbL : numbD }>52</h3>
                            </div>
                            <div className='flex mt-2'>
                                <img className='w-[8px] h-[4px] mt-3 mr-1' src={down} />
                                <p className='rTxt font-bold'>2%</p>
                            </div>
                        </div>
                    </div>


                    <div className={!darkM ? smolCL : smolCD}>
                        <div className='flex justify-between mb-5'>
                            <div className={!darkM ? liteL : liteD}>
                                <p>Likes</p>
                            </div>
                            <div className=''>
                                <img src={ig} />
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className=''>
                                <h3 className={!darkM ? numbL : numbD }>5462</h3>
                            </div>
                            <div className='flex mt-2'>
                                <img className='w-[8px] h-[4px] mt-3 mr-1' src={up} />
                                <p className='gTxt font-bold'>2257%</p>
                            </div>
                        </div>
                    </div>


                    <div className={!darkM ? smolCL : smolCD}>
                        <div className='flex justify-between mb-5'>
                            <div className={!darkM ? liteL : liteD}>
                                <p>Profile Views</p>
                            </div>
                            <div className=''>
                                <img src={ig} />
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className=''>
                                <h3 className={!darkM ? numbL : numbD }>52k</h3>
                            </div>
                            <div className='flex mt-2'>
                                <img className='w-[8px] h-[4px] mt-3 mr-1' src={up} />
                                <p className='gTxt font-bold'>1375%</p>
                            </div>
                        </div>
                    </div>


                </div>


                <div className='grid grid-cols-4 gap-5'>


                    <div className={!darkM ? smolCL : smolCD}>
                        <div className='flex justify-between mb-5'>
                            <div className={!darkM ? liteL : liteD}>
                                <p>Retweets</p>
                            </div>
                            <div className=''>
                                <img src={twt} />
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className=''>
                                <h3 className={!darkM ? numbL : numbD }>117</h3>
                            </div>
                            <div className='flex mt-2'>
                                <img className='w-[8px] h-[4px] mt-3 mr-1' src={up} />
                                <p className='gTxt font-bold'>303%</p>
                            </div>
                        </div>
                    </div>


                    <div className={!darkM ? smolCL : smolCD}>
                        <div className='flex justify-between mb-5'>
                            <div className={!darkM ? liteL : liteD}>
                                <p>Likes</p>
                            </div>
                            <div className=''>
                                <img src={twt} />
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className=''>
                                <h3 className={!darkM ? numbL : numbD }>507</h3>
                            </div>
                            <div className='flex mt-2'>
                                <img className='w-[8px] h-[4px] mt-3 mr-1' src={up} />
                                <p className='gTxt font-bold'>553%</p>
                            </div>
                        </div>
                    </div>


                    <div className={!darkM ? smolCL : smolCD}>
                        <div className='flex justify-between mb-5'>
                            <div className={!darkM ? liteL : liteD}>
                                <p>Likes</p>
                            </div>
                            <div className=''>
                                <img src={yt} />
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className=''>
                                <h3 className={!darkM ? numbL : numbD }>107</h3>
                            </div>
                            <div className='flex mt-2'>
                                <img className='w-[8px] h-[4px] mt-3 mr-1' src={down} />
                                <p className='rTxt font-bold'>19%</p>
                            </div>
                        </div>
                    </div>


                    <div className={!darkM ? smolCL : smolCD}>
                        <div className='flex justify-between mb-5'>
                            <div className={!darkM ? liteL : liteD}>
                                <p>Total Views</p>
                            </div>
                            <div className=''>
                                <img src={yt} />
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className=''>
                                <h3 className={!darkM ? numbL : numbD }>1407</h3>
                            </div>
                            <div className='flex mt-2'>
                                <img className='w-[8px] h-[4px] mt-3 mr-1' src={down} />
                                <p className='rTxt font-bold'>12%</p>
                            </div>
                        </div>
                    </div>


                </div>



            </div>


        </div>
    )
}

export default HomePageComponent
