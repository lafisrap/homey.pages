# Hugo University 大學 Template

The Hugo University Template is the start template for Invisible University websites. It's based on the Premium-Theme "Viality" of the wonderful [StartBootstrap themes](//https://wrapbootstrap.com). It is currenty not free! It costs $10. How you can pay see in the installation notes.


## Installation & First Steps

The Invisible University websites are design to be easy to handle, flexible and use current technologies. Though they all are widely used standard tools, they are not preinstalled on most systems. What we need is

- **git** for collaboration, easy publishing, version control,
- **hugo** for simple and fast enhancing and changing the website,
- recommended: **less** for advanced styling,
- recommended: **sublime** for text editing (if you have another favourite text editor, fine)

CAUTION! If you don't have these, than install them. [Here](https://github.com/invisible-university/template/wiki/Installation-of-Required-Programs-%E5%AE%89%E8%A3%9D) you find how. Do it before you go on here.
<a id="step1">

### STEP 1 一 Fork the template

Log into your GitHub account (get one [here](https://github.com) if you don't have one yet) and search for

	invisible template

You find `invisible-university/template`. Go for it. Then look for the `Fork` button in the right upper corner and hit it.

After some time you see a file overview named `Base Template for University Websites` and on top of it your github account name a slash and the word ´template`.
That is your IU website, already. Let's rename and publish it.

### STEP 2 二 Publish your Invisible University Website

Click on `Settings` somewhat to the upper right of the page, and look for `Repository Name`. Type in your name there and hit `Rename`.


You will be sent back to the file list.
Hit `Settings` again and scroll down to `GitHub Pages`.
As `Source` select `Master branch /docs folder` and hit `Save`.
That will do a little magic: It will take all files from the docs folder of your project ("repository" in git language) and publish it as a website. Your new web address you find three lines above the place where you just hit `Save`. Well, that is your IU website, published and working. Try it out.


Later you can even change to your own domain if you like.


### STEP 3 三 Get Ready to Change your Site

Open a command line terminal (Mac: Terminal, Windows: Power Shell). To get your new website to your local computer, type

	$ git clone --recursive https://github.com/[your GitHub name]/[your project name]    
	$ cd [your project name]

	(replace the information in brackets with your own, like: git clone --recursive https://github.com/lafisrap/iu-michael)

This may take some minute.

Now we can start changing it. Open the file `config.toml` with your favourite text editor, e.g. sublime_text.

	$ sublime_text .

On Mac open the editor from the LauchPad or Finder and click `File`/`Open`. Navigate to your project directory and open it.


Then select the file `config.toml` in the left window.

Five places to change some meta information

	1) Line 6: Change the Baseurl to the exact url of your site to:
		Baseurl = "https://[Your GitHub name].github.io/[Your project name]/"

	2) Line 8: Set in your name (That´s what appears in the browser tab title)
		Title = "大學 Invisible University - [Your Name]"

	3) Line 29: Same: Set in your name (For search engines)
		Title = "大學 Invisible University - [Your Name]"

	4) Line 30: Description of your site (also for search engines, you want to be found)

	5) Line 32: Change the author line (You are the author now!)

### STEP 4 四 A new Title, a new Background Image

In your editor open the `data` folder in your project folder, than the file `hero.yaml`

First change the title and the subtitle.

	Line 8: title: "[Your name]"
	Line 9: subtitle: "[What are you offering?]"

Save your file.
Then copy a new image file named `bg-header.jpg` into the folder `static/img/backgrounds`.
Preferably wider as 1600 pixel and not larger then 500 kbyte.
That's it.

### STEP 5 五 Publish your Changed Site

On the command line type

	$ ./publish "First commit"
		(windows: ./publish "First commit")

When asked type in your GitHub name and password, and a minute later, your website is ready. Open it.

GRATULATION! 感 激 不 尽! In this way you can change, add and take away a lot of things on your website. Just edit the `*.yaml` files in the `data` folder and then execute `./publish` on the command line.

Where you can go from here, you find in the [Wiki](https://github.com/invisible-university/template/wiki).
