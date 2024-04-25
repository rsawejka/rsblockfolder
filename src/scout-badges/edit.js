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
		 backgroundColor: attributes.backgroundColor,
		 color: attributes.textColor,
	}
	

	return (
		<div {...useBlockProps({ style: divStyles })}>

			<div className="servicePage">
				<div className='tileOne'>

					<div className="tileOnePhoto">
						<MediaUploadCheck>
							<MediaUpload
								allowedTypes={['image']}
								onSelect={(tileOneImg) => setAttributes({ tileOneImgUrl: tileOneImg.sizes.thumbnail.url })}
								render={({ open }) => <img src={attributes.tileOneImgUrl} onClick={open} />}
								
								
							/>
							
						</MediaUploadCheck>
					</div>
					<div>
						<PlainText
							className="tileOneTitle"
							value={attributes.tileOneTitle}
							onChange={(tileOneTitle) => setAttributes({ tileOneTitle })}
							placeholder="Title"
						/>


					</div>
					<div>
						<PlainText
							className="tileOneUrl"
							value={attributes.tileOneUrl}
							onChange={(tileOneUrl) => setAttributes({ tileOneUrl })}
							placeholder="URL MUST INCLUDE HTTPS://"
						/>


					</div>
				</div>

			</div>
		</div>
	);
}
