import { useState } from 'react';

const AddressForm = () => {
  const [formData, setFormData] = useState({
    Address: '',
    Landmark: '',
    City: '',
    State: '',
    Zip: '',
    Country: '',
    Lattitude: '',
    Longitude: '',
    Email: '',
    Telephone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions with the form data (e.g., send it to an API)
    console.log(formData);
    // Reset the form after submission (optional)
    setFormData({
      address: '',
      landmark: '',
      city: '',
      state: '',
      zip: '',
      country: '',
      lattitude: '',
      longitude: '',
      email: '',
      telephone: '',
    });
  };

  return (
    <div className="w-full md:w-100 md:max-w-full mx-auto mt-10 mb-5">
      <div className="p-6 border border-gray-300 sm:rounded-md">
        <form
          method="POST"
          action="https://herotofu.com/start"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          {Object.entries(formData).map(([fieldName, fieldValue]) => (
            <div className="flex flex-col mb-6" key={fieldName}>
              <div className="flex p-3 gap-10">
                <label className="text-gray-700">{fieldName}</label>
                <input
                  name={fieldName}
                  type="text"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  value={fieldValue}
                  onChange={handleChange}
                  placeholder=""
                />
                <button
                  type="button"
                  className="ml-2 bg-indigo-700 text-indigo-100 px-3 py-1 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800"
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
          <button
            type="submit"
            className="h-10 px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddressForm;
