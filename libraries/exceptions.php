<?php

class Exceptions {

	public static function get($class,$output) {
		
		$class = (
			preg_match("/An application key already exists!/",$output)
		)
		? "error"
		: $class;
		
		return "<div class='artisan_".$class."'>".$output."</div>";

	}

}