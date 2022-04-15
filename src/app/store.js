import { configureStore } from '@reduxjs/toolkit';
import couterReducer from '../features/counter/counterSlice';
import slideSlice from '../features/slideSlice';
import { watcherSaga } from '../redux-saga/watcherSaga';
import createSagaMiddleware from 'redux-saga'
import drinkReducer from '../features/drinkSlice'
import roomReducer from '../features/roomSlice' 
import foodReducer from '../features/foodSlice';
const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer: {
    couter: couterReducer,
    slide: slideSlice.reducer,
    drink: drinkReducer,
    room : roomReducer ,
    food : foodReducer , 
  },
  middleware: (defaultMiddleware) => defaultMiddleware().concat(sagaMiddleware)

})
sagaMiddleware.run(watcherSaga)
export { store }