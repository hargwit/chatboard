interface Read<T> {
  get: (id: string) => Promise<T>
  getAll: () => Promise<Array<T>>
}

export default Read
