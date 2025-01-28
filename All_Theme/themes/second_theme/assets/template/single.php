<?php get_header(); ?>

<div class="single-container">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <h1 class="post-title"><?php the_title(); ?></h1>
            <div class="post-meta">
                <span class="post-date"><?php echo get_the_date(); ?></span>
                <span class="post-author"><?php esc_html_e('by', 'my-second-theme'); ?> <?php the_author(); ?></span>
            </div>
            <div class="post-content">
                <?php the_content(); ?>
            </div>
            <div class="post-categories">
                <strong><?php esc_html_e('Categories:', 'my-second-theme'); ?></strong> <?php the_category(', '); ?>
            </div>
            <div class="post-tags">
                <strong><?php esc_html_e('Tags:', 'my-second-theme'); ?></strong> <?php the_tags('', ', ', ''); ?>
            </div>
        </article>

        <div class="post-navigation">
            <div class="previous-post"><?php previous_post_link(); ?></div>
            <div class="next-post"><?php next_post_link(); ?></div>
        </div>

    <?php endwhile; else : ?>
        <p><?php esc_html_e('Sorry, no posts found.', 'my-second-theme'); ?></p>
    <?php endif; ?>
</div>

<?php get_footer(); ?>
