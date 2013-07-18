
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('example.coffee', { title: 'Express2' });
};