import { combineReducers } from 'redux'
import ExamplePhoneBook from 'ducks/ExamplePhoneBook'

const appReducers = combineReducers({
  ExamplePhoneBook,
})

const rootReducers = (state, action) => appReducers(state, action)

export default rootReducers
