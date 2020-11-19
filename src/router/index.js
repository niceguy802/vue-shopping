import {createRouter, createWebHistory} from 'vue-router'

const Category = () => import('@/views/category/Category')
const Home = () => import('@/views/home/Home')
const Profile = () => import('@/views/profile/Profile')
const ShopCart = () => import('@/views/shopCart/ShopCart')
const HomeNew = () => import('@/components/content/home/Home-new')
const HomePopular = () => import('@/components/content/home/Home-popular')
const HomeExplosions = () => import('@/components/content/home/Home-explosions')
const Popular = () => import('@/components/content/category/Popular')
const routes = [
  {
    path: '',
    redirect: '/home/popular'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/home',
        redirect: '/home/popular'
      },
      {
        path: 'new',
        component: HomeNew
      }, {
        path: 'popular',
        component: HomePopular
      }, {
        path: 'explosions',
        component: HomeExplosions
      },
    ]
  },
  {
    path: '/category',
    component: Category,
    children: [
      // {
      //   path: '/category',
      //   redirect: '/category/popular'
      // },
      {
        path: 'popular',
        name: 'Popular',
        component: Popular,
        mate: {title: 'Popular'}
      },
      {
        path: 'coat',
        component: ''
      }
    ]
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
