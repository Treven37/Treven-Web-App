//hooks

//assets

//components
import Space from '../components/Space'
import LinkButton from '../components/Button/LinkButton'
//styles
import '../styles/styleglobal.scss'

const Forgot = () => {
 	return (
	<form className='main'>
		<Space Flex='44%'/>
		<input class='uinput' type='text' placeHolder='Email or Contact Num..' />
		<Space Flex='11%'/>
		<LinkButton location='/verification' style='button1' text='Confirm'/>
	</form>  
	)
};

export default Forgot