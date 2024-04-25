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
						<RichText
							tagName="ul"
							multiline="li"
							value={attributes.tileOneList}
							allowedFormats={['core/bold', 'core/italic', 'core/html']}
							onChange={(tileOneList) => setAttributes({ tileOneList })}
							placeholder={__('tile 1 list')}
						/>
					</div>
					<div>
						<PlainText
							className="tileOneDescription"
							value={attributes.tileOneDescription}
							onChange={(tileOneDescription) => setAttributes({ tileOneDescription })}
							placeholder="Description"
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
				<div className='tileTwo'>
					<div className="tileTwoPhoto">
						<MediaUploadCheck>
							<MediaUpload
								allowedTypes={['image']}
								onSelect={(tileTwoImg) => setAttributes({ tileTwoImgUrl: tileTwoImg.sizes.thumbnail.url })}
								render={({ open }) => <img src={attributes.tileTwoImgUrl} onClick={open} />}								
							/>							
						</MediaUploadCheck>
					</div>
					<div>
						<PlainText
							className="tileTwoTitle"
							value={attributes.tileTwoTitle}
							onChange={(tileTwoTitle) => setAttributes({ tileTwoTitle })}
							placeholder="Title"
						/>
					</div>
					<div>
						<RichText
							tagName="ul"
							multiline="li"
							value={attributes.tileTwoList}
							allowedFormats={['core/bold', 'core/italic', 'core/html']}
							onChange={(tileTwoList) => setAttributes({ tileTwoList })}
							placeholder={__('tile 1 list')}
						/>
					</div>
					<div>
						<PlainText
							className="tileTwoDescription"
							value={attributes.tileTwoDescription}
							onChange={(tileTwoDescription) => setAttributes({ tileTwoDescription })}
							placeholder="Description"
						/>
					</div>
					<div>
						<PlainText
							className="tileTwoUrl"
							value={attributes.tileTwoUrl}
							onChange={(tileTwoUrl) => setAttributes({ tileTwoUrl })}
							placeholder="URL MUST INCLUDE HTTPS://"
						/>


					</div>
				</div>
				<div className='tileThree'>
					<div className="tileThreePhoto">
						<MediaUploadCheck>
							<MediaUpload
								allowedTypes={['image']}
								onSelect={(tileThreeImg) => setAttributes({ tileThreeImgUrl: tileThreeImg.sizes.thumbnail.url })}
								render={({ open }) => <img src={attributes.tileThreeImgUrl} onClick={open} />}								
							/>							
						</MediaUploadCheck>
					</div>
					<div>
						<PlainText
							className="tileThreeTitle"
							value={attributes.tileThreeTitle}
							onChange={(tileThreeTitle) => setAttributes({ tileThreeTitle })}
							placeholder="Title"
						/>
					</div>
					<div>
						<RichText
							tagName="ul"
							multiline="li"
							value={attributes.tileThreeList}
							allowedFormats={['core/bold', 'core/italic', 'core/html']}
							onChange={(tileThreeList) => setAttributes({ tileThreeList })}
							placeholder={__('tile 1 list')}
						/>
					</div>
					<div>
						<PlainText
							className="tileThreeDescription"
							value={attributes.tileThreeDescription}
							onChange={(tileThreeDescription) => setAttributes({ tileThreeDescription })}
							placeholder="Description"
						/>
					</div>
					<div>
						<PlainText
							className="tileThreeUrl"
							value={attributes.tileThreeUrl}
							onChange={(tileThreeUrl) => setAttributes({ tileThreeUrl })}
							placeholder="URL MUST INCLUDE HTTPS://"
						/>


					</div>
				</div>
				<div className='tileFour'>
					<div className="tileFourPhoto">
						<MediaUploadCheck>
							<MediaUpload
								allowedTypes={['image']}
								onSelect={(tileFourImg) => setAttributes({ tileFourImgUrl: tileFourImg.sizes.thumbnail.url })}
								render={({ open }) => <img src={attributes.tileFourImgUrl} onClick={open} />}								
							/>							
						</MediaUploadCheck>
					</div>
					<div>
						<PlainText
							className="tileFourTitle"
							value={attributes.tileFourTitle}
							onChange={(tileFourTitle) => setAttributes({ tileFourTitle })}
							placeholder="Title"
						/>
					</div>
					<div>
						<RichText
							tagName="ul"
							multiline="li"
							value={attributes.tileFourList}
							allowedFormats={['core/bold', 'core/italic', 'core/html']}
							onChange={(tileFourList) => setAttributes({ tileFourList })}
							placeholder={__('tile 1 list')}
						/>
					</div>
					<div>
						<PlainText
							className="tileFourDescription"
							value={attributes.tileFourDescription}
							onChange={(tileFourDescription) => setAttributes({ tileFourDescription })}
							placeholder="Description"
						/>
					</div>
					<div>
						<PlainText
							className="tileFourUrl"
							value={attributes.tileFourUrl}
							onChange={(tileFourUrl) => setAttributes({ tileFourUrl })}
							placeholder="URL MUST INCLUDE HTTPS://"
						/>
					</div>
				</div>

			</div>
		</div>
	);
}
