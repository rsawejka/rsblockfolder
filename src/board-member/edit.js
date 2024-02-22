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
//import { useBlockProps } from '@wordpress/block-editor';
//import { RichText } from '@wordpress/block-editor';
import {
	useBlockProps, RichText, MediaUpload, MediaUploadCheck, PlainText,
	InspectorControls
} from '@wordpress/block-editor';
import { SelectControl, PanelBody, PanelRow, ColorPalette, ColorPicker } from '@wordpress/components';


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
//see all the code in differnt branches
//has some branches master, panel-one, panel-two
export default function edit({ attributes, setAttributes }) {
	//export default function edit(props) {
	//let attributes = props.attributes;
	//let {attributes, setAttributes} = props;

	//drop down and color palate dont work at same time
	let divStyles = {
		//  backgroundColor: attributes.backgroundColor,
		//  color: attributes.textColor,
	}
	

	return (
		<div {...useBlockProps({ style: divStyles })}>

			<div className="board-member-block">
				<div className='memberOne'>

				
					<div>
						<PlainText
							className="memberNane"
							value={attributes.memberNameOne}
							onChange={(memberNameOne) => setAttributes({ memberNameOne })}
							placeholder="name"
						/>


					</div>
					<div>
						<PlainText
							className="memberDescription"
							value={attributes.memberDescriptionOne}
							onChange={(memberDescriptionOne) => setAttributes({ memberDescriptionOne })}
							placeholder="description"
						/>


					</div>
					<div>
						<PlainText
							className="memberQuote"
							value={attributes.memberQuoteOne}
							onChange={(memberQuoteOne) => setAttributes({ memberQuoteOne })}
							placeholder="Quote"
						/>


					</div>
					
				</div>
				<div className='memberTwo'>

			
					<div>
					
						<PlainText
							className="memberNane"
							value={attributes.memberNameTwo}
							onChange={(memberNameTwo) => setAttributes({ memberNameTwo })}
							placeholder="name"
						/>


					</div>
					<div>
						<PlainText
							className="memberDescription"
							value={attributes.memberDescriptionTwo}
							onChange={(memberDescriptionTwo) => setAttributes({ memberDescriptionTwo })}
							placeholder="description"
						/>


					</div>
					<div>
						<PlainText
							className="memberQuote"
							value={attributes.memberQuoteTwo}
							onChange={(memberQuoteTwo) => setAttributes({ memberQuoteTwo })}
							placeholder="Quote"
						/>


					</div>
					
					
				</div>
				<div className='memberThree'>

				<div>
						<PlainText
							className="memberNane"
							value={attributes.memberNameThree}
							onChange={(memberNameThree) => setAttributes({ memberNameThree })}
							placeholder="name"
						/>


					</div>
					
					<div>
						<PlainText
							className="memberDescription"
							value={attributes.memberDescriptionThree}
							onChange={(memberDescriptionThree) => setAttributes({ memberDescriptionThree })}
							placeholder="description"
						/>


					</div>
					
					<div>
						<PlainText
							className="memberQuote"
							value={attributes.memberQuoteThree}
							onChange={(memberQuoteThree) => setAttributes({ memberQuoteThree })}
							placeholder="Quote"
						/>


					</div>
				</div>
				
			</div>
		</div>
	);
}
