<?php
// Enqueue theme styles and scripts
function my_theme_enqueue_scripts() {
    // Enqueue the CSS file
    wp_enqueue_style('my-theme-style', get_stylesheet_uri());
    wp_enqueue_script('my-other-script', get_template_directory_uri() . '/assets/js/other.js', array(), null, true);


    // Enqueue the JavaScript file
    wp_enqueue_script(
        'my-theme-script', // Handle for the script
        get_template_directory_uri() . '/assets/js/main.js', // Path to the script
        array('jquery'), // Dependencies (if any)
        null, // Version (optional, null uses no versioning)
        true // Load in the footer
    );
}

function enqueue_theme_scripts() {
    wp_enqueue_script('custom-script', get_template_directory_uri() . '/assets/js/script.js', array(), null, true);
}
add_action('wp_enqueue_scripts', 'enqueue_theme_scripts');

add_action('wp_enqueue_scripts', 'my_theme_enqueue_scripts');

// add_action('wp_enqueue_scripts', 'enqueue_theme_scripts');


?>