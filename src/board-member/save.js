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
	const isFillOne = attributes.memberQuoteOne;
	const isFillTwo = attributes.memberQuoteTwo;
	const isFillThree = attributes.memberQuoteThree;
	
const memberName = {
	//borderBottom: "2px solid black",
	marginBottom: "12px",
	marginTop: "18px",
	marginLeft: "18px",
	marginRight: "18px",
}
const box = {
	width: "500px",
	minWidth: "450px",
	//minWidth: "33%",
	//backgroundColor: "rgba(26, 28, 14, 0.1)",
	borderRadius: "50px",
}
const blockStyles = {
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-evenly",
	flexWrap: "wrap",
}
const flipedQuote = {
	transform: "scale(-1, -1)",
	color: "#88cd00",
	display: "flex",
	flexDirection: "row-reverse",
	fontSize: "3em",
}
const description = {
	margin: "8px",
	// margin: "0 auto",
	// width: "50%",
	// paddingTop: "20px",
	// paddingLeft: "8px",
	padding: "40px",
	backgroundColor: "rgba(26, 28, 14, 0.1)",
	borderRadius: "50px",



}

const quoteBox = {
	marginLeft: "7px",
	borderLeft: "8px solid #88cd00",
	padding: "50px",
	//borderRadius: "0px 0px 50px 50px",


}
const quote = {
	color: "#88cd00",


}

	return (
		<div className='board-members' {...useBlockProps.save({style: blockStyles})}>
			{isFillOne ? (
				<div style={box}>
					<h3 style={memberName} className='memberName'>{attributes.memberNameOne}</h3>
					<div style={description} className='description'>{attributes.memberDescriptionOne}</div>
					<div style={quoteBox} className='quoteBox'>
						<div  className='memberQuoteOne'>
							<div style={quote} className='dashicons dashicons-format-quote'></div>
							<div >{attributes.memberQuoteOne}</div>
							<div style={flipedQuote}><div  className='dashicons dashicons-format-quote'></div></div>
						</div>
					</div>
				</div>
			) : (
				<div></div>
			)}
			{isFillTwo ? (
				<div  style={box}>
					<h3 style={memberName}>{attributes.memberNameTwo}</h3>
					<div style={description} className='description'>{attributes.memberDescriptionTwo}</div>
					<div style={quoteBox} className='quoteBox'>
						<div  className='memberQuoteTwo'>
							<div style={quote} className='dashicons dashicons-format-quote'></div>
							<div >{attributes.memberQuoteTwo}</div>
							<div style={flipedQuote}><div  className='dashicons dashicons-format-quote'></div></div>
						</div>
					</div>
					
				</div>
			) : (
				<div></div>
			)}
			{isFillThree ? (
				<div  style={box}>
					<h3 style={memberName}>{attributes.memberNameThree}</h3>
					<div style={description} className='description'>{attributes.memberDescriptionThree}</div>

					<div style={quoteBox}  className='quoteBox'>
						<div  className='memberQuoteThree'>
							<div style={quote}  className='dashicons dashicons-format-quote'></div>
							<div >{attributes.memberQuoteThree}</div>
							<div style={flipedQuote}><div  className='dashicons dashicons-format-quote'></div></div>
						</div>
					</div>
				</div>
			) : (
				<div></div>
			)}
			
		</div>
	);
}