export interface Functor<A> {
  map<B>(transform: (value: A) => B): Functor<B>
}
