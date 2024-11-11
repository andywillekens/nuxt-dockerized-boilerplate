export const useUserStore = defineStore('user', {
  state: () => {
    return { user: '' }
  },
  actions: {
    setUser(name: string) {
      this.user = name
    }
  }
})
