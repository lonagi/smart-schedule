var fst_september = new Date(1611360000000);

var now = undefined;
var ahour = undefined;

function dddd() {

	if(ahour!==undefined && now!==undefined)
		$(".iksweb tr:nth-child("+ahour+") td:nth-child("+(now.getDay()+2)+")").css("background","");

	$("#ispause").html("");

		now		= new Date();
	var year    = now.getFullYear();
    var month   = now.getMonth()+1; 
    var day     = now.getDate();
    var hour    = now.getHours();
    var minute  = now.getMinutes();
    var second  = now.getSeconds();

    var ts0		= Math.round(fst_september.getTime()/1000);
    var ts1		= Math.round(now.getTime()/1000);
    var today  	= new Date(month+" "+day+" "+year+" 00:00").getTime();
    var _h		= hour+minute/60;
    var _now	= ts1*1000-today;

    var onehour = 1000*3600;
    var oneday  = onehour*24;
    var oneweek = oneday*7;
    	ahour	= 0;

    if(month.toString().length == 1)
        month = '0'+month;
    if(day.toString().length == 1)
        day = '0'+day; 
    if(hour.toString().length == 1)
        hour = '0'+hour;
    if(minute.toString().length == 1)
        minute = '0'+minute;
    if(second.toString().length == 1)
        second = '0'+second;

	var datetime = day+"."+month+"."+year;
	var week = Math.floor((ts1 - ts0)/oneweek*1000)+1;
	var week2 = Math.floor((ts1 - ts0)/(oneweek*2)*1000)+1;

	$("#timetoday").text(datetime);
	
	if(week%2!=0)
		$("#evenness").html("<span class='text-info'>Нечётная неделя</span>");
	else
		$("#evenness").html("<span class='text-danger'>Чётная неделя</span>");

	var group_number = (week%2)+2-2*(week%2);
	var group_number2 = 3-group_number;

	var _2group_number = (week2%2)+2-2*(week2%2);
	var _2group_number2 = 3-_2group_number;

	$(".asdn").attr("title","Гр. "+group_number);
	$(".ac").attr("title","Группа "+group_number);
	$(".ep").attr("title","Группа "+group_number2);

	if(_now >= onehour*8 && _now <= onehour*9.5)
		ahour=2;
	else if(_now >= onehour*9.75 && _now <= onehour*11.25)
		ahour=3;
	else if(_now >= onehour*11.5 && _now <= onehour*13)
		ahour=4;
	else if(_now >= onehour*13.5 && _now <= onehour*15)
		ahour=5;
	else if(_now >= onehour*15.25 && _now <= onehour*16.75)
		ahour=6;
	else if(_now >= onehour*8 || _now <= onehour*16.75)
		$("#ispause").html('<span class="text-danger border border-danger p-2 ml-3">Перемена</span>');

	$(".iksweb tr:nth-child("+ahour+") td:nth-child("+(now.getDay()+2)+")").css("background","#6b1616");
}

dddd();
setInterval(function(){
	dddd();
},1500);

$(function () {
  $('[data-toggle="tooltip"]').attr('data-html',"true"); 

  $('[data-toggle="tooltip"]').each(function(){
	$(this).attr('title',"<b class='tooltip_sch'>"+$(this).attr('title')+"</b>");
  });

  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();
})