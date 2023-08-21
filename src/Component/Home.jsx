import React from "react";
// import Barcode from '../Images/Barcode.svg'
import Kuda from "../Images/kuda.svg";
import { BiQrScan } from "react-icons/bi";
import Naria from "../Images/Naria.svg";
import Note from "../Images/Note.svg";
// import Logo from '../images/images.png'
// import Logo from '../images/logo2.svg'
// import  appstore  from "../Component/images/appstore.svg"
import appstore from "../Images/appstore.svg";
import google from "../Images/google.svg";
import signin from "../Images/signin.svg";
import twitter from "../Images/twitter.svg";
import instagram from "../Images/instagram.svg";
import facebook from "../Images/facebook.svg";
import mon from "../Images/mon.svg";
import link from "../Images/link.svg";
import youtube from "../Images/youtube.svg";

function Navbar() {
  return (
    <main className="font-Mulish">
      <nav className="flex justify-between p-2 drop-shadow-lg  align-items-center bg-[#ffffff]">
        <div className="flex  items-center">
          <img src={Kuda} alt="barcode" className="  h-[3rem] w-[3rem]  " />
          <button className="mx-3 text-[0.9rem] text-[#745895]">
            Features
          </button>
          <button className="flex  text-[0.9rem] text-[#745895]">
            <p>Business</p>
            <p className=" text-[#745895]">Beta</p>
          </button>
          <button className="mx-3 text-[0.9rem] text-[#745895]">Company</button>
          <button className="mx-3 text-[0.9rem] text-[#745895]">Help</button>
        </div>
        <div className="flex items-center">
          <button className="mx-3 text-[0.9rem] text-[#745895]">Sign In</button>
          <button className="mx-3 bg-[#40196d] rounded-[1rem] text-white font-bold py-2 px-7 hover:-translate-y-1 duration-700 ">
            Get Kuda
          </button>
          <div className="">
            <img src={Kuda} alt="barcode" className="  h-[3rem] w-[3rem]  " />
          </div>
        </div>
      </nav>

      <div className="flex justify-center bg-[#ffffff]">
        <div className=" flex flex-col mt-[5rem]">
          <div className="flex  justify-between  items-center">
            <div className="mx-[5rem]">
              <h1 className="    w-[25rem] text-[#40196d] text-[2.5rem]">
                Download Kuda , open an account!
              </h1>
              <h1 className=" mt-[1rem]  w-[22rem] ">
                Scan the QR code below with your phone camera to download the
                Kuda app.
              </h1>
              {/* <img src={Barcode} alt="barcode" className="" /> */}
              <BiQrScan className=" border  h-[10rem] w-[10rem]" />
            </div>

            <img
              src="https://kuda.com/static/kuda-open-account-f4e3470032362b8f5751a7254f173bcf.png"
              alt=""
              className=""
            />
          </div>
          <div className=" flex flex-col">
            <div className="flex justify-around  w-[73rem] mt-[6rem]  ">
              <div className="border justify-between ml-[3rem] drop-shadow-xl ">
                <img
                  src={Kuda}
                  alt="barcode"
                  className="  h-[2rem] w-[2rem] mt-[1rem] mx-[2rem] "
                />
                <p className="mt-[2rem] text-[#40196d] mx-[2rem] font-[Mulish] ">
                  Download Kuda on Google Play or the App Store.
                </p>
              </div>

              <div className="border ml-[3rem] drop-shadow-xl">
                <img
                  src={Note}
                  alt="barcode"
                  className="  h-[2rem] w-[2rem] mt-[1rem]  mx-[2rem] "
                />
                <p className="mt-[2rem]  text-[#40196d] mx-[2rem] font-[Mulish]">
                  Open the app and follow the prompts on your screen to open an
                  account.
                </p>
              </div>
              <div className="border ml-[3rem] drop-shadow-xl">
                <img
                  src={Naria}
                  alt="barcode"
                  className="   h-[2rem] w-[2rem]  mt-[1rem] mx-[2rem]"
                />
                <p className="mt-[2rem] text-[#40196d] mx-[2rem]  font-[Mulish]">
                  {" "}
                  Add money to your account to get the best out of Kuda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="ancestor bg-white-500 my-[5rem] font-[Mulish]">
        <div className="parent  flex justify-evenly">
          <div className="child1">
            {<img src={Kuda} className=" w-[5rem]" alt="kuda"></img>}
          </div>
          <div className="child2">
            <div className="text-[#614086]">
              <p>Features</p>
            </div>
            <div>
              <p>Kuda Card</p>
            </div>
            <div>
              <p>Spend</p>
            </div>
            <div>
              <p>Save</p>
            </div>
            <div>
              <p>Budget</p>
            </div>
            <div>
              <p>Borrow</p>
            </div>
            <div>
              <p>Payments & Transfers</p>
            </div>
            <div>
              <p>Account</p>
            </div>
          </div>
          <div className="child3 ">
            <div className="text-[#614086]">
              <p>Company</p>
            </div>
            <div>
              <p>Blog</p>
            </div>
            <div>
              <p>Press</p>
            </div>
            <div>
              <p>Join Our Team</p>
            </div>
            <div>
              <p>About Us</p>
            </div>
          </div>
          <div className="child4 ">
            <div className="text-[#614086]">
              <p>Help</p>
            </div>
            <div>
              <p>Get Help</p>
            </div>
            <div>
              <p>FAQs</p>
            </div>
            <div>
              <p>Security</p>
            </div>
            <div>
              <p>Contact Us</p>
            </div>
          </div>
          <div className="child5 ">
            <div className="text-[#614086]">
              <p>Transparency</p>
            </div>
            <div>
              <p>Terms & Conditions</p>
            </div>
            <div>
              <p>Privacy Policy</p>
            </div>
            <div>
              <p>Information Security Policy</p>
            </div>
            <div>
              <p>Cookie Policy</p>
            </div>
            <div>
              <p>Complaints</p>
            </div>
          </div>
        </div>

        {/* second div section 2 (holding logos three logos and content) */}
        {/* //////////////////////////////////////////////////////////////////////// */}
        <div className=" flex justify-center gap-10 my-[3rem] items-center">
          <div>
            {
              <img
                src={appstore}
                className=" w-[6rem] rounded mx-[1rem]"
                alt="appstore"
              ></img>
            }
          </div>
          <div>
            {
              <img
                src={google}
                className=" w-[6rem] rounded mx-[1rem]"
                alt="google"
              ></img>
            }
          </div>
          <div>
            {
              <img
                src={signin}
                className=" w-[6rem] rounded mx-[1rem]"
                alt="signin"
              ></img>
            }
          </div>
        </div>
        <div className=" flex justify-center my-[3rem] text-[#614086]">
          <p>Products may vary by country or market.</p>
        </div>

        {/* last div of kuda home page(containing links,logos and contents) */}
        {/* //////////////////////////////////////////////////////////////////////// */}
        <div className="parent-contact  flex justify-evenly">
          <div className="child1 ">
            <div className="text-[#614086]">
              <p>Contact</p>
            </div>
            <div>
              <p>help@kuda.com</p>
            </div>
            <div className="flex">
              <div>
                {
                  <img
                    src={twitter}
                    className=" w-[2rem] rounded mx-[1rem] "
                    alt="twitter"
                  ></img>
                }
              </div>
              <div>
                {
                  <img
                    src={instagram}
                    className=" w-[2rem] rounded mx-[1rem]"
                    alt="instagram"
                  ></img>
                }
              </div>
              <div>
                {
                  <img
                    src={facebook}
                    className=" w-[2rem] rounded mx-[1rem]"
                    alt="facebook"
                  ></img>
                }
              </div>
              <div>
                {
                  <img
                    src={youtube}
                    className=" w-[2rem] rounded mx-[1rem]"
                    alt="youtube"
                  ></img>
                }
              </div>
              <div>
                {
                  <img
                    src={mon}
                    className=" w-[2rem] rounded mx-[1rem]"
                    alt="mon"
                  ></img>
                }
              </div>
              <div>
                {
                  <img
                    src={link}
                    className=" w-[2rem] rounded mx-[1rem]"
                    alt="link"
                  ></img>
                }
              </div>
            </div>
          </div>
          <div className="child3  items-center">
            <div className="text-[#614086] ">
              <p>Lagos</p>
            </div>
            <div>
              <p>151 Herbert Macaulay Way,</p>
            </div>
            <div>
              <p>Yaba, Lagos,</p>
            </div>
            <div>
              <p>Nigeria</p>
            </div>
          </div>
          <div className="child4 ">
            <div className="text-[#614086]">
              <p>London</p>
            </div>
            <div>
              <p>5 New Street Square, London,</p>
            </div>
            <div>
              <p>England, EC4A 3TW,</p>
            </div>
            <div>
              <p>UK</p>
            </div>
          </div>
        </div>
        <div className="child5 flex justify-center my-[3rem] text-[#bebebe] ">
          <div className="w-[70rem]">
            <p>
              © 2022 Kuda Technologies Ltd (Company No.11472232). All rights
              reserved. If you would like to find out more about which Kuda
              entity you receive services from, please reach out to us via the
              in-app chat in the Kuda app. Nigerian banking services offered by
              Kuda Microfinance Bank (RC796975) with registered address at 151 -
              Herbert Macaulay Way, Yaba, Lagos, Nigeria. Kuda Microfinance Bank
              is licensed by the Central Bank of Nigeria. Deposits are insured
              by the Nigerian Deposit Insurance Corporation (NDIC). UK services
              are offered by Kuda EMI Ltd (Company No. 13724208) with registered
              address at 5 New Street Square, London, EC4A 3TW, United Kingdom.
              Kuda EMI Ltd is A Distributor of Modulr FS Limited. Modulr FS
              Limited (Company No 09897919), is regulated by the Financial
              Conduct Authority for issuance of electronic money under reference
              900573.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Navbar;
