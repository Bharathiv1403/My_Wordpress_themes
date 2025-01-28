<!-- <h1>
    Page Not Found
</h1> -->

<?php
    get_header();

    get_template_part("template-parts/nav");

    ?>
    <div class="p-4 card-group justify-content-center mx-auto" style="max-width: 600px">
        <?php

        ?>
        <h1>Sorry, we can't find what you're looking for </h1>
        <h3>try to search for something below </h3>

        <form class="d-flex" role="search" action='<?= get_home_url()?>'>
            <input name= "s" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
      </form>

    </div>
    <!-- <?php get_template_part('template-parts/pagination');?> -->

<?php get_footer()?>
