import { join } from 'path'
import { fileLoader, mergeTypes } from 'merge-graphql-schemas'

const typeArrays = fileLoader(join(__dirname, './'))

export default mergeTypes(typeArrays, { all: true })