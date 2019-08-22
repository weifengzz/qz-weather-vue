import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _578cf552 = () => interopDefault(import('..\\pages\\select-city.vue' /* webpackChunkName: "pages_select-city" */))
const _2ca06436 = () => interopDefault(import('..\\pages\\note-book\\todo.vue' /* webpackChunkName: "pages_note-book_todo" */))
const _24705436 = () => interopDefault(import('..\\pages\\note-book\\todo-list.vue' /* webpackChunkName: "pages_note-book_todo-list" */))
const _233535cd = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/select-city",
      component: _578cf552,
      name: "select-city"
    }, {
      path: "/note-book/todo",
      component: _2ca06436,
      name: "note-book-todo"
    }, {
      path: "/note-book/todo-list",
      component: _24705436,
      name: "note-book-todo-list"
    }, {
      path: "/",
      component: _233535cd,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
