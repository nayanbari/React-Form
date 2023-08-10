import { useState } from 'react'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Input from './components/Input'
import InputArea from './components/InputArea'
import InputSelect from './components/InputSelect'

function App() {
  const [data, setData] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setData(prev => {
      return { ...prev, [name] : value }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data)
    alert(JSON.stringify(data))
  }

  return (
  <form className="my-12 max-w-2xl mx-auto" onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <Input
                type="text"
                name="firstName"
                placeholder="Nayan"
                label="First name"
                handleFunction={handleChange}
                required={true}
              />
            </div>

            <div className="sm:col-span-3">
              <Input
                type="text"
                name="lastName"
                placeholder="Bari"
                label="Last name"
                handleFunction={handleChange}
                required={true}
              />
            </div>

            <div className="sm:col-span-4">
              <Input
                type="email"
                name="email"
                placeholder="nayanbari89@gmail.com"
                label="Email"
                handleFunction={handleChange}
                required={true}
              />
            </div>

            <div className="sm:col-span-3">
              <InputSelect
                name="country"
                label="Country"
                list={["India", "USA", "UK"]}
                handleFunction={handleChange}
              />
            </div>

            <div className="col-span-full">
              <Input
                type="text"
                name="streetAddress"
                placeholder=""
                label="Street address"
                handleFunction={handleChange}
              />
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <Input
                type="text"
                name="city"
                placeholder=""
                label="City"
                handleFunction={handleChange}
              />
            </div>

            <div className="sm:col-span-2">
              <Input
                type="text"
                name="state"
                placeholder=""
                label="State"
                handleFunction={handleChange}
              />
            </div>

            <div className="sm:col-span-2">
              <Input
                type="text"
                name="pincode"
                placeholder=""
                label="Pincode"
                handleFunction={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Account Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Please fill the account information correctly.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <Input
                type="text"
                name="accountHolderName"
                placeholder=""
                label="Beneficiary name"
                handleFunction={handleChange}
                required={true}
              />
            </div>

            <div className="sm:col-span-3">
              <Input
                type="text"
                name="nickname"
                placeholder=""
                label="Nick name"
                handleFunction={handleChange}
                required={true}
              />
            </div>

            <div className="sm:col-span-3">
              <Input
                type="text"
                name="accountNumber"
                placeholder=""
                label="Beneficiary account number"
                handleFunction={handleChange}
                required={true}
              />
            </div>

            <div className="sm:col-span-3">
              <Input
                type="text"
                name="confirmAccountNumber"
                placeholder=""
                label="Re-enter account number"
                handleFunction={handleChange}
                required={true}
              />
            </div>
        </div>

        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  )
}

export default App
