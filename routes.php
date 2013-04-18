<?php


Route::get('artisan', array('as'=>'artisanplus','uses'=>'artisanplus::base@index'));
Route::get('artisan/exec',array('as'=>'exec', 'uses' => 'artisanplus::base@exec'));
Route::post('artisan/exec',array('as'=>'exec', 'uses' => 'artisanplus::base@exec'));

Route::get('artisan/logout', function() {
	Session::flush();
	return Redirect::to_route('artisanplus');
});


Route::post('artisan/check', array('uses'=>'artisanplus::base@check'));
Route::get('artisan/check', array('uses'=>'artisanplus::base@check'));