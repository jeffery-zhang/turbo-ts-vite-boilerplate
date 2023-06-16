import { Context } from 'koa'

export const welcome = async (ctx: Context) => {
  ctx.body = 'Welcome to turbo-vite-boilerplate!'
}
