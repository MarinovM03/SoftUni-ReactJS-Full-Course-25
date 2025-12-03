import { Link } from 'react-router';

export default function Header() {
    return (
        <nav className="w-full bg-white shadow mb-8 p-4 rounded-2xl flex items-center justify-between">
            <div className="text-xl font-bold">MyApp</div>
            <div className="flex space-x-4 text-sm font-medium">
                <Link to="/" className="hover:text-blue-600">Home</Link>
                <Link to="/uncontrolled-form" className="hover:text-blue-600">Uncontrolled Form</Link>
                <Link to="/controlled-form" className="hover:text-blue-600">Controlled Form</Link>
                <Link to="#" className="hover:text-blue-600">Login</Link>
            </div>
        </nav>
    );
}