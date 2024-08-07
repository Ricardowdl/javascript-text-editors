/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import InlineEditorBase from "@ckeditor/ckeditor5-editor-inline/src/inlineeditor";

import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import UploadAdapter from "@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";
import CKFinder from "@ckeditor/ckeditor5-ckfinder/src/ckfinder";
import EasyImage from "@ckeditor/ckeditor5-easy-image/src/easyimage";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Image from "@ckeditor/ckeditor5-image/src/image";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";
import Indent from "@ckeditor/ckeditor5-indent/src/indent";
import Link from "@ckeditor/ckeditor5-link/src/link";
import List from "@ckeditor/ckeditor5-list/src/list";
import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
import Table from "@ckeditor/ckeditor5-table/src/table";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar";

import Font from "@ckeditor/ckeditor5-font/src/font";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
import WordCount from "@ckeditor/ckeditor5-word-count/src/wordcount";
import TodoList from "@ckeditor/ckeditor5-list/src/todolist";

import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline";
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough";
import Code from "@ckeditor/ckeditor5-basic-styles/src/code";
import Subscript from "@ckeditor/ckeditor5-basic-styles/src/subscript";
import Superscript from "@ckeditor/ckeditor5-basic-styles/src/superscript";

import tablecellproperties from "@ckeditor/ckeditor5-table/src/tablecellproperties";
import tableproperties from "@ckeditor/ckeditor5-table/src/tableproperties";

export default class InlineEditor extends InlineEditorBase {}

// Plugins to include in the build.
InlineEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	CKFinder,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	Font,
	Alignment,
	WordCount,
	TodoList,
	Underline,
	Strikethrough,
	Code,
	Subscript,
	Superscript,
	tablecellproperties,
	tableproperties,
];

const customColorPalette = [
	{
		color: "rgb(0,0,0)",
		label: "Black",
	},
	{
		color: "rgb(77,77,77)",
		label: "Dim grey",
	},
	{
		color: "rgb(153, 153, 153)",
		label: "Grey",
	},
	{
		color: "rgb(230, 230, 230)",
		label: "Light grey",
	},
	{
		color: "rgb(255, 255, 255)",
		label: "White",
	},
	{
		color: "rgb(230, 77, 77)",
		label: "Red",
	},
	{
		color: "rgb(230, 153, 77)",
		label: "Orange",
	},
	{
		color: "rgb(230, 230, 77)",
		label: "Yellow",
	},
	{
		color: "rgb(150, 230, 77)",
		label: "Light green",
	},
	{
		color: "rgb(77, 230, 77)",
		label: "green",
	},
	{
		color: "rgb(77, 230, 153)",
		label: "Aquamarine",
	},
	{
		color: "rgb(77, 230, 230)",
		label: "Turquoise",
	},
	{
		color: "rgb(77, 153, 230)",
		label: "Light blue",
	},
	{
		color: "rgb(77, 77, 230)",
		label: "Blue",
	},
	{
		color: "rgb(153, 77, 230)",
		label: "Purple",
	},
];

// Editor configuration.
InlineEditor.defaultConfig = {
	toolbar: {
		items: [
			"heading",
			"|",
			"bold",
			"italic",
			"underline",
			"strikethrough",
			"code",
			"subscript",
			"superscript",
			"link",
			"|",
			"alignment:left",
			"alignment:right",
			"alignment:center",
			"alignment:justify",
			"bulletedList",
			"numberedList",
			"|",
			"fontColor",
			"fontBackgroundColor",
			"|",
			"indent",
			"outdent",
			"|",
			"imageUpload",
			"blockQuote",
			"insertTable",
			"mediaEmbed",
			"undo",
			"redo",
		],
	},
	image: {
		toolbar: [
			"imageStyle:full",
			"imageStyle:side",
			"|",
			"imageTextAlternative",
		],
	},
	table: {
		contentToolbar: [
			"tableColumn",
			"tableRow",
			"mergeTableCells",
			"tableproperties",
			"tablecellproperties",
		],
		tableProperties: {
			borderColors: customColorPalette,
			backgroundColors: customColorPalette,
			dimensions: true,
			alignment: true
		},

		// Set the palettes for table cells.
		tableCellProperties: {
			borderColors: customColorPalette,
			backgroundColors: customColorPalette,
			dimensions: true,
			alignment: true
		},
	},

	// This value must be kept in sync with the language defined in webpack.config.js.
	language: "en",
};
