<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Link the header.css file -->
    <!-- <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/header.css"> -->

    <?php wp_head(); ?> <!-- WordPress Head Hook -->
</head>

<body <?php body_class(); ?>>

    <nav class="main-menu">
        <?php
        wp_nav_menu(array(
            'theme_location' => 'main-menu',
            'menu_class'     => 'menu',
            'container'      => false,
        ));
        ?>
    </nav>
    <header>

        <body>
            <div class="rectangle-1-14 pos-abs"></div>
            <div class="phone-17 pos-abs" id="phone_logo">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/phone_logo.png" class="pos-abs image-div bg-no-repeat fill-parent bg-contain nodeBg-17" alt="Phone Icon" id="phone-logo" />
            </div>
            <div class="envelope-112 pos-abs">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/email_logo.png" class="pos-abs image-div bg-no-repeat fill-parent bg-contain nodeBg-112" alt="Email Icon" id="mail-logo" />
            </div>
            <div class="time-machine-111 pos-abs">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/time_logo.png" class="pos-abs image-div bg-no-repeat fill-parent bg-contain nodeBg-111" alt="Time Icon" id="time-logo" />
            </div>
            <div class="facebook-118 pos-abs">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/facebook_logo.png" class="pos-abs image-div bg-no-repeat fill-parent bg-contain nodeBg-118" alt="Facebook Icon" />
            </div>
            <div class="x-119 pos-abs">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/x_logo.png" class="pos-abs image-div bg-no-repeat fill-parent bg-contain nodeBg-119" alt="X Icon" />
            </div>
            <div class="youtube-122 pos-abs">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/youtube_logo.png" class="pos-abs image-div bg-no-repeat fill-parent bg-contain nodeBg-122" alt="YouTube Icon" />
            </div>
            <div class="pinterest-120 pos-abs">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/pitchat_logo.png" class="pos-abs image-div bg-no-repeat fill-parent bg-contain nodeBg-120" alt="Pinterest Icon" />
            </div>
            <div class="instagram-121 pos-abs">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/instagram_logo.png" class="pos-abs image-div bg-no-repeat fill-parent bg-contain nodeBg-121" alt="Instagram Icon" />
            </div>
            <div class="c-91-81248-14525-18 pos-abs">
                <span class="c-91-81248-14525-18-0">+91 81248 14525</span>
            </div>
            <div class="examplecoolairc-116 pos-abs">
                <span class="examplecoolairc-116-0">example@coolair.com</span>
            </div>
            <div class="mon--fri-0800---117 pos-abs">
                <span class="mon--fri-0800---117-0">Mon - Fri 08.00 - 18.00</span>
            </div>
            <div class="line-1-19 pos-abs"></div>
            <div class="line-2-114 pos-abs"></div>
            <div class="rectangle-3-1039 pos-abs"></div>
            <div class="head-navbar">
    <div class="head-left-navbar">
        <div class="image-logo">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/picture/logo-light.webp" 
                 class="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-43" 
                 alt="Logo" id="company-logo" />
        </div>
    </div>
    <div class="head-center-navbar">
        <!-- Home -->
        <div class="home-main">
            <a href="<?php echo get_template_directory_uri(); ?>/assets/templates/home_page1.php" class="home-sub">
                Home
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/down_arrow.png" class="head-dropdown-arrow" alt="Dropdown Arrow" />
            </a>
        </div>

        <!-- Pages -->
        <div class="pages-main">
            <span class="pages-sub">Pages
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/down_arrow.png" class="head-dropdown-arrow" alt="Dropdown Arrow" />
            </span>
            <div class="nav-dropdown-menu">
                <a href="<?php echo get_template_directory_uri(); ?>/assets/templates/about_us.php">About Us</a>
                <a href="<?php echo get_template_directory_uri(); ?>/assets/templates/prices.php">Price List</a>
                <a href="<?php echo get_template_directory_uri(); ?>/assets/templates/pricing_plan.php">Pricing Plan</a>
            </div>
        </div>

        <!-- Services -->
        <div class="services-main">
            <span class="services-sub">Services
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/down_arrow.png" class="head-dropdown-arrow" alt="Dropdown Arrow" />
            </span>
            <div class="nav-dropdown-menu">
                <a href="<?php echo get_template_directory_uri(); ?>/assets/templates/installation.php">Installation</a>
                <a href="<?php echo get_template_directory_uri(); ?>/assets/templates/maintenance.php">Maintenance</a>
                <a href="<?php echo get_template_directory_uri(); ?>/assets/templates/repair.php">Repair</a>
            </div>
        </div>

        <!-- Projects -->
        <div class="projects-main">
            <span class="projects-sub">Projects</span>
        </div>

        <!-- Blog -->
        <div class="blog-main">
            <span class="blog-sub">Blog
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/down_arrow.png" class="head-dropdown-arrow" alt="Dropdown Arrow" />
            </span>
            <div class="nav-dropdown-menu">
                <a href="<?php echo get_template_directory_uri(); ?>/assets/templates/blog.php">Blog</a>
                <a href="<?php echo get_template_directory_uri(); ?>/assets/templates/blog-grid.php">Blog Grid</a>
                <a href="<?php echo get_template_directory_uri(); ?>/assets/templates/single-posts.php">Single Posts</a>
            </div>
        </div>

        <!-- Contact -->
        <div class="contact-main">
            <a href="<?php echo get_template_directory_uri(); ?>/assets/templates/contact.php" class="contact-sub">Contact</a>
        </div>
    </div>
</div>

                </div>
                <div class="head-right-navbar">
                <div class="schedule-main">
                    <span class="schedule-sub">Schedule Now</span>
                </div>
                </div>
            </div>
            </div>

        </body>
    </header>

    <?php wp_footer(); ?>
    </body>
</html>