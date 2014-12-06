/*jslint node: true*/
exports.render = function(req, res) {
  res.status(200).send('index', {
    title: 'Hello World!'});
};
