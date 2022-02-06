# [cookienotice.js.org](https://cookienotice.js.org "Get Your Cookie Notice")

## Simple cookie notice bar with [nice themes](https://cookienotice.js.org/themes "View Cookie Notice themes")

Website owners are enforced by law to show the cookie notice. Yes, nobody likes that notice but we have to show it.

Why slow down your website by loading it with one more heavy JavaScript library?

Use a lightweight solution - Cookie Notice was made for that!

## Setup / Installation

Add the code below before your your ```</head>``` closing tag:

```
<style>
#cookie-notice {
	display: none;
	position: fixed;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 999;
	max-width: 450px;
	margin: auto;
	padding: 0.5rem;
	border: 1px solid #eee;
	background-color: #fefefe;
	box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.05);
	font-family: Arial, Helvetica, sans-serif;
	line-height: 22px;
	font-size: 15px;
	text-align: center;
	color: #555;
}
.cookie-notice-more {
	margin: 0 0.25rem;
	text-decoration-style: dashed;
	color: inherit;
}
.cookie-notice-close {
	padding: 0 0.5rem;
	border: 1px solid #ddd;
	border-radius: 0.125rem;
	line-height: 20px;
	text-decoration: none;
	color: #888;
}
@media only screen and (min-width: 768px) {
	#cookie-notice {
		bottom: 1rem;
		border-radius: 0.25rem;
	}
	.cookie-notice-close {
		float: right;
	}
}
</style>
```

Add the HTML code block below before your ```</body>``` closing tag:

```
<div id="cookie-notice">
	We use cookies to deliver better experience.
	<a href="https://cookienotice.js.org/about-cookies" class="cookie-notice-more" target="_blank" rel="noopener">More info</a>
	<a href="javascript:void(0)" class="cookie-notice-close" onclick="closeCookieNotice()">OK</a>
</div>
```

Add the JavaScript code below in your document ```head`` or before your ```</body>``` closing tag:
```
<script>
function closeCookieNotice() {
	const nowDate = new Date();
	const expireDate = new Date(nowDate.setDate(nowDate.getDate() + 30)).toUTCString();
	document.cookie = "cookie_notice=0;path=/;expires=" + expireDate + ";SameSite=Lax;";
	document.getElementById("cookie-notice").style.display = "none";
};
document.addEventListener("DOMContentLoaded", function() {
	const cookie_notice = ('; ' + document.cookie).split('; cookie_notice=').pop().split(';')[0];
	if (cookie_notice !== "0") {
		document.getElementById("cookie-notice").style.display = "block";
	}
});
</script>
```

### Including files in your HTML document
Download the latest release and find the neccessary files located in the ```dist``` folder.

#### Setup your **Cookie Notice** now 👉 [cookienotice.js.org](https://cookienotice.js.org)
