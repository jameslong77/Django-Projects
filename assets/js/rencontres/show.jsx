import TalksList from './list'

function handleClick(props) {
  props.start()
}

const Show = function(props) {
  console.log(props)
    if (props.loading) {
      return <div className="btn-large waves-effect waves-light orange" onClick={handleClick.bind(this, props)}>Démarrer</div>
    }

    return <TalksList talks={props.talks} />
}

export default Show
