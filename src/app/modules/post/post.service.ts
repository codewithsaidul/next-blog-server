import { Post, Prisma } from "@prisma/client";
import { prisma } from "../../config/db";

const createPost = async (payload: Prisma.PostCreateInput): Promise<Post> => {
  const result = await prisma.post.create({
    data: payload,
    include: {
      author: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  });

  return result;
};

const getAllPost = async (page: number, limit: number) => {
  const skip = (page - 1) * limit
  const posts = await prisma.post.findMany({
    skip,
    take: limit,
    include: {
      author: {
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
        },
      },
    },
  });

  return posts;
};

const getSinglePost = async (id: number) => {
  const posts = await prisma.post.findUnique({
    where: {
      id,
    },
    include: {
      author: {
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
        },
      },
    },
  });

  return posts;
};

const updatePostInfo = async (
  id: number,
  payload: Partial<Prisma.PostCreateInput>
): Promise<Post> => {
  const isPostExist = await prisma.post.findUnique({
    where: {
      id,
    },
  });

  if (!isPostExist) {
    throw new Error("Post not found");
  }

  const update = await prisma.post.update({
    where: { id },
    data: payload,
    include: {
      author: {
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
        },
      },
    },
  });


  return update
};


const deletePost = async (id: number) => {
  const post = await prisma.post.delete( { where: { id } } )

  return post
}

export const PostService = {
  createPost,
  getAllPost,
  getSinglePost,
  updatePostInfo,
  deletePost
};
