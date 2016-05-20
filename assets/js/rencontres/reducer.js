import { List, Set, Map, fromJS } from 'immutable'
import * as actionTypes from './actions'

const talks = fromJS([
    {
      id: 1,
      title: 'Statics et Django : quand collectstatic ne suffit plus',
      description: `Dans les cas simples, Django nous fournit avec collectstatic un outil simple et performant pour intégrer nos images, JS et autres CSS à nos applications.

Lorsque les projets grossissent, de nouvelles contraintes apparaissent : statics déployés sur un CDN, compilation et minification du JS, HTTP/2, etc.

Voyons donc comment Django peut s'adapter à ces nouveaux cas !`
    },
    {
      id: 2,
      title: 'Comment utiliser Jinja 2 avec Django ?',
      description: `Django ≥ 1.8 propose une intégration native de Jinja 2, un moteur de templates inspiré de celui de Django mais plus souple et plus performant.

Si les templates Django et Jinja 2 partagent une syntaxe similaire, leur configuration et leurs possibilités d’extension sont différentes.

Nous illustrerons comment remplacer les "template tags” habituels et comment exploiter la puissance de Jinja 2.`
    },
    {
      id: 3,
      title: "L'état de l'art des apps de traductions de modèles",
      description: "Description à venir..."
    }
])

const initialState = Map({
  talks,
  talksSelected: Set(),
  loading: true
})

function selectTalk (state, talkId) {
  if (state.get('talksSelected').has(talkId)) {
    return state.update('talksSelected', set => set.delete(talkId));
  }
  return state.update('talksSelected', set => set.add(talkId));
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.TALK_SELECTED:
      return selectTalk(state, action.talk)

    case actionTypes.DONE_LOADING:
      return state.merge({loading: false})

    default:
      return state
  }
}
