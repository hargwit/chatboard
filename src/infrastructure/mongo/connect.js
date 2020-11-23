import * as inMem from './inmem'
import * as mongo from './mongo'

export const connect = async ({ uri, useInMem = false }) => {
    console.log(useInMem)

    if (useInMem) {
        await inMem.connect()
    } else {
        await mongo.connect(uri)
    }
}
