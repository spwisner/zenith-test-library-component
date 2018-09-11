/**
* InputComponent
*
* Test Input Component which handles the rendering of Zenith single text inputs
*/

import React, {PropTypes } from 'react'

const ValidationInputComponent = ({ id, inputContainerClass, inputClass, value, placeholder, onBlur, onChange, onFocus, autoComplete, tabIndex, errMessage, errorBottom, validEntity, imageContainer, type, ref}) => (
	<div className={inputContainerClass}>
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
		{errMessage &&
			<small className={errorBottom}>{errMessage}</small>
		}
		{!errMessage && validEntity &&
			<div className={imageContainer}>
				<img src="https://www.buyerzone.com/images/zenith/validationSuccessCheckAnimation.gif" />
			</div>
		}
	</div>
)

ValidationInputComponent.propTypes = {
	answerText: PropTypes.string,
	autoComplete: PropTypes.string.isRequired,
	errMessage: PropTypes.string,
	errorBottom: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	imageContainer: PropTypes.string.isRequired,
	inputClass: PropTypes.string.isRequired,
	inputContainerClass: PropTypes.string.isRequired,
	onBlur: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	onFocus: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	ref: PropTypes.string,
	tabIndex: PropTypes.number.isRequired,
	type: PropTypes.string.isRequired,
	validEntity: PropTypes.bool.isRequired,
	value: PropTypes.string.isRequired
}

export default ValidationInputComponent
