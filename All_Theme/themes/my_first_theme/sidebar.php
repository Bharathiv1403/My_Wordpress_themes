<aside class="blog-sidebar">
    <span class="head">
    <h1 class="first_head">Recent Blogs</h1>
    </span>

    <?php
    // Query for recent blog posts
    $recent_posts = new WP_Query( array(
        'posts_per_page' => 3, // Number of posts to display
        'post_status'    => 'publish', // Only show published posts
    ) );

    // Loop through posts
    if ( $recent_posts->have_posts() ) :
        $post_count = 3; // Counter to identify which post to show
        while ( $recent_posts->have_posts() ) : $recent_posts->the_post(); ?>
            <div class="blog-box" id="post-<?php echo $post_count; ?>">
                <?php if ( has_post_thumbnail() ) : ?>
                    <img src="<?php the_post_thumbnail_url( 'medium' ); ?>" alt="<?php the_title(); ?>">
                <?php else : ?>
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/image1.jpeg" alt="Default Image">
                <?php endif; ?>
                
                <h3><?php the_title(); ?></h3>
                <p><?php echo wp_trim_words( get_the_excerpt(), 15, '...' ); ?></p>
                <a href="<?php the_permalink(); ?>" class="more-btn">More</a>
            </div>
            <?php $post_count++; ?>
        <?php endwhile;
        wp_reset_postdata(); // Reset query
    else : ?>
        <p>No recent posts available.</p>
    <?php endif; ?>

    <!-- View All Blogs link -->
    <span class='view-all-blogs'>
        <a href="<?php echo get_permalink( get_option( 'page_for_posts' ) ); ?>" class="view-all-btn">View All Blogs</a>
    </span> 
</aside>

<script>
// Show only one blog at a time
document.addEventListener("DOMContentLoaded", function() {
    var urlParams = new URLSearchParams(window.location.search);
    var postId = urlParams.get('post'); // Get the 'post' query parameter

    if (postId) {
        // Hide all blog boxes initially
        var allPosts = document.querySelectorAll('.blog-box');
        allPosts.forEach(function(post) {
            post.style.display = 'none';
        });

        // Show the selected post only
        var selectedPost = document.getElementById('post-' + postId);
        if (selectedPost) {
            selectedPost.style.display = 'block';
        }
    }
});
</script>

<style>

.head{
    padding: 5px;
    /* border: solid 5px; */
    border-color: #000;
    background-color: #82CAFF;
    /* background-color: red; */
    width:100%;
    height: 40px;
    padding-bottom: 30px;
}
/* Styling for the blog sidebar */
/* .blog-sidebar {
    background-color:rgb(206, 61, 61);
    padding: 20px;
    margin-top: 20px;
    text-align: center;
} */


.first_head {
    color: #333;
    text-align: center;
}

/* Grid Layout for Blog Boxes */
.blog-sidebar {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Create 3 equal columns */
    gap: 20px; /* Space between columns */
}

/* Styling for individual blog boxes */
.blog-box {
    background: #fff;
    border: 1px solid #ddd;
    padding: 15px;
    /* margin-bottom: 20px; */
    border-radius: 5px;
    text-align: center;
    height: 100%; 
    padding-top: 50px;
                    /* Make the box stretch to fill the height of the container */
}

.blog-box img {
    width: 100%;
    height: auto;
    border-radius: 5px;
}

.blog-box h3 {
    font-size: 18px;
    margin: 10px 0;
    color: #333;
}

.blog-box p {
    font-size: 14px;
    color: #666;
    margin: 10px 0;
}

.more-btn {
    display: inline-block;
    background-color: #0073aa;
    color: #fff;
    padding: 10px 15px;
    text-decoration: none;
    border-radius: 5px;
    font-size: 14px;
    transition: background-color 0.3s;
}

.more-btn:hover {
    background-color: #005f8d;
}

.view-all-btn {
    display: block;
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 10px 15px;
    margin-top: 20px;
    text-decoration: none;
    border-radius: 5px;
    font-size: 14px;
    transition: background-color 0.3s;
}


.view-all-btn:hover {
    background-color: #444;
}
</style>
