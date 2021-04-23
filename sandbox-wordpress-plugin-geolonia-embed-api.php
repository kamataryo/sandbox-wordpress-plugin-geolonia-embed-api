<?php
/**
 * Plugin Name: SANDBOX WordPress Plugin Geolonia Embed API
 */

function euqueue_block_scripts() {
	wp_enqueue_script(
		'block',
		plugin_dir_url( __FILE__ ) . 'src/block.js',
		['wp-blocks']
	);
}


function enqueue_geolonia_embed() {
	echo '<script src="https://cdn.geolonia.com/dev/embed"></script>';
}

add_action( 'admin_enqueue_scripts', 'euqueue_block_scripts' );
add_action( 'wp_footer', 'enqueue_geolonia_embed') ;
