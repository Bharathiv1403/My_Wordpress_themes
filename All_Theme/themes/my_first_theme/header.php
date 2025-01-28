<!-- <header>
    <h1><?php bloginfo( 'name' ); ?></h1>
    <p><?php bloginfo( 'description' ); ?></p>
    
    <nav>
        <?php wp_nav_menu( array( 'theme_location' => 'main-menu' ) ); ?>
        <?php include get_template_directory() . 'template-parts/nav.php'; ?>

        
    </nav>
</header> -->


<header>
    <h1><?php bloginfo( 'name' ); ?></h1>
    <p><?php bloginfo( 'description' ); ?></p>

    <!-- Include custom navigation from nav.php -->
    <?php include get_template_directory() . 'template-parts/nav.php'; ?>

    <!-- Optional: Add WordPress dynamic menu -->
    <nav>
        <?php 
        if ( has_nav_menu( 'main-menu' ) ) {
            wp_nav_menu( array( 
                'theme_location' => 'main-menu',
                'container' => false,
                'menu_class' => 'dynamic-menu',
            ) ); 
        }
        ?>
    </nav>
</header>

