module.exports = {
  register () {
    this.routes = [
      {
        path: '/praxis-client',
        name: 'praxis-client',
        component: 'PraxisClient'
      },
      {
        path: '/praxis-developer',
        name: 'praxis-developer',
        component: 'PraxisDeveloper'
      }
    ]

    this.menuItems = [
      {
        routeName: 'praxis-developer',
        title: 'Praxis Developer'
      },
      {
        routeName: 'praxis-client',
        title: 'Praxis Client'
      }
    ]
  },

  getComponentPaths () {
    return this.routes.reduce((all, route) => {
      return {
        ...all,
        [route.component]: `pages/${route.component}.js`
      }
    }, {})
  },

  getRoutes () {
    return this.routes
  },

  getMenuItems () {
    return this.menuItems
  },

  getUnprotectedIframeUrls () {
    return []
  }
}
