import PropTypes from 'prop-types';

const CompanyCard = ({ name, location, rating = 0, reviews = 0, founded }) => {
    return (
        <div className="flex justify-between items-center p-4 bg-white border rounded-lg shadow-md mb-4">
            <div className='flex items-center gap-5'>
                <div>
                    <img className="size-32" src="src/assets/default-company-logo.png" alt="Comany Logo"></img>
                </div>
                {/* Company Details */}
                <div>
                    <h2 className="font-semibold text-lg">{name}</h2>
                    <p className="text-sm text-gray-500">{location}</p>
                    <div className="flex items-center gap-2">
                        <p className="font-bold text-yellow-500">{rating} ⭐,</p>
                        <p className="font-bold text-gray-500">{reviews} Reviews</p>
                    </div>
                    {founded && <p className="text-xs text-gray-400">Founded: {founded}</p>}
                </div>
            </div>
            {/* Detail Review Button */}
            <button className="ml-4 bg-gray-800 text-white px-4 py-2 rounded-lg">
                Detail Review
            </button>
        </div>
    );
};

CompanyCard.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
    founded: PropTypes.number,
};

export default CompanyCard;