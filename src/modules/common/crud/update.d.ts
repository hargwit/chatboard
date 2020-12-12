/**
 * A generic update interface.
 *
 * @template T The entity type being updated.
 */
export interface Update<T> {
    update: (id: string, t: T) => Promise<T>
}
