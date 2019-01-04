import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/pages/login'
import books from '@/components/pages/Books/books'
import bookIndex from '@/components/pages/Books/BooksChilrd/bookIndex'
import bookInformation from '@/components/pages/Books/BooksChilrd/bookInformation'
import borrowinfo from '@/components/pages/Books/BooksChilrd/borrowinfo'
import userInformation from '@/components/pages/Books/BooksChilrd/userInformation'
import about from '@/components/pages/Books/BooksChilrd/about'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/books',
      name: 'books',
      component: books,
      children: [
        {
          path: '/bookIndex', component: bookIndex
        },
        {
          path: '/bookInformation', component: bookInformation
        },
        {
          path: '/borrowinfo', component: borrowinfo
        },
        {
          path: '/userInformation', component: userInformation
        },
        {
          path: '/about', component: about
        }
      ]
    }

  ]
})
