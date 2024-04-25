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

import { RawHTML } from '@wordpress/element';
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


	const imgHeight = '300px';
	const imgWidth = '300px';
	const backgroundSize = 'contain';
	const borderRadius = "0px";
	const divStyles = {
		color: '#88cd00',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		marginLeft: '70px',
		marginRight: "70px",
	}
	const tileOneBackgroundImage = {

		backgroundImage: "url(" + attributes.tileOneImgUrl + ")",
		height: imgHeight,
		backgroundRepeat: 'no-repeat',
		backgroundSize: backgroundSize,
		borderRadius: borderRadius,
		width: imgWidth,
	}
	const tileTwoBackgroundImage = {

		backgroundImage: "url(" + attributes.tileTwoImgUrl + ")",
		height: imgHeight,
		backgroundRepeat: 'no-repeat',
		backgroundSize: backgroundSize,
		borderRadius: borderRadius,
		width: imgWidth,
	}
	const tileThreeBackgroundImage = {

		backgroundImage: "url(" + attributes.tileThreeImgUrl + ")",
		height: imgHeight,
		backgroundRepeat: 'no-repeat',
		backgroundSize: backgroundSize,
		borderRadius: borderRadius,
		width: imgWidth,
	}
	const tileFourBackgroundImage = {

		backgroundImage: "url(" + attributes.tileFourImgUrl + ")",
		height: imgHeight,
		backgroundRepeat: 'no-repeat',
		backgroundSize: backgroundSize,
		borderRadius: borderRadius,
		width: imgWidth,
	}
	// const tileTwoBackgroundImage = {

	// 	backgroundImage: "url(" + attributes.tileTwoImgUrl + ")",
	// 	height: imgHeight,
	// 	backgroundRepeat: 'no-repeat',
	// 	backgroundSize: backgroundSize,
	// 	borderRadius: borderRadius,
	// 	width: imgWidth,
	// }


	const titleBorder = {
		borderRadius: '150px',
	}
	return (
		<div className='scoutBadges' {...useBlockProps.save({ style: divStyles })}>

			{isFillOne ? (
				<div>
					<div className="tileTitle" style={titleBorder}>
						<h4 className='title tileOneTitle'>
							{attributes.tileOneTitle}
						</h4>
					</div>
					<div className="flipCard">
						<div className="flipCardInner">
							<div className="tile flipCardFront">

								<div className="tileInner">
									<a href={attributes.tileOneUrl}>
										<div className="tileImg" style={tileOneBackgroundImage}>

										</div>
									</a>
								</div>
							</div>
							<div className="flipCardBack">
								<h6 className='backCardHeader'>{attributes.tileOneTitle}</h6>
								<div className='tileOneList'>
									<RawHTML>
									{attributes.tileOneList}
									</RawHTML>
									</div>
								<div className='rs-block-description tileOneDescription'>{attributes.tileOneDescription}</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div></div>
			)}
			{isFillTwo ? (
				<div>
					<div className="tileTitle" style={titleBorder}>
						<h4 className='title tileTwoTitle'>
							{attributes.tileTwoTitle}
						</h4>
					</div>
					<div className="flipCard">
						<div className="flipCardInner">
							<div className="tile flipCardFront">

								<div className="tileInner">
									<a href={attributes.tileTwoUrl}>
										<div className="tileImg" style={tileTwoBackgroundImage}>

										</div>
									</a>
								</div>
							</div>
							<div className="flipCardBack">
								<h6 className='backCardHeader'>{attributes.tileTwoTitle}</h6>
								<div className='tileTwoList'>
									<RawHTML>
									{attributes.tileTwoList}
									</RawHTML>
									</div>
								<div className='rs-block-description tileTwoDescription'>{attributes.tileTwoDescription}</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div></div>
			)}
			{isFillThree ? (
				<div>
					<div className="tileTitle" style={titleBorder}>
						<h4 className='title tileThreeTitle'>
							{attributes.tileThreeTitle}
						</h4>
					</div>
					<div className="flipCard">
						<div className="flipCardInner">
							<div className="tile flipCardFront">

								<div className="tileInner">
									<a href={attributes.tileThreeUrl}>
										<div className="tileImg" style={tileThreeBackgroundImage}>

										</div>
									</a>
								</div>
							</div>
							<div className="flipCardBack">
								<h6 className='backCardHeader'>{attributes.tileThreeTitle}</h6>
								<div className='tileThreeList'>
									<RawHTML>
									{attributes.tileThreeList}
									</RawHTML>
									</div>
								<div className='rs-block-description tileThreeDescription'>{attributes.tileThreeDescription}</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div></div>
			)}
			{isFillFour ? (
				<div>
					<div className="tileTitle" style={titleBorder}>
						<h4 className='title tileFourTitle'>
							{attributes.tileFourTitle}
						</h4>
					</div>
					<div className="flipCard">
						<div className="flipCardInner">
							<div className="tile flipCardFront">

								<div className="tileInner">
									<a href={attributes.tileFourUrl}>
										<div className="tileImg" style={tileFourBackgroundImage}>

										</div>
									</a>
								</div>
							</div>
							<div className="flipCardBack">
								<h6 className='backCardHeader'>{attributes.tileFourTitle}</h6>
								<div className='tileFourList'>
									<RawHTML>
									{attributes.tileFourList}
									</RawHTML>
									</div>
								<div className='rs-block-description tileFourDescription'>{attributes.tileFourDescription}</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div></div>
			)}
			
		</div>
	);
}