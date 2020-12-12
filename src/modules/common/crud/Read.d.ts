/**
 * A generic read interface.
 *
 * @template T The entity type being read.
 */
export interface Read<T> {
    /**
     * Gets a `T` from the repository by its id.
     */
    get: (id: string) => Promise<T>
    /**
     * Gets all of the `T`s from the repository.
     */
    getAll: () => Promise<T[]>
}
