/**
 * Created by Administrator on 2016/9/13.
 */
var $ = require('../libs/jquery');

module.exports = function () {
    $.ajax({
        url:'/api/getIndexList',
        type:'get',
        data:{},
        success:function (res) {
            var str = "";
            $.each(res.data,function (index,value) {
                str += "<li>"+value+"<li/>";
            });
            $(".body ul").html(str);
        }
    });
};