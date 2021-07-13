import express from 'express';

import {
    getPost,
    getPosts,
    createPost,
    updatePost,
    deletePost,
    likePost,
    getPostsBySearch,
} from '../controllers/posts.js';

import auth from '../middleware/auth.js';
const router = express.Router();

//localhost:5000/posts
router.get('/', getPosts);
router.get('/:id', getPost);
router.get('/search', getPostsBySearch);

router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);

export default router;
