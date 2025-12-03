import { useState } from "react";

export default function ControlledLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // setTimeout(() => {
    //     console.log('set pesho');
        
    //     setEmail('pesho@abv.bg')
    // }, 2000);
 
    const emailChangeHandler = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
    };

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        console.log(email);
        console.log(password);
    };

    return (
        <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Controlled Login</h2>
            <form className="space-y-4" onSubmit={submitHandler}>
                <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input name="username" type="email" value={email} onChange={emailChangeHandler} className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300" />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <input name="password" type="password" value={password} onChange={passwordChangeHandler} className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300" />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">Login</button>
            </form>
        </div>
    );
}