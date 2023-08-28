import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../images/navbar/ev_rental_logo.png";

function LoginRegister() {

	const location = useLocation();

	/* TODO: Add AWS Cognito functionality to validate users */

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [register, setRegister] = useState(location.state.register);
	const [showPassword, setShowPassword] = useState(false);
	const [validPassword, setValidPassword] = useState(false);
	const [invalidCreds, setInvalidCreds] = useState(false);
	const [accountConfirmed, setAccountConfirmed] = useState(false);
	const navigate = useNavigate();

	const isValidPassword = (str) => {
		let re = /^(?=.*\d)(?=.*[!@#$%^&*_-])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
		return re.test(str);
	}

	const handlePassword = (e) => {
		setInvalidCreds(false);
		setAccountConfirmed(false);
		if (register) {
			if (isValidPassword(e.target.value)) {
				setPassword(e.target.value)
				setValidPassword(true)
			} else {
				setValidPassword(false);
			}
		} else {
			setPassword(e.target.value)
		}
		
	}

	const handleEmail = (e) => {
		setInvalidCreds(false);
		setAccountConfirmed(false);
		setEmail(e.target.value);
	}

	const handleFormSubmission = (e) => {
		e.preventDefault();

		// add new user to database
		if (register) {
			fetch("http://localhost:8000/api/users/", {
				method: "POST",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					name: firstname + " " + lastname
				})
			})
			.then(res => res.json())
			.then(res => {
				console.log(res)
				navigate("/dashboard", { state: { id: res.id } })
			})
		}

		navigate("/");
	}

	return (
		<div className="h-screen w-full bg-green-400">
			<div className="flex justify-center items-center overflow-auto bg-green-400">
				<div className="my-20">
					<div className="flex items-center h-full">
						<div className="flex flex-col justify-center items-center bg-white w-[32rem] px-12 py-12 rounded-xl shadow-2xl">
							<img src={Logo} className="w-64" alt="logo" />
							<h1 className="text-4xl font-bold py-12 select-none">
								Welcome
							</h1>
							<form className="flex flex-col items-center w-full px-6" onSubmit={handleFormSubmission}>
								<div className={`text-sm text-red-500 text-center ${accountConfirmed && !register ? "max-h-64" : "max-h-0"} transition-all duration-50 overflow-hidden`}>
									<p>Account is not confirmed. Please check your email to confirm your account.</p>
								</div>
								<div className={`text-sm text-red-500 ${invalidCreds && !register ? "max-h-64" : "max-h-0"} transition-all duration-100 overflow-hidden`}>
									<p>Incorrect email and/or password</p>
								</div>
								<div className={`h-full flex flex-col w-full ${register ? "max-h-64" : "max-h-0"} transition-all duration-500 overflow-hidden`}>
									<h2 className="select-none text-primary">Personal Information</h2>
									<div className="flex flex-col gap-4 pt-4">
										<div className="border-b">
											<input type="text" placeholder="First Name" required={register ? true : false} className="focus:ring-0 w-full text-sm border-none pl-0" onChange={(e) => setFirstname(e.target.value)} />
										</div>
										<div className="border-b">
											<input type="text" placeholder="Last Name" required={register ? true : false} className="focus:ring-0 w-full text-sm border-none pl-0" onChange={(e) => setLastname(e.target.value)} />
										</div>
										<div className="border-b">
											<input type="number" placeholder="Phone Number" required={register ? true : false} className="focus:ring-0 w-full text-sm border-none pl-0" />
										</div>	
									</div>
								</div>
								<div className="flex flex-col pt-6 pb-12 w-full">
									<div className="flex flex-col gap-4 pt-6">
										<div className="flex border-b">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -6 32 32" fill="#4ade80" className="w-8 h-8">
												<path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
											</svg>
											<input type="email" placeholder="Email" required className="pl-0 focus:ring-0 w-full text-sm border-none" onChange={handleEmail} />
										</div>
										<div className="flex border-b w-full">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -6 32 32" fill="#4ade80" className="w-8 h-8">
												<path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
											</svg>
											<input type={showPassword ? "text" : "password"} placeholder="Password" required className="pl-0 focus:ring-0 w-full text-sm border-none" onChange={handlePassword} />
											{showPassword ? 
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -6 32 32" fill="#4ade80" className="w-8 h-8 float-right cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
													<path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
													<path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
													<path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
												</svg>
												:
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -6 32 32" fill="#4ade80" className="w-8 h-8 float-right cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
													<path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
													<path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
												</svg>
											}
										</div>	
									</div>
									<div className={`text-xs flex flex-col gap-0.5 pt-2 ${register ? "max-h-64" : "max-h-0"} transition-all duration-100 overflow-hidden select-none`}>
										<p>Minimum length of 8 characters</p>
										<p>Contains at least 1 number</p>
										<p>Contains at least 1 special character</p>
										<p>Contains at least 1 uppercase letter</p>
										<p>Contains at least 1 lowercase letter</p>
									</div>
								</div>
								<button className="bg-green-400 w-full px-4 py-3 rounded-full select-none text-white shadow-lg hover:bg-green-500">
									{register ? "Register" : "Sign In"}
								</button>
							</form>
							<div className="pt-12 select-none">
								{register ?
									<p>
										Already have an account? <span className="text-green-400 cursor-pointer hover:text-green-500" onClick={() => setRegister(!register)}>Sign In</span>
									</p>
									:
									<p>
										Don't have an account? <span className="text-green-400 cursor-pointer hover:text-green-500" onClick={() => setRegister(!register)}>Register</span>
									</p>
								}
								
							</div>
						</div>
					</div>
				</div>
			</div>	
		</div>
	)
}

export default LoginRegister;