@section('styles')
	{{ HTML::style('http://fonts.googleapis.com/css?family=Ubuntu+Mono:400,700') }}
	{{ HTML::style('bundles/artisanplus/css/bootstrap.min.css') }}
	{{ HTML::style('bundles/artisanplus/css/cssConsole.css') }}
	{{ HTML::style('bundles/artisanplus/css/flat-ui.css') }}
	{{ HTML::style('bundles/artisanplus/css/artisan.css') }}
@endsection

@section('scripts')
	{{ HTML::script('bundles/artisanplus/js/jquery.js') }}
	{{ HTML::script('bundles/artisanplus/js/bootstrap.min.js') }}
	{{ HTML::script('bundles/artisanplus/js/cssConsole.js') }}
	{{ HTML::script('bundles/artisanplus/js/tinyscrollbar.min.js') }}
	@if(Auth::guest()) 
	{{ HTML::script('bundles/artisanplus/js/artisan.login.js') }}
	@else
	{{ HTML::script('bundles/artisanplus/js/artisan.js') }}
	@endif
@endsection
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Artisan+</title>
	@yield('styles')
</head>
<body>
	<div class="container">
		@yield('artisan')
	</div>

	@yield('scripts')
</body>
</html>