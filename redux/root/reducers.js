import { combineReducers } from 'redux'
import PhoneBook from 'ducks/PhoneBook'
import Counter from 'ducks/Counter'

const appReducers = combineReducers({
  PhoneBook,
  Counter,
})

const rootReducers = (state, action) => appReducers(state, action)

export default rootReducers
