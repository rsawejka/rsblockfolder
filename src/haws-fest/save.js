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
	const isFillOne = attributes.tileOneTitle;
	const isFillTwo = attributes.tileTwoTitle;
	const isFillThree = attributes.tileThreeTitle;
	const isFillFour = attributes.tileFourTitle;
	const isFillFive = attributes.tileFiveTitle;
	const isFillSix = attributes.tileSixTitle;
	const isFillSeven = attributes.tileSevenTitle;
	const isFillEight = attributes.tileEightTitle;

	const imgHeight = '300px';
	const backgroundSize = 'cover';
	const borderRadius = "150px";
	const divStyles = {
		color: 'blue',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
	}
	const tileOneBackgroundImage = {

		backgroundImage: "url(" + attributes.tileOneImgUrl + ")",
		height: imgHeight,
		backgroundRepeat: 'no-repeat',
		backgroundSize: backgroundSize,
		borderRadius: borderRadius,
	}

	const tileTwoBackgroundImage = {
		backgroundImage: "url(" + attributes.tileTwoImgUrl + ")",
		height: imgHeight,
		backgroundRepeat: 'no-repeat',
		backgroundSize: backgroundSize,
		borderRadius: borderRadius,
	}
	const tileThreeBackgroundImage = {
		backgroundImage: "url(" + attributes.tileThreeImgUrl + ")",
		height: imgHeight,
		backgroundRepeat: 'no-repeat',
		backgroundSize: backgroundSize,
		borderRadius: borderRadius,
	}
	const tileFourBackgroundImage = {
		backgroundImage: "url(" + attributes.tileFourImgUrl + ")",
		height: imgHeight,
		backgroundRepeat: 'no-repeat',
		backgroundSize: backgroundSize,
		borderRadius: borderRadius,
	}
	const tileFiveBackgroundImage = {
		backgroundImage: "url(" + attributes.tileFiveImgUrl + ")",
		height: imgHeight,
		backgroundRepeat: 'no-repeat',
		backgroundSize: backgroundSize,
		borderRadius: borderRadius,
	}
	const tileSixBackgroundImage = {
		backgroundImage: "url(" + attributes.tileSixImgUrl + ")",
		height: imgHeight,
		backgroundRepeat: 'no-repeat',
		backgroundSize: backgroundSize,
		borderRadius: borderRadius,
	}
	const tileSevenBackgroundImage = {
		backgroundImage: "url(" + attributes.tileSevenImgUrl + ")",
		height: imgHeight,
		backgroundRepeat: 'no-repeat',
		backgroundSize: backgroundSize,
		borderRadius: borderRadius,
	}
	const tileEightBackgroundImage = {
		backgroundImage: "url(" + attributes.tileEightImgUrl + ")",
		height: imgHeight,
		backgroundRepeat: 'no-repeat',
		backgroundSize: backgroundSize,
		borderRadius: borderRadius,
	}
	const titleBorder = {
		borderRadius: '150px'
	}

	return (
		<div className='hawsFest' {...useBlockProps.save({ style: divStyles })}>

			{isFillOne ? (
				<div className="tile">
					<div className='title tileOneTitle'>{attributes.tileOneTitle}</div>
					<div className="tileInner">
							<div className="tileImg" style={tileOneBackgroundImage}>
							<div className="tileTitle" style={titleBorder}>
								</div>
							</div>
							
							
						
					</div>
				</div>
			) : (
				<div></div>
			)}
			{isFillTwo ? (
				<div className="tile">
					<div className='title tileTwoTitle'>{attributes.tileTwoTitle}</div>
					<div className="tileInner">
							<div className="tileImg" style={tileTwoBackgroundImage}>
								
							</div>
							<div className="tileTitle" style={titleBorder}>
									
								</div>
					</div>
				</div>
			) : (
				<div></div>
			)}
			{isFillThree ? (
				<div className="tile">
					<div className='title tileThreeTitle'>
										{attributes.tileThreeTitle}
									</div>
					<div className="tileInner">
							<div className="tileImg" style={tileThreeBackgroundImage}>
								
							</div>
							<div className="tileTitle" style={titleBorder}>
									
								</div>
					</div>
				</div>
			) : (
				<div></div>
			)}
			{isFillFour ? (
				<div className="tile">
					<div className='title tileFourTitle'>
										{attributes.tileFourTitle}
									</div>
					<div className="tileInner">
							<div className="tileImg" style={tileFourBackgroundImage}>
								
							</div>
							<div className="tileTitle" style={titleBorder}>
									
								</div>
					</div>
				</div>
			) : (
				<div></div>
			)}
			{isFillFive ? (
				<div className="tile">
					<div className='title tileFiveTitle'>
										{attributes.tileFiveTitle}
									</div>
					<div className="tileInner">
							<div className="tileImg" style={tileFiveBackgroundImage}>
								
							</div>
							<div className="tileTitle" style={titleBorder}>
									
								</div>
					</div>
				</div>
			) : (
				<div></div>
			)}
			{isFillSix ? (
				<div className="tile">
					<div className='title tileSixTitle'>
										{attributes.tileSixTitle}
									</div>
					<div className="tileInner">
							<div className="tileImg" style={tileSixBackgroundImage}>
								
							</div>
							<div className="tileTitle" style={titleBorder}>
									
								</div>
					</div>
				</div>
			) : (
				<div></div>
			)}
			{isFillSeven ? (
				<div className="tile">
					<div className='title tileSevenTitle'>
										{attributes.tileSevenTitle}
									</div>
					<div className="tileInner">
							<div className="tileImg" style={tileSevenBackgroundImage}>
								
							</div>
							<div className="tileTitle" style={titleBorder}>
									
								</div>
					</div>
				</div>
			) : (
				<div></div>
			)}
			{isFillEight ? (
				<div className="tile">
					<div className='title tileEightTitle'>
										{attributes.tileEightTitle}
									</div>
					<div className="tileInner">
							<div className="tileImg" style={tileEightBackgroundImage}>
								
							</div>
							<div className="tileTitle" style={titleBorder}>
									
								</div>
					</div>
				</div>
			) : (
				<div></div>
			)}


		</div>
	);
}