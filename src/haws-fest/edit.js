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

			<div className="haws-fest">
				<div className='tileOne'>

					<div className="tileOneIcon">
						<PlainText
							className="tileOneIcon"
							value={attributes.tileOneIcon}
							onChange={(tileOneIcon) => setAttributes({ tileOneIcon })}
							placeholder="FA Icon"
						/>
					</div>
					<div className="tileOneModalTitle">
						<PlainText
							className="tileOneModalTitle"
							value={attributes.tileOneModalTitle}
							onChange={(tileOneModalTitle) => setAttributes({ tileOneModalTitle })}
							placeholder="Modal 1 Tittle"
						/>
					</div>
					<div className="tileOneModalDates">
						<PlainText
							className="tileOneModalDates"
							value={attributes.tileOneModalDates}
							onChange={(tileOneModalDates) => setAttributes({ tileOneModalDates })}
							placeholder="Modal One Date "
						/>
					</div>
					<div className="tileOneModalWho">
						<PlainText
							className="tileOneModalWho"
							value={attributes.tileOneModalWho}
							onChange={(tileOneModalWho) => setAttributes({ tileOneModalWho })}
							placeholder="Modal One Date "
						/>
					</div>
					<div className="tileOneModalWhere">
						<PlainText
							className="tileOneModalWhere"
							value={attributes.tileOneModalWhere}
							onChange={(tileOneModalWhere) => setAttributes({ tileOneModalWhere })}
							placeholder="Modal One Where "
						/>
					</div>
					<div className="tileOneModalAdress">
						<PlainText
							className="tileOneModalAdress"
							value={attributes.tileOneModalAdress}
							onChange={(tileOneModalAdress) => setAttributes({ tileOneModalAdress })}
							placeholder="Address "
						/>
					</div>
					<div className="tileOneModalDetails">
						<PlainText
							className="tileOneModalDetails"
							value={attributes.tileOneModalDetails}
							onChange={(tileOneModalDetails) => setAttributes({ tileOneModalDetails })}
							placeholder="details "
						/>
					</div>
					<div className="tileOneModalDetailsTwo">
						<PlainText
							className="tileOneModalDetailsTwo"
							value={attributes.tileOneModalDetailsTwo}
							onChange={(tileOneModalDetailsTwo) => setAttributes({ tileOneModalDetailsTwo })}
							placeholder="details 2 "
						/>
					</div>
					<div className="tileOneModalGoogleMap">
						<PlainText
							className="tileOneModalGoogleMap"
							value={attributes.tileOneModalGoogleMap}
							onChange={(tileOneModalGoogleMap) => setAttributes({ tileOneModalGoogleMap })}
							placeholder="google map embed Iframe"
						/>
					</div>

				</div>
				<div className='tileTwo'>
					<div className="tileTwoIcon">
						<PlainText
							className="tileTwoIcon"
							value={attributes.tileTwoIcon}
							onChange={(tileTwoIcon) => setAttributes({ tileTwoIcon })}
							placeholder="FA Icon"
						/>
					</div>
					<div className="tileTwoModalTitle">
						<PlainText
							className="tileTwoModalTitle"
							value={attributes.tileTwoModalTitle}
							onChange={(tileTwoModalTitle) => setAttributes({ tileTwoModalTitle })}
							placeholder="Modal 2 title"
						/>
					</div>
					<div>
						<RichText
							tagName="ul"
							multiline="li"
							value={attributes.tileTwoModalList}
							allowedFormats={['core/bold', 'core/italic', 'core/html']}
							onChange={(tileTwoModalList) => setAttributes({ tileTwoModalList })}
							placeholder={__('tile 2 list')}
						/>
					</div>
				</div>
				<div className='tileThree'>
					<div className="tileThreeIcon">
						<PlainText
							className="tileThreeIcon"
							value={attributes.tileThreeIcon}
							onChange={(tileThreeIcon) => setAttributes({ tileThreeIcon })}
							placeholder="tile 3 FA Icon"
						/>
					</div>
					<div className="tileThreeModalTitle">
						<PlainText
							className="tileThreeModalTitle"
							value={attributes.tileThreeModalTitle}
							onChange={(tileThreeModalTitle) => setAttributes({ tileThreeModalTitle })}
							placeholder="Tile 3 modal title"
						/>
					</div>
					<div className="tileThreeModalLink">
						<PlainText
							className="tileThreeModalLink"
							value={attributes.tileThreeModalLink}
							onChange={(tileThreeModalLink) => setAttributes({ tileThreeModalLink })}
							placeholder="Tile 3 modal link"
						/>
					</div>
					<div className="tileThreeModalDescription">
						<PlainText
							className="tileThreeModalDescription"
							value={attributes.tileThreeModalDescription}
							onChange={(tileThreeModalDescription) => setAttributes({ tileThreeModalDescription })}
							placeholder="Tile 3 modal description"
						/>
					</div>
					<div className="tileThreeModalPrizeOne">
						<PlainText
							className="tileThreeModalPrizeOne"
							value={attributes.tileThreeModalPrizeOne}
							onChange={(tileThreeModalPrizeOne) => setAttributes({ tileThreeModalPrizeOne })}
							placeholder="Tile 3 modal prize name"
						/>
					</div>
					<div className="tileThreeModalPrizeOnePic">
						<MediaUploadCheck>
							<MediaUpload
								allowedTypes={['image']}
								onSelect={(tileThreeModalPrizeOnePic) => setAttributes({ tileThreeModalPrizeOneUrl: tileThreeModalPrizeOnePic.sizes.thumbnail.url })}
								render={({ open }) => <img src={attributes.tileThreeModalPrizeOneUrl} onClick={open} />}
							/>
						</MediaUploadCheck>
					</div>
					<div className="tileThreeModalPrizeOneBPic">
						<MediaUploadCheck>
							<MediaUpload
								allowedTypes={['image']}
								onSelect={(tileThreeModalPrizeOneBPic) => setAttributes({ tileThreeModalPrizeOneBUrl: tileThreeModalPrizeOneBPic.sizes.thumbnail.url })}
								render={({ open }) => <img src={attributes.tileThreeModalPrizeOneBUrl} onClick={open} />}
							/>
						</MediaUploadCheck>
					</div>
					<div className="tileThreeModalPrizeOneCPic">
						<MediaUploadCheck>
							<MediaUpload
								allowedTypes={['image']}
								onSelect={(tileThreeModalPrizeOneCPic) => setAttributes({ tileThreeModalPrizeOneCUrl: tileThreeModalPrizeOneCPic.sizes.thumbnail.url })}
								render={({ open }) => <img src={attributes.tileThreeModalPrizeOneCUrl} onClick={open} />}
							/>
						</MediaUploadCheck>
					</div>
					<div className="tileThreeModalPrizeTwo">
						<PlainText
							className="tileThreeModalPrizeTwo"
							value={attributes.tileThreeModalPrizeTwo}
							onChange={(tileThreeModalPrizeTwo) => setAttributes({ tileThreeModalPrizeTwo })}
							placeholder="Tile 3 modal prize name 2"
						/>
					</div>
					<div className="tileThreeModalPrizeTwoPic">
						<MediaUploadCheck>
							<MediaUpload
								allowedTypes={['image']}
								onSelect={(tileThreeModalPrizeTwoPic) => setAttributes({ tileThreeModalPrizeTwoUrl: tileThreeModalPrizeTwoPic.sizes.thumbnail.url })}
								render={({ open }) => <img src={attributes.tileThreeModalPrizeTwoUrl} onClick={open} />}
							/>
						</MediaUploadCheck>
					</div>
					<div className="tileThreeModalPrizeThree">
						<PlainText
							className="tileThreeModalPrizeThree"
							value={attributes.tileThreeModalPrizeThree}
							onChange={(tileThreeModalPrizeThree) => setAttributes({ tileThreeModalPrizeThree })}
							placeholder="Tile 3 modal prize name 3"
						/>
					</div>
					<div className="tileThreeModalPrizeThreePic">
						<MediaUploadCheck>
							<MediaUpload
								allowedTypes={['image']}
								onSelect={(tileThreeModalPrizeThreePic) => setAttributes({ tileThreeModalPrizeThreeUrl: tileThreeModalPrizeThreePic.sizes.thumbnail.url })}
								render={({ open }) => <img src={attributes.tileThreeModalPrizeThreeUrl} onClick={open} />}
							/>
						</MediaUploadCheck>
					</div>
					<div className="tileThreeModalPrizeFour">
						<PlainText
							className="tileThreeModalPrizeFour"
							value={attributes.tileThreeModalPrizeFour}
							onChange={(tileThreeModalPrizeFour) => setAttributes({ tileThreeModalPrizeFour })}
							placeholder="Tile 3 modal prize name 4"
						/>
					</div>
					<div className="tileThreeModalPrizeFourPic">
						<MediaUploadCheck>
							<MediaUpload
								allowedTypes={['image']}
								onSelect={(tileThreeModalPrizeFourPic) => setAttributes({ tileThreeModalPrizeFourUrl: tileThreeModalPrizeFourPic.sizes.thumbnail.url })}
								render={({ open }) => <img src={attributes.tileThreeModalPrizeFourUrl} onClick={open} />}
							/>
						</MediaUploadCheck>
					</div>
					<div className="tileThreeModalPrizeFive">
						<PlainText
							className="tileThreeModalPrizeFive"
							value={attributes.tileThreeModalPrizeFive}
							onChange={(tileThreeModalPrizeFive) => setAttributes({ tileThreeModalPrizeFive })}
							placeholder="Tile 3 modal prize name 5"
						/>
					</div>
					<div className="tileThreeModalPrizeFivePic">
						<MediaUploadCheck>
							<MediaUpload
								allowedTypes={['image']}
								onSelect={(tileThreeModalPrizeFivePic) => setAttributes({ tileThreeModalPrizeFiveUrl: tileThreeModalPrizeFivePic.sizes.thumbnail.url })}
								render={({ open }) => <img src={attributes.tileThreeModalPrizeFiveUrl} onClick={open} />}
							/>
						</MediaUploadCheck>
					</div>
				</div>
				<div className='tileFour'>
					<div className="tileFourIcon">
						<PlainText
							className="tileFourIcon"
							value={attributes.tileFourIcon}
							onChange={(tileFourIcon) => setAttributes({ tileFourIcon })}
							placeholder="FA Icon"
						/>
					</div>
					<div className="tileFourTitle">
						<PlainText
							className="tileFourTitle"
							value={attributes.tileFourTitle}
							onChange={(tileFourTitle) => setAttributes({ tileFourTitle })}
							placeholder="tile 4 title"
						/>
					</div>
					<div className="tileFourModalSponsorPicUrl">
					<PlainText
							className="tileFourModalSponsorPicUrl"
							value={attributes.tileFourModalSponsorPicUrl}
							onChange={(tileFourModalSponsorPicUrl) => setAttributes({ tileFourModalSponsorPicUrl })}
							placeholder="tile 4 image url"
						/>
					</div>
					<div className="tileFourModalSponsorSignUpUrl">
					<PlainText
							className="tileFourModalSponsorSignUpUrl"
							value={attributes.tileFourModalSponsorSignUpUrl}
							onChange={(tileFourModalSponsorSignUpUrl) => setAttributes({ tileFourModalSponsorSignUpUrl })}
							placeholder="sponsor sign up url"
						/>
					</div>
					<div className="tileFourModalVendorPicUrl">
					<PlainText
							className="tileFourModalVendorPicUrl"
							value={attributes.tileFourModalVendorPicUrl}
							onChange={(tileFourModalVendorPicUrl) => setAttributes({ tileFourModalVendorPicUrl })}
							placeholder="tile 4 image url"
						/>
					</div>
					<div className="tileFourModalVendorSignUpUrl">
					<PlainText
							className="tileFourModalVendorSignUpUrl"
							value={attributes.tileFourModalVendorSignUpUrl}
							onChange={(tileFourModalVendorSignUpUrl) => setAttributes({ tileFourModalVendorSignUpUrl })}
							placeholder="vendor sign up url"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
