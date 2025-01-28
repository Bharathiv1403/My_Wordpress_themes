<nav class="main-navigation">
    <ul>
        <li><a href="<?php echo home_url('/'); ?>">Home</a></li>
        <li><a href="<?php echo home_url('/about'); ?>">About</a></li>
        <li><a href="<?php echo home_url('/blogs'); ?>">Blogs</a></li>
        <li><a href="<?php echo home_url('/contact'); ?>">Contact</a></li>
        <li><a href="<?php echo home_url('/sign-in'); ?>">Sign In</a></li>
        <li><a href="<?php echo home_url('/sign-up'); ?>">Sign Up</a></li>
    </ul>
</nav>


<style>
.main-navigation {
    background-color: #fe871e;
    padding: 10px 20px;
}

.main-navigation ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    margin-left: 830px;

}

.main-navigation li {
    margin-right: 20px;
}

.main-navigation a {
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    padding: 5px 10px;
    transition: background-color 0.3s, color 0.3s;
}

.main-navigation a:hover {
    background-color: #18aad2;
    color: #fff;
    border-radius: 5px;
}
</style>
