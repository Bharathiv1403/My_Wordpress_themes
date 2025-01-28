<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <header class="site-header">
        <!-- Top Bar -->
        <div class="top-bar">
            <div class="container">
                <div class="top-bar-left">
                    <span>Email: <a href="mailto:info.appledroptaxi@gmail.com">info.appledroptaxi@gmail.com</a></span>
                    <span>Phone: <a href="tel:+919176950550">+91 91769 50550</a></span>
                </div>
                <div class="top-bar-right">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/envelope-icon.png" alt="Envelope Icon">
                </div>
            </div>
        </div>

        <!-- Main Header -->
        <div class="main-header">
            <div class="container">
                <!-- Logo -->
                <div class="site-logo">
                    <a href="<?php echo home_url(); ?>">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo.png" alt="Appledrop Taxi Logo">
                    </a>
                </div>

                <!-- Navigation Menu -->
                <nav class="main-navigation">
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'primary',
                        'menu_id'        => 'primary-menu',
                        'container'      => false,
                        'menu_class'     => 'menu',
                    ));
                    ?>
                </nav>

                <!-- Book Now Button -->
                <div class="header-cta">
                    <a href="#" class="book-now-btn">Book Now</a>
                </div>
            </div>
        </div>

        <!-- Header Tagline -->
        <div class="header-tagline">
            <div class="container">
                <h1>ONE WAY DROP TAXI @ RS.13/KM ONWARDS</h1>
                <p>Need a ride? Just call or WhatsApp us!</p>
            </div>
        </div>
    </header>

    <?php wp_footer(); ?>
</body>
</html>
