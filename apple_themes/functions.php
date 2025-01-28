<?php
function apple_drop_scripts() {
    // Enqueue styles
    wp_enqueue_style('header-style', get_template_directory_uri() . '/assets/css/header.css');
    wp_enqueue_style('footer-style', get_template_directory_uri() . '/assets/css/footer.css');
    wp_enqueue_style('home-page-style', get_template_directory_uri() . '/assets/css/home_page.css');
    wp_enqueue_style('tariff-style', get_template_directory_uri() . '/assets/css/tariff.css');
    wp_enqueue_style('contact-us-style', get_template_directory_uri() . '/assets/css/contact_us.css');
    wp_enqueue_style('main-style', get_stylesheet_uri());

    // Enqueue scripts
    wp_enqueue_script('apple-drop-script', get_template_directory_uri() . '/assets/js/script.js', array(), null, true);
}
add_action('wp_enqueue_scripts', 'apple_drop_scripts');

function apple_drop_setup() {
    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'apple-drop'),
    ));

    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
}
add_action('after_setup_theme', 'apple_drop_setup');
?>