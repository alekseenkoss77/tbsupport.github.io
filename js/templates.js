module.exports=function(t){var e=[],i=t||{},s=i.site,n=i.checker,r=function(t,i,s,n){this.block,this.attributes||{},this.escaped||{},e.push("<div"+jade.attrs({"data-component":"checker","data-option-type":""+s,"data-option-deps":""+n,"class":["item","pi"]},{"data-component":!0,"data-option-type":!0,"data-option-deps":!0})+'><div class="heading"><span class="index">'+jade.escape(null==(jade.interp=i)?"":jade.interp)+".</span>"+jade.escape(null==(jade.interp=t)?"":jade.interp)+'<div class="status"><i class="fa fa-check-circle green passed"></i><i class="fa fa-times-circle red failed"></i><i class="fa fa-exclamation-circle orange warning"></i><i class="fa fa-clock-o grey loading"></i></div></div><div class="desc"></div></div>')};return e.push('<!DOCTYPE html><html lang="ru"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title>Teachbase Техническая поддержка</title><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"><!--[if IE 8]><script'+jade.attrs({terse:!0,src:""+s.baseurl+"/js/polyfills.js"},{src:!0})+"></script><script"+jade.attrs({terse:!0,src:""+s.baseurl+"/js/modernizr.js"},{src:!0})+'></script><![endif]--><link href="//fonts.googleapis.com/css?family=PT+Sans&amp;subset=latin,cyrillic" rel="stylesheet" media="all"><link href="//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet" media="all"><link'+jade.attrs({terse:!0,rel:"stylesheet",href:""+s.baseurl+"/css/app.css",media:"all"},{rel:!0,href:!0,media:!0})+'></head></html><body><header><div class="header-top"><a href="/"><div class="logo inline hdpi"></div></a><div class="description inline"><p class="name">TeachBase</p><p>техническая поддержка</p></div><div class="contacts inline"><p class="mail"><i class="fa fa-envelope"></i>support@teachbase.ru</p><p class="phone">+7 (495) 660-38-43</p></div></div></header><div class="main checker-page"><div class="section"><div class="content"><div class="header inline"><h1 class="title inline">Проверка готовности к работе с системой видеоконференций</h1><div class="progress-wrapper"><div data-component="progressbar" data-pi="progress" class="pi progressbar-line"></div></div></div><button data-event-click="@checker.start" data-pi="start_btn" class="button button-enter pi">Начать проверку</button><div data-component="checker_controller" data-pi="checker" data-event-start="@start_btn.disable()" data-event-finish="@start_btn.enable()" data-option-fp-version="11.0.0" data-option-java-version="1.7" class="checkers pi">'),r("Проверка версии Flash Player",1,"fp_version",""),r("Проверка RTMP подключения",2,"rtmp_connection","fp_version"),r("Проверка пинга RTMP",3,"rtmp_ping","rtmp_connection"),r("Проверка входящей скорости",4,"rtmp_input","rtmp_connection"),r("Проверка исходящей скорости",5,"rtmp_output","rtmp_connection"),e.push('</div></div><div class="swf-hidden-container"><div'+jade.attrs({terse:!0,"data-component":"rtmp_checker","data-pi":"rtmp","data-option-test-size":"5","data-option-host":""+n.host,"data-option-client":"$('@rtmp').pi()","data-option-url":"/flash/cc.swf","class":["swf-hidden","pi"]},{"data-component":!0,"data-pi":!0,"data-option-test-size":!0,"data-option-host":!0,"data-option-client":!0,"data-option-url":!0})+'></div></div></div></div><script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script><script>window.jQuery || document.write(unescape(\'%3Cscript src="'+jade.escape(null==(jade.interp=s.baseurl)?"":jade.interp)+'/js/jquery.js">%3C/script>\'))</script><script src="http://cdn.clappr.io/latest/clappr.min.js"></script><script'+jade.attrs({terse:!0,src:""+s.baseurl+"/js/vendor.js"},{src:!0})+'></script><script src="//cdnjs.cloudflare.com/ajax/libs/bowser/1.0.0/bowser.min.js"></script><script'+jade.attrs({terse:!0,src:""+s.baseurl+"/js/app.js"},{src:!0})+"></script><link"+jade.attrs({terse:!0,rel:"stylesheet",href:""+s.baseurl+"/css/font-awesome.min.css",media:"all"},{rel:!0,href:!0,media:!0})+"></body>"),e.join("")},module.exports=function(t){var e=[],i=t||{},s=i.site,n=i.nav;return e.push('<!DOCTYPE html><html lang="ru"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title>Teachbase Техническая поддержка</title><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"><!--[if IE 8]><script'+jade.attrs({terse:!0,src:""+s.baseurl+"/js/polyfills.js"},{src:!0})+"></script><script"+jade.attrs({terse:!0,src:""+s.baseurl+"/js/modernizr.js"},{src:!0})+'></script><![endif]--><link href="//fonts.googleapis.com/css?family=PT+Sans&amp;subset=latin,cyrillic" rel="stylesheet" media="all"><link href="//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet" media="all"><link'+jade.attrs({terse:!0,rel:"stylesheet",href:""+s.baseurl+"/css/app.css",media:"all"},{rel:!0,href:!0,media:!0})+'></head></html><body><header><div class="header-top"><a href="/"><div class="logo inline hdpi"></div></a><div class="description inline"><p class="name">TeachBase</p><p>техническая поддержка</p></div><div class="contacts inline"><p class="mail"><i class="fa fa-envelope"></i>support@teachbase.ru</p><p class="phone">+7 (495) 660-38-43</p></div></div></header><div class="main"><div class="section"><div class="content"><h1 class="title inline">Разделы</h1><nav>'),function(){var t=n;if("number"==typeof t.length)for(var i=0,s=t.length;s>i;i++){var r=t[i];e.push("<a"+jade.attrs({terse:!0,href:r.path,"class":["menu-link"]},{href:!0})+">"+jade.escape(null==(jade.interp=r.title)?"":jade.interp)+"</a>")}else{var s=0;for(var i in t){s++;var r=t[i];e.push("<a"+jade.attrs({terse:!0,href:r.path,"class":["menu-link"]},{href:!0})+">"+jade.escape(null==(jade.interp=r.title)?"":jade.interp)+"</a>")}}}.call(this),e.push('</nav></div></div></div><script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script><script>window.jQuery || document.write(unescape(\'%3Cscript src="'+jade.escape(null==(jade.interp=s.baseurl)?"":jade.interp)+'/js/jquery.js">%3C/script>\'))</script><script src="http://cdn.clappr.io/latest/clappr.min.js"></script><script'+jade.attrs({terse:!0,src:""+s.baseurl+"/js/vendor.js"},{src:!0})+'></script><script src="//cdnjs.cloudflare.com/ajax/libs/bowser/1.0.0/bowser.min.js"></script><script'+jade.attrs({terse:!0,src:""+s.baseurl+"/js/app.js"},{src:!0})+"></script><link"+jade.attrs({terse:!0,rel:"stylesheet",href:""+s.baseurl+"/css/font-awesome.min.css",media:"all"},{rel:!0,href:!0,media:!0})+"></body>"),e.join("")},module.exports=function(t){var e=[],i=t||{},s=i.site,n=i.qmaker_url;return e.push('<!DOCTYPE html><html lang="ru"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title>Teachbase Техническая поддержка</title><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"><!--[if IE 8]><script'+jade.attrs({terse:!0,src:""+s.baseurl+"/js/polyfills.js"},{src:!0})+"></script><script"+jade.attrs({terse:!0,src:""+s.baseurl+"/js/modernizr.js"},{src:!0})+'></script><![endif]--><link href="//fonts.googleapis.com/css?family=PT+Sans&amp;subset=latin,cyrillic" rel="stylesheet" media="all"><link href="//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet" media="all"><link'+jade.attrs({terse:!0,rel:"stylesheet",href:""+s.baseurl+"/css/app.css",media:"all"},{rel:!0,href:!0,media:!0})+'></head></html><body><header><div class="header-top"><a href="/"><div class="logo inline hdpi"></div></a><div class="description inline"><p class="name">TeachBase</p><p>техническая поддержка</p></div><div class="contacts inline"><p class="mail"><i class="fa fa-envelope"></i>support@teachbase.ru</p><p class="phone">+7 (495) 660-38-43</p></div></div></header><div class="main-frame"><iframe'+jade.attrs({terse:!0,width:"100%",height:"100%",border:0,src:n,styles:"width: '100%'; height: '100%'; border: 'none'"},{width:!0,height:!0,border:!0,src:!0,styles:!0})+'></iframe></div><script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script><script>window.jQuery || document.write(unescape(\'%3Cscript src="'+jade.escape(null==(jade.interp=s.baseurl)?"":jade.interp)+'/js/jquery.js">%3C/script>\'))</script><script src="http://cdn.clappr.io/latest/clappr.min.js"></script><script'+jade.attrs({terse:!0,src:""+s.baseurl+"/js/vendor.js"},{src:!0})+'></script><script src="//cdnjs.cloudflare.com/ajax/libs/bowser/1.0.0/bowser.min.js"></script><script'+jade.attrs({terse:!0,src:""+s.baseurl+"/js/app.js"},{src:!0})+"></script><link"+jade.attrs({terse:!0,rel:"stylesheet",href:""+s.baseurl+"/css/font-awesome.min.css",media:"all"},{rel:!0,href:!0,media:!0})+"></body>"),e.join("")},module.exports=function(t){var e=[],i=t||{},s=i.site,n=i.checker,r=function(t,i,s,n){this.block,this.attributes||{},this.escaped||{},e.push("<div"+jade.attrs({"data-component":"checker","data-option-type":""+s,"data-option-deps":""+n,"class":["item","pi"]},{"data-component":!0,"data-option-type":!0,"data-option-deps":!0})+'><div class="heading"><span class="index">'+jade.escape(null==(jade.interp=i)?"":jade.interp)+".</span>"+jade.escape(null==(jade.interp=t)?"":jade.interp)+'<div class="status"><i class="fa fa-check-circle green passed"></i><i class="fa fa-times-circle red failed"></i><i class="fa fa-exclamation-circle orange warning"></i><i class="fa fa-clock-o grey loading"></i></div></div><div class="desc"></div></div>')};return e.push('<!DOCTYPE html><html lang="ru"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title>Teachbase Техническая поддержка</title><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"><!--[if IE 8]><script'+jade.attrs({terse:!0,src:""+s.baseurl+"/js/polyfills.js"},{src:!0})+"></script><script"+jade.attrs({terse:!0,src:""+s.baseurl+"/js/modernizr.js"},{src:!0})+'></script><![endif]--><link href="//fonts.googleapis.com/css?family=PT+Sans&amp;subset=latin,cyrillic" rel="stylesheet" media="all"><link href="//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet" media="all"><link'+jade.attrs({terse:!0,rel:"stylesheet",href:""+s.baseurl+"/css/app.css",media:"all"},{rel:!0,href:!0,media:!0})+'></head></html><body><header><div class="header-top"><a href="/"><div class="logo inline hdpi"></div></a><div class="description inline"><p class="name">TeachBase</p><p>техническая поддержка</p></div><div class="contacts inline"><p class="mail"><i class="fa fa-envelope"></i>support@teachbase.ru</p><p class="phone">+7 (495) 660-38-43</p></div></div></header><div class="main checker-page"><div class="section"><div class="content"><div class="header inline"><h1 class="title inline">Проверка требований к системе</h1><div class="progress-wrapper"><div data-component="progressbar" data-pi="progress" class="pi progressbar-line"></div></div></div><button data-event-click="@checker.start" data-pi="start_btn" class="button button-enter pi">Начать проверку</button><div'+jade.attrs({terse:!0,"data-component":"checker_controller","data-pi":"checker","data-option-ws":""+n.ws_host,"data-event-start":"@start_btn.disable()","data-event-finish":"@start_btn.enable()","class":["checkers","pi"]},{"data-component":!0,"data-pi":!0,"data-option-ws":!0,"data-event-start":!0,"data-event-finish":!0})+">"),r("Проверка браузера",1,"browser_version",""),r("Проверка веб-сокетов",2,"ws","browser_version"),e.push('</div></div></div></div><script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script><script>window.jQuery || document.write(unescape(\'%3Cscript src="'+jade.escape(null==(jade.interp=s.baseurl)?"":jade.interp)+'/js/jquery.js">%3C/script>\'))</script><script src="http://cdn.clappr.io/latest/clappr.min.js"></script><script'+jade.attrs({terse:!0,src:""+s.baseurl+"/js/vendor.js"},{src:!0})+'></script><script src="//cdnjs.cloudflare.com/ajax/libs/bowser/1.0.0/bowser.min.js"></script><script'+jade.attrs({terse:!0,src:""+s.baseurl+"/js/app.js"},{src:!0})+"></script><link"+jade.attrs({terse:!0,rel:"stylesheet",href:""+s.baseurl+"/css/font-awesome.min.css",media:"all"},{rel:!0,href:!0,media:!0})+"></body>"),e.join("")},module.exports=function(t){var e=[],i=t||{},s=i.site;return e.push('<!DOCTYPE html><html lang="ru"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title>Teachbase Техническая поддержка</title><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"><!--[if IE 8]><script'+jade.attrs({terse:!0,src:""+s.baseurl+"/js/polyfills.js"},{src:!0})+"></script><script"+jade.attrs({terse:!0,src:""+s.baseurl+"/js/modernizr.js"},{src:!0})+'></script><![endif]--><link href="//fonts.googleapis.com/css?family=PT+Sans&amp;subset=latin,cyrillic" rel="stylesheet" media="all"><link href="//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet" media="all"><link'+jade.attrs({terse:!0,rel:"stylesheet",href:""+s.baseurl+"/css/app.css",media:"all"},{rel:!0,href:!0,media:!0})+'></head></html><body><header><div class="header-top"><a href="/"><div class="logo inline hdpi"></div></a><div class="description inline"><p class="name">TeachBase</p><p>техническая поддержка</p></div><div class="contacts inline"><p class="mail"><i class="fa fa-envelope"></i>support@teachbase.ru</p><p class="phone">+7 (495) 660-38-43</p></div></div></header><div class="main"><div class="section"><div class="content"><h1 class="title inline">Просмотр трансляции</h1><div data-component="text_input" data-pi="stream_id" class="text-input-wrap inline pi"><input type="text" placeholder="идентификатор трансляции" class="text-input stream-name-field"></div><button data-event-click="@player.load(@stream_id.value())" class="button button-enter pi">Смотреть</button></div><div class="player-wrap"><div data-component="hls_player" data-pi="player" data-option-host="http://var1.teachbase.ru/" class="player pi"></div></div></div></div><script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script><script>window.jQuery || document.write(unescape(\'%3Cscript src="'+jade.escape(null==(jade.interp=s.baseurl)?"":jade.interp)+'/js/jquery.js">%3C/script>\'))</script><script src="http://cdn.clappr.io/latest/clappr.min.js"></script><script'+jade.attrs({terse:!0,src:""+s.baseurl+"/js/vendor.js"},{src:!0})+'></script><script src="//cdnjs.cloudflare.com/ajax/libs/bowser/1.0.0/bowser.min.js"></script><script'+jade.attrs({terse:!0,src:""+s.baseurl+"/js/app.js"},{src:!0})+"></script><link"+jade.attrs({terse:!0,rel:"stylesheet",href:""+s.baseurl+"/css/font-awesome.min.css",media:"all"},{rel:!0,href:!0,media:!0})+"></body>"),e.join("")};