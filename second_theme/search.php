<?php get_header(); ?>

<div class="search-results">
    <h2>Search Results for: <?php echo get_search_query(); ?></h2>

    <?php if (have_posts()) : ?>
        <div class="search-list">
            <?php while (have_posts()) : the_post(); ?>
                <div class="search-item">
                    <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                    <p><?php the_excerpt(); ?></p>
                </div>
            <?php endwhile; ?>
        </div>
    <?php else : ?>
        <p>Not Found: Sorry, no results were found for your search.</p>
    <?php endif; ?>
</div>

<?php get_footer(); ?>
