/**
 * A generic update interface.
 *
 * @template T The entity type being updated.
 */
export interface Update<T> {
    /**
     * Updates a `T` in the repository by its id.
     */
    update: (id: string, t: T) => Promise<T>
}
