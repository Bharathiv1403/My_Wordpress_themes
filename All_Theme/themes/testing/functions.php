<?php

function custom_theme_styles() {
    wp_enqueue_style('main-style', get_stylesheet_uri());
    wp_enqueue_style('header-style', get_template_directory_uri() . '/assets/css/header.css');
    wp_enqueue_style('footer-style', get_template_directory_uri() . '/assets/css/footer.css');
    wp_enqueue_style('home-page-style', get_template_directory_uri() . '/assets/css/home_page.css');
    wp_enqueue_style('about-us-style', get_template_directory_uri() . '/assets/css/about_us.css');
}

add_action('wp_enqueue_scripts', 'custom_theme_styles');

// Register navigation menu
function register_custom_menu() {
    register_nav_menus(
        array(
            'primary' => 'Primary Menu'
        )
    );
}

add_action('after_setup_theme', 'register_custom_menu');
