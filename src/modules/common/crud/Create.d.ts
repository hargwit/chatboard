/**
 * A generic create interface.
 *
 * @template T The entity type being created.
 */
export interface Create<T> {
    /**
     * Creates a `T` in the repository.
     */
    create: (t: T) => Promise<T>
}
