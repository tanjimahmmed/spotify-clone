import {Router} from 'express';
import { getAlbumById, getAllAlbums } from '../controller/album.controller';

const router = Router();

router.get('/', getAllAlbums)
router.get('/:albumId', getAlbumById)

export default router;