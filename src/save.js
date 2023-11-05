/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks, useInnerBlocksProps } from '@wordpress/block-editor';

export default function save() {
	const blockProps = useBlockProps.save(
		{ className: 'catering-package'}
	)
	const ALLOWED_BLOCKS = ['core/heading', 'core/paragraph']
	const TEMPLATE = [
		[ 'core/heading', { level: 3, placeholder: 'Heading...', className: 'catering-package__title'} ],
		[ 'core/paragraph', { placeholder: 'Package info...',  className: 'catering-package__info' } ],
		[ 'core/paragraph', { placeholder: 'Price',  className: 'catering-package__price' } ],
]

const innerBlocksProps = useInnerBlocksProps.save ( blockProps,
	{template: TEMPLATE },
	{	allowedBlocks: ALLOWED_BLOCKS },
	{templateLock: 'insert'}
)

	return (

		<div {...innerBlocksProps}>
		</div>
	);
}
