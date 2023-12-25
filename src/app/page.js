"use client"

import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import Export from '@/component/Export';

const YourFormComponent = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    fatherName: "",
    Nationality: "",
    district: "",
    vdc: "",
    ward: "",
    Email: "",
    MobileNumber: "",
    TelephoneNumber: "",
    SLCBoard: "",
    SLCGPAPercentage: "",
    gpaPercentageSEE: "",
    SLCDivision: "First Division",
    IntermediateUniversity: "",
    IntermediateGPAPercentage: "",
    gpaPercentageIntermediate: "",
    IntermediateDIvision: "First Division",
    TotalMarks: "",
    SymbolNo: "",
    Program: "B.Sc. (Agriculture) 2077/078",
    termsCheckbox: false,
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log("Form Data:", formData);
    try {
      const response = await axios.post(
        "https://online.gaasc.edu.np/api/application-entities",
        {
          data: { ...formData },
        }
      );

      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <main>
      <Export />
      <div className="mx-5 sm:mx-10 lg:mx-20 xl:mx-40 my-10 flex flex-col justify-center gap-5 rounded-lg shadow-2xl p-6">
        <div className="flex flex-col justify-center items-center gap-5">
          <Image
            src="/gaasc_logo.png"
            alt="logo"
            width={413}
            height={95}
            priority
          />
          <span className="p-2 xl:px-20 text-center bg-[#ff0000] text-white italic sm:text-[20px] border-2 border-black rounded-lg">
            Name Registration Form
          </span>
        </div>
        <div>
        <form className="container mx-auto p-4" onSubmit={handleSubmit}>
            <div className="text-[20px] font-bold border-b-2 my-5">
              Personal Information
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              <div className="mb-4">
                <label
                  className="block text-[#0000ff]  font-bold mb-2"
                  htmlFor="studentName"
                >
                  Student&apos;s Name*
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-[#0000ff]  leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                  id="studentName"
                  type="text"
                  value={formData.studentName}
                  onChange={handleInputChange}
                  placeholder="Enter student's name"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-[#0000ff]  font-bold mb-2"
                  htmlFor="fatherName"
                >
                  Father&apos;s Name*
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-[#0000ff]  leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                  id="fatherName"
                  value={formData.fatherName}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Enter father's name"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-[#0000ff]  font-bold mb-2"
                  htmlFor="Nationality"
                >
                  Nationality*
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-[#0000ff]  leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                  id="Nationality"
                  value={formData.Nationality}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Enter Nationality"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-[#0000ff]  font-bold mb-2"
                  htmlFor="district"
                >
                  District
                </label>
                <select
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-[#0000ff]  leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                  id="district"
                  onChange={handleInputChange}
                  defaultValue={formData.district}
                >
                  <option value="">-- Select District --</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  className="block text-[#0000ff]  font-bold mb-2"
                  htmlFor="vdc"
                >
                  VDC/Municipality*
                </label>
                <select
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-[#0000ff]  leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                  id="vdc"
                  onChange={handleInputChange}
                >
                  <option value={formData.vdc}>-- Select VDC --</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  className="block text-[#0000ff]  font-bold mb-2"
                  htmlFor="ward"
                >
                  Ward*
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-[#0000ff]  leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                  id="ward"
                  value={formData.ward}
                  onChange={handleInputChange}
                  type="number"
                  placeholder="Enter ward"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-[#0000ff]  font-bold mb-2"
                  htmlFor="Email"
                >
                  Email*
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-[#0000ff]  leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                  id="Email"
                  value={formData.Email}
                  onChange={handleInputChange}
                  type="Email"
                  placeholder="Enter Email"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-[#0000ff]  font-bold mb-2"
                  htmlFor="MobileNumber"
                >
                  Mobile Number
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-[#0000ff]  leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                  id="MobileNumber"
                  value={formData.MobileNumber}
                  onChange={handleInputChange}
                  type="number"
                  placeholder="Enter mobile number"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-[#0000ff]  font-bold mb-2"
                  htmlFor="TelephoneNumber"
                >
                  Telephone Number*
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-[#0000ff]  leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                  id="TelephoneNumber"
                  value={formData.TelephoneNumber}
                  onChange={handleInputChange}
                  type="tel"
                  placeholder="Enter telephone number"
                />
              </div>
            </div>
            <div className="text-[20px] font-bold border-b-2 my-5">
              SEE / SLC / Equivalent
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              <div className="mb-4">
                <label
                  className="block text-[#0000ff]  font-bold mb-2"
                  htmlFor="SLCBoard"
                >
                  Board*
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-[#0000ff]  leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                  id="SLCBoard"
                  value={formData.SLCBoard}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Enter board"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-[#0000ff]  font-bold mb-2"
                  htmlFor="SLCGPAPercentage"
                >
                  SLC Year*
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-[#0000ff]  leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                  id="SLCGPAPercentage"
                  value={formData.SLCGPAPercentage}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Enter SLC year"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-[#0000ff]  font-bold mb-2"
                  htmlFor="gpaPercentageSEE"
                >
                  GPA/Percentage*
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-[#0000ff]  leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                  id="gpaPercentageSEE"
                  value={formData.gpaPercentageSEE}
                  onChange={handleInputChange}
                  type="number"
                  placeholder="Enter GPA or percentage"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-[#0000ff]  font-bold mb-2"
                  htmlFor="SLCDivision"
                >
                  Division
                </label>
                <select
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-[#0000ff]  leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                  id="SLCDivision"
                  onChange={handleInputChange}
                >
                  <option value={formData.SLCDivision}>
                    -- Distinction --
                  </option>
                </select>
              </div>
            </div>
            <div className="text-[20px] font-bold border-b-2 my-5">
              Intermediate / +2/ I.Sc.Ag.
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              <div className="mb-4">
                <label
                  className="block text-[#0000ff]  font-bold mb-2"
                  htmlFor="IntermediateUniversity"
                >
                  Board*
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-[#0000ff]  leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                  id="IntermediateUniversity"
                  onChange={handleInputChange}
                  value={formData.IntermediateUniversity}
                  type="text"
                  placeholder="Enter board"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-[#0000ff]  font-bold mb-2"
                  htmlFor="IntermediateGPAPercentage"
                >
                  SLC Year*
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-[#0000ff]  leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                  id="IntermediateGPAPercentage"
                  value={formData.IntermediateGPAPercentage}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Enter SLC year"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-[#0000ff]  font-bold mb-2"
                  htmlFor="gpaPercentageIntermediate"
                >
                  GPA/Percentage*
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-[#0000ff]  leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                  id="gpaPercentageIntermediate"
                  value={formData.gpaPercentageIntermediate}
                  onChange={handleInputChange}
                  type="number"
                  placeholder="Enter GPA or percentage"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-[#0000ff]  font-bold mb-2"
                  htmlFor="IntermediateDIvision"
                >
                  Division
                </label>
                <select
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-[#0000ff]  leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                  id="IntermediateDIvision"
                  onChange={handleInputChange}
                >
                  <option value={formData.IntermediateDIvision}>
                    -- Distinction --
                  </option>
                </select>
              </div>
            </div>
            <div className="text-[20px] font-bold border-b-2 my-5">
              T.U. B.Sc.Ag Entrance exam *
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              <div className="mb-4">
                <label
                  className="block text-[#0000ff]  font-bold mb-2"
                  htmlFor="TotalMarks"
                >
                  Total Marks Obtained*
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-[#0000ff]  leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                  id="TotalMarks"
                  onChange={handleInputChange}
                  value={formData.TotalMarks}
                  type="number"
                  required
                  placeholder="Enter total marks obtained"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-[#0000ff]  font-bold mb-2"
                  htmlFor="SymbolNo"
                >
                  Symbol No.*
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-[#0000ff]  leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                  id="SymbolNo"
                  value={formData.SymbolNo}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Enter symbol number"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-[#0000ff]  font-bold mb-2"
                  htmlFor="Program"
                >
                  Program
                </label>
                <select
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-[#0000ff]  leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                  id="Program"
                  onChange={handleInputChange}
                >
                  <option value={formData.Program}>
                    B.Sc. (Agriculture) 2077/078
                  </option>
                </select>
              </div>
            </div>
            <div className="flex items-center mb-5">
              <input
                type="checkbox"
                id="termsCheckbox"
                checked={formData.termsCheckbox}
                required
                onChange={(e) =>
                  setFormData({ ...formData, termsCheckbox: e.target.checked })
                }
                className="htmlForm-checkbox h-5 w-5 text-indigo-600"
              />
              <label htmlFor="termsCheckbox" className="ml-2 text-[#0000ff] ">
                I have read the terms and conditions
              </label>
            </div>

            <button
              className="mx-auto bg-[#5cb85c] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default YourFormComponent;