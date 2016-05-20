import React, { Component } from 'react'
import { connect } from 'react-redux'
import { doneLoading } from './actions'

import Show from './show'

class App extends Component {

  render () {
    const { dispatch, talks, loading } = this.props

    return (
      <Show
        talks={talks}
        start={() => dispatch(doneLoading(true))}
        onSelectTalk={(item) => dispatch(console.log('talk clicked'))}
        loading={loading} />
    )
  }

}

function mapStateToProps (state, ownProps) {
  return {
    loading: state.get('loading'),
    talks: state.get('talks'),
  }
}

export default connect(mapStateToProps)(App)
