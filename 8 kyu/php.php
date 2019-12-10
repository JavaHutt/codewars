<?php
/**
 * Alan Partridge II - Apple Turnover
 */
function apple($x) {
  return pow((int)$x, 2) > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.';
}

/**
 * Sum Mixed Array
 */
function sum_mix($a) {
    $result = 0;
    foreach($a as $value) {
      $result += (int)$value;
    }
    return $result;
}
