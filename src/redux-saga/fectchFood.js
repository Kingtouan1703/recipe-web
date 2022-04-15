
import { put, call } from 'redux-saga/effects'
import axios from 'axios'
import { getFood, getOneFood, getSearchFood } from '../features/foodSlice'
const fetchFood = async () => {
    try {
        const res = await axios('https://www.themealdb.com/api/json/v1/1/search.php?s=steak')
        const drinks = res.data.meals.map(meal => {
            const {
                idMeal: id,
                strMealThumb: img,
                strMeal: name,
                strCategory: category,
                strInstructions: instruction,
            } = meal
            return { id, img, name, category, instruction }
        })
        return drinks
    } catch (error) {
        console.log(error)
    }

}
const fetchOneFood = async (id) => {
    try {
        const res = await axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)

        const {
            strArea: location,
            strCategory: category,
            strMeal: name,
            strMealThumb: img,
            strIngredient1: ingredient1,
            strIngredient2: ingredient2,
            strIngredient3: ingredient3,
            strIngredient4: ingredient4,
            strIngredient5: ingredient5,
            strInstructions: instruction,
        } = res.data.meals[0]
        return {
            location, category, name, img, ingredient1, instruction, ingredient2, ingredient3, ingredient4, ingredient5
        }
    } catch (error) {
        console.log(error)
    }
}
const searchingFood = async (query) => {
    try {
        const res = await axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        if (!res.data.meals) return null
        else {
            const arrayFood = res.data.meals.map(item => {
                const {
                    idMeal: id,
                    strArea: location,
                    strCategory: category,
                    strMeal: name,
                    strMealThumb: img,
                } = item
                return { location ,name,category , img  ,id}
            })
            console.log(arrayFood)
            return arrayFood 
        }
    } catch (error) {
        console.log(error)
    }
}

export function* workerSagaFood() {
    const food = yield call(fetchFood)
    yield put(getFood(food))
}
export function* workerSageOneFood(action) {
    const food = yield call(() => fetchOneFood(action.payload))
    yield put(getOneFood(food))
}
export function* workerSagaSearchFood(action) {
    const food = yield call(() => searchingFood(action.payload))

    yield put(getSearchFood(food))
}