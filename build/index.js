/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/board-member/edit.js":
/*!**********************************!*\
  !*** ./src/board-member/edit.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ edit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/board-member/editor.scss");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
//import { useBlockProps } from '@wordpress/block-editor';
//import { RichText } from '@wordpress/block-editor';



/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
//see all the code in differnt branches
//has some branches master, panel-one, panel-two
function edit({
  attributes,
  setAttributes
}) {
  //export default function edit(props) {
  //let attributes = props.attributes;
  //let {attributes, setAttributes} = props;

  //drop down and color palate dont work at same time
  let divStyles = {
    //  backgroundColor: attributes.backgroundColor,
    //  color: attributes.textColor,
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
      style: divStyles
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "board-member-block"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "memberOne"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "memberNane",
    value: attributes.memberNameOne,
    onChange: memberNameOne => setAttributes({
      memberNameOne
    }),
    placeholder: "name"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "memberDescription",
    value: attributes.memberDescriptionOne,
    onChange: memberDescriptionOne => setAttributes({
      memberDescriptionOne
    }),
    placeholder: "description"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "memberQuote",
    value: attributes.memberQuoteOne,
    onChange: memberQuoteOne => setAttributes({
      memberQuoteOne
    }),
    placeholder: "Quote"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "memberTwo"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "memberNane",
    value: attributes.memberNameTwo,
    onChange: memberNameTwo => setAttributes({
      memberNameTwo
    }),
    placeholder: "name"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "memberDescription",
    value: attributes.memberDescriptionTwo,
    onChange: memberDescriptionTwo => setAttributes({
      memberDescriptionTwo
    }),
    placeholder: "description"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "memberQuote",
    value: attributes.memberQuoteTwo,
    onChange: memberQuoteTwo => setAttributes({
      memberQuoteTwo
    }),
    placeholder: "Quote"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "memberThree"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "memberNane",
    value: attributes.memberNameThree,
    onChange: memberNameThree => setAttributes({
      memberNameThree
    }),
    placeholder: "name"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "memberDescription",
    value: attributes.memberDescriptionThree,
    onChange: memberDescriptionThree => setAttributes({
      memberDescriptionThree
    }),
    placeholder: "description"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "memberQuote",
    value: attributes.memberQuoteThree,
    onChange: memberQuoteThree => setAttributes({
      memberQuoteThree
    }),
    placeholder: "Quote"
  })))));
}

/***/ }),

/***/ "./src/board-member/index.js":
/*!***********************************!*\
  !*** ./src/board-member/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/board-member/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/board-member/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/board-member/save.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('rs-blockfolder/board-member', {
  /**
   * @see https://make.wordpress.org/core/2020/11/18/block-api-version-2/
   */
  apiVersion: 2,
  /**
   * This is the display title for your block, which can be translated with `i18n` functions.
   * The block inserter will show this name.
   */
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('board-member', 'rs-blockfolder'),
  /**
   * This is a short description for your block, can be translated with `i18n` functions.
   * It will be shown in the Block Tab in the Settings Sidebar.
   */
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('board-member', 'rs-blockfolder'),
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
    html: false
  },
  keywords: ['block', 'board memeber', 'quotes', 'quote', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('test'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('review'), 'rs'],
  //these are the date "fields" we want to store with our blocks
  attributes: {
    memberNameOne: {
      type: 'string',
      default: ''
    },
    memberQuoteOne: {
      type: 'string',
      default: ''
    },
    memberDescriptionOne: {
      type: 'string',
      default: ''
    },
    memberNameTwo: {
      type: 'string',
      default: ''
    },
    memberQuoteTwo: {
      type: 'string',
      default: ''
    },
    memberDescriptionTwo: {
      type: 'string',
      default: ''
    },
    memberNameThree: {
      type: 'string',
      default: ''
    },
    memberQuoteThree: {
      type: 'string',
      default: ''
    },
    memberDescriptionThree: {
      type: 'string',
      default: ''
    }
  },
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  //or
  //edit: function (){
  //
  //}

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
  //same as
  // save: save
});

/***/ }),

/***/ "./src/board-member/save.js":
/*!**********************************!*\
  !*** ./src/board-member/save.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

function save({
  attributes
}) {
  const isFillOne = attributes.memberQuoteOne;
  const isFillTwo = attributes.memberQuoteTwo;
  const isFillThree = attributes.memberQuoteThree;
  const memberName = {
    //borderBottom: "2px solid black",
    marginBottom: "12px",
    marginTop: "18px",
    marginLeft: "18px",
    marginRight: "18px"
  };
  const box = {
    width: "500px",
    minWidth: "450px",
    //minWidth: "33%",
    //backgroundColor: "rgba(26, 28, 14, 0.1)",
    borderRadius: "50px"
  };
  const blockStyles = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap"
  };
  const flipedQuote = {
    transform: "scale(-1, -1)",
    color: "#88cd00",
    display: "flex",
    flexDirection: "row-reverse",
    fontSize: "3em"
  };
  const description = {
    margin: "8px",
    // margin: "0 auto",
    // width: "50%",
    // paddingTop: "20px",
    // paddingLeft: "8px",
    padding: "40px",
    backgroundColor: "rgba(26, 28, 14, 0.1)",
    borderRadius: "50px"
  };
  const quoteBox = {
    marginLeft: "7px",
    borderLeft: "8px solid #88cd00",
    padding: "50px"
    //borderRadius: "0px 0px 50px 50px",
  };

  const quote = {
    color: "#88cd00"
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "board-members",
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
      style: blockStyles
    })
  }, isFillOne ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: box
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    style: memberName,
    className: "memberName"
  }, attributes.memberNameOne), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: description,
    className: "description"
  }, attributes.memberDescriptionOne), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: quoteBox,
    className: "quoteBox"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "memberQuoteOne"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: quote,
    className: "dashicons dashicons-format-quote"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, attributes.memberQuoteOne), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: flipedQuote
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "dashicons dashicons-format-quote"
  }))))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null), isFillTwo ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: box
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    style: memberName
  }, attributes.memberNameTwo), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: description,
    className: "description"
  }, attributes.memberDescriptionTwo), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: quoteBox,
    className: "quoteBox"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "memberQuoteTwo"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: quote,
    className: "dashicons dashicons-format-quote"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, attributes.memberQuoteTwo), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: flipedQuote
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "dashicons dashicons-format-quote"
  }))))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null), isFillThree ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: box
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    style: memberName
  }, attributes.memberNameThree), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: description,
    className: "description"
  }, attributes.memberDescriptionThree), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: quoteBox,
    className: "quoteBox"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "memberQuoteThree"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: quote,
    className: "dashicons dashicons-format-quote"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, attributes.memberQuoteThree), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: flipedQuote
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "dashicons dashicons-format-quote"
  }))))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null));
}

/***/ }),

/***/ "./src/border-control/edit.js":
/*!************************************!*\
  !*** ./src/border-control/edit.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);








const borderInspectorControls = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.createHigherOrderComponent)(BlockEdit => {
  return props => {
    let divStyles = {
      borderStyle: props.attributes.borderStyle || 'none',
      borderWidth: props.attributes.borderWidth + 'px' || 0,
      borderRadius: props.attributes.borderRadius + 'px' || 0,
      borderColor: props.attributes.borderColor || 'none'
    };
    let settings = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.select)('core/editor').getEditorSettings();
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block",
      style: divStyles
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
      ...props
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: "Border Controlss",
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: "border Style",
      value: props.attributes.borderStyle,
      options: [{
        label: 'none',
        value: 'none'
      }, {
        label: 'Solid',
        value: 'solid'
      }, {
        label: 'Dashed',
        value: 'dashed'
      }, {
        label: 'Dotted',
        value: 'dotted'
      }],
      onChange: value => {
        props.setAttributes({
          borderStyle: value
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: "Border Width",
      value: props.attributes.borderWidth,
      onChange: value => props.setAttributes({
        borderWidth: value
      }),
      min: 0.5,
      max: 5
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: "Border radius",
      value: props.attributes.borderRadius,
      onChange: value => props.setAttributes({
        borderRadius: value
      }),
      min: 0,
      max: 50
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
      value: props.attributes.borderColor,
      onChange: color => {
        props.setAttributes({
          borderColor: color
        });
      },
      colors: settings.colors
    })))));
  };
}, 'borderInspectorControls');
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('editor.BlockEdit', 'rs-blockfolder/border-control/inspector-controls', borderInspectorControls);

/***/ }),

/***/ "./src/border-control/index.js":
/*!*************************************!*\
  !*** ./src/border-control/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ "./src/border-control/settings.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/border-control/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/border-control/save.js");




/***/ }),

/***/ "./src/border-control/save.js":
/*!************************************!*\
  !*** ./src/border-control/save.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);

const addBorderProps = (saveElementProps, blockType, attributes) => {
  //only add if they picked a border style
  if (attributes.borderStyle) {
    saveElementProps.style = saveElementProps.style || {};
    saveElementProps.style.borderStyle = attributes.borderStyle;
    saveElementProps.style.borderColor = attributes.borderColor;
    saveElementProps.style.borderWidth = attributes.borderWidth;
    saveElementProps.style.borderRadius = attributes.borderRadius;
  }
  return saveElementProps;
};
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('blocks.getSaveContent.extraProps', 'rs-blockfolder/border-control/extra-props', addBorderProps);

/***/ }),

/***/ "./src/border-control/settings.js":
/*!****************************************!*\
  !*** ./src/border-control/settings.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);

const addBorderAttributes = (settings, name) => {
  //settings is the object used to decalre the block\
  // name is the name of the block (if you wanted to apply this only certain blocks)

  //apppend the settings
  settings.attributes.borderStyle = {
    type: 'string',
    default: ''
  };
  settings.attributes.borderWidth = {
    type: 'number',
    default: 2
  };
  settings.attributes.borderRadius = {
    type: 'number',
    default: 0
  };
  settings.attributes.borderColor = {
    type: 'string',
    default: ''
  };

  //modify any additional settings

  return settings;
};
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('blocks.registerBlockType', 'rs-blockfolder/border-control/settings', addBorderAttributes);

/***/ }),

/***/ "./src/employeebio/edit.js":
/*!*********************************!*\
  !*** ./src/employeebio/edit.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ edit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/employeebio/editor.scss");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */



/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */



/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

function edit({
  attributes,
  setAttributes
}) {
  //export default function edit(props) {
  //let attributes = props.attributes;
  //let {attributes, setAttributes} = props;

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
      className: attributes.theme
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: "light or dark theme",
    initalOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Theme'),
    value: attributes.theme,
    onChange: theme => {
      setAttributes({
        theme
      });
    },
    options: [{
      value: 'light',
      label: 'light theme'
    }, {
      value: 'dark',
      label: 'dark theme'
    }]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('toggle bio'),
    value: attributes.bioToggle,
    onChange: bioToggle => {
      setAttributes({
        bioToggle
      });
    },
    options: [{
      value: 'off',
      label: 'bio off'
    }, {
      value: 'on',
      label: 'bio on'
    }]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('toggle picture border radius'),
    value: attributes.picRadius,
    onChange: picRadius => {
      setAttributes({
        picRadius
      });
    },
    options: [{
      value: 'radiusOff',
      label: 'radius off'
    }, {
      value: 'radiusOn',
      label: 'radius on'
    }]
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cardHeader"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Add picture here: "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: attributes.picRadius
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    allowedTypes: ['image'],
    onSelect: img => setAttributes({
      imgUrl: img.sizes.thumbnail.url
    }),
    render: ({
      open
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.imgUrl,
      onClick: open
    })
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Employees Name: "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "name",
    value: attributes.name,
    onChange: name => setAttributes({
      name
    }),
    placeholder: "John Doe"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: attributes.bioToggle
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Bio: "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    tagName: "div",
    className: "bio",
    value: attributes.bio,
    onChange: bio => setAttributes({
      bio
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Employee Bio')
  })));
}

