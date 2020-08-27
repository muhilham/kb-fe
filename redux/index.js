import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { createWrapper } from 'next-redux-wrapper'

import rootReducers from './root/reducers'

export default function initStore(initialState) {
  const logger = createLogger({ collapsed: true })

  const middlewares = process.env.NODE_ENV !== 'production'
    ? [thunkMiddleware, logger]
    : [thunkMiddleware]

  const store = createStore(
    rootReducers,
    initialState,
    applyMiddleware(...middlewares),
  )

  return store
}

// export an assembled wrapper
export const wrapper = createWrapper(() => initStore(), { debug: true })
