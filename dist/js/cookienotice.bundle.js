/*! Cookie Notice v.1.0.1 @ https://cookienotice.js.org */

const cookie_notice_html = '<div id="cookie-notice" style="position:fixed;right:0;bottom:0;left:0;z-index:999;max-width:450px;margin:auto;padding:.5rem;border:1px solid #eee;background-color:#fefefe;box-shadow:0 0 .25rem rgba(0,0,0,.05);font-family:Arial,Helvetica,sans-serif;line-height:22px;font-size:15px;text-align:center;color:#555">We use cookies to deliver better experience. <a href="https://cookienotice.js.org/about-cookies" class="cookie-notice-more" style="margin:0 .25rem;color:inherit;text-decoration-style:dashed;" target="_blank" rel="noopener">More info</a> <a href="javascript:void(0)" class="cookie-notice-close" style="padding:0 .5rem;border:1px solid #ddd;border-radius:.125rem;line-height:20px;text-decoration:none;color:#888" onclick="closeCookieNotice()">OK</a><style>@media only screen and (min-width:768px){#cookie-notice{bottom:1rem!important;border-radius:.25rem}.cookie-notice-close{float:right}}</style></div>';

function closeCookieNotice() {
	const nowDate = new Date();
	const expireDate = new Date(nowDate.setDate(nowDate.getDate() + 30)).toUTCString();
	document.cookie = "cookie_notice=0;path=/;expires=" + expireDate + ";";
	document.getElementById("cookie-notice").remove();
};

document.addEventListener("DOMContentLoaded", function() {
	const cookie_notice = ('; ' + document.cookie).split('; cookie_notice=').pop().split(';')[0];
	const cookie_notice_id = document.getElementById("cookie-notice");
	if (cookie_notice !== "0" && cookie_notice_id == null) {
		document.body.insertAdjacentHTML("beforeend", cookie_notice_html);
	}
});
