<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">
    <title><?php bloginfo('name'); ?></title>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <?php get_header(); ?>
    <?php get_template_part('template-parts/nav'); ?>
    <?php get_template_part('page');?>
    <?php get_sidebar(); ?>


    <main>
        <?php
        if ( have_posts() ) :
            while ( have_posts() ) :
                the_post();
                the_title( '<h1>', '</h1>' );
                the_content();
            endwhile;
        else :
            echo '<p>No posts found.</p>';
        endif;
        ?>
    </main>



    <?php get_footer(); ?>
    <?php wp_footer(); ?>
</body>
</html>


