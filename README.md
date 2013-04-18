artisan+
============

A bundle for Laravel to execute artisan from web.
Especially for windows user without suitably Console-Client it could be a great improvement for workflow.

It based on the **artisan web bundle** by Joe Wallace
http://bundles.laravel.com/bundle/artisan

Now you can directly type your commands in a console, instead of in address-bar.

### Features:
- Authentification with file-based credentials (no special users-table needed).
- Run artisan commands directly from browser

### Installation:
```
'artisanplus' => array('auto' => true),
```

You may change the default login credentials, or add new users in:
```
bundles/artisanplus/config/users.php
```

### Console-Commands:
- help
- clear
- exit


**Please note:**  Bundle currently is under developement. It may occur errors and several commands can't be executed for now.
