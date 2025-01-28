<aside>
    <?php if (is_active_sidebar('sidebar-1')) : ?>
        <?php dynamic_sidebar('sidebar-1'); ?>
    <?php else : ?>
        <p>Add widgets to this sidebar in the WordPress admin.</p>
    <?php endif; ?>
</aside>
