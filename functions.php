<?php

/* Load Scripts */
function js_and_css() {
  wp_deregister_script('jquery');
  wp_register_script('jquery', "//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js", false, false, true);
  wp_enqueue_script('jquery');
  
  wp_enqueue_script('fastclick', '//cdnjs.cloudflare.com/ajax/libs/fastclick/1.0.6/fastclick.min.js',false,false,true);
  wp_enqueue_script('modern', '//cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js',false,false,true);
  wp_enqueue_script('main', get_stylesheet_directory_uri() . '/assets/js/main.js', false,false,true);
  
  wp_register_style( 'style' , get_stylesheet_uri() );
	wp_enqueue_style( 'style' );
}
add_action( 'wp_enqueue_scripts', 'js_and_css' );

function register_my_menus() {
  register_nav_menus(
    array(
      'main-menu' => __( 'Main Menu' ),
    )
  );
}
add_action( 'init', 'register_my_menus' );

include_once('lib/cleanup.php');

?>