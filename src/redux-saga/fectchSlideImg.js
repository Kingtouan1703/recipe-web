import { put, call } from 'redux-saga/effects'
import slideSlice from '../features/slideSlice'
import axios  from 'axios'
const fetchImg = async () => {
    try {
        const data = await axios('https://www.themealdb.com/api/json/v1/1/random.php')
        return data.data.meals[0].strMealThumb
    } catch (error) {
        console.log(error)
    }

}
export function* workerSagaFetchSlideImg() {
    const img = yield call(fetchImg)
    const img1 = yield call(fetchImg)
    const img2 = yield call(fetchImg)
    yield put(slideSlice.actions.getImg([img,img1,img2]))
}