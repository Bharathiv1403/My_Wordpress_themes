<?php get_header(); ?>
<div class="v20_8">
    <div class="v20_9"></div>
    <a href="https://dash.sagasoft.io/sagasuite/signup" target="_blank">
        <span class="v20_10">Sign up</span>
    </a>
    <span class="v20_11"><?php bloginfo('name'); ?></span>
    <div class="menu"></div>
    <div class="v20_13">
        <div class="v20_14"></div>
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


<div id="home" class="v20_8">
    <!-- Home Content -->
</div>

<div id="about" class="about-us">
    <!-- About Us Content -->
</div>

<div id="application" class="content">
    <!-- Application Content -->
</div>

<div id="contact" class="contact-us">
    <!-- Contact Content -->
</div>

<div id="settings" class="settings">
    <!-- Settings Content -->
</div>

        <span class="v20_17">Sagasoft</span>
        <div class="v20_15">
            <!-- <form id="searchForm" class="search-form" onsubmit="handleSearch(event)">
                <input type="text" id="searchInput" placeholder="Search..." class="v20_16">
                <button type="submit" class="search-button">Search</button>
            </form> -->
        </div>
    </div>
    <span class="v20_17"><?php bloginfo('description'); ?></span>
    <div class="v20_18">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/sagasuite_logo.png" alt="company_logo">
    </div>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const logoImage = document.querySelector('img[alt="company_logo"]');
            logoImage.classList.add('rotate-zoom');
        });
    </script>
    <script src="script.js"></script>
    <span class="v20_19">Secure workspace software that protects your privacy with ours.</span>
    <center>
    <div class="v20_20">
        <input type="text" id="searchInput" placeholder="Search Application name" class="search-input">
        <button id="searchButton" class="-buttonsearch">Search</button>
    </div>
    </center>

    <!-- Main Content -->
<div class="content">
    <!-- Card Section -->
    <!-- <span class="v20_18"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/sagasuite_logo.png" alt="logo"></span> -->
    <div class="v20_23"><img id="crm_1" src="<?php echo get_template_directory_uri(); ?>/assets/images/crm415d09.png" alt="CRM"></div>
    <div class="v20_24"><img id="mail1" src="<?php echo get_template_directory_uri(); ?>/assets/images/mailcow.png" alt="Mail"></div>
    <div class="v20_25"><img id="next1" src="<?php echo get_template_directory_uri(); ?>/assets/images/nextcloud.png" alt="Drive"></div>
    <div class="v20_26"><img id="insight1" src="<?php echo get_template_directory_uri(); ?>/assets/images/insights28df13.png" alt="Dashboard"></div>

    <span class="v20_27">CRM</span>
    <span class="v20_28">SOGO</span>
    <span class="v20_29">Saga Drive</span>
    <span class="v20_36">Saga Insights</span>

    <!-- Links Section -->
    <div class="v20_links">
        <a href="https://sagasoft.io">Saga Dash</a>
        <a href="https://sagasoft.io">Saga Mail</a>
        <a href="https://sagasoft.io">Saga Drive</a>
        <a href="https://sagasoft.io">Saga CRM</a>
        <a href="https://sagasoft.io">Saga HR</a>
        <a href="https://sagasoft.io">Saga Dashboard</a>
        <a href="https://sagasoft.io">Saga Gameplan</a>
        <a href="https://sagasoft.io">Saga HelpDesk</a>
        <a href="https://sagasoft.io">Saga Calendar</a>
        <a href="https://sagasoft.io">Saga Meet</a>
        <a href="https://sagasoft.io">Saga Chat</a>
        <a href="https://sagasoft.io">Saga ERP</a>
    </div>
</div>
    <div id="searchResults" class="search-results hidden"></div>
    <div id="errorMessage" class="hidden">Sent error message for Application Not found</div>
</div>


<div class="about-us">
    <h2>About Us</h2>
    <p>At SagaSoft, we understand the journey of entrepreneurship. We know that building a successful business demands unwavering dedication and a solid foundation. That's why we're here to support you every step of the way.</p>
    <ul>
        <ul>Our suite of applications is designed to streamline operations and drive growth.</ul>
        <ul>Explore SagaSoft's full range of applications: Email, Audio & Video call, Website Builder, HRMS, HelpDesk, Wiki, Drive, ERPNext.</ul>
    </ul>
