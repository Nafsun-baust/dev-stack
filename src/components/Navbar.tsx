import logo from "../assets/logo-text.png";

export default function Navbar() {
    return (
        <nav className="sticky top-0 bg-white border-b border-gray-100">
            <div className="container mx-auto flex items-center justify-between py-4">
                <img src={logo} className="h-12" />

                <ul className="flex gap-7 font-semibold text-2xl text-slate-500">
                    <li>Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                <div className="flex text-xl gap-2">
                    <button className="px-4 py-2  border border-amber-100 rounded-md">Sign In</button>
                    <button className="px-4 py-2 bg-red-500 text-white rounded-md">
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    );
}