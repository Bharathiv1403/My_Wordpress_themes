<?php 
    get_header();
        
    get_template_part('template-parts/nav');
        
    ?>

    <div class="p-4 card-group justify-content-center">
        <?php
        if (have_posts()) {
            while (have_posts()) {
                the_post();
                get_template_part('template-parts/single-page');

            }
        }
        ?> 
    </div>

<?php get_footer(); ?>