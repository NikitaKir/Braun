(function($){
    $(window).on("load",function(){
        $("a[rel='m_PageScroll2id']").mPageScroll2id();
        $.mPageScroll2id({
            offset:100
        });
       });
  })(jQuery);

function calс(){
    var typeSite = document.getElementById("typeSite").value;
    var designSite = document.getElementById("designSite").value;
    var adaptabilitySite = document.getElementById("adaptabilitySite").value;
    var cost = document.getElementById("cost");

    var total = (typeSite + designSite + adaptabilitySite);
    cost.innerHTML = total;
}



