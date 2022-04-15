import { put, call } from 'redux-saga/effects'
import axios from 'axios'
import { getDrink } from '../features/drinkSlice'
const fetchDrink = async () => {
    try {
        const res = await axios('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=beer')
        const drinks = res.data.drinks.map(drink => {
            const { idDrink: id,
                strDrinkThumb: img,
                strDrink: name,
                strCategory: category,
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strInstructions: instruction,
            } = drink
            const ingredient = [

                strIngredient1,
                strIngredient2,
                strIngredient3,
            ]

            return { id, img, name, category, instruction, ingredient }
        })
        return drinks
    } catch (error) {
        console.log(error)
    }

}
export function* workerSagaDrink() {
    const img = yield call(fetchDrink)
    yield put(getDrink(img))
}