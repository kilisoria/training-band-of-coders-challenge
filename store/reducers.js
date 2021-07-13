import { combineReducers } from 'redux'
import tasks from './tasks/reducer';


const reducers = {
  tasks
}

export default combineReducers(reducers)
