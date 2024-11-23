import { Router } from 'express';
import {findBookmark, deleteBookmark, addBookmark}  from './bookmark.service.js';
import authenticateToken from '../middleware/token.auth.js';

const router = Router();

router.get("/bookmark", authenticateToken, async (req, res) => {
    const { userId } = req.user;

    try {
        const bookMarks = await findBookmark(userId)

        res.status(200).json({
            status: 200,
            message: "User Bookmark retrieved successfully",
            data: {
                bookMarks
            }
        })
    } catch (err) {
        return res.status(401).json({
            status: 401,
            message: err.message
        })
    }
})

router.delete("/bookmark/:bookmarkId",authenticateToken, async (req, res) => {
  
    const bookmarkId = req.params.bookmarkId;

    try {
        const bookmarkDataDelete = await deleteBookmark(bookmarkId)

        res.status(200).json({
            status: 200,
            message: "User Bookmark Deleted",
            data: {
                bookmarkDataDelete
            }
        })
    } catch (err) {
        return res.status(401).json({
            status: 401,
            message: err.message
        })
    }

})

router.post("/bookmark",authenticateToken, async (req, res) => {
    const { userId } = req.user;
    const bookmarkData = req.body

    try {
        const Result = await addBookmark(userId, bookmarkData)

        res.status(201).json({
            status: 201,
            message: "User Categories added successfully",
            data: {
                Result
            }
        })
    } catch (err) {
        return res.status(401).json({
            status: 401,
            message: err.message
        })
    }

})

export default router 