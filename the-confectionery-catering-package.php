<?php

/**
 * Plugin Name:       Catering Package
 * Description:       Package description cards for catering page.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       catering-package
 *
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function catering_packages_block_init()
{
	register_block_type(__DIR__ . '/build');
}
add_action('init', 'catering_packages_block_init');


function add_block_category()
{
	function confectionery_block_category($existingCategories)
	{
		$customCategories = [
			[
				'slug' => 'the-confectionery',
				'title' => __('The Confectionery', 'confectionery')
			]
		];

		return array_merge($customCategories, $existingCategories);
	}

	global $wp_version;

	add_filter(
		'block_categories' . (version_compare($wp_version, '5.8', '>=') ? '_all' : ''),
		'confectionery_block_category',
		99
	);

	if (function_exists('register_block_pattern_category')) {
		register_block_pattern_category(
			'The Confectionery',
			array('label' => __('The Confectionery', 'confectionery'))
		);
	}
}
add_action('init', 'add_block_category');
