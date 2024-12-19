
const Login = () => {
   
    return (
        <>
            <div className="flex justify-center items-center bg-slate-500 pt-12 pb-12 ">
                <form  className=" bg-white inline-block w-96 p-5 text-center rounded-lg">
                    <h1 className="text-2xl font-bold tracking-wider pt-2 pb-0.5">Login</h1>
                    
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
                        />
                    </div>
                    <button className="bg-gradient-to-r from-blue-300 to-blue-900 text-white font-bold w-72 px-3 rounded-xl py-1 mb-4" type="submit">Login</button>

                    <p>Not a member? <a className="text-blue-700 fon t-semibold" href='#'>Register</a></p>
                </form>
              
            </div>
        </>
    )
    
}

export default Login;