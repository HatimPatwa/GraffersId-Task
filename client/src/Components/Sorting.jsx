const SortDropdown = () => {
    return (
        <div className="flex justify-end p-4">
            <label htmlFor="sort" className="mr-2 font-medium">Sort:</label>
            <select
                id="sort"
                className="px-4 py-2 border rounded-lg focus:outline-purple-500"
            >
                <option value="name">Name</option>
                <option value="rating">Rating</option>
                <option value="reviews">Reviews</option>
            </select>
        </div>
    );
};


export default SortDropdown;