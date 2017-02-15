import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import MessageBox from './../components/MessageBox'
import * as MessageActions from './../actions/Messages'

function mapStateToProps(state) {
    return {
        messages: state.messages
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(MessageActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageBox)