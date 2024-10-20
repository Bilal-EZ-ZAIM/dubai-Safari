import {createStore} from 'redux'
import { reducer } from './redcure'
export const store = createStore(reducer)