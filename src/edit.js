/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

import './editor.scss';


export default function Edit() {
	const blockProps = useBlockProps(
		{ className: 'catering-package'}
	);

	const ALLOWED_BLOCKS = [ 'core/heading', 'core/paragraph']
	const TEMPLATE = [
				[ 'core/heading', { level: 3, placeholder: 'Heading...', className: 'catering-package__title'} ],
				[ 'core/paragraph', { placeholder: 'Package info...',  className: 'catering-package__info' } ],
				[ 'core/paragraph', { placeholder: 'Price',  className: 'catering-package__price' } ],
	]

	const innerBlocksProps = useInnerBlocksProps(
		//to prevent Wordpress from adding extra elements that break the layout
		blockProps,
		{template: TEMPLATE },
		{	allowedBlocks: ALLOWED_BLOCKS },
		{templateLock: 'insert'}
	)

	return (
			<div {...innerBlocksProps}>
		</div>
	);
}
