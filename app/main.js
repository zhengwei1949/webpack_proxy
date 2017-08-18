const $ = require('jquery/dist/jquery.min.js');
const param = $.param({
  type: 1,
  start: 1,
  end: 10
});
$.ajax({
  url: '/test/canteen/rawMaterial/list?' + param,
  type: 'GET',
  success: () => {
    console.log('4343');
  }
});