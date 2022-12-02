

function Navbar( ) {
    
    return(
        <main className='font-Mulish'>
            <nav className='flex justify-between px-[4rem] border-b drop-shadow-lg items-center mt-2 py-2'>
                <div className='flex items-center'>
                    
                    <button className='mx-3 text-[0.9rem] text-[#745895]'>Features</button>
                    <button className='flex mx-3 text-[0.9rem] text-[#745895]'>
                        <p>Business</p>
                        <p className='mx-2 text-[#745895] text-[0.8rem] border rounded px-2'><a href="https://kuda.com/ng/business">Beta</a></p>
                    </button>
                    <button className='mx-3 text-[0.9rem] text-[#745895]'>Company</button>
                    <button className='mx-3 text-[0.9rem] text-[#745895]'>Help</button>
                </div>
                <div className='flex items-center'>
                    <button className='mx-3 text-[0.9rem] text-[#745895]'>Sign In</button>
                    <button className='mx-3 bg-[#40196d] rounded-[0.8rem] text-white font-bold py-2  px-8 -translate-y-1 duration-700 '><a href="https://kuda.com/getKuda/">Get Kuda</a></button>
                    <div className='border'>
                        {/* <Logo/> */}Logo
                    </div>
                </div>
            </nav>
        </main>
    )
}


export default Navbar