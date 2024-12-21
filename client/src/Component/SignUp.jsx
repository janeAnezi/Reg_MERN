import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        error: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev)=>({...prev, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
   
    return (
        <>
            <div className="flex justify-center flex-col items-center bg-slate-500 pt-12 pb-12 ">
                <form onSubmit={handleSubmit}  className=" bg-white inline-block w-96 p-5 text-center rounded-lg">
                    <h1 className="text-2xl font-bold tracking-wider pt-2 pb-0.5">Register</h1>
                    
                    <div className="flex items-center gap-9 mt-4">
                        <label htmlFor="name">
                            <strong>Name</strong>
                        </label>
                        <input className="border-dotted border-2 px-3 w-80 rounded-xl py-1 " 
                        type="text" 
                        placeholder="Enter Name" 
                        autoComplete='off'
                        name='name'
                        required
                        onChange={handleChange}
                        />
                    </div>
                    <div className="flex items-center gap-9 mt-4 mb-4">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input  className="border-dotted border-2 px-3 w-80 rounded-xl py-1" 
                        type="email" 
                        placeholder="Email" 
                        autoComplete='off'
                        name='email'
                        required
                        onChange={handleChange}
                        />
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                        <label htmlFor="name">
                            <strong>Password</strong>
                        </label>
                        <input className="border-dotted border-2 px-3 w-80 rounded-xl py-1" 
                        type="password" 
                        placeholder="Password" 
                        autoComplete='off'
                        name='password'
                        required
                        onChange={handleChange}
                        />
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                        <label htmlFor="name">
                            <strong>Password</strong>
                        </label>
                        <input className="border-dotted border-2 px-3 w-80 rounded-xl py-1" 
                        type="password" 
                        placeholder="Confirm Password" 
                        autoComplete='off'
                        name='confirmPassword'
                        required
                        onChange={handleChange}
                        />
                    </div>
                    <button className="bg-gradient-to-r from-blue-300 to-blue-900 text-white font-bold w-80 px-3 rounded-xl py-1 mb-4" type="submit">Register</button> 
                </form>
                <p>Already a member? <Link to='/login' className="text-blue-700 font-semibold">Login</Link></p>
            </div>
        </>
    )
    
}

export default SignUp;