function map<A, B>(transform: (value: A) => B): (array: Array<A>) => Array<B> {
  return function (array: Array<A>): Array<B> {
    return array.map(transform)
  }
}

export { map }
