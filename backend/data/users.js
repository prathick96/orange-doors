import bcrypt from 'bcryptjs'

const users =[
    {
        name: 'Admin',
        email: 'admin@example.com',
        password: bcrypt.hashSync('abcd1234', 10),
        isAdmin: true
    },
    {
        name: 'Paddhu',
        email: 'paddhu@test.com',
        password: bcrypt.hashSync('abcd1234', 10)
    },
    {
        name: 'Dhivya',
        email: 'dhivya@test.com',
        password: bcrypt.hashSync('abcd1234', 10)
    }
]

export default users