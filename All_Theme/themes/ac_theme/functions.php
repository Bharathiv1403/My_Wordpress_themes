<?php
// Enqueue styles
function mytheme_enqueue_styles() {
    wp_enqueue_style('mytheme-style', get_stylesheet_uri());
}
add_action('wp_enqueue_scripts', 'mytheme_enqueue_styles');


function enqueue_effect_script() {
   
    wp_enqueue_script(
        'effect-script',
        get_template_directory_uri() . '/assets/js/effect.js',
        array(),
        null, 
        true 
    );

    // if (is_page_template('templates/about_us.php')) {
    //     wp_enqueue_script('about-us-js', get_template_directory_uri() . '/assets/js/about_us.js', array('jquery'), null, true);
    // } elseif (is_page_template('templates/price.php')) {
    //     wp_enqueue_script('price-js', get_template_directory_uri() . '/assets/js/price.js', array('jquery'), null, true);
    // } elseif (is_page_template('templates/plan.php')) {
    //     wp_enqueue_script('plan-js', get_template_directory_uri() . '/assets/js/plan.js', array('jquery'), null, true);
    // }

    // if (is_page_template('templates/about_us.php')) {
    //     wp_enqueue_style('about-us-style', get_template_directory_uri() . '/assets/css/about_us.css');
    // } elseif (is_page_template('templates/price.php')) {
    //     wp_enqueue_style('price-style', get_template_directory_uri() . '/assets/css/price.css');
    // } elseif (is_page_template('templates/plan.php')) {
    //     wp_enqueue_style('plan-style', get_template_directory_uri() . '/assets/css/plan.css');
    // }


}

// Enqueue theme assets
function my_theme_enqueue_assets() {
    wp_enqueue_style('main-style', get_stylesheet_uri());
    wp_enqueue_style('about-us', get_template_directory_uri() . '/assets/css/about_us.css', [], '1.0');
    wp_enqueue_style('price', get_template_directory_uri() . '/assets/css/price.css', [], '1.0');
    wp_enqueue_style('plan', get_template_directory_uri() . '/assets/css/plaing.css', [], '1.0');
    wp_enqueue_style('header-css', get_template_directory_uri() . '/assets/css/header.css');
    if (is_page_template('templates/home_page1.php')) {
        wp_enqueue_style('home-page1-css', get_template_directory_uri() . '/assets/css/home_page1.css', [], '1.0.0', 'all');
    }
}
add_action('wp_enqueue_scripts', 'my_theme_enqueue_assets');



function my_theme_scripts() {
    wp_enqueue_script('navigation-script', get_template_directory_uri() . '/assets/js/navigation.js', array(), null, true);
}
add_action('wp_enqueue_scripts', 'my_theme_scripts');


add_action('wp_enqueue_scripts', 'enqueue_effect_script');
?>