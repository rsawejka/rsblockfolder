/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */


export default function save({ attributes }) {
	const divStyles = {
		color: 'black',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
	}
	const eventCard = {
		border: '2px solid black',
		width: '33%',
		borderRadius: '30px',
		marginRight: '12px',
	}
	const cardTitle = {
		padding: '15px',
		backgroundColor: '#88cd00',
		border: 'bottom 2px solid #88cd00',
		borderRadius: '30px 30px 0 0',
	}
	const cardBodyText = {
		padding: '15px',
	}
	const cardDates = {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
	}
	const callToActionFlex = {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
	}
	const callToAction = {
		padding: '10px', 
		border: 'none', 
		marginTop: '5px', 
		marginBottom: '10px', 
		color: 'white', 
		backgroundColor: '#88cd00', 
		borderRadius: '10px',
		marginRight: '12px',
	}
	const eventLink = {
		color: 'white',
		textDecoration: 'none',
	}

	return (
		<div className='hawsEvents' {...useBlockProps.save({style: divStyles})}>
			<div style={eventCard} className=' eventOneCard'>
				<h3 style={cardTitle} className='eventOneTitle'>
					{attributes.eventOneTitle}
				</h3>
				<div style={cardBodyText} className='cardBodyText'>
					<div style={cardDates}>
				<h4 className='eventOneStart'>
				<span>{attributes.eventOneStart}</span>
				</h4>
				<h4 className='eventOneEnd'>
				<span>{attributes.eventOneEnd}</span>
				</h4>
				</div>
				<div className='eventOneWeekDay'>
					<b>{attributes.eventOneWeekDay}</b>
				</div>
				<div className='eventOneDescription'>
					{attributes.eventOneDescription}
				</div>
				<div style={callToActionFlex}>
				<div style={callToAction} >
					<a style={eventLink}  className='eventOneCallToActionLink' href={attributes.eventOneCallToActionLink}><span className='eventOneCallToAction'>{attributes.eventOneCallToAction}</span></a>
				</div>
				<div style={callToAction} >
					<a style={eventLink}  href={attributes.eventOneCallToActionSecondaryLink}><div className='eventOneCallToActionSecondary'>{attributes.eventOneCallToActionSecondary}</div></a>
				</div>
				</div>
				</div>
			</div>	
			
			
			<div style={eventCard} className=' eventTwoCard'>
				<h3 style={cardTitle} className='eventTwoTitle'>
					{attributes.eventTwoTitle}
				</h3>
				<div style={cardBodyText} className='cardBodyText'>
					<div style={cardDates}>
				<h4 className='eventTwoStart'>
				<span>{attributes.eventTwoStart}</span>
				</h4>
				<h4 className='eventTwoEnd'>
				<span>{attributes.eventTwoEnd}</span>
				</h4>
				</div>
				<div className='eventTwoWeekDay'>
					<b>{attributes.eventTwoWeekDay}</b>
				</div>
				<div className='eventTwoDescription'>
					{attributes.eventTwoDescription}
				</div>
				<div style={callToActionFlex}>
				<div style={callToAction}>
					<a style={eventLink}  className='eventTwoCallToActionLink' href={attributes.eventTwoCallToActionLink}><span className='eventTwoCallToAction'>{attributes.eventTwoCallToAction}</span></a>
				</div>
				<div style={callToAction} >
					<a style={eventLink}  href={attributes.eventTwoCallToActionSecondaryLink}><div className='eventTwoCallToActionSecondary'>{attributes.eventTwoCallToActionSecondary}</div></a>
				</div>
				</div>
				</div>
			</div>	
		</div>
	);
}