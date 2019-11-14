function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);

    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}

function check() {
    var pattern = /^\.\D{1,10}/;
    var suffix = $("#id_suffix").val();
    if(pattern.test(suffix) || suffix == '') {
        return true
    } else {
        alert("文件后缀格式不正确");
        return false;
    }
}

$(document).ready(function () {
    var selected = $("#id_style option:selected");
    var style = getQueryString("style");
    if (style != null && style != selected) {
        $('#id_style').val(style);
    }

    $("#id_style").change(function () {
        var selected = $(this).children('option:selected').val();
        var type = getQueryString("type");
        var suffix = getQueryString("suffix");
        var i = window.location.href.indexOf('?');
        if (i != -1) {
            base = window.location.href.substr(0, i)
        }
        base += "?type=" + type;
        base += "&style=" + selected;
        base += "&suffix=" + suffix;
        window.location.href = base;
    });
});

