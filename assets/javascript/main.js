// Generated by CoffeeScript 1.3.1
(function(){var a,b,c,d,e,f,g,h,i;jQuery(function(a){var b,d;b=function(b){var c,d,e;c=b[0].c;d=b[0].cp;e=b[0].l;a("#current div.value span").html(e);a("title").html("$"+e+" - Facebook Stock Value");if(c.indexOf("+")>=0){a(".change").addClass("up");a(".change").removeClass("down")}else if(c==="0.00"){a(".change").removeClass("down");a(".change").removeClass("up")}else{a(".change").addClass("down");a(".change").removeClass("up")}a("#changeStock").html(c);return a("#changePercent").html(d+"%")};d=function(){return a.ajax({url:"http://www.google.com/finance/info?client=ig&q=FB",success:function(c){b(c);return a("#current").addClass("show")},error:function(){console.log("Retrieving quote data didn't work");return a("#current").addClass("error")},dataType:"jsonp"})};d();setInterval(d,5e3);return c()});h=!1;d=!1;g=[];i=function(b){f(b);h=!0;return a()};e=function(){d=!0;return a()};a=function(){if(h&&d)return b()};f=function(a){var b;b=a.query.results.quote;g.push(["x","Stock value"]);g.push(["2012-05-18 Start",parseFloat("38.00")]);b.length>1&&(b=b.reverse());return _.each(b,function(a){var b;b=parseFloat(a.Close);return g.push([a.date,b])})};c=function(){var a,b,c,d,e,f;b="30";e="FB";d=new Date;c=d.getMonth()+1;if(c.length=1)c="0"+c;f=""+d.getFullYear()+"-"+c+"-"+d.getDate();a="http://query.yahooapis.com/v1/public/yql?q=select%20date%2C%20Close%20from%20yahoo.finance.historicaldata%20where%20symbol%20%3D%20%22"+e+"%22%20and%20startDate%20%3D%20%222012-05-17%22%20and%20endDate%20%3D%20%22"+f+"%22%20limit%20"+b+"&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";return $.ajax({url:a,success:i,error:function(){return console.log("Retrieving chart data didn't work")},dataType:"jsonp"})};b=function(){var a;a=google.visualization.arrayToDataTable(g);return(new google.visualization.LineChart(document.getElementById("chart"))).draw(a,{curveType:"function",width:740,height:200,backgroundColor:"#3b5998",pointSize:9,axisTitlesPosition:"none",lineWidth:3,colors:["#7385b0"],legend:{position:"none"},chartArea:{width:"740"},animation:{duration:1,easing:"inAndOut"},vAxis:{gridlines:{color:"#3b5998"},textPosition:"none",baselineColor:"none"},hAxis:{textPosition:"none"}})};google.load("visualization","1",{packages:["corechart"]});google.setOnLoadCallback(e)}).call(this);