<?php 
    get_header();
        
        get_template_part('template-parts/nav');
        
        if(is_home()){
            get_template_part('template-parts/slider');
        }
    ?>
    <body>
        
    <div class="p-4 card-group justify-content-center">
        <?php
        if (have_posts()) {
            while (have_posts()) {
                the_post();
                get_template_part('template-parts/post');
                // if(is_single()){
                //     get_template_part('template-parts/single-page');
                // } else{
                //     get_template_part('template-parts/post');
                // }

            }
        }
        $pag = get_the_posts_pagination();
        $pag = str_replace('div','u1',$pag);
        $pag = str_replace('nav-links','pagination',$pag);
        $pag = str_replace('page-numbers','page-link',$pag);
        $pag = str_replace('<a','<li class="page-link"><a',$pag);
        $pag = str_replace('<span','<li class="page-link active"><span',$pag);
        $pag = str_replace('</a>','</a></li>',$pag);
        $pag = str_replace('</span>','</span></li>',$pag);



        ?> 
    </div>
    <br><br>
    <br>
    <div style="display:flex ">
        <span style="margin:auto">
            <?= $pag ?>
        </span>
    </div>

    </body>

        

<?php get_footer(); ?>