<!doctype html>
<html class="no-js">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title><?php wp_title('Website | '); ?></title>
        <meta name="description" content="<?php bloginfo('description'); ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <?php wp_head(); ?>
    </head>
<body>
<header>
	<h1><a href="<?php echo site_url(); ?>">Home</a></h1>
</header>
<nav><?php wp_nav_menu('main-menu'); ?></nav>