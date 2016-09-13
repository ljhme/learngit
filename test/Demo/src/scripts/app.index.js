var $ = require('./libs/jquery');

var common = require('./utils/common.utils');
var tplHeader = require('./tpls/Header.string');
var tplIndexBody = require('./tpls/index.body.string');
var tplfooter = require('./tpls/footer.string');

var list = require('./moudles/index');
$(function () {
    common.renderHtml(tplHeader+tplIndexBody+tplfooter);
    list();
});