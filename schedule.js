var fst_september = new Date(1630195200000);

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

    if(month0.toString().length === 1)
        month0 = '0'+month0;
    if(day0.toString().length === 1)
        day0 = '0'+day0; 

    if(month1.toString().length === 1)
        month1 = '0'+month1;
    if(day1.toString().length === 1)
        day1 = '0'+day1;


	$("#timetoday").text("Неделя: "+day0+"."+month0+" - "+day1+"."+month1);
	
	if(week%2==0)
		$("#evenness").html("<span class='text-danger'>Чётная</span>");
	else
		$("#evenness").html("<span class='text-info'>Нечётная</span>");

	var group_number = (week%2)+2-2*(week%2);
	var group_number2 = 3-group_number;

	var _2group_number = (week2%2)+2-2*(week2%2);
	var _2group_number2 = 3-_2group_number;

	// $(".twpsr").attr("title","Gh.Țuțuianu \n Группа " + group_number2 + " / V.Lașco \n Группа " + group_number);
	// $(".pdppac").attr("title","V.Cărbune / V.Crețu");
	// $(".pdp").attr("title","V.Sudacevschi");
	// $(".psr").attr("title","V.Moraru");
	// $(".pdplab").attr("title","V.Cărbune \n Группа " + group_number2);
	// $(".asolab").attr("title","V.Subotchin \n Группа " + group_number);
	// $(".aso").attr("title","L.Rotaru");
	// $(".pac").attr("title","I.Calmîcov");
	// $(".paclab").attr("title","V.Crețu \n Группа " + group_number2);
	// $(".tw").attr("title","C.Bargan");
	// $(".psmlab").attr("title","Calmîcov I. \n Группа " + group_number);
	// $(".psmpac").attr("title","Calmîcov I. / V.Crețu");
	// $(".psmaso").attr("title","Calmîcov I. / V.Subotchin");
	//$(".lmipi").attr("title","Struna \n Группа " + group_number);
	//$(".lpcd").attr("title","Subotchin \n Группа " + group_number2);
	$(".ipsem").attr("title","I.Coanda");
	$(".iplab").attr("title","I.Coanda");
	$(".ipc").attr("title","I.Coanda");
	$(".aac").attr("title","Carbune");
	$(".aalab").attr("title","Carbune");
	$(".iac").attr("title","T.Bumbu");
	$(".ialab").attr("title","St Golban");
	$(".ttgesem").attr("title","O.Godonoga");
	$(".ttgelab").attr("title","O.Godonoga");
	$(".ttgec").attr("title","lu Turcan");
	$(".asrcc").attr("title","Moraru");
	$(".asrcsem").attr("title","Moraru");
	$(".asrclab").attr("title","Mihailov");
	$(".psilab").attr("title","Calmicov");
	$(".psisem").attr("title","Calmicov");
	$(".psic").attr("title","Calmicov");

	$(".aaciac").attr("title","Carbune / Bumbu");
	$(".asrcsemaac").attr("title","Moraru / Carbune");


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
	else if(_now >= onehour*17 && _now <= onehour*18.5)
		ahour=7;
	else if(_now >= onehour*18.75 && _now <= onehour*20.15)
		ahour=8;
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