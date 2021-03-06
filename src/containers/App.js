import { connect } from 'react-redux'
import App from './../App'

function mapStateToProps(state) {
    return {
        user: state.userStore.user
    }
}

export default connect(mapStateToProps, null)(App)