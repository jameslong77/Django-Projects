import { List } from 'immutable'
import { PropTypes } from 'react'
import TalkItem from './item'

const TalksList = (props) => {
  return (
    <div className="row">
      {props.talks.map(item => <TalkItem talk={item} onSelectTalk={props.onSelectTalk} selectedTalks={props.selectedTalks} key={item.get('id')} />)}
    </div>
  )
}

TalksList.propTypes = {
  talks: PropTypes.instanceOf(List).isRequired,
};

export default TalksList
