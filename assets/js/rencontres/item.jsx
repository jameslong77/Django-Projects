import classNames from 'classnames'

const TalkItem = (props) => {
  const talk = props.talk
  const selectedTalks = props.selectedTalks

  let className = classNames({
      card: true,
      blue: selectedTalks.has(talk.get('id')),
      purple: !selectedTalks.has(talk.get('id')),
      'darken-1': true
    });

  return (
    <div className="col s12 m6">
      <div className={className}>
        <div className="card-content white-text">
          <span className="card-title">{talk.get('title')}</span>
          <p>{props.talk.get('description')}</p>
        </div>
        <div className="card-action">
          <a onClick={(e) => props.onSelectTalk(talk.get('id'))}>Selectionner</a>
        </div>
      </div>
    </div>
  )
}

export default TalkItem
