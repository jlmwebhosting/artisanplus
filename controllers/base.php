<?php

class Artisanplus_Base_Controller extends Controller {

	public $restful = true;

	public function get_index(){

		Config::set('auth.driver', 'file');
		Config::set('auth.username', 'username');
		
		return View::make('artisanplus::artisan.index');
	}

	public function get_login() {
		return View::make('artisanplus::artisan.login');		
	}

	public function post_exec() {
		$cmd = Input::get('command');

		$args = str_replace(
			array('+', '.'),
			array('::', ':'),
			explode('/', $cmd)
		);

		ob_start();
		try
		{			
			require path('sys').'cli/dependencies'.EXT;
			Laravel\CLI\Command::run($args);
		}
		catch (Exception $ex)
		{
			echo $ex->getMessage();
		}

		$output = str_replace(PHP_EOL, '<br />', ob_get_contents());
		ob_end_clean();

		$class = (isset($ex)) ? "error" : "success";
		return Exceptions::get($class,$output);
	}

	public function get_exec() {
		$cmd = Input::get('command');

		$args = str_replace(
			array('+', '.'),
			array('::', ':'),
			explode('/', $cmd)
		);

		ob_start();
		try
		{
			require path('sys').'cli/dependencies'.EXT;
			Laravel\CLI\Command::run($args);
		}
		catch (Exception $ex)
		{
			echo $ex->getMessage();
		}

		$output = str_replace(PHP_EOL, '<br />', ob_get_contents());
		ob_end_clean();

		$class = (isset($ex)) ? "error" : "success";
		return Exceptions::get($class,$output);
		
	}


	public function post_check() {

		$pw = (Input::get('pw')) ? Input::get('pw') : false;
		$user = (Input::get('user')) ? Input::get('user') : false;



		if($pw) {
			return Artisan_Check::auth($user,$pw);
		} else {
			return Artisan_Check::if_user($user);
		}

	}

	public function get_check() {
		$pw = (Input::get('pw')) ? Input::get('pw') : false;
		$user = (Input::get('user')) ? Input::get('user') : false;

		if($pw) {
			echo Artisan_Check::auth($user,$pw);
		} else {
			echo Artisan_Check::if_user($user);
		}

	}

}