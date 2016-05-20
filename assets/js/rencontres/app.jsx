import React, { Component } from 'react'
import { connect } from 'react-redux'
import { doneLoading, talkSelected } from './actions'

import Show from './show'

class App extends Component {

  render () {
    const { dispatch, talks, selectedTalks, loading } = this.props

    return (
    <Show
      talks={talks}
      selectedTalks={selectedTalks}
      start={() => dispatch(doneLoading(true))}
      onSelectTalk={(item) => dispatch(talkSelected(item))}
      loading={loading} />
    )
  }

}

function mapStateToProps (state, ownProps) {
  return {
    loading: state.get('loading'),
    talks: state.get('talks'),
    selectedTalks: state.get('talksSelected')
  }
}

export default connect(mapStateToProps)(App)
