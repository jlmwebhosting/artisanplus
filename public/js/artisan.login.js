$(function() {
  $('#input').find('input').focus();
  $('.authentication').text("login as: ");
});

$('#input').cssConsole({
	inputName:'console',
	charLimit: 60,
	onEnter: function(){
		addLine("> "+$('#input').find('input').val());
		execCommand($('#input').find('input').val());
		$('#input').cssConsole('reset').find('input').focus();
		$(".terminal").scrollTop($(".terminal")[0].scrollHeight);
	}
});

var lineLimit = 0;
var auth = false;
var user = "";
var pw = "";

var lastChar = window.location.href.substr(-1);
var href = '';
if (lastChar != '/') {        
	href = "artisan/";   
}

$('.container').on('click', function() {
	$('#input').find('input').focus();
});

function addLine(input, style, color) {
		if($('.console div').length==lineLimit) {
			$('.console div').eq(0).remove();
		}
		style = typeof style !== 'undefined' ? style : 'line';
		color = typeof color !== 'undefined' ? color : 'white';
		$('.console').append('<div class="'+style+' '+color+'">'+input+'</div>');
}

function execCommand(command){

	if(command == "clear") {
		commands.clear();
	} else {

		user = (!auth) ? command : user;
		pw = (auth) ? command : 0;

		d = { user: user, pw: pw };
		$.ajax({
			url: href + 'check',
			type: 'POST',
			data: d,
			success: function(r) {

				console.log(r);

				if(!auth) {
					auth = true;
					user = user;
	  				$('.authentication').text(user + "'s password: ");				
				} else if(auth) {
					
					if( r == "Wrong Password!") {
						commands.clear();
						pw = "";
						addLine('<div class="artisan_error">Wrong Password!</div>');
					} else if( r == "Wrong Username!") {
						commands.clear();
						auth = false;
						user = "";
						pw = "";
						$('.authentication').text("login as: ");	
						addLine('<div class="artisan_error">Wrong Password!</div>');
					} else {
						$('.authentication').text("");
						commands.clear();
						window.location.reload(true);
					}

				}

			}
		});
	}

}


var commands = {
	clear: function(){
		$('.console').find("div").not(".start").remove();
		$('.authentication').text("login as: ");
		auth = false;
		user = "";
		pw = "";
	},

}