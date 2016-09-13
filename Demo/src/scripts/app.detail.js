/**
 * Created by Administrator on 2016/9/13.
 */
var $ = require('./libs/jquery.js');

var common = require('./utils/common.utils.js');

var tplHeader = require('./tpls/Header.string');
var tplDetailBody = require('./tpls/detail.body.string');
var tplfooter = require('./tpls/footer.string');

$(function () {
    common.renderHtml(tplHeader+tplDetailBody+tplfooter);
});
