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
registerBlockType( 'rs-blockfolder/scout-badges', {
	/**
	 * @see https://make.wordpress.org/core/2020/11/18/block-api-version-2/
	 */
	apiVersion: 2,

	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __( 'scout-badges', 'rs-blockfolder' ),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __( 'scout-badges', 'rs-blockfolder' ),

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
		'scout-badges',
		__('test'),
		__('review'),
		'rs'
	],

	//these are the date "fields" we want to store with our blocks
	attributes: {
		tileOneImgUrl: {
			type: 'string',
			default: 'https://placehold.it/75',
		},
		tileOneTitle: {
			type: 'string',
			source: 'text',
			selector: '.tileOneTitle',
		},
		tileOneList: {
			type: 'string',
			source: 'html',
			selector: '.tileOneList',
		},
		tileOneUrl: {
			type: 'string',
			default: '#',
		},
		tileTwoImgUrl: {
			type: 'string',
			default: 'https://placehold.it/75',
		},
		tileTwoTitle: {
			type: 'string',
			source: 'text',
			selector: '.tileTwoTitle',
		},
		tileTwoUrl: {
			type: 'string',
			default: '#',
		},
		tileThreeImgUrl: {
			type: 'string',
			default: 'https://placehold.it/75',
		},
		tileThreeTitle: {
			type: 'string',
			source: 'text',
			selector: '.tileThreeTitle',
		},
		tileThreeUrl: {
			type: 'string',
			default: '#',
		},
		tileFourImgUrl: {
			type: 'string',
			default: 'https://placehold.it/75',
		},
		tileFourTitle: {
			type: 'string',
			source: 'text',
			selector: '.tileFourTitle',
		},
		tileFourUrl: {
			type: 'string',
			default: '#',
		},
		tileFiveImgUrl: {
			type: 'string',
			default: 'https://placehold.it/75',
		},
		tileFiveTitle: {
			type: 'string',
			source: 'text',
			selector: '.tileFiveTitle',
		},
		tileFiveUrl: {
			type: 'string',
			default: '#',
		},
		tileSixImgUrl: {
			type: 'string',
			default: 'https://placehold.it/75',
		},
		tileSixTitle: {
			type: 'string',
			source: 'text',
			selector: '.tileSixTitle',
		},
		tileSixUrl: {
			type: 'string',
			default: '#',
		},
		tileSevenImgUrl: {
			type: 'string',
			default: 'https://placehold.it/75',
		},
		tileSevenTitle: {
			type: 'string',
			source: 'text',
			selector: '.tileSevenTitle',
		},
		tileSevenUrl: {
			type: 'string',
			default: '#',
		},
		tileEightImgUrl: {
			type: 'string',
			default: 'https://placehold.it/75',
		},
		tileEightTitle: {
			type: 'string',
			source: 'text',
			selector: '.tileEightTitle',
		},
		tileEightUrl: {
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
