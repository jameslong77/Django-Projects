import { List, Map, fromJS } from 'immutable'
import * as actionTypes from './actions'

const talks = fromJS([
    {id: 1, title: 'Statics et Django : quand collectstatic ne suffit plus'},
    {id: 2, title: 'Comment utiliser Jinja 2 avec Django ?'},
    {id: 3, title: "L'état de l'art des apps de traductions de modèles"}
])

const initialState = Map({
  talks,
  loading: true
})

export default function (state = initialState, action) {
  switch (action.type) {
    case 'showTalks':
      return state

    case actionTypes.DONE_LOADING:
      return state.merge({loading: false})

    default:
      return state
  }
}
