// Generated by CoffeeScript 1.3.1
(function(){jQuery(function(a){var b,c;b=function(b){var c,d,e;c=b[0].c;d=b[0].cp;e=b[0].l;return a("#current span").html(e)};c=function(){return a.ajax({url:"http://www.google.com/finance/info?client=ig&q=FB",success:function(c){b(c);return a("#current").addClass("show")},error:function(){console.log("Retrieving data didn't work");return a("#current").addClass("error")},dataType:"jsonp"})};c();return setInterval(c,5e3)})}).call(this);