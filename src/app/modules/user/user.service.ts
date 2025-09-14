import { Prisma, User } from "@prisma/client"
import { prisma } from "../../config/db"






const createUser = async (payload: Prisma.UserCreateInput): Promise<User> => {
    const createdUser = await prisma.user.create({ data: payload })
    return createdUser
}



const getAllUsers = async () => {
    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            picture: true,
            status: true,
            createdAt: true,
            updatedAt: true,
            Post: true
        }
    });

    return users
}



const getUserById = async (id: number) => {
    const user = await prisma.user.findUnique({
        where: {
            id
        },
        select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            picture: true,
            status: true,
            createdAt: true,
            updatedAt: true,
            Post: true
        }
    })

    return user
}


export const UserService = {
    createUser, getAllUsers, getUserById
}