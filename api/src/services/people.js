export default {
  find: async (args) => console.log(`find by ${args}`),
  create: async (person) => console.log(`create ${person}`),
  update: async (newPerson) => console.log(`update ${newPerson}`),
}
