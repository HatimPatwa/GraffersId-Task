const Header = () => {
    return (
        <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
            <h1 className="text-2xl font-bold text-purple-600">Review&Rate</h1>
            <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 border rounded-lg w-1/3 focus:outline-purple-500"
            />
            <div className="flex gap-4">
                <button className="text-purple-600">SignUp</button>
                <button className="text-purple-600">Login</button>
            </div>
        </header>
    );
};

export default Header;