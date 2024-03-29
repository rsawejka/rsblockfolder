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
	const isFillOne = attributes.location;

	

	return (
		<div className='location-time' {...useBlockProps.save()}>
			{isFillOne ? (
				<div>
					<div className='location-time-flex'><div className='icons dashicons dashicons-location'></div><div className='location'>{attributes.location}</div></div>
					<div className='location-time-flex'><div className='icons dashicons dashicons-calendar-alt'></div><div className='time'>{attributes.time}</div></div>
					
					

				</div>
			) : (
				<div></div>
			)}
			
		</div>
	);
}