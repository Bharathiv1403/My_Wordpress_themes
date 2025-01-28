<?php get_header(); ?>

<div class="search-container">
    <h1 class="search-title">
        <?php printf(esc_html__('Search Results for: %s', 'my-second-theme'), get_search_query()); ?>
    </h1>

    <?php if (have_posts()) : ?>
        <ul class="search-results">
            <?php while (have_posts()) : the_post(); ?>
                <li id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                    <h2 class="search-result-title">
                        <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                    </h2>
                    <div class="search-result-excerpt">
                        <?php the_excerpt(); ?>
                    </div>
                </li>
            <?php endwhile; ?>
        </ul>

        <div class="pagination">
            <?php the_posts_pagination(); ?>
        </div>
    <?php else : ?>
        <p><?php esc_html_e('No results found. Please try again with a different keyword.', 'my-second-theme'); ?></p>
        <?php get_search_form(); ?>
    <?php endif; ?>
</div>

<?php get_footer(); ?>
