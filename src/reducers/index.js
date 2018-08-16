import { combineReducers } from 'redux';
import session from "./session"
import tasks from "./tasks"

const reducers = {
    tasks,
    session
  };
  
  module.exports = combineReducers(reducers);