/***/ }),

/***/ "./src/employeebio/index.js":
/*!**********************************!*\
  !*** ./src/employeebio/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/employeebio/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/employeebio/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/employeebio/save.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('rs-blockfolder/employeebio', {
  /**
   * @see https://make.wordpress.org/core/2020/11/18/block-api-version-2/
   */
  apiVersion: 2,
  /**
   * This is the display title for your block, which can be translated with `i18n` functions.
   * The block inserter will show this name.
   */
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Employeebio', 'rs-blockfolder'),
  /**
   * This is a short description for your block, can be translated with `i18n` functions.
   * It will be shown in the Block Tab in the Settings Sidebar.
   */
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show bio for employees', 'rs-blockfolder'),
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
    html: false
  },
  keywords: ['bio block', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('bio'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('employee'), 'rs'],
  attributes: {
    imgUrl: {
      type: 'string',
      default: 'https://placehold.it/75'
    },
    name: {
      type: 'string',
      source: 'text',
      selector: '.name'
    },
    bio: {
      type: 'string',
      source: 'html',
      selector: '.bio'
    },
    theme: {
      type: 'string'
    },
    bioToggle: {
      type: 'string'
    },
    picRadius: {
      type: 'string'
    }
  },
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/employeebio/save.js":
/*!*********************************!*\
  !*** ./src/employeebio/save.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
function save({
  attributes
}) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
      className: attributes.theme
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "card"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cardHeader"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: attributes.picRadius
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: attributes.imgUrl,
    alt: 'Photo of ______'
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "nameDiv"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "name"
  }, attributes.name))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: attributes.bioToggle
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "bio"
  }, attributes.bio))));
}

/***/ }),

/***/ "./src/haws-events/edit.js":
/*!*********************************!*\
  !*** ./src/haws-events/edit.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ edit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/haws-events/editor.scss");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
//import { useBlockProps } from '@wordpress/block-editor';
//import { RichText } from '@wordpress/block-editor';

//import { SelectControl, PanelBody, PanelRow, ColorPalette, ColorPicker } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

//import { createElement } from '@wordpress/element';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
//see all the code in differnt branches
//has some branches master, panel-one, panel-two
function edit({
  attributes,
  setAttributes
}) {
  //export default function edit(props) {
  //let attributes = props.attributes;
  //let {attributes, setAttributes} = props;
  let divStyles = {
    backgroundColor: attributes.backgroundColor,
    color: attributes.textColor
  };
  // document.addEventListener("DOMContentLoaded", function() {
  // 	var eventSelectMenu = createElement('select');
  // 	eventSelectMenu.setAttribute('id', 'eventSelectMenu');
  // 	var mainConatainer = getElementById("hawsEvents");
  // 	mainConatainer.innerHTML = eventSelectMenu;
  // 	mainConatainer.innerHTML = "test";
  //   });

  //var eventMenuOption = document.createElement('div');

  //eventSelectMenu.getElemementbyId('eventSelectMenu').appendChild(eventMenuOption);

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
      style: divStyles
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "firstEvent"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "eventOneTitle",
    value: attributes.eventOneTitle,
    onChange: eventOneTitle => setAttributes({
      eventOneTitle
    }),
    placeholder: "Title"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "eventOneStart",
    value: attributes.eventOneStart,
    onChange: eventOneStart => setAttributes({
      eventOneStart
    }),
    placeholder: "Start Date"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "eventOneEnd",
    value: attributes.eventOneEnd,
    onChange: eventOneEnd => setAttributes({
      eventOneEnd
    }),
    placeholder: "End Date"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "eventOneWeekDay",
    value: attributes.eventOneWeekDay,
    onChange: eventOneWeekDay => setAttributes({
      eventOneWeekDay
    }),
    placeholder: "Day(s) of the week"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "eventOneDescription",
    value: attributes.eventOneDescription,
    onChange: eventOneDescription => setAttributes({
      eventOneDescription
    }),
    placeholder: "Description"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "eventOneCallToAction",
    value: attributes.eventOneCallToAction,
    onChange: eventOneCallToAction => setAttributes({
      eventOneCallToAction
    }),
    placeholder: "Call to action"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "eventOneCallToActionLink",
    value: attributes.eventOneCallToActionLink,
    onChange: eventOneCallToActionLink => setAttributes({
      eventOneCallToActionLink
    }),
    placeholder: "Call to action link"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "eventOneCallToActionSecondary",
    value: attributes.eventOneCallToActionSecondary,
    onChange: eventOneCallToActionSecondary => setAttributes({
      eventOneCallToActionSecondary
    }),
    placeholder: "Secondary Call to action"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "eventOneCallToActionSecondaryLink",
    value: attributes.eventOneCallToActionSecondaryLink,
    onChange: eventOneCallToActionSecondaryLink => setAttributes({
      eventOneCallToActionSecondaryLink
    }),
    placeholder: "Secondary Call to action link"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "eventTwoTitle",
    value: attributes.eventTwoTitle,
    onChange: eventTwoTitle => setAttributes({
      eventTwoTitle
    }),
    placeholder: "Title"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "eventTwoStart",
    value: attributes.eventTwoStart,
    onChange: eventTwoStart => setAttributes({
      eventTwoStart
    }),
    placeholder: "Start Date"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "eventTwoEnd",
    value: attributes.eventTwoEnd,
    onChange: eventTwoEnd => setAttributes({
      eventTwoEnd
    }),
    placeholder: "End Date"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "eventTwoWeekDay",
    value: attributes.eventTwoWeekDay,
    onChange: eventTwoWeekDay => setAttributes({
      eventTwoWeekDay
    }),
    placeholder: "Day(s) of the week"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "eventTwoDescription",
    value: attributes.eventTwoDescription,
    onChange: eventTwoDescription => setAttributes({
      eventTwoDescription
    }),
    placeholder: "Description"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "eventTwoCallToAction",
    value: attributes.eventTwoCallToAction,
    onChange: eventTwoCallToAction => setAttributes({
      eventTwoCallToAction
    }),
    placeholder: "Call to action"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "eventTwoCallToActionLink",
    value: attributes.eventTwoCallToActionLink,
    onChange: eventTwoCallToActionLink => setAttributes({
      eventTwoCallToActionLink
    }),
    placeholder: "Call to action link"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "eventTwoCallToActionSecondary",
    value: attributes.eventTwoCallToActionSecondary,
    onChange: eventTwoCallToActionSecondary => setAttributes({
      eventTwoCallToActionSecondary
    }),
    placeholder: "Secondary Call to action"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "eventTwoCallToActionSecondaryLink",
    value: attributes.eventTwoCallToActionSecondaryLink,
    onChange: eventTwoCallToActionSecondaryLink => setAttributes({
      eventTwoCallToActionSecondaryLink
    }),
    placeholder: "Secondary Call to action link"
  })));
}

/***/ }),

/***/ "./src/haws-events/index.js":
/*!**********************************!*\
  !*** ./src/haws-events/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/haws-events/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/haws-events/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/haws-events/save.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('rs-blockfolder/haws-events', {
  /**
   * @see https://make.wordpress.org/core/2020/11/18/block-api-version-2/
   */
  apiVersion: 2,
  /**
   * This is the display title for your block, which can be translated with `i18n` functions.
   * The block inserter will show this name.
   */
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('haws-events', 'rs-blockfolder'),
  /**
   * This is a short description for your block, can be translated with `i18n` functions.
   * It will be shown in the Block Tab in the Settings Sidebar.
   */
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('haws-events', 'rs-blockfolder'),
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
    html: false
  },
  keywords: ['block', 'haws-events', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('test'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('review'), 'rs'],
  //these are the date "fields" we want to store with our blocks
  attributes: {
    eventOneTitle: {
      type: 'string',
      source: 'text',
      selector: '.eventOneTitle'
    },
    eventOneStart: {
      type: 'string',
      source: 'text',
      selector: '.eventOneStart'
    },
    eventOneEnd: {
      type: 'string',
      source: 'text',
      selector: '.eventOneEnd'
    },
    eventOneWeekDay: {
      type: 'string',
      source: 'text',
      selector: '.eventOneWeekDay'
    },
    eventOneDescription: {
      type: 'string',
      source: 'text',
      selector: '.eventOneDescription'
    },
    eventOneCallToAction: {
      type: 'string',
      source: 'text',
      selector: '.eventOneCallToAction'
    },
    eventOneCallToActionLink: {
      type: 'string',
      default: '#'
    },
    eventOneCallToActionSecondary: {
      type: 'string',
      source: 'text',
      selector: '.eventOneCallToActionSecondary'
    },
    eventOneCallToActionSecondaryLink: {
      type: 'string',
      default: '#'
    },
    eventTwoTitle: {
      type: 'string',
      source: 'text',
      selector: '.eventTwoTitle'
    },
    eventTwoStart: {
      type: 'string',
      source: 'text',
      selector: '.eventTwoStart'
    },
    eventTwoEnd: {
      type: 'string',
      source: 'text',
      selector: '.eventTwoEnd'
    },
    eventTwoWeekDay: {
      type: 'string',
      source: 'text',
      selector: '.eventTwoWeekDay'
    },
    eventTwoDescription: {
      type: 'string',
      source: 'text',
      selector: '.eventTwoDescription'
    },
    eventTwoCallToAction: {
      type: 'string',
      source: 'text',
      selector: '.eventTwoCallToAction'
    },
    eventTwoCallToActionLink: {
      type: 'string',
      default: '#'
    },
    eventTwoCallToActionSecondary: {
      type: 'string',
      source: 'text',
      selector: '.eventTwoCallToActionSecondary'
    },
    eventTwoCallToActionSecondaryLink: {
      type: 'string',
      default: '#'
    }
  },
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  //or
  //edit: function (){
  //
  //}

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
  //same as
  // save: save
});

/***/ }),

