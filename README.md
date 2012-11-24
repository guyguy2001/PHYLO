PHYLO
=====
Aligning genomic data is a fundamental but difficult (NP-hard) problem in Biology. We developed Phylo, a casual video game which solutions are used to compare genomes.  In this project, we implemented a complete gaming framework and an API for human-computing video games in genomics.  Come help solve science through playing games!

I want to contribute!
=====
That is awesome! Just fork the project on github.  Create a topic branch, write some code and let us know!

I want to leave a feedback!
=====
We love to hear from you, you can post it here : https://github.com/McGill-CSB/PHYLO/issues

License
=====
PHYLO is released under the GNU License http://www.gnu.org/licenses/gpl.html<br>
Copyright Alfred Kam, McGill CSB

Getting Started
=====
- Master Branch contains the most recent experimental release
- feature/RNA Branch is used for PHYLO-RNA experimental release
- feature/integration Branch is used for integration testing 
- Production Branch contains the most recent stable release

We are using Model - View - Controller + Observer Design Pattern<br>
All versions contains an offline mode with dummy data for development<br> 

Before hacking away, a quick note on the dev environment<br>
If you are using chrome for development, you will need to execute this in your terminal : 

	open /Applications/Google\ Chrome.app --args --allow-file-access-from-files --allow-access-control-allow-origin

This will tackle the cross domain issue when working locally. 

This build includes options, it can be found at controller/options_template.js

	window.DEBUG //enables debug log
	window.guest //tell us its anoymous
	window.DEV.disableMenu //disables Menu
	window.DEV.disableSplash //disables Splash 
	window.DEV.disableMusic //disables the background music
	window.DEV.enableTabletMode //forces browsers to load tablet mode.

To enable options w/ .gitignore, make sure the .gitignore is under the directory of options_template.js and it contains the value of - options.js, now in terminal

	cd controller
	cp options_template.js options.js
	
Now you can edit options.js to modify the development options<br>
Note: Do not delete options_template.js

if options.js is tracked, ie - meaning git is tracking the changes, in terminal

	git rm --cache options.js
	git commit -a -m 'untrack options.js'

<b>Please refer to js/README.md for further instructions / explanation / crash course<b>

Router Setups
====

	index.html#!/<language>/play				<== PHYLO-DNA
	index.html#!/<langauge>/BETA/RNA			<== PHYLO-RNA
	index.html#!/<language>/play/puzzle/<puzzle id>		<== PHYLO-DNA autostart for specific puzzles
	
To Learn more can refer here : https://github.com/McGill-CSB/PHYLO/blob/master/js/controller/router.js

Hot deploy branches
=====
- [Master Branch] http://phylo.cs.mcgill.ca/master/index.html
- [feature/RNA Branch] http://phylo.cs.mcgill.ca/feature/RNA/index.html#!/EN/BETA/RNA
- If want your own hot deploy branch, you can create an issue here (https://github.com/McGill-CSB/PHYLO/issues) and assign it to @alfredkam

Devices Supported
=====
Current version supports all major browsers (except IE 6-8) and tablet browsers with screen size bigger than 1024px * 768px.  Tablets have their own custome UX <br>
For the Mobile Phone Support, please checkout either archive branch or http://phylo.cs.mcgill.ca/archive/js/F2011/index.shtml and it is no longer supported.  

Quick Crash Course
=====

First of all we are using model view controller + observer design patterns.<br>
We are using backbone js / require js / mustache to add structure to this web application.

The current folder structure:

	js/views	<=== responsible for inital html materials and listenes to model changes / actions / events
	js/models 	<=== responsible for data models
	js/controller 	<=== defines the site routes
	template 	<=== contains the html template
	
	DNA		<=== the base framework for the game, it depeneds on jquery (for now)
	RNA		<=== it extends of the DNA framework


Backbone is mainly used to add structure , http://backbonejs.org <br>
Backbone Router is used for defining the site url rules<br>
Require acts like php includes or include once and allows you to define the namespace , http://requirejs.org<br> 
Mustache is for templating , https://mustache.github.com<br>

	js/Boilerplate.js

This is a js template every one should start using this when writing heavy js codes, it helps solve namespace issues

Recommended Readings
=====
- Router<br>
http://backbonetutorials.com/what-is-a-router/ <br>

- Backbone + MVC<br>
http://backbonetutorials.com/organizing-backbone-using-modules/ <br>
http://coenraets.org/blog/2011/12/backbone-js-wine-cellar-tutorial-part-1-getting-started/ <br>
http://blog.andyet.com/2010/oct/29/building-a-single-page-app-with-backbonejs-undersc/<br>
http://backbonetutorials.com/what-is-a-model/<br>
