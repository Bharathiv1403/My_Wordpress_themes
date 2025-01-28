<?php
function your_theme_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    register_nav_menus( array(
        'main-menu' => __( 'Main Menu', 'your-theme' ),
    ) );
}
add_action( 'after_setup_theme', 'your_theme_setup' );

function your_theme_enqueue_scripts() {
    wp_enqueue_style( 'main-style', get_stylesheet_uri() );
}
add_action( 'wp_enqueue_scripts', 'your_theme_enqueue_scripts' );
