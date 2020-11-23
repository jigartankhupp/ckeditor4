/* bender-tags: editor, autogrow */
/* bender-ckeditor-plugins: autogrow */
/* bender-include: _helpers/tools.js */
/* global autogrowTools */

( function() {
	'use strict';

	bender.editor = {};

	bender.test( {
		// (#4372)
		'test autogrow for editor width 200%': function() {
			autogrowTools.testEditorSizeWithContent( '200%' );
		},
		// (#4372)
		'test autogrow for editor width 20em': function() {
			autogrowTools.testEditorSizeWithContent( '20em' );
		},
		// (#4372)
		'test autogrow for editor width 200px': function() {
			autogrowTools.testEditorSizeWithContent( '200px' );
		},
		// (#4372)
		'test autogrow for editor width 200': function() {
			autogrowTools.testEditorSizeWithContent( 200 );
		},
		// (#4372)
		'test autogrow for editor width 0': function() {
			autogrowTools.testEditorSizeWithContent( 0 );
		},
		// (#4372)
		'test autogrow for editor width auto': function() {
			autogrowTools.testEditorSizeWithContent( 'auto' );
		},
		// (#4286)
		'test autogrow': function() {
			if ( bender.env.ie && bender.env.version < 9 ) {
				assert.ignore();
			}

			var editor = this.editor,
				bot = this.editorBot,
				initialEditorSize = autogrowTools.getEditorSize( editor );

			bot.setData( autogrowTools.getTestContent( 8 ), function() {
				editor.once( 'afterCommandExec', function() {
					resume( function() {
						var editorSize = autogrowTools.getEditorSize( editor );

						assert.isTrue( editorSize.height > initialEditorSize.height, 'editor height should increase' );
						assert.areEqual( editorSize.width, initialEditorSize.width, 'editor width should not change' );
					} );
				} );

				editor.execCommand( 'autogrow' );

				wait();
			} );
		}
	} );
} )();
