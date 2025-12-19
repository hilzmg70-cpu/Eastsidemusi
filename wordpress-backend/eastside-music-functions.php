
<?php
add_action('init', function () {
  register_post_type('track', [
    'label' => 'Tracks',
    'public' => true,
    'show_in_rest' => true,
  ]);
  register_post_type('artist', [
    'label' => 'Artists',
    'public' => true,
    'show_in_rest' => true,
  ]);
});
