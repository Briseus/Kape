import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Chat from './../Chat'

function mapStateToProps(state) {
    return {
        user: state.userStore.user
    }
}

export default connect(mapStateToProps, null)(Chat)