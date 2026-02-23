<?php
$src = imagecreatefrompng('logo-georgie.png');
if (!$src) die("Failed to load image");

$w = imagesx($src);
$h = imagesy($src);

// The logo has text in the center and bottom. We want pure background texture.
// The top left corner should be safe from text. Let's crop the top left 200x200 patch.
// Actually, to make a tile, maybe it's best to extract a 10px by 10px patch and scale it?
// No, a paper texture needs to be big enough to not look like obvious tiling. 
// A 200x200 patch from (0,0) down to (200,200).
$patch_w = min(200, floor($w/2));
$patch_h = min(200, floor($h/2));

$dst = imagecreatetruecolor($patch_w, $patch_h);
imagecopy($dst, $src, 0, 0, 0, 0, $patch_w, $patch_h);
imagepng($dst, 'navbar-bg.png');
echo "Cropped $patch_w x $patch_h patch into navbar-bg.png\n";
?>
