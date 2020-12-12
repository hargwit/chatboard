/**
 * A generic delete interface.
 */
export interface Delete {
    /**
     * Deletes a `T` from the repository.
     */
    delete: (id: string) => Promise<void>
}
