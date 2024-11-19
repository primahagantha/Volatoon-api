import {
    findBookmarkByuserIdDb,
    deleteBookmarkByBookmarkIdDb,
    addBookmarkByUserIdDb
} from "./bookmark.repository.js"

const findBookmark = async (userId) => {
    const result = await findBookmarkByuserIdDb(userId)
    if (!result) throw new Error("User doesnt have any bookmark!")
    return result
}

const deleteBookmark = async (bookmarkId) => { 
    const result = await deleteBookmarkByBookmarkIdDb(bookmarkId)
    if(!result) throw new Error("failed deleting bookmark")
    return result
}

const addBookmark = async (userId, bookmarkData) => { 
    const bookmarkDataResult = await addBookmarkByUserIdDb(userId, bookmarkData)
    if(!bookmarkDataResult) throw new Error("failed adding category")
    return bookmarkDataResult
}

export {findBookmark, deleteBookmark, addBookmark} 