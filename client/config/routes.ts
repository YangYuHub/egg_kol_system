export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './User/login',
          },
        ],
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/kol',
    name: 'kolytb',
    icon: 'smile',
    component: './Kol',
  },
  {
    path: '/institutions',
    name: 'institutions',
    icon: 'smile',
    component: './Institutions',
  },
  {
    path: '/custom',
    name: 'custom',
    icon: 'smile',
    component: './Custom',
  },
  {
    path: '/setting',
    name: 'setting',
    icon: 'smile',
    component: './Setting',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
    ],
  },
  {
    path: '/clue',
    name: 'cluepool',
    icon: 'crown',
    access: 'canAdmin',
    component: './MyClue',
    routes: [
      {
        path: '/clue/myclue',
        name: 'myclue',
        icon: 'smile',
        component: './MyClue',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
