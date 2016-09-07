/**
 * Created by Administrator on 2016/9/5.
 */
//如果有该商品，则进行修改，如果没有就添加
$(document).ready(function () {
    $("#updatePBtn").attr({"disabled":"disabled"}).css({"background":"none","border-color":"red","cursor":"none"});
    $("#addPBtn").click(function () {
        //ajax;
        var ajaxurl = "../product/CreateUpdateProduct_get";
        var ajaxId = $("#productId").val();
        var ajaxDataJson = {
            id: ajaxId,
            name: $("#productName").val(),
            price: $("#productPrice").val(),
            imgsrc:$("#productImg").val(),
            describe:$("#productDescribe").val(),
        }

        var dataStr = JSON.stringify(ajaxDataJson); //将对象转换为string类型
        console.log(typeof(dataStr));   //string


        $.ajax({   //启动一个ajax
            url: ajaxurl,
            data: {
                id: ajaxId,
                datajson: dataStr
            },
            success:function (returnData) {
                if(returnData==1){
                    $("#tishi").text("添加成功！");
                }else{
                    $("#tishi").text("添加失败！");
                }
            }
        });
    })
});
