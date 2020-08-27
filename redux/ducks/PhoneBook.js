import { HYDRATE } from 'next-redux-wrapper'

export const PHONEBOOK_LOAD = 'PHONEBOOK_LOAD'

const INITIAL_STATE = {
  contacts: {},
}

const PhoneBook = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case HYDRATE:
    return {
      ...state.PhoneBook,
      ...payload.PhoneBook,
    }

  case PHONEBOOK_LOAD:
    return {
      ...state,
      contacts: payload,
    }

  default:
    return state
  }
}

export function setPostContact(payload) {
  return {
    type: PHONEBOOK_LOAD,
    payload,
  }
}

export default PhoneBook
