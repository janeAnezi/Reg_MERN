import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios'


const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        error: ''
    })
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}))
    }

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:5000/login',{email, password})
        .then(result => {console.log(result)
            if(result.data === "Success") {
                navigate('/home')
            } 
        })
        .catch(err => console.log(err))
    }

    return (
        <>
            <div className="flex justify-center flex-col items-center bg-slate-500 pt-20 pb-16 ">
                <form onSubmit={handleSubmit}  className=" bg-white inline-block w-96 p-5 text-center rounded-lg">
                    <h1 className="text-2xl font-bold tracking-wider pt-2 pb-1.5">Login</h1>
                    
                    <div className="flex items-center gap-9 mt-4 mb-4">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input  className="border-dotted border-2 px-3 w-80 rounded-xl py-1" 
                        type="email" 
                        placeholder="Email" 
                        autoComplete='off'
                        id="email"
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
                        id="password"
                        name='password'
                        required
                        onChange={handleChange}
                        />
                    </div>
                    <button className="bg-gradient-to-r from-blue-300 to-blue-900 text-white font-bold w-80 px-3 rounded-xl py-1 mb-4" type="submit">Login</button>
                </form>
                <p>Not a member? <Link to='/register' className="text-blue-700 font-semibold">Register</Link></p>
            </div>
        </>
    )
    
}

export default Login;