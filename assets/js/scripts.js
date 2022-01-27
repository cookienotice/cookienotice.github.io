/*! Cookie Notice @ https://cookienotice.js.org */

// Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Clipboard.JS
new ClipboardJS('.btn-copy');

// Copy button
function showCopiedText(e) {
  var button_copy = document.getElementById(e);
  button_copy.innerHTML = "Copied";
  setTimeout(function() {
    button_copy.innerHTML = "Copy";
  }, 3000);
}

// Show Demo
function showCookieNoticeDemo() {
  document.getElementById("cookie-notice").style.display = "block";
}
