import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineMail, AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaTwitter, FaYoutube } from 'react-icons/fa';
import amex from './icons/Amex-Card.png';
import apple from './icons/apple-pay.png';
import dinersclub from './icons/dinersclub.png';
import discover from './icons/discover.png';
import google from './icons/google-pay.png';
import mastercard from './icons/mastercard.png';
import paypal from './icons/paypal.png';
import venmo from './icons/venmo.png';
import visa from './icons/visa.png';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-[#1B1F23] bottom-0 w-full relative'>
        <div className='2xl:w-[1200px] mx-auto py-6'>
            <div className='grid md:grid-cols-5 grid-cols-1 gap-5 mt-6 mx-3'>
                <div className='flex flex-col md:items-start items-center'>
                    <img className='w-48 mb-5' src="https://cdn.shopify.com/s/files/1/0326/7189/files/one-tree-planted-logo-white.svg?v=1619731262" alt="" />
                    <div className='flex flex-wrap items-center md:border-t-2 md:border-gray-500/50 py-5'>
                        <img className='w-[86px] mr-4 pb-3' src="https://cdn.shopify.com/s/files/1/0326/7189/files/2019-nonprofit-changemaker-award-winner.svg?v=1619729581" alt="" />
                        <img className='w-[86px] mr-4 pb-3' src="https://cdn.shopify.com/s/files/1/0326/7189/files/guidestar-platinum-seal-of-transparency-2022.svg?v=1646842923" alt="" />
                    </div>
                    <img className='w-48 mb-4' src="https://cdn.shopify.com/s/files/1/0326/7189/files/united-nations-decade-on-ecosystem-restoration-2021-2030_5ef20274-a0d7-4aab-ba5f-c03508dc72af.svg?v=1624024397" alt="" />
                </div>
                <div className='text-left'>
                    <div className='md:grid gap-4 hidden'>
                        <h2 className='text-xl text-white font-medium uppercase roboto-con'>tax id #46-4664563</h2>
                        <div className='roboto'>
                            <p className='text-[#a2a7a7] text-sm leading-6'>One Tree Planted is a 501(c)3 tax-exempt organization and your donation is tax-deductible within the guidelines of U.S. law.</p>
                            <Link to={'/'} className='text-[#03a196] hover:text-white transition duration-200'>Learn more</Link>
                        </div>
                        <div className='roboto text-sm leading-[22px]'>
                            <p className='uppercase font-bold text-[#a2a7a7]'>financials</p>
                            <ul className=''>
                                <li><Link to={'/'} className='text-[#03a196] hover:text-white transition duration-200'>2021 Audit Report</Link></li>
                                <li><Link to={'/'} className='text-[#03a196] hover:text-white transition duration-200'>2021 Form 990</Link></li>
                                <li><Link to={'/'} className='text-[#03a196] hover:text-white transition duration-200'>2020 Form 990</Link></li>
                                <li><Link to={'/'} className='text-[#03a196] hover:text-white transition duration-200'>2019 Form 990</Link></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                <div className='text-left'>
                    <div className='grid gap-4'>
                        <h2 className='text-xl text-white font-medium uppercase roboto-con'>Quick links</h2>
                        <ul className='roboto text-sm leading-[22px] font-normal'>
                            <li className='mb-2.5'><Link to={'/'} className='text-[#03a196] hover:text-white transition duration-200'>Privacy Policy</Link></li>
                            <li className='mb-2.5'><Link to={'/'} className='text-[#03a196] hover:text-white transition duration-200'>Terms of Service</Link></li>
                            <li className='mb-2.5'><Link to={'/'} className='text-[#03a196] hover:text-white transition duration-200'>Return & Refund Policy</Link></li>
                            <li className='mb-2.5'><Link to={'/'} className='text-[#03a196] hover:text-white transition duration-200'>Careers</Link></li>
                            <li className='mb-2.5'><Link to={'/'} className='text-[#03a196] hover:text-white transition duration-200'>Fundraising Disclosures</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='text-left'>
                    <div className='grid gap-4'>
                        <h2 className='text-xl text-white font-medium uppercase roboto-con'>Connect</h2>
                        <div className='roboto text-[#a2a7a7] text-sm leading-6'>
                            Online:<Link to={'/'} className='text-[#03a196] hover:text-white transition duration-200'>Contact Us</Link><br />
                            Call: <span className='font-bold'>1.800.408.7850</span>
                        </div>
                        <div className='roboto text-[#a2a7a7] text-sm leading-6 italic'>
                            <p>145 Pine Haven Shores Rd #1000D Shelburne, Vermont, 05482, US</p>
                        </div>
                        <div className='roboto'>
                            <p className='text-[#a2a7a7] text-sm leading-6'>Need Funding? Apply <Link to={'/'} className='text-[#03a196] hover:text-white transition duration-200'>here</Link>.</p>
                        </div>
                    </div>
                </div>
                <div className='text-left'>
                    <div className='grid gap-4'>
                        <h2 className='text-xl text-white font-medium uppercase roboto-con'>Subscribe today!</h2>
                        <input type="text" className='h-11 w-full text-sm rounded border-none focus:ring-0' placeholder='Enter your first name...' />
                        <input type="text" className='h-11 w-full text-sm rounded border-none focus:ring-0' placeholder='Enter your email address...' />
                        <Link to={'/'} className='flex items-center justify-center text-white bg-[#04736b] font-extrabold uppercase h-11 text-base transition duration-700 roboto-con hover:text-lg hover:bg-[#03A196]'>sign up</Link>
                        <div className='flex md:justify-start justify-center'>
                            <Link to={'/'}><AiOutlineMail className='text-[#a2a7a7] hover:text-white text-xl hover:text-[22px] transition duration-400 mx-1.5' /></Link>
                            <Link to={'/'}><FaFacebookF className='text-[#a2a7a7] hover:text-white text-xl hover:text-[22px] transition duration-400 mx-1.5' /></Link>
                            <Link to={'/'}><AiOutlineInstagram className='text-[#a2a7a7] hover:text-white text-xl hover:text-[22px] transition duration-400 mx-1.5' /></Link>
                            <Link to={'/'}><FaLinkedinIn className='text-[#a2a7a7] hover:text-white text-xl hover:text-[22px] transition duration-400 mx-1.5' /></Link>
                            <Link to={'/'}><FaPinterestP className='text-[#a2a7a7] hover:text-white text-xl hover:text-[22px] transition duration-400 mx-1.5' /></Link>
                            <Link to={'/'}><FaTwitter className='text-[#a2a7a7] hover:text-white text-xl hover:text-[22px] transition duration-400 mx-1.5' /></Link>
                            <Link to={'/'}><FaYoutube className='text-[#a2a7a7] hover:text-white text-xl hover:text-[22px] transition duration-400 mx-1.5' /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex md:flex-row flex-col md:justify-between justify-center mb-5 mx-3'> 
                <div className='text-sm text-[#a2a7a7] md:my-5 my-3'>
                    © {currentYear} One Tree Planted. <Link to={'/'} className='text-[#03a196] hover:text-white transition duration-200'> This store is PCI Compliant</Link>
                </div>
                <div className='flex justify-center md:my-0 my-3'>
                    <div className='w-11 h-6 bg-white flex justify-center items-center rounded overflow-hidden mx-1'><img className='h-4' src="https://cdn.iconscout.com/icon/free/png-256/amazon-43-432492.png?f=avif&w=128" alt="" /></div>
                    <div className='w-11 h-6 bg-white flex justify-center items-center rounded overflow-hidden mx-1'><img className='object-contain h-full' src={amex} alt="" /></div>
                    <div className='w-11 h-6 bg-white flex justify-center items-center rounded overflow-hidden mx-1'><img className='object-contain h-full' src={apple} alt="" /></div>
                    <div className='w-11 h-6 bg-white flex justify-center items-center rounded overflow-hidden mx-1'><img className='object-contain h-full' src={dinersclub} alt="" /></div>
                    <div className='w-11 h-6 bg-white flex justify-center items-center rounded overflow-hidden mx-1'><img className='object-contain h-full' src={discover} alt="" /></div>
                    <div className='w-11 h-6 bg-white flex justify-center items-center rounded overflow-hidden mx-1'><img className='object-contain h-full' src={google} alt="" /></div>
                    <div className='w-11 h-6 bg-white flex justify-center items-center rounded overflow-hidden mx-1'><img className='object-contain h-full' src={mastercard} alt="" /></div>
                    <div className='w-11 h-6 bg-white flex justify-center items-center rounded overflow-hidden mx-1'><img className='object-contain h-full' src={paypal} alt="" /></div>
                    <div className='w-11 h-6 bg-white flex justify-center items-center rounded overflow-hidden mx-1'><img className='object-contain h-full' src={venmo} alt="" /></div>
                    <div className='w-11 h-6 bg-white flex justify-center items-center rounded overflow-hidden mx-1'><img className='object-contain h-full' src={visa} alt="" /></div>
                </div> 
            </div>
        </div>
        
    </footer>
  )
}

export default Footer;