/***/ "./src/haws-events/save.js":
/*!*********************************!*\
  !*** ./src/haws-events/save.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

function save({
  attributes
}) {
  const divStyles = {
    color: 'black',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  };
  const eventCard = {
    border: '2px solid black',
    width: '33%',
    borderRadius: '30px',
    marginRight: '12px'
  };
  const cardTitle = {
    padding: '15px',
    backgroundColor: '#88cd00',
    border: 'bottom 2px solid #88cd00',
    borderRadius: '30px 30px 0 0'
  };
  const cardBodyText = {
    padding: '15px'
  };
  const cardDates = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  };
  const callToActionFlex = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  };
  const callToAction = {
    padding: '10px',
    border: 'none',
    marginTop: '5px',
    marginBottom: '10px',
    color: 'white',
    backgroundColor: '#88cd00',
    borderRadius: '10px',
    marginRight: '12px'
  };
  const eventLink = {
    color: 'white',
    textDecoration: 'none'
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hawsEvents",
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
      style: divStyles
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: eventCard,
    className: " eventOneCard"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    style: cardTitle,
    className: "eventOneTitle"
  }, attributes.eventOneTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: cardBodyText,
    className: "cardBodyText"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: cardDates
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    className: "eventOneStart"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, attributes.eventOneStart)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    className: "eventOneEnd"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, attributes.eventOneEnd))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eventOneWeekDay"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("b", null, attributes.eventOneWeekDay)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eventOneDescription"
  }, attributes.eventOneDescription), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: callToActionFlex
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: callToAction
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    style: eventLink,
    className: "eventOneCallToActionLink",
    href: attributes.eventOneCallToActionLink
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "eventOneCallToAction"
  }, attributes.eventOneCallToAction))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: callToAction
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    style: eventLink,
    href: attributes.eventOneCallToActionSecondaryLink
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eventOneCallToActionSecondary"
  }, attributes.eventOneCallToActionSecondary)))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: eventCard,
    className: " eventTwoCard"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    style: cardTitle,
    className: "eventTwoTitle"
  }, attributes.eventTwoTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: cardBodyText,
    className: "cardBodyText"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: cardDates
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    className: "eventTwoStart"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, attributes.eventTwoStart)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    className: "eventTwoEnd"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, attributes.eventTwoEnd))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eventTwoWeekDay"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("b", null, attributes.eventTwoWeekDay)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eventTwoDescription"
  }, attributes.eventTwoDescription), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: callToActionFlex
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: callToAction
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    style: eventLink,
    className: "eventTwoCallToActionLink",
    href: attributes.eventTwoCallToActionLink
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "eventTwoCallToAction"
  }, attributes.eventTwoCallToAction))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: callToAction
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    style: eventLink,
    href: attributes.eventTwoCallToActionSecondaryLink
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eventTwoCallToActionSecondary"
  }, attributes.eventTwoCallToActionSecondary)))))));
}

/***/ }),

/***/ "./src/haws-fest/edit.js":
/*!*******************************!*\
  !*** ./src/haws-fest/edit.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ edit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/haws-fest/editor.scss");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
//import { useBlockProps } from '@wordpress/block-editor';
//import { RichText } from '@wordpress/block-editor';



/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
//see all the code in differnt branches
//has some branches master, panel-one, panel-two
function edit({
  attributes,
  setAttributes
}) {
  //export default function edit(props) {
  //let attributes = props.attributes;
  //let {attributes, setAttributes} = props;

  //drop down and color palate dont work at same time
  let divStyles = {
    backgroundColor: attributes.backgroundColor,
    color: attributes.textColor
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
      style: divStyles
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "haws-fest"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileOne"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileOneIcon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileOneIcon",
    value: attributes.tileOneIcon,
    onChange: tileOneIcon => setAttributes({
      tileOneIcon
    }),
    placeholder: "FA Icon"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileOneModalTitle"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileOneModalTitle",
    value: attributes.tileOneModalTitle,
    onChange: tileOneModalTitle => setAttributes({
      tileOneModalTitle
    }),
    placeholder: "Modal 1 Tittle"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileOneModalDates"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileOneModalDates",
    value: attributes.tileOneModalDates,
    onChange: tileOneModalDates => setAttributes({
      tileOneModalDates
    }),
    placeholder: "Modal One Date "
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileOneModalWho"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileOneModalWho",
    value: attributes.tileOneModalWho,
    onChange: tileOneModalWho => setAttributes({
      tileOneModalWho
    }),
    placeholder: "Modal One Date "
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileOneModalWhere"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileOneModalWhere",
    value: attributes.tileOneModalWhere,
    onChange: tileOneModalWhere => setAttributes({
      tileOneModalWhere
    }),
    placeholder: "Modal One Where "
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileOneModalAdress"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileOneModalAdress",
    value: attributes.tileOneModalAdress,
    onChange: tileOneModalAdress => setAttributes({
      tileOneModalAdress
    }),
    placeholder: "Address "
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileOneModalDetails"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileOneModalDetails",
    value: attributes.tileOneModalDetails,
    onChange: tileOneModalDetails => setAttributes({
      tileOneModalDetails
    }),
    placeholder: "details "
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileOneModalDetailsTwo"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileOneModalDetailsTwo",
    value: attributes.tileOneModalDetailsTwo,
    onChange: tileOneModalDetailsTwo => setAttributes({
      tileOneModalDetailsTwo
    }),
    placeholder: "details 2 "
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileOneModalGoogleMap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileOneModalGoogleMap",
    value: attributes.tileOneModalGoogleMap,
    onChange: tileOneModalGoogleMap => setAttributes({
      tileOneModalGoogleMap
    }),
    placeholder: "google map embed Iframe"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileTwo"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileTwoIcon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileTwoIcon",
    value: attributes.tileTwoIcon,
    onChange: tileTwoIcon => setAttributes({
      tileTwoIcon
    }),
    placeholder: "FA Icon"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileTwoModalTitle"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileTwoModalTitle",
    value: attributes.tileTwoModalTitle,
    onChange: tileTwoModalTitle => setAttributes({
      tileTwoModalTitle
    }),
    placeholder: "Modal 2 title"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "ul",
    multiline: "li",
    value: attributes.tileTwoModalList,
    allowedFormats: ['core/bold', 'core/italic', 'core/html'],
    onChange: tileTwoModalList => setAttributes({
      tileTwoModalList
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('tile 2 list')
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileThree"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileThreeIcon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileThreeIcon",
    value: attributes.tileThreeIcon,
    onChange: tileThreeIcon => setAttributes({
      tileThreeIcon
    }),
    placeholder: "tile 3 FA Icon"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileThreeModalTitle"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileThreeModalTitle",
    value: attributes.tileThreeModalTitle,
    onChange: tileThreeModalTitle => setAttributes({
      tileThreeModalTitle
    }),
    placeholder: "Tile 3 modal title"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileThreeModalLink"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileThreeModalLink",
    value: attributes.tileThreeModalLink,
    onChange: tileThreeModalLink => setAttributes({
      tileThreeModalLink
    }),
    placeholder: "Tile 3 modal link"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileThreeModalDescription"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileThreeModalDescription",
    value: attributes.tileThreeModalDescription,
    onChange: tileThreeModalDescription => setAttributes({
      tileThreeModalDescription
    }),
    placeholder: "Tile 3 modal description"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileThreeModalPrizeOne"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileThreeModalPrizeOne",
    value: attributes.tileThreeModalPrizeOne,
    onChange: tileThreeModalPrizeOne => setAttributes({
      tileThreeModalPrizeOne
    }),
    placeholder: "Tile 3 modal prize name"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileThreeModalPrizeOnePic"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    allowedTypes: ['image'],
    onSelect: tileThreeModalPrizeOnePic => setAttributes({
      tileThreeModalPrizeOneUrl: tileThreeModalPrizeOnePic.sizes.thumbnail.url
    }),
    render: ({
      open
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.tileThreeModalPrizeOneUrl,
      onClick: open
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileThreeModalPrizeOneBPic"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    allowedTypes: ['image'],
    onSelect: tileThreeModalPrizeOneBPic => setAttributes({
      tileThreeModalPrizeOneBUrl: tileThreeModalPrizeOneBPic.sizes.thumbnail.url
    }),
    render: ({
      open
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.tileThreeModalPrizeOneBUrl,
      onClick: open
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileThreeModalPrizeOneCPic"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    allowedTypes: ['image'],
    onSelect: tileThreeModalPrizeOneCPic => setAttributes({
      tileThreeModalPrizeOneCUrl: tileThreeModalPrizeOneCPic.sizes.thumbnail.url
    }),
    render: ({
      open
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.tileThreeModalPrizeOneCUrl,
      onClick: open
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileThreeModalPrizeTwo"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileThreeModalPrizeTwo",
    value: attributes.tileThreeModalPrizeTwo,
    onChange: tileThreeModalPrizeTwo => setAttributes({
      tileThreeModalPrizeTwo
    }),
    placeholder: "Tile 3 modal prize name 2"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileThreeModalPrizeTwoPic"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    allowedTypes: ['image'],
    onSelect: tileThreeModalPrizeTwoPic => setAttributes({
      tileThreeModalPrizeTwoUrl: tileThreeModalPrizeTwoPic.sizes.thumbnail.url
    }),
    render: ({
      open
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.tileThreeModalPrizeTwoUrl,
      onClick: open
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileThreeModalPrizeThree"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileThreeModalPrizeThree",
    value: attributes.tileThreeModalPrizeThree,
    onChange: tileThreeModalPrizeThree => setAttributes({
      tileThreeModalPrizeThree
    }),
    placeholder: "Tile 3 modal prize name 3"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileThreeModalPrizeThreePic"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    allowedTypes: ['image'],
    onSelect: tileThreeModalPrizeThreePic => setAttributes({
      tileThreeModalPrizeThreeUrl: tileThreeModalPrizeThreePic.sizes.thumbnail.url
    }),
    render: ({
      open
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.tileThreeModalPrizeThreeUrl,
      onClick: open
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileThreeModalPrizeFour"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileThreeModalPrizeFour",
    value: attributes.tileThreeModalPrizeFour,
    onChange: tileThreeModalPrizeFour => setAttributes({
      tileThreeModalPrizeFour
    }),
    placeholder: "Tile 3 modal prize name 4"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileThreeModalPrizeFourPic"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    allowedTypes: ['image'],
    onSelect: tileThreeModalPrizeFourPic => setAttributes({
      tileThreeModalPrizeFourUrl: tileThreeModalPrizeFourPic.sizes.thumbnail.url
    }),
    render: ({
      open
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.tileThreeModalPrizeFourUrl,
      onClick: open
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileThreeModalPrizeFive"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileThreeModalPrizeFive",
    value: attributes.tileThreeModalPrizeFive,
    onChange: tileThreeModalPrizeFive => setAttributes({
      tileThreeModalPrizeFive
    }),
    placeholder: "Tile 3 modal prize name 5"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileThreeModalPrizeFivePic"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    allowedTypes: ['image'],
    onSelect: tileThreeModalPrizeFivePic => setAttributes({
      tileThreeModalPrizeFiveUrl: tileThreeModalPrizeFivePic.sizes.thumbnail.url
    }),
    render: ({
      open
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.tileThreeModalPrizeFiveUrl,
      onClick: open
    })
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileFour"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileFourIcon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileFourIcon",
    value: attributes.tileFourIcon,
    onChange: tileFourIcon => setAttributes({
      tileFourIcon
    }),
    placeholder: "FA Icon"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileFourTitle"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileFourTitle",
    value: attributes.tileFourTitle,
    onChange: tileFourTitle => setAttributes({
      tileFourTitle
    }),
    placeholder: "tile 4 title"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileFourModalSponsorPicUrl"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileFourModalSponsorPicUrl",
    value: attributes.tileFourModalSponsorPicUrl,
    onChange: tileFourModalSponsorPicUrl => setAttributes({
      tileFourModalSponsorPicUrl
    }),
    placeholder: "tile 4 image url"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileFourModalSponsorSignUpUrl"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileFourModalSponsorSignUpUrl",
    value: attributes.tileFourModalSponsorSignUpUrl,
    onChange: tileFourModalSponsorSignUpUrl => setAttributes({
      tileFourModalSponsorSignUpUrl
    }),
    placeholder: "sponsor sign up url"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileFourModalVendorPicUrl"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileFourModalVendorPicUrl",
    value: attributes.tileFourModalVendorPicUrl,
    onChange: tileFourModalVendorPicUrl => setAttributes({
      tileFourModalVendorPicUrl
    }),
    placeholder: "tile 4 image url"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileFourModalVendorSignUpUrl"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileFourModalVendorSignUpUrl",
    value: attributes.tileFourModalVendorSignUpUrl,
    onChange: tileFourModalVendorSignUpUrl => setAttributes({
      tileFourModalVendorSignUpUrl
    }),
    placeholder: "vendor sign up url"
  })))));
}

/***/ }),

