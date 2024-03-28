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
registerBlockType( 'rs-blockfolder/haws-fest', {
	/**
	 * @see https://make.wordpress.org/core/2020/11/18/block-api-version-2/
	 */
	apiVersion: 2,

	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __( 'haws-fest', 'rs-blockfolder' ),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __( 'haws-fest', 'rs-blockfolder' ),

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
		'haws-fest',
		__('test'),
		__('review'),
		'rs'
	],

	//these are the date "fields" we want to store with our blocks
	attributes: {
		tileOneIcon: {
			type: 'string',
			default: 'fa-solid fa-paw',
		},
		tileOneModalTitle: {
			type: 'string',
			default: 'Modal 1 Title',
		},
		tileOneModalDates: {
			type: 'string',
			default: 'Modal One Dates',
		},
		tileOneModalWho: {
			type: 'string',
			default: 'Who',
		},
		tileOneModalWhere: {
			type: 'string',
			default: 'Where',
		},
		tileOneModalAdress: {
			type: 'string',
			default: 'Where',
		},		
		tileOneModalDetails: {
			type: 'string',
			default: 'Details',
		},
		tileOneModalDetailsTwo: {
			type: 'string',
			default: 'Details',
		},
		tileOneModalGoogleMap: {
			type: 'string',
			default: 'google map iframe',
		},
		
		tileTwoIcon: {
			type: 'string',
			default: 'fa-solid fa-paw',
		},
		tileTwoModalTitle: {
			type: 'string',
			default: 'modal 2 title',
		},
		tileTwoModalList: {
			type: 'string',
			source: 'html',
			selector: '.modalTwoList',
		},
		tileThreeIcon: {
			type: 'string',
			default: 'fa-solid fa-paw',
		},
		tileThreeModalTitle: {
			type: 'string',
			default: 'Tile 3 tittle',
		},
		tileThreeModalLink: {
			type: 'string',
			default: 'Tile 3 modal link',
		},
		tileThreeModalDescription: {
			type: 'string',
			default: 'Tile 3 modal discription',
		},
		tileThreeModalPrizeOne: {
			type: 'string',
			default: 'Tile 3 modal prize one',
		},
		tileThreeModalPrizeOneUrl: {
			type: 'string',
			default: 'https://placehold.it/75',
		},
		tileThreeModalPrizeTwo: {
			type: 'string',
			default: 'Tile 3 modal prize two',
		},
		tileThreeModalPrizeTwoUrl: {
			type: 'string',
			default: 'https://placehold.it/75',
		},
		tileThreeModalPrizeThree: {
			type: 'string',
			default: 'Tile 3 modal prize Three',
		},
		tileThreeModalPrizeThreeUrl: {
			type: 'string',
			default: 'https://placehold.it/75',
		},
		tileThreeModalPrizeFour: {
			type: 'string',
			default: 'Tile 3 modal prize Four',
		},
		tileThreeModalPrizeFourUrl: {
			type: 'string',
			default: 'https://placehold.it/75',
		},
		tileThreeModalPrizeFive: {
			type: 'string',
			default: 'Tile 3 modal prize Five',
		},
		tileThreeModalPrizeFiveUrl: {
			type: 'string',
			default: 'https://placehold.it/75',
		},
		tileFourIcon: {
			type: 'string',
			default: 'fa-solid fa-paw',
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
