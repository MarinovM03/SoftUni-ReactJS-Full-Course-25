import { useState } from "react";

const initialValues = {
    name: '',
    email: '',
    password: '',
    country: 'usa',
    gender: 'male',
    programming: false,
    design: false,
    gaming: false,
    bio: '',
    level: '5',
};

export default function UnifiedControlledForm() {
    const [data, setData] = useState(initialValues);

    const changeHandler = (e) => {
        setData((state) => ({
            ...state,
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
        }));
    };

    return (
        <div className="w-full max-w-xl bg-white p-8 rounded-2x1 shadow-md">
            <h2 className="text-3x1 font-bold mb-6 text-center">Registration Form</h2>

            <form className="space-y-6">
                <div>
                    <label className="block text-sm font-medium mb-1">Full Name</label>
                    <input type="text" placeholder="John Doe" name="name" value={data.name} onChange={changeHandler} className="w-full px-3 py-2 border rounded-x1 focus:ring focus:ring-blue-300" />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Email Address</label>
                    <input type="email" placeholder="example@mail.com" name="email" value={data.email} onChange={changeHandler} className="w-full px-3 py-2 border rounded-x1 focus:ring focus:ring-blue-300" />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <input type="password" name="password" value={data.password} onChange={changeHandler} className="w-full px-3 py-2 border rounded-x1 focus:ring focus:ring-blue-300" />
                </div>
                
                <div>
                    <label className="block text-sm font-medium mb-1">Country</label>
                    <select name="country" value={data.country} onChange={changeHandler} className="w-full px-3 py-2 border rounded-x1 focus:ring focus:ring-blue-300">
                        <option value="usa">USA</option>
                        <option value="germany">Germany</option>
                        <option value="uk">UK</option>
                        <option value="france">France</option>
                        <option value="bulgaria">Bulgaria</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">Gender</label>
                    <div className="flex space-x-4">
                        <label className="flex items-center space-x-2">
                            <input type="radio" name="gender" value="male" onChange={changeHandler} checked={data.gender === 'male'} className="accent-blue-600" />
                            <span>Male</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="radio" name="gender" value="female" onChange={changeHandler} checked={data.gender === 'female'} className="accent-blue-600" />
                            <span>Female</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="radio" name="gender" value="other" onChange={changeHandler} checked={data.gender === 'other'} className="accent-blue-600" />
                            <span>Other</span>
                        </label>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">Interests</label>
                    <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" name="programming" onChange={changeHandler} checked={data.programming} className="accent-blue-600" />
                            <span>Programming</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" name="design" onChange={changeHandler} checked={data.design} className="accent-blue-600" />
                            <span>Design</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" name="gaming" onChange={changeHandler} checked={data.gaming} className="accent-blue-600" />
                            <span>Gaming</span>
                        </label>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">About You</label>
                    <textarea name="bio" onChange={changeHandler} value={data.bio} rows="4" className="w-full px-3 py-2 border rounded-x1 focus:ring focus:ring-blue-300" placeholder="Tell us a bit about yourself..."></textarea>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Profile Picture</label>
                    <input type="file" className="w-full text-sm" />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Experience Level (0-10)</label>
                    <input type="range" min="0" max="10" name="level" onChange={changeHandler} value={data.level} className="w-full" />
                </div>

                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-x1 hover:bg-blue-700 transition">
                    Register
                </button>
            </form>
        </div>
    );
}