<?php

Autoloader::map(array(
	'Exceptions' => Bundle::path('artisanplus').'libraries/exceptions.php',
	'Artisan_Check' => Bundle::path('artisanplus'). 'libraries/artisan_check.php',
	'FileAuth' => Bundle::path('artisanplus'). 'libraries/fileauth.php',
));

Autoloader::directories(array(
    Bundle::path('artisanplus').'models',
    Bundle::path('artisanplus').'libraries',
    Bundle::path('artisanplus').'config'
));

Auth::extend('file', function()
{
	return new FileAuth();
});