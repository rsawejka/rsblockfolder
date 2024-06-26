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
	const isFillOne = attributes.tileOneIcon;
	const isFillTwo = attributes.tileTwoIcon;
	const isFillThree = attributes.tileThreeIcon;
	const isFillFour = attributes.tileFourIcon;

	const divStyles = {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
	}
	const iconTitle = {
		textAlign: 'center',
		marginBotton: '17px',
	}
	return (
		<div className='haws-fest' {...useBlockProps.save({ style: divStyles })}>

			{isFillOne ? (
				<div>
					<div data-toggle="modal" data-target="#tileOneModal">
						<div className="tile">
							<h3 style={iconTitle} className='iconTitle'>{attributes.tileOneModalTitle}</h3>
							<div className="tileInner">
								<i className={attributes.tileOneIcon}></i>
							</div>
						</div>
					</div>
					<div class="modal fade" id="tileOneModal" tabindex="-1" role="dialog" aria-labelledby="tileOneModal" aria-hidden="true">
						<div class="modal-dialog modal-dialog-centered" role="document">
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title" id="exampleModalLongTitle">{attributes.tileOneModalTitle}</h5>
									<button type="button" class="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="modal-body">
									<h6><b>When is it?</b> </h6><span> {attributes.tileOneModalDates}</span>
									<h6 id='whoToBring'><b>Who should I bring?</b> </h6><span>{attributes.tileOneModalWho}</span>
									<h6 id='whereIsIt'><b>Where is it?</b> </h6><span>{attributes.tileOneModalWhere}</span>
									<div>{attributes.tileOneModalAdress}</div>
									<div>{attributes.tileOneModalDetails}</div>
									<div>{attributes.tileOneModalDetailsTwo}</div>
									<div><iframe src={attributes.tileOneModalGoogleMap} width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
								</div>
								<div class="modal-footer">
									<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
								</div>
							</div>
						</div>
					</div>
				</div>

			) : (
				<div></div>
			)}
			{isFillTwo ? (
				<div>
					<div data-toggle="modal" data-target="#tileTwoModal">
						<div className="tile">
							<h3 style={iconTitle} className='iconTitle'>{attributes.tileTwoModalTitle}</h3>
							<div className="tileInner">
								<i className={attributes.tileTwoIcon}></i>
							</div>
						</div>
					</div>
					<div class="modal fade" id="tileTwoModal" tabindex="-1" role="dialog" aria-labelledby="tileTwoModal" aria-hidden="true">
						<div class="modal-dialog modal-dialog-centered" role="document">
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title" id="exampleModalLongTitle">{attributes.tileTwoModalTitle}</h5>
									<button type="button" class="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="modal-body">
									<div className='modalTwoList'>
										<RawHTML>
											{attributes.tileTwoModalList}
										</RawHTML>
									</div>
								</div>
								<div class="modal-footer">
									<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
								</div>
							</div>
						</div>
					</div>
				</div>

			) : (
				<div></div>
			)}
			{isFillThree ? (
				<div>
					<div data-toggle="modal" data-target="#tileThreeModal">
						<div className="tile">
							<h3 style={iconTitle} className='iconTitle'>{attributes.tileThreeModalTitle}</h3>
							<div className="tileInner">
								<i className={attributes.tileThreeIcon}></i>
							</div>
						</div>
					</div>
					<div class="modal fade" id="tileThreeModal" tabindex="-1" role="dialog" aria-labelledby="tileThreeModal" aria-hidden="true">
						<div class="modal-dialog modal-dialog-centered" role="document">
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title" id="exampleModalLongTitle">{attributes.tileThreeModalTitle}</h5>
									<button type="button" class="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="modal-body">
									<div>{attributes.tileThreeModalDescription}</div>
									<div id='buttonContainer'>
										<a href={attributes.tileThreeModalLink} className='hawsButton'>Start Here!</a>
									</div>
									<div className='prizeSep'>
										<div><b>Goal: $50</b></div>
										<div className='prizePadding'>Prize: {attributes.tileThreeModalPrizeOne}</div>
										<div className='prizeFlex'>
											<img src={attributes.tileThreeModalPrizeOneUrl}></img>
											<img src={attributes.tileThreeModalPrizeOneBUrl}></img>
											<img src={attributes.tileThreeModalPrizeOneCUrl}></img>
										</div>
									</div>
									<div className='prizeSep'>
										<div><b>Goal: $200</b>
											<div className='prizePadding'>Prize: {attributes.tileThreeModalPrizeTwo}</div>
											<img src={attributes.tileThreeModalPrizeTwoUrl}></img>
											<div><b>*All prizes above are included</b></div>
										</div>
										<div className='prizeSep'></div>
										<div><b>Goal: $400</b>
											<div className='prizePadding'>Prize: {attributes.tileThreeModalPrizeThree}</div>
											<img src={attributes.tileThreeModalPrizeThreeUrl}></img>
											<div><b>*All prizes above are included</b></div>
										</div>
										<div className='prizeSep'></div>
										<div><b>Goal: $750</b></div>
										<div className='prizePadding'>Prize: {attributes.tileThreeModalPrizeFour}</div>
										<img src={attributes.tileThreeModalPrizeFourUrl}></img>
										<div><b>*All prizes above are included</b></div>
									</div>
									<div><b>Goal: $1000</b></div>
									<div className='prizePadding'>Prize: {attributes.tileThreeModalPrizeFive}</div>
									<img src={attributes.tileThreeModalPrizeFiveUrl}></img>
									<div><b>*All prizes above are included</b></div>
								</div>
								<div class="modal-footer">
									<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
								</div>
							</div>
						</div>
					</div>
				</div>

			) : (
				<div></div>
			)}
			{isFillFour ? (
				<div>
					<div data-toggle="modal" data-target="#tileFourModal">
						<div className="tile">
							<h3 style={iconTitle} className='iconTitle'>{attributes.tileFourTitle}</h3>
							<div className="tileInner">
								<i className={attributes.tileFourIcon}></i>
							</div>
						</div>
					</div>
					<div class="modal fade" id="tileFourModal" tabindex="-1" role="dialog" aria-labelledby="tileFourModal" aria-hidden="true">
						<div class="modal-dialog modal-dialog-centered" role="document">
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title" id="exampleModalLongTitle">{attributes.tileFourTitle}</h5>
									<button type="button" class="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="modal-body">
									<img className='tileFourPics' src={attributes.tileFourModalSponsorPicUrl}></img>
									<div id='buttonContainer'>
										<a href={attributes.tileFourModalSponsorSignUpUrl} className='hawsButton'>Sponsor Sign Up</a>
									</div>

									<img className='tileFourPics' src={attributes.tileFourModalVendorPicUrl}></img>
									<div id='buttonContainer'>
										<a href={attributes.tileFourModalVendorSignUpUrl} className='hawsButton'>Vendor Sign Up</a>
									</div>

								</div>
								<div id='contact'>
									<h6>Please contact us if you have any questions!</h6>

									<div><b>Mackenzie Fink</b></div>
									<div><a href='mailto:mackenzie@hawspets.org'>mackenzie@hawspets.org</a></div>
									<div><b>Jessica Pinkos</b></div>
									<div><a href='mailto:jessica@hawspets.org'>jessica@hawspets.org</a></div>
								</div>
								<div class="modal-footer">
									<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
								</div>
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



