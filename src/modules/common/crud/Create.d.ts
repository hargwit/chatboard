/**
 * A generic create interface.
 *
 * @template T The entity type being created.
 */
export interface Create<T> {
    create: (t: T) => Promise<T>
}
