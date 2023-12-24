import Image from "next/image";

export default function Home() {
  return (
    <main>
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
          <form className="container mx-auto p-4">
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
                  type="text"
                  placeholder="Enter father's name"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-[#0000ff]  font-bold mb-2"
                  htmlFor="nationality"
                >
                  Nationality*
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-[#0000ff]  leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                  id="nationality"
                  type="text"
                  placeholder="Enter nationality"
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
                >
                  <option value="">-- Select VDC --</option>
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
                  type="text"
                  placeholder="Enter ward"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-[#0000ff]  font-bold mb-2"
                  htmlFor="email"
                >
                  Email*
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-[#0000ff]  leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                  id="email"
                  type="email"
                  placeholder="Enter email"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-[#0000ff]  font-bold mb-2"
                  htmlFor="mobileNumber"
                >
                  Mobile Number
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-[#0000ff]  leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                  id="mobileNumber"
                  type="tel"
                  placeholder="Enter mobile number"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-[#0000ff]  font-bold mb-2"
                  htmlFor="telephoneNumber"
                >
                  Telephone Number*
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-[#0000ff]  leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                  id="telephoneNumber"
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
                  htmlFor="board"
                >
                  Board*
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-[#0000ff]  leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                  id="board"
                  type="text"
                  placeholder="Enter board"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-[#0000ff]  font-bold mb-2"
                  htmlFor="slcYear"
                >
                  SLC Year*
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-[#0000ff]  leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                  id="slcYear"
                  type="text"
                  placeholder="Enter SLC year"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-[#0000ff]  font-bold mb-2"
                  htmlFor="gpaPercentage"
                >
                  GPA/Percentage*
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-[#0000ff]  leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                  id="gpaPercentage"
                  type="text"
                  placeholder="Enter GPA or percentage"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-[#0000ff]  font-bold mb-2"
                  htmlFor="division"
                >
                  Division
                </label>
                <select
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-[#0000ff]  leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                  id="division"
                >
                  <option value="">-- Distinction --</option>
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
                  htmlFor="board"
                >
                  Board*
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-[#0000ff]  leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                  id="board"
                  type="text"
                  placeholder="Enter board"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-[#0000ff]  font-bold mb-2"
                  htmlFor="slcYear"
                >
                  SLC Year*
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-[#0000ff]  leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                  id="slcYear"
                  type="text"
                  placeholder="Enter SLC year"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-[#0000ff]  font-bold mb-2"
                  htmlFor="gpaPercentage"
                >
                  GPA/Percentage*
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-[#0000ff]  leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                  id="gpaPercentage"
                  type="text"
                  placeholder="Enter GPA or percentage"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-[#0000ff]  font-bold mb-2"
                  htmlFor="division"
                >
                  Division
                </label>
                <select
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-[#0000ff]  leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                  id="division"
                >
                  <option value="">-- Distinction --</option>
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
                  htmlFor="totalMarks"
                >
                  Total Marks Obtained*
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-[#0000ff]  leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                  id="totalMarks"
                  type="text"
                  placeholder="Enter total marks obtained"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-[#0000ff]  font-bold mb-2"
                  htmlFor="symbolNo"
                >
                  Symbol No.*
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-[#0000ff]  leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                  id="symbolNo"
                  type="text"
                  placeholder="Enter symbol number"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-[#0000ff]  font-bold mb-2"
                  htmlFor="program"
                >
                  Program
                </label>
                <select
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-[#0000ff]  leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                  id="program"
                >
                  <option value="">B.Sc. (Agriculture) 2077/078</option>
                </select>
              </div>
            </div>
            <div className="flex items-center mb-5">
              <input
                type="checkbox"
                id="termsCheckbox"
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
}
