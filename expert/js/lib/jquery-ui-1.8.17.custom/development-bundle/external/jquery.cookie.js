jQuery.cookie=function(a,b,c){if(arguments.length>1&&(null===b||"object"!=typeof b)){if(c=jQuery.extend({},c),null===b&&(c.expires=-1),"number"==typeof c.expires){var d=c.expires,e=c.expires=new Date;e.setDate(e.getDate()+d)}return document.cookie=[encodeURIComponent(a),"=",c.raw?String(b):encodeURIComponent(String(b)),c.expires?"; expires="+c.expires.toUTCString():"",c.path?"; path="+c.path:"",c.domain?"; domain="+c.domain:"",c.secure?"; secure":""].join("")}c=b||{};var f,g=c.raw?function(a){return a}:decodeURIComponent;return(f=new RegExp("(?:^|; )"+encodeURIComponent(a)+"=([^;]*)").exec(document.cookie))?g(f[1]):null};