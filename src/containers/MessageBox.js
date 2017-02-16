
import { connect } from 'react-redux'

import MessageBox from './../components/MessageBox'
import * as MessageActions from './../actions/Messages'

function mapStateToProps(state) {
    return {
        messages: state.messages
    }
}

export default connect(mapStateToProps, null)(MessageBox)