export interface Read<T> {
    get: (id: string) => Promise<T>
    getAll: () => Promise<T[]>
}
