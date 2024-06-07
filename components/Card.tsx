import Image from "next/image";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

interface jobType {
  id: number;
  logo: string;
  title: string;
  pay: string;
  location: string;
  skills: string[];
  views: number;
  applied: number;
}

const Card = ({ title, pay, location, skills, views, applied }: jobType) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col md:flex-row items-center w-full justify-between">
      <div className="flex flex-col items-start space-y-2 md:flex-row md:space-y-0 md:space-x-4 mb-4 md:mb-0">
        <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
          <Image src="/logo.png" alt="Company Logo" width={32} height={32} />
        </div>
        <div>
          <div className="text-gray-500">Role</div>
          <div className="text-lg font-semibold">{title}</div>
        </div>
      </div>
      <div className="flex flex-col items-start space-y-2 md:flex-row md:space-y-0 md:space-x-4 mb-4 md:mb-0">
        <div>
          <div className="text-gray-500">Pay</div>
          <div className="text-xl font-semibold">{pay}</div>
        </div>
      </div>
      <div className="flex flex-col items-start space-y-2 md:flex-row md:space-y-0 md:space-x-4 mb-4 md:mb-0">
        <div>
          <div className="text-gray-500">Location</div>
          <div className="text-lg font-semibold">{location}</div>
        </div>
      </div>
      <div className="flex flex-col items-start space-y-2 md:flex-row md:space-y-0 md:space-x-4 mb-4 md:mb-0">
        <div>
          <div className="text-gray-500">Skills</div>
          <div className="flex space-x-2">
            <Image
              src="https://cdn.worldvectorlogo.com/logos/typescript.svg"
              alt="TypeScript"
              width={24}
              height={24}
            />
            <Image
              src="https://cdn.worldvectorlogo.com/logos/ruby.svg"
              alt="Ruby"
              width={24}
              height={24}
            />

            <Image
              src="https://cdn.worldvectorlogo.com/logos/python-5.svg"
              alt="Python"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end space-y-4 ">
        <BsThreeDotsVertical />
        <div className="flex flex-row items-center">
          <div className="flex items-center text-gray-600">
            <svg
              className="w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16h10M7 20h4"
              ></path>
            </svg>
            400
          </div>
          <div className="flex items-center text-gray-600">
            <svg
              className="w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 8h10M7 12h4"
              ></path>
            </svg>
            {applied}
          </div>
          <div className="flex items-center text-gray-600">
            <svg
              className="w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 10l4.55-1.32A1 1 0 0121 9.8V15a1 1 0 01-.45.83l-4.55 2.65a1 1 0 01-.9 0l-4.55-2.65a1 1 0 01-.45-.83V9.8a1 1 0 01.45-.83L15 10zm-5 5l-4.55-2.65A1 1 0 015 12V7a1 1 0 01.45-.83L10 3.52a1 1 0 01.9 0l4.55 2.65a1 1 0 01.45.83v5a1 1 0 01-.45.83L10 15zm0 0v5"
              ></path>
            </svg>
            {views}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
