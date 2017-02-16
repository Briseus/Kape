import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import MessageForm from './../components/MessageForm'
import * as MessageActions from './../actions/Messages'

function mapDispatchToProps(dispatch) {
    return bindActionCreators(MessageActions, dispatch)
}

export default connect(null, mapDispatchToProps)(MessageForm)