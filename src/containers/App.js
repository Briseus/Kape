import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import App from './../App'
import * as MessageActions from './../actions/Messages'

function mapStateToProps(state) {
    return {
        messages: state.messageStore.messages,
        user: state.userStore.user
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(MessageActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)