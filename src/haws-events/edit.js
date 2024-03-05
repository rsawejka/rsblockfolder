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
export default function edit() {
	//export default function edit(props) {
	//let attributes = props.attributes;
	//let {attributes, setAttributes} = props;

	document.addEventListener("DOMContentLoaded", function() {
		var eventSelectMenu = createElement('select');
		eventSelectMenu.setAttribute('id', 'eventSelectMenu');
		var mainConatainer = getElementById("hawsEvents");
		mainConatainer.innerHTML = eventSelectMenu;
		mainConatainer.innerHTML = "test";
	  });
	
	//var eventMenuOption = document.createElement('div');
	

		//eventSelectMenu.getElemementbyId('eventSelectMenu').appendChild(eventMenuOption);
	
	return (
		<div>
			<div className="hawsEvents">


			</div>
		</div>
	);
}
