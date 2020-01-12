export const state = () => ({
  logs: [
    {
      name: 'subscribe',
      color: 'btn btn-info',
      title: 'Inscription',
      icon: 'fas fa-user-plus',
      show: true
    },
    {
      name: 'login',
      color: 'btn btn-primary',
      title: 'Connexion',
      icon: 'fas fa-sign-in-alt',
      show: true
    },
    {
      name: 'logout',
      color: 'btn btn-warning',
      title: 'Déconnexion',
      icon: 'fas fa-sign-out-alt',
      show: false
    }
  ]
})
