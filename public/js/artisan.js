$(document).ready(function() {
  $('#input').find('input').focus();
  getLastCommand();
  $('.terminal').tinyscrollbar();
});


$('#input').cssConsole({
	inputName:'console',
	charLimit: 60,
	onEnter: function(){
		addLastCommand($('#input').find('input').val());
		addLine(" "+$('#input').find('input').val(), 'command','',true);
		execCommand($('#input').find('input').val());
		$('#input').cssConsole('reset').find('input').focus();
		$('.terminal').tinyscrollbar_update('bottom');
	}
});

var lineLimit = 0;
var commandInc = 0;
var currentCmd = 0;
var lastChar = window.location.href.substr(-1);

var href = '';

if(lastChar != '/') {
	href = 'artisan/';
}

$('.container').on('click', function() {
	$('#input').find('input').focus();
});

function addLastCommand(command) {
	commandInc++;
	currentCmd = commandInc + 1;
	$('.last-commands').append("<div class='cmd cmd-"+commandInc+"'>"+command+"</div>");
}

function getLastCommand() {

	$('#input').on('keydown', function(e) {

		if(e.which==38) {
			e.preventDefault();

			if(currentCmd > 1) {
				currentCmd--;
			}
			$('.cssConsoleInput').val($('.cmd-'+currentCmd).text());
			var cmd = $('.cmd-'+currentCmd).text().split("");
			var input = '';
			for(i=0; i<cmd.length;i++) {
				input += "<span>"+cmd[i]+"</span>";
			}
			$('.cssConsoleDisplay').html(input);
		}
		if(e.which==40) {

			if(currentCmd < commandInc) {
				currentCmd++;
			}
			
			$('.cssConsoleInput').val($('.cmd-'+currentCmd).text());

			var cmd = $('.cmd-'+currentCmd).text().split("");
			var input = '';
			for(i=0; i<cmd.length;i++) {
				input += "<span>"+cmd[i]+"</span>";
			}
			$('.cssConsoleDisplay').html(input);

		}
		
	});
}

function addLine(input, style, color, time) {
		var currentdate = new Date();
		currentdate = '<span class="time">'+
					  ( currentdate.getHours() < 10 ? "0" : "" ) +
					  currentdate.getHours() +
					  ':' +
					  ( currentdate.getMinutes() < 10 ? "0" : "" ) +
					  currentdate.getMinutes() +
					  ':' +
					  ( currentdate.getSeconds() < 10 ? "0" : "" ) +
					  currentdate.getSeconds() +
					  ' :: </span>';
		if($('.console div').length==lineLimit) {
			$('.console div').eq(0).remove();
		}
		time = typeof time !== 'undefined' ? currentdate : '<span class="whitespace"></span>';
		style = typeof style !== 'undefined' ? style : 'line';
		color = typeof color !== 'undefined' ? color : 'white';
		$('.console').append('<div class="'+style+' '+color+'">'+time+input+'</div>');
}

function execute(command) {

	$.ajax({
		url: href + "exec",
		type: 'POST',
		data: { command: command },
		success: function( data ) {
			addLine(data);
			addLine("","divider");
			$('.terminal').tinyscrollbar_update('bottom');
		}
	});

}

function checkCommand(command) {

	var cmds = ["key","session","migrate","bundle","notify","admin","test"];

	for(i=0;i<cmds.length;i++){
		reg = new RegExp (cmds[i],"g");
		if(command.match(reg)) {
			return true;
		}
	}

}

function execCommand(command){

	$check = checkCommand(command);

    if ( commands[command] ) {
      return commands[command]();
    } else {

      if($check) {
      	 execute(command);
      } else {
      	addLine("Command '" + command + "' was not found.", "artisan_error");
      	addLine("","divider");
      }

    }

    $('.terminal').tinyscrollbar_update('bottom');
	
}

var commands = {
	help: function (){
		addLine("Available command list:");
		addLine("For more information visit the laravel docs:", "desc");
		addLine("http://laravel.com/docs/artisan/commands", "desc", "link");

		addLine("Application Configuration", "category");
		addLine("key:generate", "margin");

		addLine("Database Sessions", "category");
		addLine("session:table", "margin");

		addLine("Migrations", "category");
		addLine("migrate:install", 'margin');
		addLine("migrate:make create_users_table", 'margin');
		addLine("migrate:make bundle::tablename", 'margin');
		addLine("migrate", 'margin');
		addLine("migrate application", 'margin');
		addLine("migrate bundle", 'margin');
		addLine("migrate:rollback", 'margin');
		addLine("migrate:reset", 'margin');

		addLine("Bundles", "category");
		addLine("bundle:install eloquent", "margin");
		addLine("bundle:upgrade eloquent", "margin");
		addLine("bundle:upgrade", "margin");
		addLine("bundle:publish bundle_name", "margin");
		addLine("bundle:publish", "margin");

		addLine("Tasks", "category");
		addLine("notify", "margin");
		addLine("notify taylor", "margin");
		addLine("notify:urgent", "margin");
		addLine("admin::generate", "margin");
		addLine("admin::generate:list", "margin");

		addLine("Unit Tests", "category");
		addLine("test", "margin");
		addLine("test bundle-name", "margin");

		addLine("Routing", "category");
		addLine("route:call get api/user/1", "margin");

		addLine("CLI Options", "category");
		addLine("foo --env=local", "margin");
		addLine("foo --database=sqlitename", "margin");

		addLine("","divider");
	},
	clear: function(){
		$('.console').find("div").not(".start").remove();
		$('.terminal').tinyscrollbar_update('bottom');
	},
	exit: function() {
		commands.clear();
		window.location.href = href + "logout";
	},
	logout: function() {
		commands.exit();
	}
}