const path = require('path')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const graphqlHTTP = require('express-graphql')

mongoose
  .connect('mongodb://localhost:27017/graph-demo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('db启动成功'))
  .catch(e => console.log(e))

mongoose.set('useFindAndModify', false)

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/public', express.static(path.join(__dirname, 'public')))

app.use('/', require('./routes/index'))
app.use('/admin', require('./routes/admin'))

app.use(
  '/graphql',
  graphqlHTTP({
    schema: require('./graphql/bookSchema'),
    rootValue: global,
    graphiql: true
  })
)

// error handler
app.use(function(err, req, res, next) {
  res.send('404')
})

app.listen(3001, () => {
  console.log(`app is running at http://localhost:3001`)
})
