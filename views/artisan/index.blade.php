@layout('artisanplus::base')

@section('artisan')
	<h3>Artisan+</h3>
	
	@if(Auth::guest()) 
		<div class="terminal">
			<div class="console">
				
			</div>
			<div class="bottom">
				<div class="label">></div>
				<div id="input">
					<span class="authentication"></span>
				</div>
			</div>
		</div>
	@else
		<div class="terminal">
			<div class="scrollbar"><div class="track"><div class="thumb"><div class="end"></div></div></div></div>
			<div class="viewport">
				<div class="overview">
					<div class="console">
						<div class="line white start">Welcome to artisan+</div>
						<div class="line white start">Type <span class="green">help</span> for command list.</div>
					</div>
					<div class="bottom">
						<div class="label">></div>
						<div id="input"></div>
					</div>
					<div class="last-commands"></div>
				</div>
			</div>
		</div>


		
	@endif


@endsection