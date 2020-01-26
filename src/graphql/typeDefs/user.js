const typeDefs =`
    "Validar los roles del usuario"
    enum Roles {
        User
        Admin
    }
    type User{
        _id: ID!
        firstname: String!
        lastname: String!
        username: String!
        email: String!
        password: String!
        birthday: Date!
        rol: String!
        active: Boolean!
    }
    type Query {
       getUsers: [User!]
    }
    type Mutation{
        signUp(input: SignUp): User!
    }
    input SignUp {
        firstname: String!,
        lastname: String!,
        username: String!,
        email: String!,
        password: String,
        birthday: Date!
    }
`
export default typeDefs