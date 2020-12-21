<?php
/** ---------------------------------------------------------------------
 * app/lib/Media/MediaViewers/pdfjs.php :
 * ----------------------------------------------------------------------
 * CollectiveAccess
 * Open-source collections management software
 * ----------------------------------------------------------------------
 *
 * Software by Whirl-i-Gig (http://www.whirl-i-gig.com)
 * Copyright 2020 Whirl-i-Gig
 *
 * For more information visit http://www.CollectiveAccess.org
 *
 * This program is free software; you may redistribute it and/or modify it under
 * the terms of the provided license as published by Whirl-i-Gig
 *
 * CollectiveAccess is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTIES whatsoever, including any implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
 * This source code is free and modifiable under the terms of
 * GNU General Public License. (http://www.gnu.org/copyleft/gpl.html). See
 * the "license.txt" file for details, or visit the CollectiveAccess web site at
 * http://www.CollectiveAccess.org
 *
 * @package CollectiveAccess
 * @subpackage Media
 * @license http://www.gnu.org/copyleft/gpl.html GNU Public License version 3
 *
 * ----------------------------------------------------------------------
 */

/**
 *
 */
 
	class pdfjs extends BaseMediaViewer implements IMediaViewer {
		# -------------------------------------------------------
		/**
		 *
		 */
		public static function getViewerHTML($po_request, $ps_identifier, $pa_data=null, $pa_options=null) {
			if ($o_view = BaseMediaViewer::getView($po_request)) {
				$o_view->setVar('identifier', $ps_identifier);
				
				$va_params = ['identifier' => $ps_identifier, 'context' => caGetOption('context', $pa_options, $po_request->getAction())];
				
				// Pass subject key when getting viewer data
				if ($pa_data['t_subject']) { $va_params[$pa_data['t_subject']->primaryKey()] = $pa_data['t_subject']->getPrimaryKey(); }
				
				$o_view->setVar('viewer', 'pdfjs');
				$o_view->setVar('width', caGetOption('width', $pa_data['display'], null));
				$o_view->setVar('height', caGetOption('height', $pa_data['display'], null));
				
				
				$t_instance = isset($pa_data['t_instance']) ? $pa_data['t_instance'] : null;
				$o_view->setVar('media_url', $pa_data['t_instance']->getMediaUrl('media', 'original', []));
			}
			
			return BaseMediaViewer::prepareViewerHTML($po_request, $o_view, $pa_data, $pa_options);
		}
		# -------------------------------------------------------
	}