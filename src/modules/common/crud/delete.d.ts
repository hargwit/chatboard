/**
 * A generic delete interface.
 */
export interface Delete {
    delete: (id: string) => Promise<void>
}
