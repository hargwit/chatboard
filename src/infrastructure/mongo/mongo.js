import mongoose from 'mongoose'

export const connect = async (uri) => {
    await mongoose
        .connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log('Connected to Mongo'))
}
