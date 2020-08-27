export const COUNTER_ME = 'COUNTER_ME'
export const LOAD_CONTACT = 'LOAD_CONTACT'

const INITIAL_STATE = {
  counterVal: 0,
  contacts: {},
}

const Counter = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case COUNTER_ME:
    return {
      ...state,
      counterVal: payload,
    }

  case LOAD_CONTACT:
    return {
      ...state,
      contacts: payload,
    }

  default:
    return state
  }
}

export function CounterReset(payload) {
  return {
    type: COUNTER_ME,
    payload,
  }
}

export function incrementCounter(payload) {
  return {
    type: COUNTER_ME,
    payload: payload + 1,
  }
}

export function decrementCounter(payload) {
  return {
    type: COUNTER_ME,
    payload: payload - 1,
  }
}

export function setPostContact(post) {
  return {
    type: LOAD_CONTACT,
    payload: post,
  }
}

export default Counter
