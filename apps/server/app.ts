import Koa from 'koa'
import cors from '@koa/cors'
import bodyparser from 'koa-bodyparser'

import router from './routes'

const app = new Koa()

app.use(cors())

app.use(bodyparser())

app.use(router.routes())

export default app
