import { createStore, combineReducers } from 'redux';
import { educationReducer, moreInformation, personalInfoReducer, skillsReducer, workExperienceReducer } from './cvReducers';


const rootReducer = combineReducers({
  personalInfo: personalInfoReducer,
  education: educationReducer,
  workExperience: workExperienceReducer,
  skills: skillsReducer,
  moreInfo: moreInformation,
});

const store = createStore(rootReducer);

export default store;