/***/ "./src/haws-fest/index.js":
/*!********************************!*\
  !*** ./src/haws-fest/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/haws-fest/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/haws-fest/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/haws-fest/save.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('rs-blockfolder/haws-fest', {
  /**
   * @see https://make.wordpress.org/core/2020/11/18/block-api-version-2/
   */
  apiVersion: 2,
  /**
   * This is the display title for your block, which can be translated with `i18n` functions.
   * The block inserter will show this name.
   */
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('haws-fest', 'rs-blockfolder'),
  /**
   * This is a short description for your block, can be translated with `i18n` functions.
   * It will be shown in the Block Tab in the Settings Sidebar.
   */
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('haws-fest', 'rs-blockfolder'),
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
    html: false
  },
  keywords: ['block', 'haws-fest', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('test'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('review'), 'rs'],
  //these are the date "fields" we want to store with our blocks
  attributes: {
    tileOneIcon: {
      type: 'string',
      default: 'fa-solid fa-paw'
    },
    tileOneModalTitle: {
      type: 'string',
      default: 'Modal 1 Title'
    },
    tileOneModalDates: {
      type: 'string',
      default: 'Modal One Dates'
    },
    tileOneModalWho: {
      type: 'string',
      default: 'Who'
    },
    tileOneModalWhere: {
      type: 'string',
      default: 'Where'
    },
    tileOneModalAdress: {
      type: 'string',
      default: 'Where'
    },
    tileOneModalDetails: {
      type: 'string',
      default: 'Details'
    },
    tileOneModalDetailsTwo: {
      type: 'string',
      default: 'Details'
    },
    tileOneModalGoogleMap: {
      type: 'string',
      default: 'google map iframe'
    },
    tileTwoIcon: {
      type: 'string',
      default: 'fa-solid fa-paw'
    },
    tileTwoModalTitle: {
      type: 'string',
      default: 'modal 2 title'
    },
    tileTwoModalList: {
      type: 'string',
      source: 'html',
      selector: '.modalTwoList'
    },
    tileThreeIcon: {
      type: 'string',
      default: 'fa-solid fa-paw'
    },
    tileThreeModalTitle: {
      type: 'string',
      default: 'Tile 3 tittle'
    },
    tileThreeModalLink: {
      type: 'string',
      default: 'Tile 3 modal link'
    },
    tileThreeModalDescription: {
      type: 'string',
      default: 'Tile 3 modal discription'
    },
    tileThreeModalPrizeOne: {
      type: 'string',
      default: 'Tile 3 modal prize one'
    },
    tileThreeModalPrizeOneUrl: {
      type: 'string',
      default: 'https://placehold.it/75'
    },
    tileThreeModalPrizeOneBUrl: {
      type: 'string',
      default: 'https://placehold.it/75'
    },
    tileThreeModalPrizeOneCUrl: {
      type: 'string',
      default: 'https://placehold.it/75'
    },
    tileThreeModalPrizeTwo: {
      type: 'string',
      default: 'Tile 3 modal prize two'
    },
    tileThreeModalPrizeTwoUrl: {
      type: 'string',
      default: 'https://placehold.it/75'
    },
    tileThreeModalPrizeThree: {
      type: 'string',
      default: 'Tile 3 modal prize Three'
    },
    tileThreeModalPrizeThreeUrl: {
      type: 'string',
      default: 'https://placehold.it/75'
    },
    tileThreeModalPrizeFour: {
      type: 'string',
      default: 'Tile 3 modal prize Four'
    },
    tileThreeModalPrizeFourUrl: {
      type: 'string',
      default: 'https://placehold.it/75'
    },
    tileThreeModalPrizeFive: {
      type: 'string',
      default: 'Tile 3 modal prize Five'
    },
    tileThreeModalPrizeFiveUrl: {
      type: 'string',
      default: 'https://placehold.it/75'
    },
    tileFourIcon: {
      type: 'string',
      default: 'fa-solid fa-paw'
    },
    tileFourTitle: {
      type: 'string',
      default: 'tile 4 title '
    },
    tileFourModalSponsorPicUrl: {
      type: 'string',
      default: 'https://placehold.it/75'
    },
    tileFourModalSponsorSignUpUrl: {
      type: 'string',
      default: '#'
    },
    tileFourModalVendorPicUrl: {
      type: 'string',
      default: 'https://placehold.it/75'
    },
    tileFourModalVendorSignUpUrl: {
      type: 'string',
      default: '#'
    }
  },
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  //or
  //edit: function (){
  //
  //}

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
  //same as
  // save: save
});

/***/ }),

/***/ "./src/haws-fest/save.js":
/*!*******************************!*\
  !*** ./src/haws-fest/save.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

function save({
  attributes
}) {
  const isFillOne = attributes.tileOneIcon;
  const isFillTwo = attributes.tileTwoIcon;
  const isFillThree = attributes.tileThreeIcon;
  const isFillFour = attributes.tileFourIcon;
  const divStyles = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "haws-fest",
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
      style: divStyles
    })
  }, isFillOne ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-toggle": "modal",
    "data-target": "#tileOneModal"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tile"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileInner"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: attributes.tileOneIcon
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "modal fade",
    id: "tileOneModal",
    tabindex: "-1",
    role: "dialog",
    "aria-labelledby": "tileOneModal",
    "aria-hidden": "true"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "modal-dialog modal-dialog-centered",
    role: "document"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "modal-content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "modal-header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    class: "modal-title",
    id: "exampleModalLongTitle"
  }, attributes.tileOneModalTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    class: "close",
    "data-dismiss": "modal",
    "aria-label": "Close"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "aria-hidden": "true"
  }, "\xD7"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "modal-body"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h6", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("b", null, "When is it?"), " "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, " ", attributes.tileOneModalDates), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h6", {
    id: "whoToBring"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("b", null, "Who should I bring?"), " "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, attributes.tileOneModalWho), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h6", {
    id: "whereIsIt"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("b", null, "Where is it?"), " "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, attributes.tileOneModalWhere), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, attributes.tileOneModalAdress), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, attributes.tileOneModalDetails), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, attributes.tileOneModalDetailsTwo), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("iframe", {
    src: attributes.tileOneModalGoogleMap,
    width: "600",
    height: "450",
    style: "border:0;",
    allowfullscreen: "",
    loading: "lazy",
    referrerpolicy: "no-referrer-when-downgrade"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "modal-footer"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    class: "btn btn-secondary",
    "data-dismiss": "modal"
  }, "Close")))))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null), isFillTwo ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-toggle": "modal",
    "data-target": "#tileTwoModal"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tile"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileInner"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: attributes.tileTwoIcon
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "modal fade",
    id: "tileTwoModal",
    tabindex: "-1",
    role: "dialog",
    "aria-labelledby": "tileTwoModal",
    "aria-hidden": "true"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "modal-dialog modal-dialog-centered",
    role: "document"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "modal-content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "modal-header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    class: "modal-title",
    id: "exampleModalLongTitle"
  }, attributes.tileTwoModalTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    class: "close",
    "data-dismiss": "modal",
    "aria-label": "Close"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "aria-hidden": "true"
  }, "\xD7"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "modal-body"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "modalTwoList"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.RawHTML, null, attributes.tileTwoModalList))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "modal-footer"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    class: "btn btn-secondary",
    "data-dismiss": "modal"
  }, "Close")))))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null), isFillThree ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-toggle": "modal",
    "data-target": "#tileThreeModal"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tile"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileInner"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: attributes.tileThreeIcon
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "modal fade",
    id: "tileThreeModal",
    tabindex: "-1",
    role: "dialog",
    "aria-labelledby": "tileThreeModal",
    "aria-hidden": "true"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "modal-dialog modal-dialog-centered",
    role: "document"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "modal-content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "modal-header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    class: "modal-title",
    id: "exampleModalLongTitle"
  }, attributes.tileThreeModalTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    class: "close",
    "data-dismiss": "modal",
    "aria-label": "Close"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "aria-hidden": "true"
  }, "\xD7"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "modal-body"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, attributes.tileThreeModalDescription), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "buttonContainer"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: attributes.tileThreeModalLink,
    className: "hawsButton"
  }, "Start Here!")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "prizeSep"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("b", null, "Goal: $50")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "prizePadding"
  }, "Prize: ", attributes.tileThreeModalPrizeOne), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "prizeFlex"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: attributes.tileThreeModalPrizeOneUrl
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: attributes.tileThreeModalPrizeOneBUrl
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: attributes.tileThreeModalPrizeOneCUrl
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "prizeSep"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("b", null, "Goal: $200"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "prizePadding"
  }, "Prize: ", attributes.tileThreeModalPrizeTwo), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: attributes.tileThreeModalPrizeTwoUrl
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("b", null, "*All prizes above are included"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "prizeSep"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("b", null, "Goal: $400"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "prizePadding"
  }, "Prize: ", attributes.tileThreeModalPrizeThree), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: attributes.tileThreeModalPrizeThreeUrl
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("b", null, "*All prizes above are included"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "prizeSep"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("b", null, "Goal: $750")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "prizePadding"
  }, "Prize: ", attributes.tileThreeModalPrizeFour), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: attributes.tileThreeModalPrizeFourUrl
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("b", null, "*All prizes above are included"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("b", null, "Goal: $1000")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "prizePadding"
  }, "Prize: ", attributes.tileThreeModalPrizeFive), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: attributes.tileThreeModalPrizeFiveUrl
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("b", null, "*All prizes above are included"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "modal-footer"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    class: "btn btn-secondary",
    "data-dismiss": "modal"
  }, "Close")))))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null), isFillFour ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-toggle": "modal",
    "data-target": "#tileFourModal"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tile"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileInner"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: attributes.tileFourIcon
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "modal fade",
    id: "tileFourModal",
    tabindex: "-1",
    role: "dialog",
    "aria-labelledby": "tileFourModal",
    "aria-hidden": "true"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "modal-dialog modal-dialog-centered",
    role: "document"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "modal-content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "modal-header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    class: "modal-title",
    id: "exampleModalLongTitle"
  }, attributes.tileFourTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    class: "close",
    "data-dismiss": "modal",
    "aria-label": "Close"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "aria-hidden": "true"
  }, "\xD7"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "modal-body"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "tileFourPics",
    src: attributes.tileFourModalSponsorPicUrl
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "buttonContainer"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: attributes.tileFourModalSponsorSignUpUrl,
    className: "hawsButton"
  }, "Sponsor Sign Up")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "tileFourPics",
    src: attributes.tileFourModalVendorPicUrl
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "buttonContainer"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: attributes.tileFourModalVendorSignUpUrl,
    className: "hawsButton"
  }, "Vendor Sign Up"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "contact"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h6", null, "Please contact us if you have any questions!"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("b", null, "Mackenzie Fink")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "mailto:mackenzie@hawspets.org"
  }, "mackenzie@hawspets.org")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("b", null, "Jessica Pinkos")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "mailto:jessica@hawspets.org"
  }, "jessica@hawspets.org"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "modal-footer"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    class: "btn btn-secondary",
    "data-dismiss": "modal"
  }, "Close")))))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _service_page_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service-page/index */ "./src/service-page/index.js");
