import { takeEvery ,all} from 'redux-saga/effects'
import { requestDrink } from '../features/drinkSlice'
import { requestFood, requestOneFood, searchFood } from '../features/foodSlice'
import slideSlice from '../features/slideSlice'
import { workerSagaFood, workerSagaSearchFood, workerSageOneFood } from './fectchFood'
import { workerSagaFetchSlideImg } from './fectchSlideImg'
import { workerSagaDrink } from './fetchDrink'
export function* watcherSaga() {
    yield all ([
        takeEvery(slideSlice.actions.fetchImg, workerSagaFetchSlideImg),
        takeEvery(requestDrink,workerSagaDrink) , 
        takeEvery(requestFood,workerSagaFood) ,
        takeEvery(requestOneFood , workerSageOneFood) ,
        takeEvery(searchFood ,workerSagaSearchFood )
    ])
}