import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Test from './../Create'
import * as UserActions from './../actions/User'

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(UserActions, dispatch)

}

export default connect(null, mapDispatchToProps)(Test)