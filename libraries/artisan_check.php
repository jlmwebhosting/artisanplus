<?php

class Artisan_Check {

	public static function if_user($usr=false) {

		$users = Config::get('artisanplus::users');

		foreach($users as $user) {
			return ( $user['username'] == $usr) ? 1 : 0;
		}

	}

	public static function auth($user, $pw) {

		$credentials = array("username"=>$user, 'password' => $pw);
		$auth = new FileAuth;

		return $auth->attempt($credentials);
	
	}

}