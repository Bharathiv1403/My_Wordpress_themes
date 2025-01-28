<?php
get_header(); // Include the header.php file

// Check if it's the homepage
if (is_front_page()) {
    // Include the home_page1.php content if it's the front page
    include get_template_directory() . '/assets/templates/home_page1.php';
} else {
    // Default content for other pages
    echo '<h1>Welcome to My Theme</h1>';
    echo '<p>Please select a page template in the WordPress admin panel.</p>';
}

get_footer();
?>
