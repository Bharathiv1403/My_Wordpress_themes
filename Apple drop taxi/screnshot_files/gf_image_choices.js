var imageChoices=imageChoices||{};!function(e){imageChoices.cssClasses={selected:"image-choices-choice-selected",hover:"image-choices-choice-hover",focus:"image-choices-choice-focus"},imageChoices.getFormMarkupVersion=function(i){var o,a="",s=window.hasOwnProperty("gf_legacy")&&window.gf_legacy.hasOwnProperty("is_legacy")&&""===window.gf_legacy.is_legacy.toString()?2:1,c=!!window.hasOwnProperty("gf_legacy_multi")&&window.gf_legacy_multi;return"undefined"==typeof i||"string"==typeof i&&""===i||"number"==typeof i&&i<=0?(o=e('form[id^="gform_"]:first').attr("id"),a=window.hasOwnProperty("gf_get_form_id_by_html_id")?window.gf_get_form_id_by_html_id(o):o.replace("gform_","")):i instanceof jQuery?(o=i.attr("id"),a=window.hasOwnProperty("gf_get_form_id_by_html_id")?window.gf_get_form_id_by_html_id(o):o.replace("gform_","")):"string"!=typeof i&&"number"!=typeof i||(a=window.hasOwnProperty("gf_get_form_id_by_html_id")?window.gf_get_form_id_by_html_id(i.toString()):i.toString().replace("gform_","")),""!==a&&c!==!1&&c.hasOwnProperty(a)?""===c[a]?2:1:s},imageChoices.$fieldChoices=function(e){if("undefined"==typeof e||e instanceof jQuery==!1)return[];var i='.ginput_container .gfield_radio div[class*="gchoice"], .ginput_container .gfield_checkbox div[class*="gchoice"]:not(.gchoice_select_all)';return 1===imageChoices.getFormMarkupVersion(e.closest("form"))&&(i=".ginput_container .gfield_radio li, .ginput_container .gfield_checkbox li:not(.gchoice_select_all)"),e.find(i)},imageChoices.SelectedFields=function(i){var o=e("undefined"!=typeof i&&""!==i?"#gform_"+i:".gform_wrapper form");imageChoices.$fieldChoices(o.find(".image-choices-field")).find("input:checked").each(function(){var i=e(this),o=1===imageChoices.getFormMarkupVersion(i.closest("form"))?i.closest("li"):i.closest('div[class*="gchoice"]');o.addClass(imageChoices.cssClasses.selected)})},imageChoices.InitLightbox=function(i){var o=e("undefined"!=typeof i&&""!==i?"#gform_"+i:".gform_wrapper form");o.find(".image-choices-field.image-choices-use-lightbox").each(function(){imageChoicesVars.hasOwnProperty("elementorCompat")&&"elementor"!==imageChoicesVars.elementorCompat&&e(this).find(".image-choices-lightbox-btn").jetslothLightbox({captionType:"data",captionsData:"caption"})})},imageChoices.onChoiceKeyPress=function(i){var o=9,a=32,s=e(i.target),c=s.closest(".gfield");if(i.keyCode===a&&(s.is(":checkbox")||s.is(":radio")))s.is(":radio")&&!s.is(":checked")?i.preventDefault():s.is(":checkbox")&&(i.preventDefault(),i.stopImmediatePropagation());else if(i.keyCode===o&&c.hasClass("image-choices-field")){var t=i.shiftKey?"previous":"next",l=s.closest(".image-choices-choice");"next"===t?l.is(":last-child")||(i.preventDefault(),l.next(".image-choices-choice").find("> input").focus()):"previous"===t&&(l.is(":first-child")||(i.preventDefault(),l.prev(".image-choices-choice").find("> input").focus()))}},imageChoices.onChoicesSelectAllClick=function(i){var o=e(this),a=o.closest(".gfield"),s=o.is(":checked")?a.find(".image-choices-choice input:checked"):a.find(".image-choices-choice input:not(:checked)");s.length&&s.each(function(i,o){var a=e(o);imageChoices.onChoiceLabelClick(a.next("label"))})},imageChoices.onChoiceLabelClick=function(e){var i=1===imageChoices.getFormMarkupVersion(e.closest("form"))?e.closest("li"):e.closest('div[class*="gchoice"]'),o=i.closest(".gfield_checkbox, .gfield_radio").first(),a=i.find("input");i.hasClass("image-choices-choice-other")&&i.find("input:text").focus(),o.hasClass("gfield_radio")?(o.find("."+imageChoices.cssClasses.selected).not(i).removeClass(imageChoices.cssClasses.selected).find("input").prop("checked",!1),i.addClass(imageChoices.cssClasses.selected)):o.hasClass("gfield_checkbox")&&(a.is(":checked")?i.addClass(imageChoices.cssClasses.selected):i.removeClass(imageChoices.cssClasses.selected))},imageChoices.SetUpFields=function(i){e(".entry-details .detail-view .image-choices-choice-image-wrap").each(function(i){var o=e(this),a=o.closest(".detail-view");a.addClass("image-choices-field image-choices-show-labels")});var o=e("undefined"!=typeof i&&""!==i?"#gform_"+i:".gform_wrapper form");!o.length&&e(".gform_variation_wrapper").length&&(o=e(".gform_variation_wrapper"));var a=imageChoices.$fieldChoices(o.find(".image-choices-field"));a.length>0&&(a.each(function(){var i=e(this);if(i.hasClass("gchoice_select_all"))return i.find("input").on("click",imageChoices.onChoicesSelectAllClick),!0;i.addClass("image-choices-choice");var o=i.data("init");if(o!==!0)if(i.data("init",!0),i.find("label").hover(function(i){var o=e(this);if(o.find("input").is(":disabled"))return!1;var a=1===imageChoices.getFormMarkupVersion(o.closest("form"))?o.closest("li"):o.closest('div[class*="gchoice"]');a.addClass(imageChoices.cssClasses.hover)},function(i){var o=e(this);if(o.find("input").is(":disabled"))return!1;var a=1===imageChoices.getFormMarkupVersion(o.closest("form"))?o.closest("li"):o.closest('div[class*="gchoice"]');a.removeClass(imageChoices.cssClasses.hover)}),i.find("input").focus(function(){var i=e(this),o=1===imageChoices.getFormMarkupVersion(i.closest("form"))?i.closest("li"):i.closest('div[class*="gchoice"]');o.addClass(imageChoices.cssClasses.focus)}).blur(function(){var i=e(this),o=1===imageChoices.getFormMarkupVersion(i.closest("form"))?i.closest("li"):i.closest('div[class*="gchoice"]');o.removeClass(imageChoices.cssClasses.focus)}),i.find('input[value="gf_other_choice"]').length){i.addClass("image-choices-choice-other");var a=i.find("input:text").val();i.append(["<label>",'<span class="image-choices-choice-image-wrap" style="background-image:none;"></span>','<span class="image-choices-choice-text">'+a+"</span>","</label>"].join("")),i.click(function(){imageChoices.onChoiceLabelClick(e(this).find("label"))})}else{i.find("input").click(function(){var i=e(this),o=1===imageChoices.getFormMarkupVersion(i.closest("form"))?i.siblings("label"):i.closest(".image-choices-choice").find("label");imageChoices.onChoiceLabelClick(o)});var s=i.closest(".image-choices-field");if(s.hasClass("image-choices-use-lightbox")&&!i.find(".image-choices-lightbox-btn").length){var c=s.attr("id"),t=i.find(".image-choices-choice-text").html(),l=(t+"").replace(/[\\"']/g,"\\$&").replace(/\u0000/g,"\\0"),n=i.find(".image-choices-choice-image").attr("src"),r=i.find(".image-choices-choice-image").data("lightbox-src");if("undefined"!=typeof r&&""!==r||(r=n),""!==r){var g=imageChoicesVars.hasOwnProperty("elementorCompat")&&"elementor"!==imageChoicesVars.elementorCompat?'data-elementor-open-lightbox="no"':"",h=e('<a href="'+r+'" class="image-choices-lightbox-btn" '+g+' rel="'+c+'"><i></i></a>');h.data("caption",l),i.prepend(h)}}}}),setTimeout(function(){imageChoices.SelectedFields(i),imageChoices.InitLightbox(i)},100))},window.imageChoices_SetUpFields=imageChoices.SetUpFields,imageChoices.ConditionalLogic=function(i){var o=e("undefined"!=typeof i&&""!==i?"#gform_"+i:".gform_wrapper form"),a=o.find(".image-choices-field");a.length&&a.each(function(){var i=e(this);i.is(":hidden")&&i.find(".image-choices-choice").removeClass(imageChoices.cssClasses.selected+" "+imageChoices.cssClasses.hover+" "+imageChoices.cssClasses.focus)})},e(document).bind("gform_post_render",function(i,o,a){window.gformGetOptionLabel=imageChoices.gformGetOptionLabel,imageChoices.SetUpFields(o),setTimeout(function(){e("html").addClass("gf-image-choices-loaded gf-image-choices-styles-loaded")},500);var s=e("#gform_"+o),c="undefined"!=typeof a?s.find("#gform_page_"+o+"_"+a):[],t=c.length?c.find(".image-choices-field .jetsloth-lazy"):s.find(".image-choices-field .jetsloth-lazy");t.each(function(){imageChoices.observer.observe(this)})}),e(document).bind("gform_post_conditional_logic",function(e,i,o,a){imageChoices.ConditionalLogic(i),imageChoices.SelectedFields(i)}),imageChoices.gformGetOptionLabel=function(i,o,a,s,c){if(i=e(i),i.closest(".gfield").hasClass("color-picker-field")&&"function"==typeof window.colorPicker_gformGetOptionLabel)return window.colorPicker_gformGetOptionLabel(i,o,a,s,c);var t=1===imageChoices.getFormMarkupVersion(s)?i.closest("li"):i.closest('div[class*="gchoice"]'),l=t.index(),n=gformGetPrice(o),r=i.attr("price"),g=i.html().replace(/<span(.*)<\/span>/i,"").replace(r,""),h=gformGetPriceDifference(a,n);h=0==gformToNumber(h)?"":" "+h,i.attr("price",h);var d="option"==i[0].tagName.toLowerCase()?" "+h:"<span class='ginput_price'>"+h+"</span>",f=g+d;return window.gform_format_option_label&&(f=gform_format_option_label(f,g,d,a,n,s,c,l)),f},window.imageChoices_gformGetOptionLabel=imageChoices.gformGetOptionLabel,window.gformGetOptionLabel=imageChoices.gformGetOptionLabel,imageChoices.gform_format_option_label=function(i,o,a,s,c,t,l,n){var r=[i],g=e("#gform_"+t+" .gfield#field_"+t+"_"+l);if(g.length&&g.hasClass("image-choices-field")){var h=1===imageChoices.getFormMarkupVersion(t)?g.find(".ginput_container li"):g.find('div[class*="gchoice"]'),d="undefined"!=typeof n&&n>=0?h.eq(n):h,f="undefined"!=typeof g.data("jetsloth-lazy-loaded")?g.data("jetsloth-lazy-loaded"):[];d.each(function(){var i=e(this),h=i.find("label"),d=(i.find("input"),"undefined"!=typeof h.data("label-text")?h.data("label-text"):""),m=h.data("img"),p=h.data("lightbox-src"),_=d;if("undefined"!=typeof o&&""!==o||""===_||(o=_),a===o&&(a=""),""!==a&&""===e(a).text()){var u=e("<div>"+a+"</div>").find(".ginput_price");u.length&&(a=u.append("+"+gformFormatMoney(c,!0)).html())}var C=g.hasClass("has-jetsloth-lazy"),b=C&&e.inArray(n,f)===-1,v=['<span class="image-choices-choice-image-wrap" style="background-image:url('+m+');">','<img src="'+m+'" class="image-choices-choice-image" alt="" data-lightbox-src="'+p+'" />',"</span>"].join("");if(b&&(v=['<span class="image-choices-choice-image-wrap jetsloth-lazy" data-lazy-bg="'+m+'">','<img src="" data-lazy-src="'+m+'" class="image-choices-choice-image jetsloth-lazy" alt="" data-lightbox-src="'+p+'" />',"</span>"].join("")),r=[v,'<span class="image-choices-choice-text">'+jetsloth_apply_filters("gfic_choice_text",o,s,c,t,l,n)+"</span>",'<span class="image-choices-choice-price">'+jetsloth_apply_filters("gfic_choice_price",a,s,c,t,l,n)+"</span>"],g.hasClass("image-choices-use-lightbox")&&i.find(".image-choices-lightbox-btn").length){var y=(o+"").replace(/[\\"']/g,"\\$&").replace(/\u0000/g,"\\0"),w=m,k=p;"undefined"!=typeof k&&""!==k||(k=w),""!==k&&i.find(".image-choices-lightbox-btn").attr("href",k).data("caption",y).attr("rel",l)}b&&setTimeout(function(){i.find(".jetsloth-lazy").each(function(){imageChoices.observer.observe(this)})},100)})}return jetsloth_apply_filters("gfic_choice_html",r.join(""),o,a,s,c,t,l,n)},window.imageChoices_gform_format_option_label=imageChoices.gform_format_option_label,window.gform_format_option_label=function(i,o,a,s,c,t,l,n){var r=e("#field_"+t+"_"+l);return r.length&&r.hasClass("color-picker-field")&&"function"==typeof window.colorPicker_gform_format_option_label?window.colorPicker_gform_format_option_label(i,o,a,s,c,t,l,n):imageChoices.gform_format_option_label(i,o,a,s,c,t,l,n)},imageChoices.onImageLoaded=function(i){var o=e(i);o.addClass("jetsloth-lazy-loaded");var a=o.closest(".gfield");if(a.length){var s=o.closest("li").index(),c="undefined"!=typeof a.data("jetsloth-lazy-loaded")?a.data("jetsloth-lazy-loaded"):[];c.push(s),a.data("jetsloth-lazy-loaded",c)}},imageChoices.loadImage=function(i){var o=e(i);if("undefined"!=typeof o.data("lazy-bg")&&""!==o.data("lazy-bg")){var a=new Image;a.onload=function(){o.css("background-image","url("+o.data("lazy-bg")+")"),imageChoices.onImageLoaded(o)},a.src=o.data("lazy-bg")}else"undefined"!=typeof o.data("lazy-src")&&""!==o.data("lazy-src")&&(o.on("load",function(){imageChoices.onImageLoaded(o)}),o.attr("src",o.data("lazy-src")))},imageChoices.lazyLoad=function(i){e.each(i,function(e,i){i.intersectionRatio>0&&(imageChoices.observer.unobserve(i.target),imageChoices.loadImage(i.target))})};var i={rootMargin:jetsloth_apply_filters("gfic_lazy_root_margin","100px"),threshold:jetsloth_apply_filters("gfic_lazy_threshold",1)};imageChoices.observer=new IntersectionObserver(imageChoices.lazyLoad,i)}(jQuery);