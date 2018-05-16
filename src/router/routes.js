
export default [
  { path: '/', component: () => import('pages/Home') },
  { path: '/Login', component: () => import('pages/Login') },
  { path: '/Register', component: () => import('pages/Register') },
  { path: '/Forum', component: () => import('pages/Forum') },
  { path: '/Account', component: () => import('pages/Account') },
  { path: '/Search', component: () => import('pages/Search') },
  { path: '/Submit', component: () => import('pages/Submit') },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
