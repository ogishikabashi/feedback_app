import PropTypes  from "prop-types"
function Card({children, reverse}) {
    //this here is conditional class
//   return (<div className={`card ${reverse && 'reverse'}`}>{children}</div>

    return (
//conditional styling
        <div className="card" style={{
            backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
            color: reverse ? '#fff' : '#000'
        }}>
            {children}
        </div>
    )
}

//default prop for reverse condition
Card.defaultProps = {
    reverse: false
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}


export default Card