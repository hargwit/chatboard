import mongoose from 'mongoose'
import Read from '../read'
import map from '../../map'

function mongoReadMixin<R, T>({
  model,
  resultMapper,
}: {
  model: mongoose.Model<T & mongoose.Document>
  resultMapper: (dto: T & mongoose.Document) => T
}): (repo: R) => R & Read<T> {
  return function (repo: R): R & Read<T> {
    return {
      ...repo,
      get: (id: string) =>
        model.findById(id).then(nullCheck(id)).then(resultMapper),
      getAll: () => model.find().then(map(resultMapper)),
    }
  }
}

function nullCheck<R>(id: string): (result: R | null) => R {
  return function (result: R | null): R {
    if (result === null) {
      throw new Error(`No entity found with id ${id}.`)
    }
    return result
  }
}

export default mongoReadMixin
