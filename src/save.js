import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

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

const innerBlocksProps = useInnerBlocksProps.save (
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