/* harmony import */ var _pet_future_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pet-future/index */ "./src/pet-future/index.js");
/* harmony import */ var _haws_fest_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haws-fest/index */ "./src/haws-fest/index.js");
/* harmony import */ var _haws_events_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./haws-events/index */ "./src/haws-events/index.js");
/* harmony import */ var _location_time_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./location-time/index */ "./src/location-time/index.js");
/* harmony import */ var _test_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test/index */ "./src/test/index.js");
/* harmony import */ var _employeebio_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employeebio/index */ "./src/employeebio/index.js");
/* harmony import */ var _border_control_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./border-control/index */ "./src/border-control/index.js");
/* harmony import */ var _board_member_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./board-member/index */ "./src/board-member/index.js");
/* harmony import */ var _scout_badges_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scout-badges/index */ "./src/scout-badges/index.js");
//include all block index.js files
//repeat for each block











/***/ }),

/***/ "./src/location-time/edit.js":
/*!***********************************!*\
  !*** ./src/location-time/edit.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ edit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/location-time/editor.scss");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
//import { useBlockProps } from '@wordpress/block-editor';
//import { RichText } from '@wordpress/block-editor';



/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
//see all the code in differnt branches
//has some branches master, panel-one, panel-two
function edit({
  attributes,
  setAttributes
}) {
  //export default function edit(props) {
  //let attributes = props.attributes;
  //let {attributes, setAttributes} = props;

  //drop down and color palate dont work at same time
  let divStyles = {
    //  backgroundColor: attributes.backgroundColor,
    //  color: attributes.textColor,
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
      style: divStyles
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "location-time-block"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "location",
    value: attributes.location,
    onChange: location => setAttributes({
      location
    }),
    placeholder: "location"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "time",
    value: attributes.time,
    onChange: time => setAttributes({
      time
    }),
    placeholder: "time"
  }))));
}

/***/ }),

/***/ "./src/location-time/index.js":
/*!************************************!*\
  !*** ./src/location-time/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/location-time/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/location-time/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/location-time/save.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('rs-blockfolder/location-time', {
  /**
   * @see https://make.wordpress.org/core/2020/11/18/block-api-version-2/
   */
  apiVersion: 2,
  /**
   * This is the display title for your block, which can be translated with `i18n` functions.
   * The block inserter will show this name.
   */
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('location-time', 'rs-blockfolder'),
  /**
   * This is a short description for your block, can be translated with `i18n` functions.
   * It will be shown in the Block Tab in the Settings Sidebar.
   */
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('location-time', 'rs-blockfolder'),
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
    html: false
  },
  keywords: ['block', 'location-time', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('test'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('review'), 'rs'],
  //these are the date "fields" we want to store with our blocks
  attributes: {
    location: {
      type: 'string',
      default: ''
    },
    time: {
      type: 'string',
      default: ''
    }
  },
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  //or
  //edit: function (){
  //
  //}

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
  //same as
  // save: save
});

/***/ }),

/***/ "./src/location-time/save.js":
/*!***********************************!*\
  !*** ./src/location-time/save.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

function save({
  attributes
}) {
  const isFillOne = attributes.location;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "location-time",
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save()
  }, isFillOne ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "location-time-flex"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icons dashicons dashicons-location"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "location"
  }, attributes.location)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "location-time-flex"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icons dashicons dashicons-calendar-alt"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "time"
  }, attributes.time))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null));
}

/***/ }),

/***/ "./src/pet-future/edit.js":
/*!********************************!*\
  !*** ./src/pet-future/edit.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ edit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/pet-future/editor.scss");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
//import { useBlockProps } from '@wordpress/block-editor';
//import { RichText } from '@wordpress/block-editor';



/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
//see all the code in differnt branches
//has some branches master, panel-one, panel-two
function edit({
  attributes,
  setAttributes
}) {
  //export default function edit(props) {
  //let attributes = props.attributes;
  //let {attributes, setAttributes} = props;

  //drop down and color palate dont work at same time
  let divStyles = {
    backgroundColor: attributes.backgroundColor,
    color: attributes.textColor
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
      style: divStyles
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "servicePage"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileOne"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileOnePhoto"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    allowedTypes: ['image'],
    onSelect: tileOneImg => setAttributes({
      tileOneImgUrl: tileOneImg.sizes.large.url
    }),
    render: ({
      open
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.tileOneImgUrl,
      onClick: open
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileOneTitle",
    value: attributes.tileOneTitle,
    onChange: tileOneTitle => setAttributes({
      tileOneTitle
    }),
    placeholder: "Title"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileOneUrl",
    value: attributes.tileOneUrl,
    onChange: tileOneUrl => setAttributes({
      tileOneUrl
    }),
    placeholder: "URL MUST INCLUDE HTTPS://"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileTwo"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileTwoPhoto"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    allowedTypes: ['image'],
    onSelect: tileTwoImg => setAttributes({
      tileTwoImgUrl: tileTwoImg.sizes.large.url
    }),
    render: ({
      open
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.tileTwoImgUrl,
      onClick: open
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileTwoTitleBlock"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileTwoTitle",
    value: attributes.tileTwoTitle,
    onChange: tileTwoTitle => setAttributes({
      tileTwoTitle
    }),
    placeholder: "Title"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileTwoUrl",
    value: attributes.tileTwoUrl,
    onChange: tileTwoUrl => setAttributes({
      tileTwoUrl
    }),
    placeholder: "URL MUST INCLUDE HTTPS://"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileThree"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileThreePhoto"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    allowedTypes: ['image'],
    onSelect: tileThreeImg => setAttributes({
      tileThreeImgUrl: tileThreeImg.sizes.large.url
    }),
    render: ({
      open
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.tileThreeImgUrl,
      onClick: open
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileThreeTitleBlock"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileThreeTitle",
    value: attributes.tileThreeTitle,
    onChange: tileThreeTitle => setAttributes({
      tileThreeTitle
    }),
    placeholder: "Title"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileThreeUrl",
    value: attributes.tileThreeUrl,
    onChange: tileThreeUrl => setAttributes({
      tileThreeUrl
    }),
    placeholder: "URL MUST INCLUDE HTTPS://"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileFour"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileFourPhoto"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    allowedTypes: ['image'],
    onSelect: tileFourImg => setAttributes({
      tileFourImgUrl: tileFourImg.sizes.large.url
    }),
    render: ({
      open
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.tileFourImgUrl,
      onClick: open
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileFourTitleBlock"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileFourTitle",
    value: attributes.tileFourTitle,
    onChange: tileFourTitle => setAttributes({
      tileFourTitle
    }),
    placeholder: "Title"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileFourUrl",
    value: attributes.tileFourUrl,
    onChange: tileFourUrl => setAttributes({
      tileFourUrl
    }),
    placeholder: "URL MUST INCLUDE HTTPS://"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileFive"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileFivePhoto"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    allowedTypes: ['image'],
    onSelect: tileFiveImg => setAttributes({
      tileFiveImgUrl: tileFiveImg.sizes.large.url
    }),
    render: ({
      open
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.tileFiveImgUrl,
      onClick: open
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileFiveTitleBlock"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileFiveTitle",
    value: attributes.tileFiveTitle,
    onChange: tileFiveTitle => setAttributes({
      tileFiveTitle
    }),
    placeholder: "Title"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileFiveUrl",
    value: attributes.tileFiveUrl,
    onChange: tileFiveUrl => setAttributes({
      tileFiveUrl
    }),
    placeholder: "URL MUST INCLUDE HTTPS://"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileSix"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileSixPhoto"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    allowedTypes: ['image'],
    onSelect: tileSixImg => setAttributes({
      tileSixImgUrl: tileSixImg.sizes.large.url
    }),
    render: ({
      open
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.tileSixImgUrl,
      onClick: open
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileSixTitleBlock"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileSixTitle",
    value: attributes.tileSixTitle,
    onChange: tileSixTitle => setAttributes({
      tileSixTitle
    }),
    placeholder: "Title"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileSixUrl",
    value: attributes.tileSixUrl,
    onChange: tileSixUrl => setAttributes({
      tileSixUrl
    }),
    placeholder: "URL MUST INCLUDE HTTPS://"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileSeven"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileSevenPhoto"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    allowedTypes: ['image'],
    onSelect: tileSevenImg => setAttributes({
      tileSevenImgUrl: tileSevenImg.sizes.large.url
    }),
    render: ({
      open
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.tileSevenImgUrl,
      onClick: open
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileSevenTitleBlock"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileSevenTitle",
    value: attributes.tileSevenTitle,
    onChange: tileSevenTitle => setAttributes({
      tileSevenTitle
    }),
    placeholder: "Title"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileSevenUrl",
    value: attributes.tileSevenUrl,
    onChange: tileSevenUrl => setAttributes({
      tileSevenUrl
    }),
    placeholder: "URL MUST INCLUDE HTTPS://"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileEight"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileEightPhoto"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    allowedTypes: ['image'],
    onSelect: tileEightImg => setAttributes({
      tileEightImgUrl: tileEightImg.sizes.large.url
    }),
    render: ({
      open
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.tileEightImgUrl,
      onClick: open
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileEightTitleBlock"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileEightTitle",
    value: attributes.tileEightTitle,
    onChange: tileEightTitle => setAttributes({
      tileEightTitle
    }),
    placeholder: "Title"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileEightUrl",
    value: attributes.tileEightUrl,
    onChange: tileEightUrl => setAttributes({
      tileEightUrl
    }),
    placeholder: "URL MUST INCLUDE HTTPS://"
  })))));
}

/***/ }),

