import PropTypes from 'prop-types';

function App({name}) {


	return <div>{name}</div>
}

App.propTypes = {name: PropTypes.string.isRequired}
App.defaultProps = {name: 'Zach'}

export default App
