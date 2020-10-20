import mongoose from 'mongoose'

// eslint-disable-next-line @typescript-eslint/ban-types
export const doc = (doc: mongoose.Document): Object => doc.toObject()