/***/ "./src/pet-future/index.js":
/*!*********************************!*\
  !*** ./src/pet-future/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/pet-future/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/pet-future/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/pet-future/save.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('rs-blockfolder/pet-future', {
  /**
   * @see https://make.wordpress.org/core/2020/11/18/block-api-version-2/
   */
  apiVersion: 2,
  /**
   * This is the display title for your block, which can be translated with `i18n` functions.
   * The block inserter will show this name.
   */
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('pet-future', 'rs-blockfolder'),
  /**
   * This is a short description for your block, can be translated with `i18n` functions.
   * It will be shown in the Block Tab in the Settings Sidebar.
   */
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('pet-future', 'rs-blockfolder'),
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
    html: false
  },
  keywords: ['block', 'pet future block', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('test'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('review'), 'rs'],
  //these are the date "fields" we want to store with our blocks
  attributes: {
    tileOneImgUrl: {
      type: 'string',
      default: 'https://placehold.it/75'
    },
    tileOneTitle: {
      type: 'string',
      source: 'text',
      selector: '.tileOneTitle'
    },
    tileOneUrl: {
      type: 'string',
      default: '#'
    },
    tileTwoImgUrl: {
      type: 'string',
      default: 'https://placehold.it/75'
    },
    tileTwoTitle: {
      type: 'string',
      source: 'text',
      selector: '.tileTwoTitle'
    },
    tileTwoUrl: {
      type: 'string',
      default: '#'
    },
    tileThreeImgUrl: {
      type: 'string',
      default: 'https://placehold.it/75'
    },
    tileThreeTitle: {
      type: 'string',
      source: 'text',
      selector: '.tileThreeTitle'
    },
    tileThreeUrl: {
      type: 'string',
      default: '#'
    },
    tileFourImgUrl: {
      type: 'string',
      default: 'https://placehold.it/75'
    },
    tileFourTitle: {
      type: 'string',
      source: 'text',
      selector: '.tileFourTitle'
    },
    tileFourUrl: {
      type: 'string',
      default: '#'
    },
    tileFiveImgUrl: {
      type: 'string',
      default: 'https://placehold.it/75'
    },
    tileFiveTitle: {
      type: 'string',
      source: 'text',
      selector: '.tileFiveTitle'
    },
    tileFiveUrl: {
      type: 'string',
      default: '#'
    },
    tileSixImgUrl: {
      type: 'string',
      default: 'https://placehold.it/75'
    },
    tileSixTitle: {
      type: 'string',
      source: 'text',
      selector: '.tileSixTitle'
    },
    tileSixUrl: {
      type: 'string',
      default: '#'
    },
    tileSevenImgUrl: {
      type: 'string',
      default: 'https://placehold.it/75'
    },
    tileSevenTitle: {
      type: 'string',
      source: 'text',
      selector: '.tileSevenTitle'
    },
    tileSevenUrl: {
      type: 'string',
      default: '#'
    },
    tileEightImgUrl: {
      type: 'string',
      default: 'https://placehold.it/75'
    },
    tileEightTitle: {
      type: 'string',
      source: 'text',
      selector: '.tileEightTitle'
    },
    tileEightUrl: {
      type: 'string',
      default: '#'
    }
  },
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  //or
  //edit: function (){
  //
  //}

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
  //same as
  // save: save
});

/***/ }),

/***/ "./src/pet-future/save.js":
/*!********************************!*\
  !*** ./src/pet-future/save.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

function save({
  attributes
}) {
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
    justifyContent: 'center'
  };
  const tileOneBackgroundImage = {
    backgroundImage: "url(" + attributes.tileOneImgUrl + ")",
    height: imgHeight,
    backgroundRepeat: 'no-repeat',
    backgroundSize: backgroundSize,
    borderRadius: borderRadius,
    backgroundPosition: 'center'
  };
  const tileTwoBackgroundImage = {
    backgroundImage: "url(" + attributes.tileTwoImgUrl + ")",
    height: imgHeight,
    backgroundRepeat: 'no-repeat',
    backgroundSize: backgroundSize,
    borderRadius: borderRadius,
    backgroundPosition: 'center'
  };
  const tileThreeBackgroundImage = {
    backgroundImage: "url(" + attributes.tileThreeImgUrl + ")",
    height: imgHeight,
    backgroundRepeat: 'no-repeat',
    backgroundSize: backgroundSize,
    borderRadius: borderRadius,
    backgroundPosition: 'center'
  };
  const tileFourBackgroundImage = {
    backgroundImage: "url(" + attributes.tileFourImgUrl + ")",
    height: imgHeight,
    backgroundRepeat: 'no-repeat',
    backgroundSize: backgroundSize,
    borderRadius: borderRadius,
    backgroundPosition: 'center'
  };
  const tileFiveBackgroundImage = {
    backgroundImage: "url(" + attributes.tileFiveImgUrl + ")",
    height: imgHeight,
    backgroundRepeat: 'no-repeat',
    backgroundSize: backgroundSize,
    borderRadius: borderRadius,
    backgroundPosition: 'center'
  };
  const tileSixBackgroundImage = {
    backgroundImage: "url(" + attributes.tileSixImgUrl + ")",
    height: imgHeight,
    backgroundRepeat: 'no-repeat',
    backgroundSize: backgroundSize,
    borderRadius: borderRadius,
    backgroundPosition: 'center'
  };
  const tileSevenBackgroundImage = {
    backgroundImage: "url(" + attributes.tileSevenImgUrl + ")",
    height: imgHeight,
    backgroundRepeat: 'no-repeat',
    backgroundSize: backgroundSize,
    borderRadius: borderRadius,
    backgroundPosition: 'center'
  };
  const tileEightBackgroundImage = {
    backgroundImage: "url(" + attributes.tileEightImgUrl + ")",
    height: imgHeight,
    backgroundRepeat: 'no-repeat',
    backgroundSize: backgroundSize,
    borderRadius: borderRadius,
    backgroundPosition: 'center'
  };
  const titleBorder = {
    borderRadius: '150px'
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "servicePage",
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
      style: divStyles
    })
  }, isFillOne ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tile"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileInner"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: attributes.tileOneUrl
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileImg",
    style: tileOneBackgroundImage
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileTitle",
    style: titleBorder
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "rs-tile-title title tileOneTitle"
  }, attributes.tileOneTitle)))))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null), isFillTwo ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tile"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileInner"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: attributes.tileTwoUrl
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileImg",
    style: tileTwoBackgroundImage
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileTitle",
    style: titleBorder
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "rs-tile-title title tileTwoTitle"
  }, attributes.tileTwoTitle)))))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null), isFillThree ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tile"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileInner"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: attributes.tileThreeUrl
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileImg",
    style: tileThreeBackgroundImage
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileTitle",
    style: titleBorder
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "rs-tile-title title tileThreeTitle"
  }, attributes.tileThreeTitle)))))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null), isFillFour ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tile"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileInner"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: attributes.tileFourUrl
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileImg",
    style: tileFourBackgroundImage
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileTitle",
    style: titleBorder
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "rs-tile-title title tileFourTitle"
  }, attributes.tileFourTitle)))))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null), isFillFive ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tile"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileInner"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: attributes.tileFiveUrl
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileImg",
    style: tileFiveBackgroundImage
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileTitle",
    style: titleBorder
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "rs-tile-title title tileFiveTitle"
  }, attributes.tileFiveTitle)))))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null), isFillSix ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tile"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileInner"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: attributes.tileSixUrl
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileImg",
    style: tileSixBackgroundImage
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileTitle",
    style: titleBorder
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "rs-tile-title title tileSixTitle"
  }, attributes.tileSixTitle)))))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null), isFillSeven ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tile"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileInner"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: attributes.tileSevenUrl
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileImg",
    style: tileSevenBackgroundImage
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileTitle",
    style: titleBorder
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "rs-tile-title title tileSevenTitle"
  }, attributes.tileSevenTitle)))))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null), isFillEight ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tile"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileInner"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: attributes.tileEightUrl
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileImg",
    style: tileEightBackgroundImage
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileTitle",
    style: titleBorder
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "rs-tile-title title tileEightTitle"
  }, attributes.tileEightTitle)))))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null));
}

/***/ }),

/***/ "./src/scout-badges/edit.js":
/*!**********************************!*\
  !*** ./src/scout-badges/edit.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ edit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/scout-badges/editor.scss");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
//import { useBlockProps } from '@wordpress/block-editor';
//import { RichText } from '@wordpress/block-editor';



/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
//see all the code in differnt branches
//has some branches master, panel-one, panel-two
function edit({
  attributes,
  setAttributes
}) {
  //export default function edit(props) {
  //let attributes = props.attributes;
  //let {attributes, setAttributes} = props;

  //drop down and color palate dont work at same time
  let divStyles = {
    backgroundColor: attributes.backgroundColor,
    color: attributes.textColor
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
      style: divStyles
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "servicePage"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileOne"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileOnePhoto"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    allowedTypes: ['image'],
    onSelect: tileOneImg => setAttributes({
      tileOneImgUrl: tileOneImg.sizes.thumbnail.url
    }),
    render: ({
      open
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.tileOneImgUrl,
      onClick: open
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileOneTitle",
    value: attributes.tileOneTitle,
    onChange: tileOneTitle => setAttributes({
      tileOneTitle
    }),
    placeholder: "Title"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileOneUrl",
    value: attributes.tileOneUrl,
    onChange: tileOneUrl => setAttributes({
      tileOneUrl
    }),
    placeholder: "URL MUST INCLUDE HTTPS://"
  })))));
}

/***/ }),

/***/ "./src/scout-badges/index.js":
/*!***********************************!*\
  !*** ./src/scout-badges/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/scout-badges/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/scout-badges/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/scout-badges/save.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('rs-blockfolder/scout-badges', {
  /**
   * @see https://make.wordpress.org/core/2020/11/18/block-api-version-2/
   */
  apiVersion: 2,
  /**
   * This is the display title for your block, which can be translated with `i18n` functions.
   * The block inserter will show this name.
   */
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('scout-badges', 'rs-blockfolder'),
  /**
   * This is a short description for your block, can be translated with `i18n` functions.
   * It will be shown in the Block Tab in the Settings Sidebar.
   */
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('scout-badges', 'rs-blockfolder'),
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
    html: false
  },
  keywords: ['block', 'scout-badges', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('test'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('review'), 'rs'],
  //these are the date "fields" we want to store with our blocks
  attributes: {
    tileOneImgUrl: {
      type: 'string',
      default: 'https://placehold.it/75'
    },
    tileOneTitle: {
      type: 'string',
      source: 'text',
      selector: '.tileOneTitle'
    },
    tileOneUrl: {
      type: 'string',
      default: '#'
    },
    tileTwoImgUrl: {
      type: 'string',
      default: 'https://placehold.it/75'
    },
    tileTwoTitle: {
      type: 'string',
      source: 'text',
      selector: '.tileTwoTitle'
    },
    tileTwoUrl: {
      type: 'string',
      default: '#'
    },
    tileThreeImgUrl: {
      type: 'string',
      default: 'https://placehold.it/75'
    },
    tileThreeTitle: {
      type: 'string',
      source: 'text',
      selector: '.tileThreeTitle'
    },
    tileThreeUrl: {
      type: 'string',
      default: '#'
    },
    tileFourImgUrl: {
      type: 'string',
      default: 'https://placehold.it/75'
    },
    tileFourTitle: {
      type: 'string',
      source: 'text',
      selector: '.tileFourTitle'
    },
    tileFourUrl: {
      type: 'string',
      default: '#'
    },
    tileFiveImgUrl: {
      type: 'string',
      default: 'https://placehold.it/75'
    },
    tileFiveTitle: {
      type: 'string',
      source: 'text',
      selector: '.tileFiveTitle'
    },
    tileFiveUrl: {
      type: 'string',
      default: '#'
    },
    tileSixImgUrl: {
      type: 'string',
      default: 'https://placehold.it/75'
    },
    tileSixTitle: {
      type: 'string',
      source: 'text',
      selector: '.tileSixTitle'
    },
    tileSixUrl: {
      type: 'string',
      default: '#'
    },
    tileSevenImgUrl: {
      type: 'string',
      default: 'https://placehold.it/75'
    },
    tileSevenTitle: {
      type: 'string',
      source: 'text',
      selector: '.tileSevenTitle'
    },
    tileSevenUrl: {
      type: 'string',
      default: '#'
    },
    tileEightImgUrl: {
      type: 'string',
      default: 'https://placehold.it/75'
    },
    tileEightTitle: {
      type: 'string',
      source: 'text',
      selector: '.tileEightTitle'
    },
    tileEightUrl: {
      type: 'string',
      default: '#'
    }
  },
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  //or
  //edit: function (){
  //
  //}

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
  //same as
  // save: save
});

