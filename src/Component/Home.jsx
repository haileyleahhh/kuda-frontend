import React from 'react';
// import Barcode from '../Images/Barcode.svg'
import Kuda from '../Images/kuda.svg'
import {BiQrScan} from 'react-icons/bi'
import Naria from '../Images/Naria.svg'
import Note from '../Images/Note.svg'



function Home (){
    return (
        <main>
            <div className='flex justify-center h-screen '>
            <div className=' flex flex-col mt-[5rem] w-[70rem]'>
            <div className='flex  justify-between  items-center'>
                <div className= 'mx-[5rem]'>
                <h1 className="    w-[25rem] text-[#40196d] text-[2.5rem] font-[Mulish] ">Download Kuda , open an account!</h1>
                <h1 className=" mt-[1rem]  w-[22rem] ">Scan the QR code below with your phone camera to download the Kuda app.</h1>
               {/* <img src={Barcode} alt="barcode" className="" /> */}
                <BiQrScan className=" border  h-[10rem] w-[10rem]"/>
                  
        
                </div>
               
                 <img src="https://kuda.com/static/kuda-open-account-f4e3470032362b8f5751a7254f173bcf.png" alt="" className="w-[35rem]  "/>
            </div>
            <div className=' flex flex-col'>
                <div className='flex justify-around  w-[73rem] mt-[6rem]  '>
                
                    <div className='border justify-between ml-[3rem] drop-shadow-xl '> 
                             <img src={Kuda} alt="barcode" className="  h-[2rem] w-[2rem] mt-[1rem] mx-[2rem] " /> 
                             <p className='mt-[2rem] text-[#40196d] mx-[2rem] font-[Mulish] '>Download Kuda on Google Play or the App Store.</p>
                    </div>
                
                
                     <div className='border ml-[3rem] drop-shadow-xl'> 
                             <img src={Note} alt="barcode" className="  h-[2rem] w-[2rem] mt-[1rem]  mx-[2rem] " />
                             <p className='mt-[2rem]  text-[#40196d] mx-[2rem] font-[Mulish]'>Open the app and follow the prompts on your screen to open an account.</p>
                     </div>
                    <div className='border ml-[3rem] drop-shadow-xl'> 
                            <img src={Naria} alt="barcode" className="   h-[2rem] w-[2rem]  mt-[1rem] mx-[2rem]" />
                            <p className='mt-[2rem] text-[#40196d] mx-[2rem]  font-[Mulish]'> Add money to your account to get the best out of Kuda.</p>

                    </div>
                </div>
               
            </div>

            </div>

            </div>
           
            

        </main>

    );
}

export default Home 