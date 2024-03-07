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
	const divStyles = {
		color: 'blue',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
	}

	return (
		<div className='hawsEvents' {...useBlockProps.save({style: divStyles})}>
				<div className='eventOneTitle'>
					{attributes.eventOneTitle}
				</div>
				<div className='eventOneStart'>
					{attributes.eventOneStart}
				</div>
				<div className='eventOneEnd'>
					{attributes.eventOneEnd}
				</div>
				<div className='eventOneWeekDay'>
					{attributes.eventOneWeekDay}
				</div>
				<div className='eventOneCallToAction'>
					{attributes.eventOneCallToAction}
				</div>
		</div>
	);
}