const express = require('express')
const path = require('path')
const compression = require('compression')

const app = express()

app.use(compression())

app.use(express.static('./build'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './build', 'index.html'))
})

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

const forceHTTPS = (app) => {
	app.use(function(req, res, next) {
		if (req.headers['x-forwarded-proto'] !== 'https') {
			return res.redirect(['https://', req.get('Host'), req.url].join(''));
		}
		return next();
	});
};

if(app.get('env') === 'production') {
  forceHTTPS(app)
}

module.exports = app
