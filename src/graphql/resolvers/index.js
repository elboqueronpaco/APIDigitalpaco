import { join } from 'path'
import { fileLoader, mergeResolvers} from 'merge-graphql-schemas'

const ResolversArray = fileLoader(join(__dirname, './'))

export default mergeResolvers(ResolversArray, { all:true})