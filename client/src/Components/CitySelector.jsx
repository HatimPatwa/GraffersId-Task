import { useState } from "react";
import PropTypes from "prop-types";
import AddCompanyDialog from "./AddCompany";
import SortDropdown from "./Sorting";

const CitySelector = ({handleSearch}) => {

  const [addCompanyDialogOpen, setAddCompanyDialogOpen] = useState(false);

  const handleAddCompanyDialogOpen = () => {
    setAddCompanyDialogOpen(true);
  }

  const handleAddCompanyDialogClose = () => {
    setAddCompanyDialogOpen(false);
  }

  const handleSearchChange = (e) => {
    handleSearch(e.target.value);
  }

  return (
    <>
      <div className="mt-3 flex flex-col md:flex-row items-center gap-4 p-6">
        <div className="flex gap-2 items-center">
          <label htmlFor="city" className="font-medium">Search:</label>
          <input
            id="city"
            type="text"
            className="px-4 py-2 border rounded-lg focus:outline-purple-500"
            onChange={handleSearchChange}
          />
        </div>
        <div className="flex gap-2">
          <button className="bg-purple-600 text-white px-3 py-2 rounded-lg">
            Find Company
          </button>
          <button className="bg-purple-600 text-white px-3 py-2 rounded-lg" onClick={handleAddCompanyDialogOpen}>
            + Add Company
          </button>
        </div>
        <SortDropdown />
      </div>
      <hr className="w-full border-gray-300" />

      <AddCompanyDialog open={addCompanyDialogOpen} handleClose={handleAddCompanyDialogClose}/>

    </>
  );
};

CitySelector.propTypes = {
  handleSearch: PropTypes.func.isRequired
}

export default CitySelector;