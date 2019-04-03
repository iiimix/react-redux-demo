
import React from 'react';
import PropTypes from 'prop-types'

class Link extends React.Component {
    render() {
        const { onClick, active, children } = this.props;
        return (
            <button
                onClick={onClick}
                disabled={active}
                style={{
                    marginLeft: '4px'
                }}>
                {children}
            </button>
        )
    }
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link