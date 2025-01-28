<?php
function theme_enqueue_styles() {
    // Enqueue global styles
    wp_enqueue_style('theme-style', get_stylesheet_uri());
    // wp_enqueue_style('header-css', get_template_directory_uri() . '/assets/css/header.css');
    wp_enqueue_style('header-css', get_template_directory_uri() . '/assets/css/header.css', [], '1.0', 'all');

    // Enqueue global scripts
    wp_enqueue_script('effect', get_template_directory_uri() . '/assets/js/effect.js', array(), null, true);
    wp_enqueue_script('navigation', get_template_directory_uri() . '/assets/js/navigation.js', array('jquery'), null, true);
}

add_action('wp_enqueue_scripts', 'theme_enqueue_styles');

function my_theme_test_styles() {
    if (is_page_template('/assets/templates/home_page1.php')) {
        echo '<style>
            body {
                background-color: red !important;
            }
        </style>';
    }
}
add_action('wp_head', 'my_theme_test_styles');




function theme_add_custom_template($template) {
    // Check if we're on the home page and the custom template exists
    if (is_home() && file_exists(get_template_directory() . '/templates/home_page1.php')) {
        return get_template_directory() . '/templates/home_page1.php';
    }
    return $template;
}

add_filter('template_include', 'theme_add_custom_template');
?>
