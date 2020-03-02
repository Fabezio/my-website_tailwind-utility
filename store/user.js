export const state = () => ({
  logs: [
    {
      name: 'subscribe',
      color: 'btn-blue',
      title: 'Inscription',
      icon: 'fas fa-user-plus',
      show: true
    },
    {
      name: 'login',
      color: 'btn-success',
      title: 'Connexion',
      icon: 'fas fa-sign-in-alt',
      show: true
    },
    {
      name: 'logout',
      color: 'btn-warning',
      title: 'Déconnexion',
      icon: 'fas fa-sign-out-alt',
      show: false
    }
  ]
})
