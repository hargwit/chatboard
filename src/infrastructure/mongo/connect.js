import mongoose from 'mongoose'

const connect = async (uri) => {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  mongoose.connection
    .on('open', () => {
      console.log('Connected to database')
    })
    .on('error', (err) => {
      console.log(`Database connection error: ${err.message}`)
    })
}

export default { connect }
