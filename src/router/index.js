import {createRouter, createWebHistory} from 'vue-router'

const Category = () => import('@/views/category/Category')
const Home = () => import('@/views/home/Home')
const Profile = () => import('@/views/profile/Profile')
const ShopCart = () => import('@/views/shopCart/ShopCart')

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/shopcart',
    component: ShopCart
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
