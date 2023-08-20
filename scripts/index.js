const iframe = document.getElementById('heroCarousel');
function adjustIframeHeight()
{
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
}
iframe.onload = adjustIframeHeight;
window.addEventListener('resize', adjustIframeHeight);