/*! Cookie Notice @ https://cookienotice.github.io */

// Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Clipboard.JS
new ClipboardJS('.btn-copy');

// Show Demo
function showCookieNoticeDemo() {
  document.getElementById("cookie-notice").style.display = "block";
}
