const TalkItem = (props) => {
   return <li className="collection-item">{props.talk.get('title')}</li>
}

export default TalkItem
