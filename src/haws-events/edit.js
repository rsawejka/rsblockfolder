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
import { createElement } from '@wordpress/element';

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
	let divStyles = {
		backgroundColor: attributes.backgroundColor,
		color: attributes.textColor,
   }
	// document.addEventListener("DOMContentLoaded", function() {
	// 	var eventSelectMenu = createElement('select');
	// 	eventSelectMenu.setAttribute('id', 'eventSelectMenu');
	// 	var mainConatainer = getElementById("hawsEvents");
	// 	mainConatainer.innerHTML = eventSelectMenu;
	// 	mainConatainer.innerHTML = "test";
	//   });
	
	//var eventMenuOption = document.createElement('div');
	

		//eventSelectMenu.getElemementbyId('eventSelectMenu').appendChild(eventMenuOption);
	
	return (
		<div {...useBlockProps({ style: divStyles })}>
			<div className='firstEvent'>
				<PlainText
							className="eventOneTitle"
							value={attributes.eventOneTitle}
							onChange={(eventOneTitle) => setAttributes({ eventOneTitle })}
							placeholder="Title"
						/>
				<PlainText
							className="eventOneStart"
							value={attributes.eventOneStart}
							onChange={(eventOneStart) => setAttributes({ eventOneStart })}
							placeholder="Start Date"
						/>
				<PlainText
							className="eventOneEnd"
							value={attributes.eventOneEnd}
							onChange={(eventOneEnd) => setAttributes({ eventOneEnd })}
							placeholder="End Date"
						/>
				<PlainText
							className="eventOneWeekDay"
							value={attributes.eventOneWeekDay}
							onChange={(eventOneWeekDay) => setAttributes({ eventOneWeekDay })}
							placeholder="Day(s) of the week"
						/>
				<PlainText
							className="eventOneCallToAction"
							value={attributes.eventOneCallToAction}
							onChange={(eventOneCallToAction) => setAttributes({ eventOneCallToAction })}
							placeholder="Call to action"
						/>
				<PlainText
							className="eventOneCallToActionSecondary"
							value={attributes.eventOneCallToActionSecondary}
							onChange={(eventOneCallToActionSecondary) => setAttributes({ eventOneCallToActionSecondary })}
							placeholder="Secondary Call to action"
						/>
			</div>
		</div>
	);
}
