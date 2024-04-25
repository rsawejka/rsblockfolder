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
					<div className="tileTwoTitleBlock">
						<PlainText
							className="tileTwoTitle"
							value={attributes.tileTwoTitle}
							onChange={(tileTwoTitle) => setAttributes({ tileTwoTitle })}
							placeholder="Title"
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
								onSelect={(tileThreeImg) => setAttributes({ tileThreeImgUrl: tileThreeImg.sizes.large.url })}
								render={({ open }) => <img src={attributes.tileThreeImgUrl} onClick={open} />}
							/>
						</MediaUploadCheck>
					</div>
					<div className="tileThreeTitleBlock">
						<PlainText
							className="tileThreeTitle"
							value={attributes.tileThreeTitle}
							onChange={(tileThreeTitle) => setAttributes({ tileThreeTitle })}
							placeholder="Title"
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
								onSelect={(tileFourImg) => setAttributes({ tileFourImgUrl: tileFourImg.sizes.large.url })}
								render={({ open }) => <img src={attributes.tileFourImgUrl} onClick={open} />}
							/>
						</MediaUploadCheck>
					</div>
					<div className="tileFourTitleBlock">
						<PlainText
							className="tileFourTitle"
							value={attributes.tileFourTitle}
							onChange={(tileFourTitle) => setAttributes({ tileFourTitle })}
							placeholder="Title"
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
				<div className='tileFive'>
					<div className="tileFivePhoto">
						<MediaUploadCheck>
							<MediaUpload
								allowedTypes={['image']}
								onSelect={(tileFiveImg) => setAttributes({ tileFiveImgUrl: tileFiveImg.sizes.large.url })}
								render={({ open }) => <img src={attributes.tileFiveImgUrl} onClick={open} />}
							/>
						</MediaUploadCheck>
					</div>
					<div className="tileFiveTitleBlock">
						<PlainText
							className="tileFiveTitle"
							value={attributes.tileFiveTitle}
							onChange={(tileFiveTitle) => setAttributes({ tileFiveTitle })}
							placeholder="Title"
						/>


					</div>
					<div>
						<PlainText
							className="tileFiveUrl"
							value={attributes.tileFiveUrl}
							onChange={(tileFiveUrl) => setAttributes({ tileFiveUrl })}
							placeholder="URL MUST INCLUDE HTTPS://"
						/>


					</div>
				</div>
				<div className='tileSix'>
					<div className="tileSixPhoto">
						<MediaUploadCheck>
							<MediaUpload
								allowedTypes={['image']}
								onSelect={(tileSixImg) => setAttributes({ tileSixImgUrl: tileSixImg.sizes.large.url })}
								render={({ open }) => <img src={attributes.tileSixImgUrl} onClick={open} />}
							/>
						</MediaUploadCheck>
					</div>
					<div className="tileSixTitleBlock">
						<PlainText
							className="tileSixTitle"
							value={attributes.tileSixTitle}
							onChange={(tileSixTitle) => setAttributes({ tileSixTitle })}
							placeholder="Title"
						/>


					</div>
					<div>
						<PlainText
							className="tileSixUrl"
							value={attributes.tileSixUrl}
							onChange={(tileSixUrl) => setAttributes({ tileSixUrl })}
							placeholder="URL MUST INCLUDE HTTPS://"
						/>


					</div>
				</div>
				<div className='tileSeven'>
					<div className="tileSevenPhoto">
						<MediaUploadCheck>
							<MediaUpload
								allowedTypes={['image']}
								onSelect={(tileSevenImg) => setAttributes({ tileSevenImgUrl: tileSevenImg.sizes.large.url })}
								render={({ open }) => <img src={attributes.tileSevenImgUrl} onClick={open} />}
							/>
						</MediaUploadCheck>
					</div>
					<div className="tileSevenTitleBlock">
						<PlainText
							className="tileSevenTitle"
							value={attributes.tileSevenTitle}
							onChange={(tileSevenTitle) => setAttributes({ tileSevenTitle })}
							placeholder="Title"
						/>


					</div>
					<div>
						<PlainText
							className="tileSevenUrl"
							value={attributes.tileSevenUrl}
							onChange={(tileSevenUrl) => setAttributes({ tileSevenUrl })}
							placeholder="URL MUST INCLUDE HTTPS://"
						/>


					</div>
				</div>
				<div className='tileEight'>
					<div className="tileEightPhoto">
						<MediaUploadCheck>
							<MediaUpload
								allowedTypes={['image']}
								onSelect={(tileEightImg) => setAttributes({ tileEightImgUrl: tileEightImg.sizes.large.url })}
								render={({ open }) => <img src={attributes.tileEightImgUrl} onClick={open} />}
							/>
						</MediaUploadCheck>
					</div>
					<div className="tileEightTitleBlock">
						<PlainText
							className="tileEightTitle"
							value={attributes.tileEightTitle}
							onChange={(tileEightTitle) => setAttributes({ tileEightTitle })}
							placeholder="Title"
						/>


					</div>
					<div>
						<PlainText
							className="tileEightUrl"
							value={attributes.tileEightUrl}
							onChange={(tileEightUrl) => setAttributes({ tileEightUrl })}
							placeholder="URL MUST INCLUDE HTTPS://"
						/>


					</div>
				</div>
			</div>
		</div>
	);
}
