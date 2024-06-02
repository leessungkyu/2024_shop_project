
export default function RadioGroup({label, shildren}){
	return(
		<fieldset>
			<legend>{label}</legend>
			{children}
		</fieldset>
	)
}