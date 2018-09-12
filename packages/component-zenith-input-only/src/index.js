/**
* ZenithInputOnly
*
* ZenithInputOnly which handles input within the Zenith Validation package
*/

import React, {PropTypes } from 'react'

const ZenithInputOnly = ({ id, inputClass, value, placeholder, onBlur, onChange, onFocus, autoComplete, tabIndex, type }) => (
	<input
		type={type}
		ref='textInput'
		className={inputClass}
		id={id}
		value={value}
		placeholder={placeholder}
		onBlur={onBlur}
		onChange={onChange}
		onFocus={onFocus}
		autoComplete={autoComplete}
		tabIndex={tabIndex}
	/>
)

ZenithInputOnly.propTypes = {
	autoComplete: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	inputClass: PropTypes.string.isRequired,
	onBlur: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	onFocus: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	tabIndex: PropTypes.number.isRequired,
	type: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired
}

export default ZenithInputOnly
