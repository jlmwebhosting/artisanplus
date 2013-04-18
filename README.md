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

### Artisan+ default view
![artisan_plus](https://raw.github.com/fpvz/artisan_plus/developement/github_img/artisan_plus.png)

### Available commands:
##### Console:
- help
- clear
- exit


### Aritsan+ command: help
![artisan_plus](https://raw.github.com/fpvz/artisan_plus/developement/github_img/artisan_plus_help.png)
