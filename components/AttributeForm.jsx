import React, { useState } from 'react';
import { CiImageOn } from 'react-icons/ci';

const AttributeForm = () => {
  const [amenities, setAmenities] = useState({
    airConditioned: null,
    childFriendly: null,
    airportShuttle: null,
    barLounge: null,
    hotTub: null,
    laundryService: null,
    restaurant: null,
    roomService: null,
    spa: null,
    hotelBrand: null,
    beachAccess: null,
    businessCenter: null,
    fitnessCenter: null,
    freeBreakfast: null,
    swimmingPool: null,
    petAllowed: null,
    smokeFreeProperty: null,
    wheelchairAccessible: null,
    kitchenAvailable: null,
  });

  const handleToggle = (amenity) => {
    setAmenities({ ...amenities, [amenity]: !amenities[amenity] });
  };

  const amenitiesList = [
    { label: 'Air Conditioned', name: 'airConditioned' },
    { label: 'Child-friendly', name: 'childFriendly' },
    { label: 'Airport Shuttle', name: 'airportShuttle' },
    { label: 'Bar & Lounge', name: 'barLounge' },
    { label: 'Hot Tub', name: 'hotTub' },
    { label: 'Laundry Service', name: 'laundryService' },
    { label: 'Restaurant', name: 'restaurant' },
    { label: 'Room Service', name: 'roomService' },
    { label: 'Spa', name: 'spa' },
    { label: 'Hotel Brand', name: 'hotelBrand' },
  ];

  const amenitiesList1 = [
    { label: 'Beach Access', name: 'beachAccess' },
    { label: 'Business Center', name: 'businessCenter' },
    { label: 'Fitness Center', name: 'fitnessCenter' },
    { label: 'Free Breakfast', name: 'freeBreakfast' },
    { label: 'Swimming Pool', name: 'swimmingPool' },
    { label: 'Pet Allowed', name: 'petAllowed' },
    { label: 'Smoke Free Property', name: 'smokeFreeProperty' },
    { label: 'Wheelchair Accessible', name: 'wheelchairAccessible' },
    { label: 'Kitchen Available', name: 'kitchenAvailable' },
  ];
  return (
    <div>
      <div className="flex flex-start items-center gap-10">
        <div className="w-[200px] border-2 border-dashed rounded-md p-12 mt-10 items-center text-center">
          <CiImageOn size={80} color="gray" className="text-center" />
          <p>Add Image</p>
        </div>
        <div className="px-5 py-3 w-[600px]">
          <input
            name=""
            type="text"
            className="block w-full mt-2 p-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Image Logo Url"
          />
          <input
            name=""
            type="text"
            className="block w-full mt-5 p-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Image Url"
          />
        </div>
      </div>

      <div className="flex flex-between gap-50 items-center">
        <div className="p-4 mt-10">
          {amenitiesList.map((amenity) => (
            <div className="mb-4 flex items-center gap-5" key={amenity.name}>
              <span className="text-gray-700 text-xl w-60">
                {amenity.label}:
              </span>
              <div className="mt-2 bg-gray-200 p-2 rounded-md w-[200px] text-center ">
                <label className="inline-flex items-center ">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    value="yes"
                    checked={amenities[amenity.name]}
                    onChange={() => handleToggle(amenity.name)}
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center ml-4">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    value="no"
                    checked={!amenities[amenity.name]}
                    onChange={() => handleToggle(amenity.name)}
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 mt-10 w-[400px]">
          {amenitiesList1.map((amenity) => (
            <div className="mb-4 flex items-center gap-5" key={amenity.name}>
              <span className="text-gray-700 text-xl w-60">
                {amenity.label}:
              </span>
              <div className="mt-2 bg-gray-200 p-2 rounded-md w-[200px] text-center ">
                <label className="inline-flex items-center ">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    value="yes"
                    checked={amenities[amenity.name]}
                    onChange={() => handleToggle(amenity.name)}
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center ml-4">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    value="no"
                    checked={!amenities[amenity.name]}
                    onChange={() => handleToggle(amenity.name)}
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>
          ))}
          <div className="flex w-100 gap-10">
            <label className="text-xl">Star Rating: </label>
            <input
              type="text"
              className="block mt-1 p-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder=""
            />
          </div>
        </div>
      </div>

      <div className="w-[500px]">
        <div className="flex p-3 gap-10">
          <label className="text-gray-700">Packaging Type</label>
          <input
            type="text"
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="No Payment Required"
          />
        </div>
      </div>
    </div>
  );
};

export default AttributeForm;
