export interface Update<T> {
    update: (id: string, t: T) => Promise<T>
}
