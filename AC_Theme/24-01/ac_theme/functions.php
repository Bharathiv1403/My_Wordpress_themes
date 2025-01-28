<?php

function my_theme_enqueue_styles() {
    // Enqueue the main stylesheet
    wp_enqueue_style('main-style', get_stylesheet_uri(), array(), '1.0', 'all');

    // Enqueue global styles
    wp_enqueue_style('header-css', get_template_directory_uri() . '/assets/css/header.css', array(), '1.0', 'all');
    wp_enqueue_style('footer-css', get_template_directory_uri() . '/assets/css/footer.css', array(), '1.0', 'all');

    // Enqueue scripts
    wp_enqueue_script('effect', get_template_directory_uri() . '/assets/js/effect.js', array(), null, true);
    wp_enqueue_script('navigation', get_template_directory_uri() . '/assets/js/navigation.js', array('jquery'), null, true);

    // Conditional styles for specific templates
    if (is_page_template('assets/templates/about_us.php')) {
        wp_enqueue_style('about-us', get_template_directory_uri() . '/assets/css/about_us.css', array(), '1.0', 'all');
    } elseif (is_page_template('assets/templates/price.php')) {
        wp_enqueue_style('price', get_template_directory_uri() . '/assets/css/price.css', array(), '1.0', 'all');
    } elseif (is_page_template('assets/templates/single_post.php')) {
        wp_enqueue_style('single-post', get_template_directory_uri() . '/assets/css/single_post.css', array(), '1.0', 'all');
    }

    // Enqueue additional CSS files for other templates
    $template_styles = array(
        'pricing_plan'          => 'pricing_plan.css',
        'home-page1'    => 'home_page1.css',
        'blog'          => 'blog.css',
        'installation'  => 'installation.css',
        'maintenance'   => 'maintenace.css',
        'repair'        => 'repair.css',
        'blog-grid'     => 'blog_grid.css'
    );

    foreach ($template_styles as $name => $file) {
        wp_enqueue_style($name, get_template_directory_uri() . "/assets/css/{$file}", array(), '1.0', 'all');
    }
}
add_action('wp_enqueue_scripts', 'my_theme_enqueue_styles');


/**
 * Register Navigation Menus
 */
function my_theme_register_menus() {
    register_nav_menus( array(
        'main-menu' => __( 'Main Menu', 'my-theme' ),
    ) );
}
add_action( 'init', 'my_theme_register_menus' );

/**
 * Override Home Page Template
 */
function theme_add_custom_template( $template ) {
    if ( is_home() && file_exists( get_template_directory() . 'assets/templates/home_page1.php' ) ) {
        return get_template_directory() . 'assets/templates/home_page1.php';
    }
    return $template;
}
add_filter( 'template_include', 'theme_add_custom_template' );

?>