/***/ }),

/***/ "./src/scout-badges/save.js":
/*!**********************************!*\
  !*** ./src/scout-badges/save.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

function save({
  attributes
}) {
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
    justifyContent: 'center'
  };
  const tileOneBackgroundImage = {
    backgroundImage: "url(" + attributes.tileOneImgUrl + ")",
    height: imgHeight,
    backgroundRepeat: 'no-repeat',
    backgroundSize: backgroundSize,
    borderRadius: borderRadius,
    width: imgWidth
  };
  // const tileTwoBackgroundImage = {

  // 	backgroundImage: "url(" + attributes.tileTwoImgUrl + ")",
  // 	height: imgHeight,
  // 	backgroundRepeat: 'no-repeat',
  // 	backgroundSize: backgroundSize,
  // 	borderRadius: borderRadius,
  // 	width: imgWidth,
  // }

  const titleBorder = {
    borderRadius: '150px'
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "servicePage",
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
      style: divStyles
    })
  }, isFillOne ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileTitle",
    style: titleBorder
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "title tileOneTitle"
  }, attributes.tileOneTitle)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flipCard"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flipCardInner"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tile flipCardFront"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileInner"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: attributes.tileOneUrl
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileImg",
    style: tileOneBackgroundImage
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flipCardBack"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "backCardHeader"
  }, attributes.tileOneTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "ashjdfk"))))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null));
}

/***/ }),

/***/ "./src/service-page/edit.js":
/*!**********************************!*\
  !*** ./src/service-page/edit.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ edit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/service-page/editor.scss");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
//import { useBlockProps } from '@wordpress/block-editor';
//import { RichText } from '@wordpress/block-editor';



/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
//see all the code in differnt branches
//has some branches master, panel-one, panel-two
function edit({
  attributes,
  setAttributes
}) {
  //export default function edit(props) {
  //let attributes = props.attributes;
  //let {attributes, setAttributes} = props;

  //drop down and color palate dont work at same time
  let divStyles = {
    backgroundColor: attributes.backgroundColor,
    color: attributes.textColor
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
      style: divStyles
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "servicePage"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileOne"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileOnePhoto"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    allowedTypes: ['image'],
    onSelect: tileOneImg => setAttributes({
      tileOneImgUrl: tileOneImg.sizes.large.url
    }),
    render: ({
      open
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.tileOneImgUrl,
      onClick: open
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileOneTitle",
    value: attributes.tileOneTitle,
    onChange: tileOneTitle => setAttributes({
      tileOneTitle
    }),
    placeholder: "Title"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileOneUrl",
    value: attributes.tileOneUrl,
    onChange: tileOneUrl => setAttributes({
      tileOneUrl
    }),
    placeholder: "URL MUST INCLUDE HTTPS://"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileTwo"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileTwoPhoto"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    allowedTypes: ['image'],
    onSelect: tileTwoImg => setAttributes({
      tileTwoImgUrl: tileTwoImg.sizes.large.url
    }),
    render: ({
      open
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.tileTwoImgUrl,
      onClick: open
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileTwoTitleBlock"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileTwoTitle",
    value: attributes.tileTwoTitle,
    onChange: tileTwoTitle => setAttributes({
      tileTwoTitle
    }),
    placeholder: "Title"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileTwoUrl",
    value: attributes.tileTwoUrl,
    onChange: tileTwoUrl => setAttributes({
      tileTwoUrl
    }),
    placeholder: "URL MUST INCLUDE HTTPS://"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileThree"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileThreePhoto"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    allowedTypes: ['image'],
    onSelect: tileThreeImg => setAttributes({
      tileThreeImgUrl: tileThreeImg.sizes.large.url
    }),
    render: ({
      open
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.tileThreeImgUrl,
      onClick: open
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileThreeTitleBlock"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileThreeTitle",
    value: attributes.tileThreeTitle,
    onChange: tileThreeTitle => setAttributes({
      tileThreeTitle
    }),
    placeholder: "Title"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileThreeUrl",
    value: attributes.tileThreeUrl,
    onChange: tileThreeUrl => setAttributes({
      tileThreeUrl
    }),
    placeholder: "URL MUST INCLUDE HTTPS://"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileFour"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileFourPhoto"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    allowedTypes: ['image'],
    onSelect: tileFourImg => setAttributes({
      tileFourImgUrl: tileFourImg.sizes.large.url
    }),
    render: ({
      open
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.tileFourImgUrl,
      onClick: open
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileFourTitleBlock"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileFourTitle",
    value: attributes.tileFourTitle,
    onChange: tileFourTitle => setAttributes({
      tileFourTitle
    }),
    placeholder: "Title"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileFourUrl",
    value: attributes.tileFourUrl,
    onChange: tileFourUrl => setAttributes({
      tileFourUrl
    }),
    placeholder: "URL MUST INCLUDE HTTPS://"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileFive"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileFivePhoto"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    allowedTypes: ['image'],
    onSelect: tileFiveImg => setAttributes({
      tileFiveImgUrl: tileFiveImg.sizes.large.url
    }),
    render: ({
      open
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.tileFiveImgUrl,
      onClick: open
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileFiveTitleBlock"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileFiveTitle",
    value: attributes.tileFiveTitle,
    onChange: tileFiveTitle => setAttributes({
      tileFiveTitle
    }),
    placeholder: "Title"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileFiveUrl",
    value: attributes.tileFiveUrl,
    onChange: tileFiveUrl => setAttributes({
      tileFiveUrl
    }),
    placeholder: "URL MUST INCLUDE HTTPS://"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileSix"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileSixPhoto"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    allowedTypes: ['image'],
    onSelect: tileSixImg => setAttributes({
      tileSixImgUrl: tileSixImg.sizes.large.url
    }),
    render: ({
      open
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.tileSixImgUrl,
      onClick: open
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileSixTitleBlock"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileSixTitle",
    value: attributes.tileSixTitle,
    onChange: tileSixTitle => setAttributes({
      tileSixTitle
    }),
    placeholder: "Title"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileSixUrl",
    value: attributes.tileSixUrl,
    onChange: tileSixUrl => setAttributes({
      tileSixUrl
    }),
    placeholder: "URL MUST INCLUDE HTTPS://"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileSeven"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileSevenPhoto"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    allowedTypes: ['image'],
    onSelect: tileSevenImg => setAttributes({
      tileSevenImgUrl: tileSevenImg.sizes.large.url
    }),
    render: ({
      open
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.tileSevenImgUrl,
      onClick: open
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileSevenTitleBlock"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileSevenTitle",
    value: attributes.tileSevenTitle,
    onChange: tileSevenTitle => setAttributes({
      tileSevenTitle
    }),
    placeholder: "Title"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileSevenUrl",
    value: attributes.tileSevenUrl,
    onChange: tileSevenUrl => setAttributes({
      tileSevenUrl
    }),
    placeholder: "URL MUST INCLUDE HTTPS://"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileEight"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileEightPhoto"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    allowedTypes: ['image'],
    onSelect: tileEightImg => setAttributes({
      tileEightImgUrl: tileEightImg.sizes.large.url
    }),
    render: ({
      open
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.tileEightImgUrl,
      onClick: open
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileEightTitleBlock"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileEightTitle",
    value: attributes.tileEightTitle,
    onChange: tileEightTitle => setAttributes({
      tileEightTitle
    }),
    placeholder: "Title"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "tileEightUrl",
    value: attributes.tileEightUrl,
    onChange: tileEightUrl => setAttributes({
      tileEightUrl
    }),
    placeholder: "URL MUST INCLUDE HTTPS://"
  })))));
}

/***/ }),

/***/ "./src/service-page/index.js":
/*!***********************************!*\
  !*** ./src/service-page/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/service-page/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/service-page/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/service-page/save.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('rs-blockfolder/service-page', {
  /**
   * @see https://make.wordpress.org/core/2020/11/18/block-api-version-2/
   */
  apiVersion: 2,
  /**
   * This is the display title for your block, which can be translated with `i18n` functions.
   * The block inserter will show this name.
   */
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('service-page', 'rs-blockfolder'),
  /**
   * This is a short description for your block, can be translated with `i18n` functions.
   * It will be shown in the Block Tab in the Settings Sidebar.
   */
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('service-page', 'rs-blockfolder'),
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
    html: false
  },
  keywords: ['block', 'service block', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('test'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('review'), 'rs'],
  //these are the date "fields" we want to store with our blocks
  attributes: {
    tileOneImgUrl: {
      type: 'string',
      default: 'https://placehold.it/75'
    },
    tileOneTitle: {
      type: 'string',
      source: 'text',
      selector: '.tileOneTitle'
    },
    tileOneUrl: {
      type: 'string',
      default: '#'
    },
    tileTwoImgUrl: {
      type: 'string',
      default: 'https://placehold.it/75'
    },
    tileTwoTitle: {
      type: 'string',
      source: 'text',
      selector: '.tileTwoTitle'
    },
    tileTwoUrl: {
      type: 'string',
      default: '#'
    },
    tileThreeImgUrl: {
      type: 'string',
      default: 'https://placehold.it/75'
    },
    tileThreeTitle: {
      type: 'string',
      source: 'text',
      selector: '.tileThreeTitle'
    },
    tileThreeUrl: {
      type: 'string',
      default: '#'
    },
    tileFourImgUrl: {
      type: 'string',
      default: 'https://placehold.it/75'
    },
    tileFourTitle: {
      type: 'string',
      source: 'text',
      selector: '.tileFourTitle'
    },
    tileFourUrl: {
      type: 'string',
      default: '#'
    },
    tileFiveImgUrl: {
      type: 'string',
      default: 'https://placehold.it/75'
    },
    tileFiveTitle: {
      type: 'string',
      source: 'text',
      selector: '.tileFiveTitle'
    },
    tileFiveUrl: {
      type: 'string',
      default: '#'
    },
    tileSixImgUrl: {
      type: 'string',
      default: 'https://placehold.it/75'
    },
    tileSixTitle: {
      type: 'string',
      source: 'text',
      selector: '.tileSixTitle'
    },
    tileSixUrl: {
      type: 'string',
      default: '#'
    },
    tileSevenImgUrl: {
      type: 'string',
      default: 'https://placehold.it/75'
    },
    tileSevenTitle: {
      type: 'string',
      source: 'text',
      selector: '.tileSevenTitle'
    },
    tileSevenUrl: {
      type: 'string',
      default: '#'
    },
    tileEightImgUrl: {
      type: 'string',
      default: 'https://placehold.it/75'
    },
    tileEightTitle: {
      type: 'string',
      source: 'text',
      selector: '.tileEightTitle'
    },
    tileEightUrl: {
      type: 'string',
      default: '#'
    }
  },
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  //or
  //edit: function (){
  //
  //}

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
  //same as
  // save: save
});

