import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Landing from './../Landing'
import * as UserActions from './../actions/User'

function mapStateToProps(state) {
    return {
        user: state.userStore.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(UserActions, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)