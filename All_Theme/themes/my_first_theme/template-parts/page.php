<section class="blog-section">
    <div class="blog-box">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/blog1.jpg" alt="Blog 1 Image">
        <h2>Blog Title 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel nulla id orci.</p>
        <a href="<?php echo home_url('/blog1'); ?>" class="read-more-btn">Read More</a>
    </div>
    
    <div class="blog-box">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/blog2.jpg" alt="Blog 2 Image">
        <h2>Blog Title 2</h2>
        <p>Curabitur tincidunt risus a eros posuere, vel facilisis felis tincidunt.</p>
        <a href="<?php echo home_url('/blog2'); ?>" class="read-more-btn">Read More</a>
    </div>
    
    <div class="blog-box">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/blog3.jpg" alt="Blog 3 Image">
        <h2>Blog Title 3</h2>
        <p>Phasellus ultricies, felis in vehicula tempus, dolor sem consequat elit.</p>
        <a href="<?php echo home_url('/blog3'); ?>" class="read-more-btn">Read More</a>
    </div>
</section>

<style>
/* Styling for the blog section */
.blog-section {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    gap: 20px;
}

.blog-box {
    width: 30%;
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    text-align: center;
    background-color: #fff;
}

.blog-box img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.blog-box h2 {
    font-size: 1.5em;
    margin: 15px 0;
    padding: 0 10px;
}

.blog-box p {
    font-size: 1em;
    color: #666;
    padding: 0 10px;
}

.read-more-btn {
    display: inline-block;
    margin: 15px 0;
    padding: 10px 20px;
    background-color: #0073aa;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.read-more-btn:hover {
    background-color: #005580;
}

.blog-box:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}
</style>
