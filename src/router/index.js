import Vue from 'vue'
import VueRouter from 'vue-router'

/**
 * 重写路由的push方法
 */
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

const Home = () => import('views/home/Home')
const Video = () => import('views/video/Video')
const PandaChallenge = () => import('views/pandaChallenge/PandaChallenge')
const Game = () => import('views/game/Game')
const About = () => import('views/about/About')
const Archives = () => import('views/archives/Archives')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/video',
    component: Video
  },
  {
    path: '/pandaChallenge',
    component: PandaChallenge
  },
  {
    path: '/game',
    component: Game
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/archives',
    component: Archives
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
