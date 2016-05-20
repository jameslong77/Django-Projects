import TalkItem from './item'

const TalksList = (props) => {
  return (
    <ul className="collection">
      {props.talks.map(item => <TalkItem talk={item} key={item.get('id')} />)}
    </ul>
  )
}

export default TalksList
