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
	return (
		<div className='haws-fest' {...useBlockProps.save({ style: divStyles })}>

			{isFillOne ? (
				<div>
					<div  data-toggle="modal" data-target="#tileOneModal">
						<div className="tile">
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
									<h6>When is it?</h6>
								</div>
								<div class="modal-footer">
									<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
									<button type="button" class="btn btn-primary">Save changes</button>
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
					<div  data-toggle="modal" data-target="#tileTwoModal">
						<div className="tile">
							<div className="tileInner">
							<i className={attributes.tileTwoIcon}></i>
							</div>
						</div>
					</div>
					<div class="modal fade" id="tileTwoModal" tabindex="-1" role="dialog" aria-labelledby="tileTwoModal" aria-hidden="true">
						<div class="modal-dialog modal-dialog-centered" role="document">
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title" id="exampleModalLongTitle">Modal title 2</h5>
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

			) : (
				<div></div>
			)}
			{isFillThree ? (
				<div>
					<div  data-toggle="modal" data-target="#tileThreeModal">
						<div className="tile">
							<div className="tileInner">
							<i className={attributes.tileThreeIcon}></i>
							</div>
						</div>
					</div>
					<div class="modal fade" id="tileThreeModal" tabindex="-1" role="dialog" aria-labelledby="tileThreeModal" aria-hidden="true">
						<div class="modal-dialog modal-dialog-centered" role="document">
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title" id="exampleModalLongTitle">Modal title 3</h5>
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

			) : (
				<div></div>
			)}
			{isFillFour ? (
				<div>
					<div  data-toggle="modal" data-target="#tileFourModal">
						<div className="tile">
							<div className="tileInner">
							<i className={attributes.tileFourIcon}></i>
							</div>
						</div>
					</div>
					<div class="modal fade" id="tileFourModal" tabindex="-1" role="dialog" aria-labelledby="tileFourModal" aria-hidden="true">
						<div class="modal-dialog modal-dialog-centered" role="document">
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title" id="exampleModalLongTitle">Modal title4</h5>
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

			) : (
				<div></div>
			)}
		</div>
	);
}



