/**
 * A generic read interface.
 *
 * @template T The entity type being read.
 */
export interface Read<T> {
    get: (id: string) => Promise<T>
    getAll: () => Promise<T[]>
}
