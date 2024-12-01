import { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import CompanyCard from "./CompanyCard";
import axiosInstance from "../axios";

const CompanyList = ({ searchString }) => {

    const [companies, setCompanies] = useState([]);
    const [displayCompanies, setDisplayCompanies] = useState([]);

    useEffect(() => {
        fetchCompanies();
        return () => {

        }
    }, [])

    const fetchCompanies = useCallback(async () => {
        try {
            const response = await axiosInstance.get("/companies");
            setCompanies(response.data);
            setDisplayCompanies(response.data);
        } catch (error) {
            console.error(error);
        }
    }, [setCompanies]);

    /**
     * Search for a company in name or location
     * @param {string} searchString 
     * @returns 
     */
    const searchCompany = useCallback((searchString) => {

        if (searchString === "") { // if search string is empty, display all companies
            setDisplayCompanies(companies);
            return;
        }

        const filteredCompanies = companies.filter(company => {
            return company.name.toLowerCase().includes(searchString.toLowerCase()) || company.location.toLowerCase().includes(searchString.toLowerCase());
        });
        setDisplayCompanies(filteredCompanies);
    }, [companies]);


    useEffect(() => {
        searchCompany(searchString);
    }, [searchString, searchCompany]);



    return (
        <div className="p-6 ">
            {displayCompanies.map((company, index) => (
                <CompanyCard key={index} {...company} reviews={company?.reviewCount} rating={company?.averageRating} />
            ))}
        </div>
    );
};


CompanyList.propTypes = {
    searchString: PropTypes.string
}



export default CompanyList;