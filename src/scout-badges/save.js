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


	const imgHeight = '300px';
	const imgWidth = '300px';
	const backgroundSize = 'contain';
	const borderRadius = "0px";
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


	const titleBorder = {
		borderRadius: '150px',
	}
	return (
		<div className='servicePage' {...useBlockProps.save({ style: divStyles })}>

			{isFillOne ? (
				<div>
					<div className="tileTitle" style={titleBorder}>
						<div className='title tileOneTitle'>
							{attributes.tileOneTitle}
						</div>
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
								<div>ashjdfk</div>
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
						<div className='title tileTwoTitle'>
							{attributes.tileTwoTitle}
						</div>
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
								<div>ashjdfk</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div></div>
			)}
			<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Launch demo modal
</button>

<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
		</div>
	);
}