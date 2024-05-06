import '../tr3nch.css';

function Tr3nchGuide(){
    return(
        <div className="text-white font-mono">
            <div className="topBar">
			    <h1 className="text-4xl">Tr3nch Setup Guide</h1>
			    <p>Written with love by Hannah (Zeglol1234)</p>
				<p>Ported to ReactJS by Katelyn (kxtzownsu)</p>
		    </div>
		    <div className="content">
		    	<div className="crop">
	    			<h1 className="text-4xl">Finding Sh0vel</h1>
	    			<hr />
	    			<p>
		    			First thing's first, we need to find an installable extension that is vulnerable to Sh0vel, the bug that Tr3nch relies on to do most of its functions.
			    		Head over to <b>chrome://extensions</b> and <a href="https://chromewebstore.google.com">the Chrome Webstore</a> while signed in. On chrome://extensions,
				    	if you see <b>GoGuardian</b> or <b>Equatio</b> anywhere, that will be the extension you use for Tr3nch. If you don't have either of those installed, and
					    your sysadmin does not let you install them from the chrome webstore, you'll have to do a bit more digging.<br /><br />

		    			If you already have GoGuardian or Equatio installed, you're good to go, proceed to Entering Skiovox. If not, you'll have to find an extension that is vulnerable
			    		yourself. Here's how to do that. First, if you haven't already, install an extension you want to check. Next, navigate to <b>chrome://extensions</b>, find the extension
				    	you installed, and click the <b>Details</b> button on its card. In permissions, if it DOES NOT HAVE "Read your browsing history" (it can't actually by itself, the permission is
					    extremely misleading), then the extension is guarunteed to not work with this. If it does, copy its ID (In the URL box, you should see something among the lines of <b>chrome://extensions/?id=hegcdakijhbjghakcjaljmilmkcgekkd</b>. 
    					<b>The characters after "?id=" will be different for you.</b> Copy the characters after "?id=". In the example I provided, the characters you will copy are "hegcdakijhbjghakcjaljmilmkcgekkd"),
	    				open a new tab, and go to <b>chrome-extension://extension_id_here/manifest.json</b> (in the example I provided, you would go to chrome-extension://hegcdakijhbjghakcjaljmilmkcgekkd/manifest.json).<br /><br />

		    			On the manifest, press <b>CTRL + F</b> to open a search prompt. Use this to see if the following terms are present (without quotes):<br /><br />
			    		- "activeTab"<br />
				    	- "unsafe-eval" (NOT wasm-unsafe-eval, that WILL NOT WORK!)<br />
					    - "browser_action" or "browserAction"<br />
					    <br /><br />
					    If all of those are present, great! That extension is vulnerable to Sh0vel! Use this extension when continuing with the guide.<br /><br />
				    </p>
    				<h1 className="text-4xl">Entering Skiovox</h1>
	    			<hr />
		    		<p>
			    		First, when signed in, navigate to <b>chrome://version</b> while signed in to any account.
				    	If this is blocked, find some other way to figure out your chrome version.<br /><br />

					The first number after directly after <b>"Google Chrome:"</b> is what matters.
					This number should be anywhere between 112 and 120. If it is lower than 112,
					this will still work, but the method for doing so will differ slightly.<br /><br />

					If your number is inbetween or equal to those 2, follow the instructions <a href="https://skiovox.com">here</a>.
					If your number is 119 or 120, there are alternative instructions in <a href="https://discord.gg/unblock">The Titanium Network discord server</a>.<br /><br />

					Once you are in Skiovox, proceed to Using Skiovox Breakout.
				</p>
				<h1 className="text-4xl">Using Skiovox Breakout</h1>
				<hr />
				<p>
					Head over to <a href="https://github.com/MunyDev/skiovox-breakout">The Skiovox Breakout Repo</a> and click the <b>Green "Code" Button</b>. Press <b>Download Zip</b>.
					If prompted to, save it somewhere in your downloads folder. If nothing shows up, that's normal, continue anyway.<br /><br />

					Navigate to <b>chrome://extensions</b> in a new tab, make sure the <b>Developer Mode Switch</b> in the top right of the page is enabled.
					Press the button in the top labelled <b>Load Unpacked</b>. An upload prompt should show. Right click the zip file with <b>Skiovox Breakout</b>
					in the name, select <b>Extract All</b>. Open the newly extracted skiovox breakout folder, then the folder <b>skiovox-breakout-main</b>.
					Press the <b>Open</b> button in the bottem right.<br /><br />

					Open the url <b>chrome-untrusted://crosh</b> in a new tab. In the newly opened terminal, paste this code: 
					<code>vmc create-extra-disk --size=1 /home/chronos/user/MyFiles/Downloads/opener.txt</code><br />
					And press enter. The command should should report "A raw disk is created at /home/chronos/user/MyFiles/Downloads/opener.txt."<br /><br />

					Open a new tab, click the folder icon in the bottom right (if it isn't there, you need to follow step 3 <a href="https://skiovox.com/">In the skiovox setup guide</a>).
					The file manager should open. Open the Downloads folder and double-click the file <b>opener.txt</b>. A new window should open with a blank page, open a new tab and close
					the blank page. This is your school window.<br /><br />

					<b>On the school window,</b> navigate to <b>chrome://extensions</b> in a new tab. Find the extension you determined was vulnerable to Sh0vel in step 1, and
					click its details page. In the URL box, you should see something among the lines of <b>chrome://extensions/?id=hegcdakijhbjghakcjaljmilmkcgekkd</b>. <b>The characters
					after "?id=" will be different for you.</b> Copy the characters after "?id=" (In the example I provided, the characters you will copy are "hegcdakijhbjghakcjaljmilmkcgekkd").<br /><br />
					
					Without closing the school window, navigate back to the unblocked Skiovox window. Open the puzzle-piece icon in the top right, and select the extension <b>Skiovox Breakout</b>.
					In the box that contains "alert(1);", remove <b>ALL TEXT</b> from the box. In the box labelled "Place your extension ID here", paste the characters you copied from the school
					window into the box. Finally, click "Start Injection".<br /><br />

					If all goes well, you should have recieved a prompt stating <b>Skiovox Breakout is debugging this browser</b>. Do NOT press cancel OR the X! Navigate back to the school window,
					it should still be on the details page you opened. Find a switch anywhere on the page, the most common switch is <b>Allow Access to File URLs</b>. Click it once or twice, and
					an alert box should appear. It will inform you to save a page in your bookmarks. To do this, copy the URL it informed you to save and close the prompt. Open a new tab in your
					school window, and press the star icon in the top right. A bookmark should be created in the top left. Right click it, and select <b>Edit</b>. Change the name to whatever you like,
					delete everything in the URL box, and paste the URL you copied in its place. Save the bookmark, and you're fully set up.<br /><br />
				</p>
				<h1 className="text-4xl">Injecting/Updating Tr3nch</h1>
				<hr />
				<p>
					If you're still in skiovox, sign out of the kiosk session and log in normally. Find the bookmark you created, right click it, and select <b>Open in new tab</b>. A page should open
					with a textbox and a button that says "Evaluate" on it. Using whatever method is convenient to you (<a href="https://discord.gg/unblock">The Titanium Network discord server</a> again has a lot of tools to do this),
					navigate to <a href="https://github.com/Whelement/Tr3nch">The Source Code</a> in an unblocked tab, open the file tr3nch.js, and copy its entire contents.<br /><br />

					Next, navigate back to the page you opened with the textbox and button. Click the textbox, and paste the code you copied. Press the evaluate button. 
					A new page should open. Bookmark this newly opened page, save it as named "Tr3nch Injector", or anything to help you remember what it is.<br /><br />

					Once you've done this Tr3nch is now set up on your extension. Make sure that if the extension ever gets reset, disabled, or the computer signs out or restarts, you'll need to re-inject Tr3nch.<br /><br />

					To do this, simply right-click the <b>Tr3nch injector bookmark</b> (NOT the skiovox breakout bookmark), and select "Open in new tab". Once you've done that, Tr3nch has been re-injected and you can
					close the tab that was opened.<br /><br /><br />

					To ensure things are stable and you have access to as many features as possible, you'll want to occasionally update Tr3nch. To do this, simply redo the steps you did in the start of this section (copying tr3nch.js's contents and past that)
					and Tr3nch should be updated for you.<br /><br />
				</p>
				<h1 className="text-4xl">Loading the Tr3nch Menu</h1>
				<hr />
				<p>
					To load the Tr3nch menu with its full capabilities, you need to enable a specific flag first. To do this, navigate to <b>chrome://flags</b> in a new tab, preferably after you've loaded Tr3nch into your extension.
					A new window should appear. In the search bar in the top, search for "extensions-on-chrome-urls". A single flag should appear, click the box set it to enabled. If prompted to, click the restart button.<br /><br />

					Once the flag has been set, do not disable it. You will only have to enable it once for this to work persistently. Now, you have some options. There are a lot of pages you can choose to run Tr3nch on, each with
					their own capabilities. Some of the most powerful URLs are <b>chrome://os-settings, chrome://setttings, chrome://extensions, chrome://chrome-signin, chrome://inspect, chrome://file-manager, chrome://network, and chrome://oobe</b> (chrome://oobe most likely
					won't work for you, if it doesn't do not make an issue, this is not fixable!).<br /><br />

					Open of those URLs in a new tab, and while viewing it, click the icon of the extension you injected Tr3nch into (if it isn't in the top right, check the puzzle piece icon). If done successfully, Tr3nch should load in instantly.<br /><br />
					Read this, this is important! If the URL you were trying to open opens a new window instead of opening as a tab (chrome://os-settings and chrome://file-manager beng the primary examples), you will first need to load Tr3nch on any normal url, scroll down
					to the <b>Quick Navigation</b> section, and select the url you were trying to open, and then it will open as a normal tab. From there, continue with loading Tr3nch normally. <br /><br /><br />

					Once you're in the Tr3nch menu, there are a large number of different options, but what is shown depends on what page you're viewing. No page will show all of the possibilities, but some of the things it can do are:<br /><br />
					- Run code on the current extension, content script, or chrome url itself<br />
					- Disabling/Loopkilling managed extensions<br />
					- Restart, Sign Out, or Powerwash in the click of a button<br />
					- Add user gmails or profiles to your school account<br />
					- Change the network state<br />
					- Open an unblocked webview tab invisible to most filters<br />
					- (Sometimes) Open devtools on any page or extension<br />
					- Change site settings for any page<br />
					- Update the OS and pause/resume automatic updating<br />
					<br /><br />
					And a bit more. 
				</p>
				<br /><br />
				<p>If you made it this far, thanks for taking the time to read over this! Consider joining the <a href="https://discord.com/invite/Vs6CKGS475">Whelement Discord</a>, we'd love to have you here!</p>
			</div>
		</div>
                <div className="credits">
			        <h1 className="text-4xl">Credits</h1>
		            <p>Developed and brought to you by Whelement.</p>
			        <p>
			    	    Zeglol1234: The idea, main developer<br />
				        Writable: Skiovox Breakout implementations (Not affiliated with this project directly)<br />
				        Bypassi: Add gmails exploit (Not affiliated with this project directly)<br />
				        Notboeing747: Misc development and testing<br />
    			    	Kxtz: Misc development and testing<br />
	    		    	Archimax: GUI inspiration<br />
		    	    	Kelsea: The logo<br />
			        	Katie: Testing<br />
				        The rest of Whelement: Mental support<br />
		    	    </p>
		        </div>
        </div>
    );
};

export default Tr3nchGuide;