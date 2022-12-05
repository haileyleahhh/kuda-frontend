//  importation of images 


import  Kuda  from "../Component/images/kuda.svg"
import  appstore  from "../Component/images/appstore.svg"
import  google  from "../Component/images/google.svg"
import  signin  from "../Component/images/signin.svg"
import  twitter  from "../Component/images/twitter.svg"
import  instagram  from "../Component/images/instagram.svg"
import  facebook  from "../Component/images/facebook.svg"
import  mon  from "../Component/images/mon.svg"
import  link  from "../Component/images/link.svg"
import  youtube  from "../Component/images/youtube.svg"


function create (){

                    //div section 1 (highlights of kuda_features,company,help and transparency). 
                 ///////////////////////////////////////////////////////////////////////////////// 
    return(
<main className="ancestor bg-white-500">
    <div className="grandparent  w-500 h-600 mx-auto">
        <div className="parent  w-300 h-300 flex justify-center">
            <div className="child1  w-100 h-100">
                { <img src={Kuda} className=' w-[5rem]' alt= "kuda"></img> }</div>
            <div className="child2 w-100 h-100 p-7">
                <div className="text-[#614086]"><p>Features</p></div>
                <div><p>Kuda Card</p></div>
                <div><p>Spend</p></div>
                <div><p>Save</p></div>
                <div><p>Budget</p></div>
                <div><p>Borrow</p></div>
                <div><p>Payments & Transfers</p></div>
                <div><p>Account</p></div>
            </div>
            <div className="child3 w-100 h-100 p-7">
                <div className="text-[#614086]"><p>Company</p></div>
                <div><p>Blog</p></div>
                <div><p>Press</p></div>
                <div><p>Join Our Team</p></div> 
                <div><p>About Us</p></div>
            </div>
            <div className="child4 w-100 h-100 p-7">
                <div className="text-[#614086]"><p>Help</p></div>
                <div><p>Get Help</p></div>
                <div><p>FAQs</p></div>
                <div><p>Security</p></div>
                <div><p>Contact Us</p></div>
            </div>
            <div className="child5 w-100 h-100 p-7">
                <div className="text-[#614086]"><p>Transparency</p></div>
                <div><p>Terms & Conditions</p></div>
                <div><p>Privacy Policy</p></div>
                <div><p>Information Security Policy</p></div>
                <div><p>Cookie Policy</p></div>
                <div><p>Complaints</p></div>
            </div>
        </div>

                {/* second div section 2 (holding logos three logos and content) */}
        {/* //////////////////////////////////////////////////////////////////////// */}
        <div className=" w-200 flex justify-center p-5">
            <div>{ <img src={appstore} className=' w-[6rem] rounded mx-[1rem]' alt= "appstore"></img> }</div>
            <div>{ <img src={google} className=' w-[6rem] rounded mx-[1rem]' alt= "google"></img> }</div>
            <div>{ <img src={signin} className=' w-[6rem] rounded mx-[1rem]' alt= "signin"></img> }</div>
        </div>
        <div className=" w-200 flex justify-center p-5 text-[#614086]">
            <p>Products may vary by country or market.</p>
        </div>
    </div>

                        {/* last div of kuda home page(containing links,logos and contents) */}
                    {/* //////////////////////////////////////////////////////////////////////// */}
    <div className="parent-contact  w-300 h-300 flex justify-center">
            <div className="child2  w-100 h-100 p-7">
                <div className="text-[#614086]">
                 <p>Contact</p></div>
                <div><p>help@kuda.com</p></div>
                <div className="flex p-2">
                    <div>{ <img src={twitter} className=' w-[2rem] rounded mx-[1rem] ' alt= "twitter"></img> }</div>
                    <div>{ <img src={instagram} className=' w-[2rem] rounded mx-[1rem]' alt= "instagram"></img> }</div>
                    <div>{ <img src={facebook} className=' w-[2rem] rounded mx-[1rem]' alt= "facebook"></img> }</div>
                    <div>{ <img src={youtube} className=' w-[2rem] rounded mx-[1rem]' alt= "youtube"></img> }</div>
                    <div>{ <img src={mon} className=' w-[2rem] rounded mx-[1rem]' alt= "mon"></img> }</div>
                    <div>{ <img src={link} className=' w-[2rem] rounded mx-[1rem]' alt= "link"></img> }</div>
                </div>
            </div>
            <div className="child3  w-100 h-100 p-7">
                <div className="text-[#614086]"><p>Lagos</p></div>
                <div><p>151 Herbert Macaulay Way,</p></div>
                <div><p>Yaba, Lagos,</p></div>
                <div><p>Nigeria</p></div>
            </div>
            <div className="child4  w-100 h-100 p-7">
                <div className="text-[#614086]"><p>London</p></div>
                <div><p>5 New Street Square, London,</p></div>
                <div><p>England, EC4A 3TW,</p></div>
                <div><p>UK</p></div>
            </div>
        </div>
        <div className="child5  w-100 h-100 flex justify-center">
            <div className="text-[#bebebe]">
                <div className=""><p>© 2022 Kuda Technologies Ltd (Company No.11472232). All rights reserved.y</p></div>
                    <div><p>If you would like to find out more about which Kuda entity you receive services from, please reach out to us via</p></div>
                    <div><p>the in-app chat in the Kuda app. Nigerian banking services offered by Kuda Microfinance Bank (RC796975)</p></div>
                    <div><p>with registered address at 151 - Herbert Macaulay Way, Yaba, Lagos, Nigeria. Kuda Microfinance Bank is</p></div>
                    <div><p>licensed by the Central Bank of Nigeria. Deposits are insured by the Nigerian Deposit Insurance Corporation</p></div>
                    <div><p>(NDIC).</p></div>
                    <div><p>UK services are offered by Kuda EMI Ltd (Company No. 13724208) with registered address at 5 New Street</p></div>
                    <div><p>Square, London, EC4A 3TW, United Kingdom. Kuda EMI Ltd is A Distributor of Modulr FS Limited. Modulr FS</p></div>
                    <div><p>Limited (Company No 09897919), is regulated by the Financial Conduct Authority for issuance of electronic</p></div>
                    <div><p>money under reference 900573.</p></div>
                </div>
        </div>
</main>
    )
}



export default create