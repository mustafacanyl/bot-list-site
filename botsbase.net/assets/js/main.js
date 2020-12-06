$.fn.multiSelect=function(e){var t=$.extend({label:"Select"},e),l=this,i=l.children("select"),s=l.children("input"),n=$("<div></div>").addClass("multiselect-wrap"),a=$("<div></div>").addClass("multiselect-selected").text(t.label),d=$("<div></div>").addClass("multiselect-list").css("display","none");return i.find("option").each(function(){var e=$(this),t=$("<div></div>").text(e.text()).attr("data-val",e.val());t.appendTo(d),t.on("click",function(){$(this).toggleClass("selected-option"),a.empty(),selectedVal=[],d.find(".selected-option").each(function(){var e=$(this);$("<span></span>").text(e.text()).appendTo(a),selectedVal.push(e.attr("data-val"))}),s.length>0&&s.val(selectedVal.join(","))})}),a.on("click",function(){d.hasClass("multi-list-opened")?d.slideUp(function(){d.removeClass("multi-list-opened")}):d.slideDown(function(){d.addClass("multi-list-opened")})}),n.append(a).append(d),l.append(n),i.hide(),$("html").click(function(e){$(e.target).is(l)||$(e.target).is(d)||$(e.target).is(a)||$(e.target).is(n)||$(e.target).is(d.children())||$(e.target).is(a.children())||d.hasClass("multi-list-opened")&&(console.log("html event"),d.slideUp(function(){d.removeClass("multi-list-opened")}))}),this},$(function(){$("#tags").multiSelect({label:"Select bot tags..."})});
function notify(msg,type) {
    if (type == "error") {
        $('.notifys').html(`
        <div class="notify animate__animated animate__zoomIn hover:shadow-2xl hover:opacity-75 shadow-xl">
            <div class="notify-title font-proxima">
            <i class="fad fa-times-circle notify-icon text-red-500 mr-2"></i>
            Opss...
            </div>
            <p class="text-gray-500">` + msg + `</p>
        </div>
        `);
    }
    if (type == "success") {
        $('.notifys').html(`
        <div class="notify animate__animated animate__zoomIn hover:shadow-2xl hover:opacity-75 shadow-xl">
            <div class="notify-title font-proxima">
            <i class="fad fa-check-circle notify-icon text-green-500 mr-2"></i>
            Great!
            </div>
            <p class="text-gray-500">` + msg + `</p>
        </div>
        `);
    }
    setTimeout(function () {
        $('.notify').addClass('animate__zoomOut');
        setTimeout(function () {$('.notify').hide();},1200);
    },4000);
}
$('.notify').click(function () {
        $('.notify').addClass('animate__zoomOut');
        setTimeout(function () {$('.notify').hide();},1200);
});
function spinner(id) {
    $('#' + id).html(`
    <svg class="animate-spin mx-auto h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    `);
}