import * as inMem from './inmem'
import * as mongo from './mongo'

export const connect = async ({ uri, useInMem = false }) => {
    if (useInMem) {
        console.log('Using in memory database')
        await inMem.connect()
    } else {
        await mongo.connect(uri)
    }
}
