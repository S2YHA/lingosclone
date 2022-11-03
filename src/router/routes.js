const routes = [
  {
    path: '/auth',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: 'register', component: () => import('pages/auth/RegisterPage.vue') },
      { path: 'login', component: () => import('pages/auth/LoginPage.vue') }
      // { path: 'forgotpassword', component: () => import('pages/auth/ForgotPasswordPage.vue') },
      // { path: 'tests', component: () => import('pages/tests/TestsPage.vue') }
    ]
  },
  {
    path: '/teacher',
    component: () => import('layouts/MainLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      { path: 'groups', component: () => import('pages/groups/GroupsPage.vue') },
      { path: 'groupView', component: () => import('pages/groups/GroupView.vue') },
      { path: 'wordsets', component: () => import('pages/wordSets/WordSetsPage.vue') },
      { path: 'folders', component: () => import('pages/folders/FoldersPage.vue') },
      { path: 'tests', component: () => import('pages/tests/TestsPage.vue') },
      { path: 'tests/add', component: () => import('pages/tests/AddNewTest.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
