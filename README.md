artisan+
============

A bundle for Laravel - Frontend console to execute artisan from web

## How-To:
- Check your database-setttings in application/config/database.php
- Install Bundle in application/bundle.php

```
return array(
  //...
	'artisan_plus' => array(
		'handles' => 'artisan_plus',
		'auto' => true
	)
);
```

First login with credentials (which stored in config-file)

### Available commands:
##### Console:
- help
- clear
- exit


Please note:
Bundle currently is under developement. It may occur errors and several commands can't be executed for now.
