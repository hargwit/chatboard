import mongo from '../mongo'

export default async () => {
  await mongo.connect(process.env.DATABASE_URI)
}
