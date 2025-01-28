<?php
get_header(); // Include the header
?>

<main id="primary" class="site-main">
    <?php
    if (have_posts()) :
        while (have_posts()) :
            the_post();
            // Load the home_page.php template
            get_template_part('templates/home_page');
        endwhile;
    else :
        // If no content, load a fallback template
        get_template_part('templates/no-content');
    endif;
    ?>
</main><!-- #primary -->

<?php
get_footer(); // Include the footer
?>