import React from 'react';
import { useSelector } from 'react-redux';

const CV = () => {
  const personalInfo = useSelector((state) => state);
  console.log("personal info", personalInfo)

  return (
    <div className="p-6 bg-white shadow-md rounded-md max-w-2xl mx-auto">
      {/* Personal Information */}
      <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">Personal Information - </h2>
        <h1 className="text-lg"><span className='text-1xl font-bold'>Name</span> : {personalInfo.name}</h1>
        <p className="text-lg"><span className='text-1xl font-bold'>Email</span> : {personalInfo.email}</p>
        <p className="text-lg"><span className='text-1xl font-bold'>Phone</span> : {personalInfo.phone}</p>
      </div>
      {/* Education Section */}
      {personalInfo.education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Education - </h2>
          {personalInfo.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg"><span className='text-1xl font-bold'>Degree</span> : {edu.degree}</h3>
              <p className="text-lg"><span className='text-1xl font-bold'>Institution</span> : {edu.institution}</p>
              <p className="text-lg text-gray-600"><span className='text-1xl font-bold'>Year</span> : {edu.year}</p>
            </div>
          ))}
        </div>
      )}
      {/* Work Experience Section */}
      {personalInfo.workExperience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Work Experience - </h2>
          {personalInfo.workExperience.map((work, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg"><span className='text-1xl font-bold'>Designation</span> : {work.position}</h3>
              <p className="text-lg"><span className='text-1xl font-bold'>Organization</span> : {work.company}</p>
              <p className="text-lg text-gray-600"><span className='text-1xl font-bold'>Total years</span> : {work.years}</p>
            </div>
          ))}
        </div>
      )}
      {/* Skills Section */}
      {personalInfo.skills.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-2">Skills - </h2>
          <ul className="list-disc list-inside">
            {personalInfo.skills.map((skill, index) => (
              <p key={index} className="text-lg">{skill}</p>
            ))}
          </ul>
        </div>
      )}
      {/* Additional Information */}
      {personalInfo.moreInfo && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Information - </h2>
          <p>More Info : {personalInfo?.moreInfo.information}</p>
        </div>
      )}
    </div>
  );
};

export default CV;
