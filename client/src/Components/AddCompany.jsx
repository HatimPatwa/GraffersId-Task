'use client'
import PropTypes from 'prop-types'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import axios from '../axios'

function AddCompanyDialog({ open,handleClose }) {

  const handleSubmit = async (e) => {
    e.preventDefault()
    const companyName = e.target.companyName.value
    const companyLocation = e.target.companyLocation.value
    const companyFoundedOn = e.target.companyFoundedOn.value

    try {
      const response = await axios.post('/companies', {
        name: companyName,
        location: companyLocation,
        founded: companyFoundedOn
      })
      console.log(response.data)
      handleCloseDialog();
    } catch (error) {
      console.error(error)
    }
  }

  const handleCloseDialog = () => {
    //cleanup fields
    console.log('closing')    
    handleClose();
  }


  return (
    <Dialog open={open} onClose={handleCloseDialog} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                  Add Company
                </h2>
              </div>

              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit}> 
                  <div>
                    <label htmlFor="companyName" className="block text-sm/6 font-medium text-gray-900">
                      Company Name
                    </label>
                    <div className="mt-2">
                      <input
                        placeholder='Enter Full Company Name...'
                        id="=companyName"
                        name="companyName"
                        required
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="companyLocation" className="block text-sm/6 font-medium text-gray-900">
                        Location
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        id="companyLocation"
                        name="companyLocation"
                        required
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="companyFoundedOn" className="block text-sm/6 font-medium text-gray-900">
                        Founded On
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        id="companyFoundedOn"
                        name="companyFoundedOn"
                        type='date'
                        required
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex mx-auto justify-center rounded-md bg-indigo-600 px-6 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog >
  )
}

AddCompanyDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
}

export default AddCompanyDialog;