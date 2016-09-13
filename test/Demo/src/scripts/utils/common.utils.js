var $ = require('../libs/jquery');
var Common = {
	renderHtml:function (str) {
		$('body').prepend(str);
	}
};
module.exports = Common;