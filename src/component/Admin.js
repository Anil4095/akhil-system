import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  updateEducation,
  updateInformation,
  updatePersonalInfo,
  updateSkills,
  updateWorkExperience,
} from "../redux/actions";

const AdminTool = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [information, setInformation] = useState("");
  const [education, setEducation] = useState([
    { degree: "", institution: "", year: "" },
  ]);
  const [workExperience, setWorkExperience] = useState([
    { position: "", company: "", years: "" },
  ]);
  const [skills, setSkills] = useState([""]);
  const handleSave = () => {
    dispatch(updatePersonalInfo({ name, email, phone }));
    dispatch(updateInformation(information));
    dispatch(updateEducation(education));
    dispatch(updateWorkExperience(workExperience));
    dispatch(updateSkills(skills));

    localStorage.setItem(
      "personalInfo",
      JSON.stringify({ name, email, phone })
    );
    localStorage.setItem("information", JSON.stringify(information));
    localStorage.setItem("education", JSON.stringify(education));
    localStorage.setItem("workExperience", JSON.stringify(workExperience));
    localStorage.setItem("skills", JSON.stringify(skills));
    navigate("/cv");
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...education];
    updatedEducation[index][field] = value;
    setEducation(updatedEducation);
  };

  const handleWorkExperienceChange = (index, field, value) => {
    const updatedWorkExperience = [...workExperience];
    updatedWorkExperience[index][field] = value;
    setWorkExperience(updatedWorkExperience);
  };

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
  };

  const addEducation = () => {
    setEducation([...education, { degree: "", institution: "", year: "" }]);
  };

  const addWorkExperience = () => {
    setWorkExperience([
      ...workExperience,
      { position: "", company: "", years: "" },
    ]);
  };

  const addSkill = () => {
    setSkills([...skills, ""]);
  };

  return (
    <div className="p-4 space-y-4">
      {/* Personal Information Section */}
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">Personal Information</h3>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full"
        />
        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border p-2 w-full"
        />
      </div>

      {/* Education Section */}
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">Education</h3>
        {education.map((edu, index) => (
          <div key={index} className="space-y-1">
            <input
              type="text"
              placeholder="Degree"
              value={edu.degree}
              onChange={(e) =>
                handleEducationChange(index, "degree", e.target.value)
              }
              className="border p-2 w-full"
            />
            <input
              type="text"
              placeholder="Institution"
              value={edu.institution}
              onChange={(e) =>
                handleEducationChange(index, "institution", e.target.value)
              }
              className="border p-2 w-full"
            />
            <input
              type="text"
              placeholder="Year"
              value={edu.year}
              onChange={(e) =>
                handleEducationChange(index, "year", e.target.value)
              }
              className="border p-2 w-full"
            />
          </div>
        ))}
        <button
          onClick={addEducation}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add Education
        </button>
      </div>
      {/* Work Experience Section */}
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">Work Experience</h3>
        {workExperience.map((work, index) => (
          <div key={index} className="space-y-1">
            <input
              type="text"
              placeholder="Position"
              value={work.position}
              onChange={(e) =>
                handleWorkExperienceChange(index, "position", e.target.value)
              }
              className="border p-2 w-full"
            />
            <input
              type="text"
              placeholder="Company"
              value={work.company}
              onChange={(e) =>
                handleWorkExperienceChange(index, "company", e.target.value)
              }
              className="border p-2 w-full"
            />
            <input
              type="text"
              placeholder="Years"
              value={work.years}
              onChange={(e) =>
                handleWorkExperienceChange(index, "years", e.target.value)
              }
              className="border p-2 w-full"
            />
          </div>
        ))}
        <button
          onClick={addWorkExperience}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add Work Experience
        </button>
      </div>
      {/* Skills Section */}
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">Skills</h3>
        {skills.map((skill, index) => (
          <div key={index} className="space-y-1">
            <input
              type="text"
              placeholder="Skill"
              value={skill}
              onChange={(e) => handleSkillChange(index, e.target.value)}
              className="border p-2 w-full"
            />
          </div>
        ))}
        <button
          onClick={addSkill}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add Skill
        </button>
      </div>
      {/* Additional Information Section */}
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">Additional Information</h3>
        <textarea
          placeholder="Information"
          value={information}
          onChange={(e) => setInformation(e.target.value)}
          className="border p-2 w-full"
        />
      </div>

      <button
        onClick={handleSave}
        className="bg-green-500 text-white p-2 rounded w-52"
      >
        Save
      </button>
    </div>
  );
};

export default AdminTool;
