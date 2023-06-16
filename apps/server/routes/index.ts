import Router from 'koa-router'

import { welcome } from '../controllers/welcome'

const router = new Router()

router.prefix('/api')

router.get('/welcome', welcome)

export default router
