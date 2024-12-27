<?php get_header(); ?>

<div class="v20_8">
    <div class="v20_9"></div>
    <span class="v20_10">Sign up</span>
    <span class="v20_11"><?php bloginfo('name'); ?></span>

    <div class="menu"></div>
    <div class="v20_13">
        <div class="v20_14"></div>

        <!-- <div class="menu-bar">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/Menu.png" alt="Menu Icon">
        </div> -->

        <div class="menu-bar" onclick="toggleMenu()">
    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/Menu.png" alt="Menu Icon">
</div>

<div class="menu-items hidden" id="menuItems">
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#application">Application</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#settings">Settings</a></li>
    </ul>
</div>



        <span class="v20_17">Sagasoft</span>


        <div class="v20_15">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/Search.png" alt="Search Icon" class="search-icon">
            <span class="v20_16">Search...</span>
        </div>
    </div>

    <span class="v20_17"><?php bloginfo('description'); ?></span>
    <div class="v20_18">
        <img src="<?php echo get_template_directory_uri(); ?>assets/images/sagasuite_logo.png" alt="company_logo">
    </div>
    <span class="v20_19">Secure workspace software that protects your privacy with ours.</span>

    <div class="v20_20"></div>

    <div class='v20_21'><img src="<?php echo get_template_directory_uri(); ?>/assets/images/Search.png" alt="Ingress Image" class="ingress-image"></div>
    <div class='v20_22'></div>

    <!-- <div class="v20_21"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/Search2.png" alt="Search Icon" class="search-icon"></div> -->
    <span class="v20_22">Search application</span>
         
    </div>

    <!-- Card Section -->
    <span class="v20_18"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/sagasuite_logo.png" alt="logo"></span>
    <div class="v20_23"><img id="crm_1" src="<?php echo get_template_directory_uri(); ?>/assets/images/crm415d09.png" alt="CRM">.</div>
    <div class="v20_24"><img id="mail1" src="<?php echo get_template_directory_uri(); ?>/assets/images/mailcow.png" alt="Mail"></div>
    <div class="v20_25"><img id="next1" src="<?php echo get_template_directory_uri(); ?>/assets/images/nextcloud.png" alt="Drive"></div>
    <div class="v20_26"><img id="insight1" src="<?php echo get_template_directory_uri(); ?>/assets/images/insights28df13.png" alt="Dashboard"></div>

    <span class="v20_27">CRM</span>
    <span class="v20_28">SOGO</span>
    <span class="v20_29">Saga Drive</span>
    <span class="v20_36">Saga Insights</span>


    <div class="menu-footer">
        <a href="#logout">Logout</a>
        <a href="#share">Share Link</a>
    </div>

</div>

<?php get_footer(); ?>
