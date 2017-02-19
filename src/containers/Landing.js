import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Landing from './../Landing'
import * as UserActions from './../actions/User'

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(UserActions, dispatch)

}

export default connect(null, mapDispatchToProps)(Landing)