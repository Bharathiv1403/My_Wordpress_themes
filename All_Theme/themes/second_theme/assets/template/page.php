<?php get_header(); ?>

<div class="page-container">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <h1 class="page-title"><?php the_title(); ?></h1>
            <div class="page-content">
                <?php the_content(); ?>
            </div>
        </article>
    <?php endwhile; else : ?>
        <p><?php esc_html_e('Sorry, no pages found.', 'my-second-theme'); ?></p>
    <?php endif; ?>
</div>

<?php get_footer(); ?>
