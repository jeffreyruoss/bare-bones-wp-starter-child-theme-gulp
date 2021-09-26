<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

function mysite_scripts() {
    wp_enqueue_script( 'mysite-script', get_stylesheet_directory_uri() . '/assets/js/scripts-dest/scripts.min.js', array(), '1.0.0', true );
}
add_action('wp_enqueue_scripts', 'mysite_scripts');


function mysite_styles() {
    wp_enqueue_style( 'mysite-style', get_stylesheet_directory_uri() . '/assets/css/style.css', array(), '1.0.0');
}
add_action('wp_enqueue_scripts', 'mysite_styles');
