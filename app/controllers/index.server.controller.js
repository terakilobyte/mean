/*jslint node: true*/
exports.render = function(req, res) {
  res.send('index', {
    title: 'Hello World'});
};
