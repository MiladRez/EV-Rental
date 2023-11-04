import React from 'react';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import Background from "../images/ContactPage/world-map.jpg";

function Contact() {
	return (
		<>
			<Navbar signedIn={false}/>
			<PageHeader title="Contact Us" />
			<div className='relative w-full'>
				<div className='flex justify-center mx-10 py-20 md:py-28'>
					<div className='flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 w-full max-w-screen-xl px-5'>
						<img src={Background} className='absolute z-0 top-0 left-0 object-cover opacity-5 h-full w-full' alt='background world map' />
						<div className='flex flex-col gap-8 w-full sm:w-[28rem] items-center lg:items-start z-10'>
							<h1 className='text-2xl sm:text-4xl font-bold text-center lg:text-start'>
								Need additional information?
							</h1>
							<p className='text-stone-600 text-center lg:text-start'>
								We would love to hear from you! If you have any questions, inquiries, or feedback, please don't hesitate to get
								in touch with us. Our dedicated team is here to assist you. We aim to respond to all inquiries within 24 hours.
							</p>
							<div className="flex flex-col gap-2 pt-2">
								<a href="tel:1234567890" className="flex gap-2 w-fit transition duration-300 hover:text-green-400 cursor-pointer">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
										<path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
									</svg>
									<h3 className="font-bold">(123)-456-7890</h3>
								</a>
								<a href="https://mail.google.com/mail/?view=cm&fs=1&to=evrental@business.com" className="flex gap-2 transition duration-300 hover:text-green-400 cursor-pointer">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
										<path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
										<path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
									</svg>
									<h3 className="font-bold">evrental@business.com</h3>
								</a>
							</div>
						</div>
						<form className='flex flex-col gap-6 w-full lg:w-1/2 sm:px-10 lg:px-0 items-end z-10'>
							<div className='flex flex-col w-full'>
								<label className='font-bold'>
									Full Name
								</label>
								<input type='text' placeholder='John Doe' className='bg-gray-100 border-0 py-3 placeholder:opacity-50 focus:bg-white' />	
							</div>
							<div className='flex flex-col w-full'>
								<label className='font-bold'>
									Email
								</label>
								<input type='email' placeholder='johndoe@example.com' className='bg-gray-100 border-0 py-3 placeholder:opacity-50 focus:bg-white' />	
							</div>
							<div className='flex flex-col w-full'>
								<label className='font-bold'>
									Phone Number
								</label>
								<input type='tel' placeholder='1112223333' className='bg-gray-100 border-0 py-3 placeholder:opacity-50 focus:bg-white' />	
							</div>
							<div className='flex flex-col w-full'>
								<label className='font-bold'>
									Message
								</label>
								<textarea rows="7" placeholder="Please share your thoughts, questions, or any information you'd like us to know. We value your feedback and are here to assist you in any way we can." className='bg-gray-100 border-0 placeholder:opacity-50 focus:bg-white' />	
							</div>
							<button className='w-full bg-green-400 py-5 text-lg font-bold text-white border border-green-400 shadow-lg shadow-green-300 rounded hover:shadow-green-400 hover:bg-green-500 transition duration-500'>
								Send Message
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-6 inline text-white">
									<path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
								</svg>
							</button>
						</form>
					</div>
				</div>
			</div>
			<div className="flex justify-center">
				<div className="w-full bg-zinc-800 text-center text-neutral-100 py-12 px-10">
					<h1 className="text-3xl font-bold py-6">Thank you for considering <span className='text-green-400'>EV</span> Rental - your partner in sustainable mobility!</h1>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Contact;