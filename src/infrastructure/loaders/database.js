import { connect } from '../mongo'

export default async () => {
    await connect({ uri: process.env.DATABASE_URI, useInMem: Boolean(process.env.IN_MEMORY_DATABASE) })
}