</div>



  <div class="container">
  <div class="section">
  <div class="image-wrapper">
  <img src="<?php echo get_template_directory_uri(); ?>/assets/images/crm415d09.png" alt="CRM Management">
</div>

    <div class="text-content">
      <h2>Saga CRM</h2>
      <p>CRM helps manage employee data, payroll, attendance, leave applications, recruitment, and performance reviews efficiently within an organization.</p>
    </div>
  </div>

  <div class="section">
    <div class="image-wrapper">
      <img src="<?php echo get_template_directory_uri(); ?>/assets/images/nextcloud.png" alt="Insights Management">
    </div>
    <div class="text-content">
      <h2>Saga Nextcloud</h2>
      <p>Next Cloud helps manage employee data, payroll, attendance, leave applications, recruitment, and performance reviews efficiently within an organization.</p>
    </div>
  </div>

  <div class="section">
    <div class="image-wrapper">
      <img src="<?php echo get_template_directory_uri(); ?>/assets/images/helpdesk-icon.png" alt="Help Desk Management">
    </div>
    <div class="text-content">
      <h2>Saga Help Desk</h2>
      <p>Help Desk helps manage employee data, payroll, attendance, leave applications, recruitment, and performance reviews efficiently within an organization.</p>
    </div>
  </div>

  <div class="section">
    <div class="image-wrapper">
      <img src="<?php echo get_template_directory_uri(); ?>/assets/images/gameplan558aa7.png" alt="Game Plan Management">
    </div>
    <div class="text-content">
      <h2>Saga Game Plan</h2>
      <p>Game Plan helps manage employee data, payroll, attendance, leave applications, recruitment, and performance reviews efficiently within an organization.</p>
    </div>
  </div>

  <div class="section">
    <div class="image-wrapper">
      <img src="<?php echo get_template_directory_uri(); ?>/assets/images/mailcow.png" alt="Mail Cow Management">
    </div>
    <div class="text-content">
      <h2>Saga Mail Cow</h2>
      <p>Mail Cow helps manage employee data, payroll, attendance, leave applications, recruitment, and performance reviews efficiently within an organization.</p>
    </div>
  </div>

  <div class="section">
  <div class="image-wrapper">
    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/insights28df13.png" alt="Insights Management">
  </div>
  <div class="text-content">
    <h2>Saga Insights</h2>
    <p>Insights helps manage employee data, payroll, attendance, leave applications, recruitment, and performance reviews efficiently within an organization.</p>
  </div>
</div>


  <div class="section">
    <div class="image-wrapper">
      <img src="<?php echo get_template_directory_uri(); ?>/assets/images/hrda199d.png" alt="HR Management">
    </div>
    <div class="text-content">
      <h2>Saga HR</h2>
      <p>HR helps manage employee data, payroll, attendance, leave applications, recruitment, and performance reviews efficiently within an organization.</p>
    </div>
  </div>

  <div class="section">
    <div class="image-wrapper">
      <img src="<?php echo get_template_directory_uri(); ?>/assets/images/erpnext-logo.svg" alt="ERP Management">
    </div>
    <div class="text-content">
      <h2>Saga ERP</h2>
      <p>ERP helps manage employee data, payroll, attendance, leave applications, recruitment, and performance reviews efficiently within an organization.</p>
    </div>
  </div>

  <div class="section">
    <div class="image-wrapper">
      <img src="<?php echo get_template_directory_uri(); ?>/assets/images/lms.png" alt="Insights Dashboard">
    </div>
    <div class="text-content">
      <h2>Saga LMS</h2>
      <p>LMS helps manage employee data, payroll, attendance, leave applications, recruitment, and performance reviews efficiently within an organization.</p>
    </div>
  </div>

  <div class="section">
    <div class="image-wrapper">
      <img src="<?php echo get_template_directory_uri(); ?>/assets/images/wikib37899.png" alt="Wiki Management">
    </div>
    <div class="text-content">
      <h2>Saga Wiki</h2>
      <p>Wiki helps manage employee data, payroll, attendance, leave applications, recruitment, and performance reviews efficiently within an organization.</p>
    </div>
  </div>

  <div class="app-overview">
    <button class="learn-more-btn" id="learnMoreBtn">Learn More</button>
  </div>
</div>

<div class="menu-footer">
    <a href="#logout">Logout</a>
    <a href="#share">Share Link</a>
</div>
<?php get_footer(); ?>
