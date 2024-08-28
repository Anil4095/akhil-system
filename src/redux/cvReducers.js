const initialState = {
  name: '',
  email: '',
  phone: '',
  information: '', 
  education: [], 
  workExperience: [], 
  skills: [], 
};


const personalInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_PERSONAL_INFO':
      return {
        ...state,
        name: action.payload.name || state.name,
        email: action.payload.email || state.email,
        phone: action.payload.phone || state.phone,
      };
    default:
      return state;
  }
};

const educationReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case 'UPDATE_EDUCATION':
      console.log("education================", action)
      return action.payload;
    default:
      return state;
  }
};
const workExperienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_WORK_EXPERIENCE':
      return action.payload;
    default:
      return state;
  }
};

const skillsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SKILLS':
      return action.payload;
    default:
      return state;
  }
};
const moreInformation = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_INFORMATION':
      console.log("more information====", action.payload, action)
      return {
       information: action.payload
      }
    default:
      return state;
  }
};


export  {personalInfoReducer, educationReducer, workExperienceReducer, skillsReducer, moreInformation};

