// Pure functions that return a JSON
import { CHANGE_MAIN_COLOR } from '../Constants/Actions/ConfigActions'

export function changeAppColor (color) {
  return {
    type: CHANGE_MAIN_COLOR,
    payload: color
  }
}