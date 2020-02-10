An extended editor from CKEditor 5 inline editor build
==============================================

## Overview

Build is just an extension from the  [inline editor build](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/overview.html#inline-editor) for CKEditor 5.

Below are the added plugins from the default inline build
- Font
- Alignment
- WordCount
- TodoList
- Underline
- Strikethrough
- Code
- Subscript
- Superscript

![CKEditor 5 inline editor build screenshot](https://c.cksource.com/a/1/img/npm/ckeditor5-build-inline.png)


## Quick start

First, install the build from npm:

```bash
npm install --save @netzon-oss/javascript-inline-editor
```

And use it in your JavaScript application:

```js
import InlineEditor from '@netzon-oss/javascript-inline-editor';

// Or using the CommonJS version:
// const InlineEditor = require( '@netzon-oss/javascript-inline-editor' );

InlineEditor
	.create( document.querySelector( '#editor' ) )
	.then( editor => {
		window.editor = editor;
	} )
	.catch( error => {
		console.error( 'There was a problem initializing the editor.', error );
	} );
```

**Note:** Read more in the [Advanced setup guide](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/advanced-setup.html) for a deeper integration into your application.


## License

Licensed under the terms of [GNU General Public License Version 2 or later](http://www.gnu.org/licenses/gpl.html). For full details about the license, please check the `LICENSE.md` file or [https://ckeditor.com/legal/ckeditor-oss-license](https://ckeditor.com/legal/ckeditor-oss-license).
