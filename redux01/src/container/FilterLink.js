
import { connect } from 'react-redux'
import { setVisibleFilter } from '../action/index'
import Link from '../component/Link'



const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibleFilter
})
const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibleFilter(ownProps.filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)