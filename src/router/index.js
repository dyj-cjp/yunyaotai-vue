import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// import Home from '../views/home/Home'
// import Profile from '../views/profile/Profile'
const Home=()=>import ('../views/home/Home')
const Profile=()=>import ('../views/profile/Profile')
const Detail=()=>import ('../views/detail/Detail')
const ToAdmin=()=>import('../views/toadmin/toAdmin')
const Purchase=()=>import ('../views/mypurchase/Purchase')
const MyComment=()=>import ('../views/comment/MyComment')
const MyMessage=()=>import ('../views/mymessage/MyMessage')

const routes=[
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/profile',
        component:Profile
    },
    {
        path:'/detail/:id',
        component:Detail
    },
    {
        path:'/toadmin',
        component:ToAdmin
    },
    {
        path:'/tomypurchase',
        component:Purchase
    },
    {
        path:'/mycomment',
        component:MyComment
    },
    {
        path:'/mymessage',
        component:MyMessage
    }
]

const router=new VueRouter({
    mode:'history',
    base:process.env.BASE_URL,
    routes
})

export default router