/**
 * @license Copyright (c) 2003-2021, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/* globals window */

import ClassicEditor from '@ckeditor/ckeditor5-build-classic/src/ckeditor';

import { toWidget, toWidgetEditable } from '@ckeditor/ckeditor5-widget/src/utils';

window.ClassicEditor = ClassicEditor;
window.toWidget = toWidget;
window.toWidgetEditable = toWidgetEditable;
