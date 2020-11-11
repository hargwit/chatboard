interface Update<T> {
  save: (update: T) => Promise<void>
}

export default Update
