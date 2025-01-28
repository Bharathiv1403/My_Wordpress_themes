<?php

// echo get_template_directory_uri().'/assets/css/bootstrap.min.css';
// echo get_template_directory_uri().'/assets/css/bootstrap.min.css';
add_action('init',function(){

    if (!is_admin()){

        wp_enqueue_style('boot01', get_template_directory_uri().'/assets/css/bootstrap.min.css');
        wp_enqueue_style('custom-style', get_template_directory_uri().'/style.css');

        wp_enqueue_script('bootjs', get_template_directory_uri().'/assets/js/bootstrap.min.js',[],'',true);
    }

    add_theme_support('widgets');
    add_theme_support('menus');
    add_theme_support('post_thumbnails');

    add_image_size('post-preview',280,180,true);

});

add_action('after_setup_theme',function() {
	$defaults = array(
		'height'               => 100,
		'width'                => 400,
		'flex-height'          => true,
		'flex-width'           => true,
		'header-text'          => array( 'site-title', 'site-description' ),
		'unlink-homepage-logo' => true, 
	);
	add_theme_support( 'custom-logo', $defaults );
});

// wp_enqueue_script()
?>