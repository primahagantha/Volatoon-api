import prisma from "../config/db.config.js"

const findBookmarkByuserIdDb = async (userId) => {
    const result = await prisma.bookmark.findMany({
        where: { userId }
    })

    return result
}

const deleteBookmarkByBookmarkIdDb = async (bookmarkId) => {
    const result = await prisma.bookmark.delete({
        where: { bookmark_id : bookmarkId }
    })

    return result
}

const addBookmarkByUserIdDb = (userId, bookmarkData) => {
    const bookmarkResult = prisma.bookmark.create({
        data: {
            userId: userId,
            komik_id: bookmarkData.komikId,
        }
    })
    return bookmarkResult
}

export {
    findBookmarkByuserIdDb,
    deleteBookmarkByBookmarkIdDb,
    addBookmarkByUserIdDb
}