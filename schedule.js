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

	var datetime = day+"."+month+"."+year;
	var week = Math.floor((ts1 - ts0)/oneweek*1000)+1;
	var week2 = Math.floor((ts1 - ts0)/(oneweek*2)*1000)+1;

	var start_week = new Date( (ts0+(week-1)*7*24*3600)*1000 );
	var end_week = new Date(start_week.getTime()+7*oneday);

	var day0 = start_week.getDate();
	var month0 = start_week.getMonth()+1;
	var day1 = end_week.getDate();
	var month1 = end_week.getMonth()+1;

    if(start_week.getMonth().toString().length == 1)
        month0 = '0'+month0;
    if(start_week.getDate().toString().length == 1)
        day0 = '0'+day0; 

    if(end_week.getMonth().toString().length == 1)
        month1 = '0'+month1;
    if(end_week.getDate().toString().length == 1)
        day1 = '0'+day1; 


	$("#timetoday").text("Неделя: "+day0+"."+month0+" - "+day1+"."+month1);
	
	if(week%2==0)
		$("#evenness").html("<span class='text-info'>Нечётная</span>");
	else
		$("#evenness").html("<span class='text-danger'>Чётная</span>");

	var group_number = (week%2)+2-2*(week%2);
	var group_number2 = 3-group_number;

	var _2group_number = (week2%2)+2-2*(week2%2);
	var _2group_number2 = 3-_2group_number;

	$(".asdn").attr("title","Гр. "+group_number);
	$(".ac").attr("title","Гр. "+group_number2+" / Гр. "+group_number);
	$(".ep").attr("title","Гр. "+group_number2);

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