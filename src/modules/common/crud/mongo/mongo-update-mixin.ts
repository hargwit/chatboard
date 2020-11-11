import mongoose from 'mongoose'
import Update from '../update'

function mongoUpdateMixin<R, T>({
  model,
}: {
  model: mongoose.Model<T & mongoose.Document>
}): (repo: R) => R & Update<T> {
  return function (repo: R): R & Update<T> {
    return {
      ...repo,
      save: (update: T) => model.update(update, update).exec(),
    }
  }
}

export default mongoUpdateMixin
