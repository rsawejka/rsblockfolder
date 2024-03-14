/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import edit from './edit';
import save from './save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType( 'rs-blockfolder/haws-events', {
	/**
	 * @see https://make.wordpress.org/core/2020/11/18/block-api-version-2/
	 */
	apiVersion: 2,

	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __( 'haws-events', 'rs-blockfolder' ),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __( 'haws-events', 'rs-blockfolder' ),

	/**
	 * Blocks are grouped into categories to help users browse and discover them.
	 * The categories provided by core are `text`, `media`, `design`, `widgets`, and `embed`.
	 */
	category: 'widgets',

	/**
	 * An icon property should be specified to make it easier to identify a block.
	 * These can be any of WordPress’ Dashicons, or a custom svg element.
	 */
	icon: 'admin-users',

	/**
	 * Optional block extended support features.
	 */
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},

	keywords: [
		'block',
		'haws-events',
		__('test'),
		__('review'),
		'rs'
	],

	//these are the date "fields" we want to store with our blocks
	attributes: {
		eventOneTitle: {
			type: 'string',
			source: 'text',
			selector: '.eventOneTitle',
		},
		eventOneStart: {
			type: 'string',
			source: 'text',
			selector: '.eventOneStart',
		},
		eventOneEnd: {
			type: 'string',
			source: 'text',
			selector: '.eventOneEnd',
		},
		eventOneWeekDay: {
			type: 'string',
			source: 'text',
			selector: '.eventOneWeekDay',
		},
		eventOneDescription: {
			type: 'string',
			source: 'text',
			selector: '.eventOneDescription',
		},
		eventOneCallToAction: {
			type: 'string',
			source: 'text',
			selector: '.eventOneCallToAction',
		},
		eventOneCallToActionLink: {
			type: 'string',
			default: '#',
		},
		eventOneCallToActionSecondary: {
			type: 'string',
			source: 'text',
			selector: '.eventOneCallToActionSecondary',
		},
			eventOneCallToActionSecondaryLink: {
			type: 'string',
			default: '#',
		},
		
		
		eventTwoTitle: {
			type: 'string',
			source: 'text',
			selector: '.eventTwoTitle',
		},
		eventTwoStart: {
			type: 'string',
			source: 'text',
			selector: '.eventTwoStart',
		},
		eventTwoEnd: {
			type: 'string',
			source: 'text',
			selector: '.eventTwoEnd',
		},
		eventTwoWeekDay: {
			type: 'string',
			source: 'text',
			selector: '.eventTwoWeekDay',
		},
		eventTwoDescription: {
			type: 'string',
			source: 'text',
			selector: '.eventTwoDescription',
		},
		eventTwoCallToAction: {
			type: 'string',
			source: 'text',
			selector: '.eventTwoCallToAction',
		},
		eventTwoCallToActionLink: {
			type: 'string',
			default: '#',
		},
		eventTwoCallToActionSecondary: {
			type: 'string',
			source: 'text',
			selector: '.eventTwoCallToActionSecondary',
		},
			eventTwoCallToActionSecondaryLink: {
			type: 'string',
			default: '#',	
		},
	},

	/**
	 * @see ./edit.js
	 */
	edit: edit,
	//or
	//edit: function (){
	//
	//}

	/**
	 * @see ./save.js
	 */
	save,
	//same as
	// save: save
} );