/***/ }),

/***/ "./src/service-page/save.js":
/*!**********************************!*\
  !*** ./src/service-page/save.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

function save({
  attributes
}) {
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
    justifyContent: 'center'
  };
  const tileOneBackgroundImage = {
    backgroundImage: "url(" + attributes.tileOneImgUrl + ")",
    height: imgHeight,
    backgroundRepeat: 'no-repeat',
    backgroundSize: backgroundSize,
    borderRadius: borderRadius
  };
  const tileTwoBackgroundImage = {
    backgroundImage: "url(" + attributes.tileTwoImgUrl + ")",
    height: imgHeight,
    backgroundRepeat: 'no-repeat',
    backgroundSize: backgroundSize,
    borderRadius: borderRadius
  };
  const tileThreeBackgroundImage = {
    backgroundImage: "url(" + attributes.tileThreeImgUrl + ")",
    height: imgHeight,
    backgroundRepeat: 'no-repeat',
    backgroundSize: backgroundSize,
    borderRadius: borderRadius
  };
  const tileFourBackgroundImage = {
    backgroundImage: "url(" + attributes.tileFourImgUrl + ")",
    height: imgHeight,
    backgroundRepeat: 'no-repeat',
    backgroundSize: backgroundSize,
    borderRadius: borderRadius
  };
  const tileFiveBackgroundImage = {
    backgroundImage: "url(" + attributes.tileFiveImgUrl + ")",
    height: imgHeight,
    backgroundRepeat: 'no-repeat',
    backgroundSize: backgroundSize,
    borderRadius: borderRadius
  };
  const tileSixBackgroundImage = {
    backgroundImage: "url(" + attributes.tileSixImgUrl + ")",
    height: imgHeight,
    backgroundRepeat: 'no-repeat',
    backgroundSize: backgroundSize,
    borderRadius: borderRadius
  };
  const tileSevenBackgroundImage = {
    backgroundImage: "url(" + attributes.tileSevenImgUrl + ")",
    height: imgHeight,
    backgroundRepeat: 'no-repeat',
    backgroundSize: backgroundSize,
    borderRadius: borderRadius
  };
  const tileEightBackgroundImage = {
    backgroundImage: "url(" + attributes.tileEightImgUrl + ")",
    height: imgHeight,
    backgroundRepeat: 'no-repeat',
    backgroundSize: backgroundSize,
    borderRadius: borderRadius
  };
  const titleBorder = {
    borderRadius: '150px'
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "servicePage",
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
      style: divStyles
    })
  }, isFillOne ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tile"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileInner"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: attributes.tileOneUrl
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileImg",
    style: tileOneBackgroundImage
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileTitle",
    style: titleBorder
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "title tileOneTitle"
  }, attributes.tileOneTitle)))))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null), isFillTwo ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tile"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileInner"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: attributes.tileTwoUrl
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileImg",
    style: tileTwoBackgroundImage
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileTitle",
    style: titleBorder
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "title tileTwoTitle"
  }, attributes.tileTwoTitle)))))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null), isFillThree ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tile"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileInner"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: attributes.tileThreeUrl
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileImg",
    style: tileThreeBackgroundImage
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileTitle",
    style: titleBorder
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "title tileThreeTitle"
  }, attributes.tileThreeTitle)))))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null), isFillFour ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tile"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileInner"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: attributes.tileFourUrl
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileImg",
    style: tileFourBackgroundImage
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileTitle",
    style: titleBorder
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "title tileFourTitle"
  }, attributes.tileFourTitle)))))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null), isFillFive ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tile"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileInner"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: attributes.tileFiveUrl
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileImg",
    style: tileFiveBackgroundImage
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileTitle",
    style: titleBorder
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "title tileFiveTitle"
  }, attributes.tileFiveTitle)))))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null), isFillSix ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tile"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileInner"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: attributes.tileSixUrl
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileImg",
    style: tileSixBackgroundImage
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileTitle",
    style: titleBorder
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "title tileSixTitle"
  }, attributes.tileSixTitle)))))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null), isFillSeven ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tile"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileInner"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: attributes.tileSevenUrl
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileImg",
    style: tileSevenBackgroundImage
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileTitle",
    style: titleBorder
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "title tileSevenTitle"
  }, attributes.tileSevenTitle)))))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null), isFillEight ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tile"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileInner"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: attributes.tileEightUrl
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileImg",
    style: tileEightBackgroundImage
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileTitle",
    style: titleBorder
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "title tileEightTitle"
  }, attributes.tileEightTitle)))))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null));
}

/***/ }),

/***/ "./src/test/edit.js":
/*!**************************!*\
  !*** ./src/test/edit.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ edit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/test/editor.scss");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
//import { useBlockProps } from '@wordpress/block-editor';
//import { RichText } from '@wordpress/block-editor';



/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
//see all the code in differnt branches
//has some branches master, panel-one, panel-two
function edit({
  attributes,
  setAttributes
}) {
  //export default function edit(props) {
  //let attributes = props.attributes;
  //let {attributes, setAttributes} = props;

  //drop down and color palate dont work at same time
  let divStyles = {
    backgroundColor: attributes.backgroundColor,
    color: attributes.textColor
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
      style: divStyles
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "basic",
    initalOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Background Color")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    value: attributes.backgroundColor,
    onChange: color => {
      setAttributes({
        backgroundColor: color
      });
    },
    colors: [{
      name: 'Blue',
      color: '#fff'
    }, {
      name: 'Red',
      color: '#fff'
    }, {
      name: 'Green',
      color: '#fff'
    }]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "text Color")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
    value: attributes.textColor,
    onChangeComplete: color => {
      setAttributes({
        textColor: color.hex
      });
    },
    disableAlpha: true
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select a rating:'),
    value: attributes.stars,
    onChange: stars => {
      setAttributes({
        stars: parseInt(stars)
      });
    },
    options: [{
      value: '1',
      label: '*'
    }, {
      value: '2',
      label: '**'
    }, {
      value: '3',
      label: '***'
    }, {
      value: '4',
      label: '****'
    }, {
      value: '5',
      label: '*****'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    value: attributes.quote,
    allowedFormats: ['core/bold', 'core/italic'],
    onChange: quote => setAttributes({
      quote
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('heading...')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "quote-profile"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "photo"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    allowedTypes: ['image'],
    onSelect: img => setAttributes({
      imgUrl: img.sizes.thumbnail.url
    }),
    render: ({
      open
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.imgUrl,
      onClick: open
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "text"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "author",
    value: attributes.author,
    onChange: author => setAttributes({
      author
    }),
    placeholder: "Ry sa"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "location",
    value: attributes.location,
    onChange: location => setAttributes({
      location
    }),
    placeholder: "wales"
  }))));
}

/***/ }),

/***/ "./src/test/index.js":
/*!***************************!*\
  !*** ./src/test/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/test/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/test/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/test/save.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('rs-blockfolder/test', {
  /**
   * @see https://make.wordpress.org/core/2020/11/18/block-api-version-2/
   */
  apiVersion: 2,
  /**
   * This is the display title for your block, which can be translated with `i18n` functions.
   * The block inserter will show this name.
   */
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('test', 'rs-blockfolder'),
  /**
   * This is a short description for your block, can be translated with `i18n` functions.
   * It will be shown in the Block Tab in the Settings Sidebar.
   */
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('test Block', 'rs-blockfolder'),
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
    html: false
  },
  keywords: ['service block', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('service'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('service page'), 'rs'],
  //these are the date "fields" we want to store with our blocks
  attributes: {
    quote: {
      type: 'string',
      source: 'html',
      selector: '.quote'
    },
    stars: {
      type: 'number',
      default: 5
    },
    imgUrl: {
      type: 'string',
      default: 'https://placehold.it/75'
    },
    author: {
      type: 'string',
      source: 'text',
      selector: '.author'
    },
    location: {
      type: 'string',
      source: 'text',
      selector: '.location'
    },
    backgroundColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    }
  },
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  //or
  //edit: function (){
  //
  //}

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
  //same as
  // save: save
});

/***/ }),

/***/ "./src/test/save.js":
/*!**************************!*\
  !*** ./src/test/save.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
function save({
  attributes
}) {
  let starIcons = Array(5).fill('&#9733;', 0, attributes.stars).join('');
  let divStyles = {
    backgroundColor: attributes.backgroundColor,
    color: attributes.textColor
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
      style: divStyles
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "stars"
  }, starIcons), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "div",
    value: attributes.quote,
    className: "quote"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "quote-profile"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "photo"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: attributes.imgUrl,
    alt: 'Photo of ______'
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "text"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "author"
  }, attributes.author), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "location"
  }, attributes.location))));
}

/***/ }),

/***/ "./src/board-member/editor.scss":
/*!**************************************!*\
  !*** ./src/board-member/editor.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/board-member/style.scss":
/*!*************************************!*\
  !*** ./src/board-member/style.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/employeebio/editor.scss":
/*!*************************************!*\
  !*** ./src/employeebio/editor.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/employeebio/style.scss":
/*!************************************!*\
  !*** ./src/employeebio/style.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/haws-events/editor.scss":
/*!*************************************!*\
  !*** ./src/haws-events/editor.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/haws-events/style.scss":
/*!************************************!*\
  !*** ./src/haws-events/style.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/haws-fest/editor.scss":
/*!***********************************!*\
  !*** ./src/haws-fest/editor.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/haws-fest/style.scss":
/*!**********************************!*\
  !*** ./src/haws-fest/style.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/location-time/editor.scss":
/*!***************************************!*\
  !*** ./src/location-time/editor.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/location-time/style.scss":
/*!**************************************!*\
  !*** ./src/location-time/style.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pet-future/editor.scss":
/*!************************************!*\
  !*** ./src/pet-future/editor.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pet-future/style.scss":
/*!***********************************!*\
  !*** ./src/pet-future/style.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scout-badges/editor.scss":
/*!**************************************!*\
  !*** ./src/scout-badges/editor.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scout-badges/style.scss":
/*!*************************************!*\
  !*** ./src/scout-badges/style.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/service-page/editor.scss":
/*!**************************************!*\
  !*** ./src/service-page/editor.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/service-page/style.scss":
/*!*************************************!*\
  !*** ./src/service-page/style.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/test/editor.scss":
/*!******************************!*\
  !*** ./src/test/editor.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/test/style.scss":
/*!*****************************!*\
  !*** ./src/test/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkrs_blockfolder"] = self["webpackChunkrs_blockfolder"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map