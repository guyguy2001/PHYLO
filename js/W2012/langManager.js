(function() {
	 (function() {
		function g () {};
		g.prototype.cookie = {
			create : function(name,value,days) {
					if (days) {
						var date = new Date();
						date.setTime(date.getTime()+(days*24*60*60*1000));
						var expires = "; expires="+date.toGMTString();
					} else var expires = "";
					document.cookie = name+"="+value+expires+"; path=/";
				},
			read : function(name) {
					var nameEQ = name + "=";
					var ca = document.cookie.split(';');
					for(var i=0;i < ca.length;i++) {
						var c = ca[i];
						while (c.charAt(0)==' ') c = c.substring(1,c.length);
						if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
					}
				return null;
			},
			erase : function(name) {
				langManager.cookie.create(name,"",-1);	
			}	
		};
		g.prototype.buildMenu = function(list) {
			var str = "<ul><li><a href='#'>Language<span class='arrow'></span></a><ul>";
			for(var i=0;i<list.length;i++) {
				str+="<li><a href='#"+list[i][1]+"' id='"+list[i][1]+"' class='langSelect'>"+list[i][0]+"</a></li>";	
			};
			str+= "</ul></li></ul>";
			$("#menu").html(str);
			$("#menu").fixedMenu();
			
			this.menuEvent();
			this.hashListener();
		};
		g.prototype.menuEvent = function() {
			$(".langSelect").click(function() {
				var href = window.location.href;
				href = href.replace(/#.*$/,"");
				window.location = href + "#"+$(this).attr("id");
				window.location.reload(true);
			});
		};

		g.prototype.hashListener = function() {
			var f = this;
			window.onhashchange = function() {
				var hash = window.location.hash.toUpperCase();
				f.cookie.create("phylo-lang",hash,360);
				hash = hash.replace('#',"");

				var meta = document.getElementsByTagName("meta")[0];
				var html = document.getElementsByTagName("html")[0];
				if(hash == "HE") {
					meta.content = "text/html; charset=ISO-8859-8-I";	
					html.lang = "ISO-8859-8-I";
				} else if (hash == "PT") {
					meta.content = "text/html; charset=ISO-8859-1";
					html.lang = "ISO-8859-1";
				} else {
					meta.content = "text/html; charset=UTF8";
					html.lang = "UTF8";
				}
	
				
				$("#lang-ranking").attr("href","?pid=ranks#"+hash);
				$("#lang-result").attr("href","?pid=results#"+hash);


				if(document.getElementById(hash+"_transcript") == undefined) {
					var script = document.createElement("script");
					script.id = hash+"_transcript";
					script.src = "../lang/"+hash+".js";
					script.type = "text/javascript";
					document.getElementsByTagName("head")[0].appendChild(script);
					script.onload = function() {
						var avaliable = function() {
							if(window[hash+"script"] != undefined) {
								window.langOpt = hash;
								window.lang = window[hash+"script"].lang;
								device.start();
								built.init();
							} else {
								setTimeout(function() {
									avaliable();
								},50);
							}
							
						}
						avaliable();
					};
				} else {
					try {
						window.lang = window[hash+"script"].lang;
						device.start();
					} catch(e) {
					}
				}
			}
		};

		g.prototype.checkLang = function(list) {
			var hash = window.location.hash.toUpperCase();
			hash = hash.replace(/#/,'');
			for(var i=0;i<list.length;i++) {
				if(hash.search(list[i][1]) > -1) {
					window.lang = hash;
					break;
				}
			}
			if(window.lang == "") {
				if(window.location.href.search(/index\.html/) > -1) {
					if(this.cookie.read("phylo-lang") != null) {
						window.location.hash = this.cookie.read("phylo-lang");
						hash = this.cookie.read("phylo-lang");
					} else {
						this.cookie.create("phylo-lang","EN",360);
						window.location.hash = "EN";
						hash = "EN";
					}
				} else {
					window.location.hash = "EN";
					hash = "EN";
				}
			}
			
			var script = document.createElement("script");
			window.langOpt = hash;
			script.id = hash+"_transcript";
			script.src = "../lang/"+hash+".js";
			script.type = "text/javascript";
			document.getElementsByTagName("head")[0].appendChild(script);


			var meta = document.createElement("meta");
			var html = document.getElementsByTagName("html")[0];
			meta.httpEquiv = "Content-Type";
			
			if(hash == "HE") {
				meta.content = "text/html; charset=ISO-8859-8";	
				html.lang = "ISO-8859-8";
			} else if (hash == "PT") {
				meta.content = "text/html; charset=ISO-8859-1";
				html.lang = "ISO-8859-1";
			} else {
				meta.content = "text/html; charset=UTF8";
				html.lang = "UTF8";
			}
			document.getElementsByTagName("head")[0].appendChild(meta);


			$("#lang-ranking").attr("href","?pid=ranks#"+hash);
			$("#lang-result").attr("href","?pid=results#"+hash);

			
			script.onload = function() {
				var avaliable = function() {
					if(window[hash+"script"] != undefined) {
						window.langOpt = hash;
						window.lang = window[hash+"script"].lang;
						device.start();
						$(".menu-body a").each(function(){
							$(this).attr("href","#"+hash);
						});
						built.init();
					} else {
						setTimeout(function() {
							avaliable();
						},50);
					}
					
				}
				avaliable();
			};
		}
		
		var proto = g.prototype,
			attr = [
				["buildMenu",proto.buildMenu],
				["onLoadCheckLang",proto.checkLang],
				];
		common.exportSingleton("langManager",g,attr);
         })();

	$(document).ready(function() {
		var list = [ 
				["English","EN"],
				["Español","SP"],
				["Français", "FR"],
                                ["Pусский","RU"],
				["עברית","HE"],
				["Român","RO"],
				["Português","PT"],
				["中文 简体", "CNS"],
				["中文 繁體","CNT"],
			];
		window.lang = "";
		langManager.onLoadCheckLang(list);
		try {
			langManager.buildMenu(list);
		} catch(e) {
		}
	});
})();