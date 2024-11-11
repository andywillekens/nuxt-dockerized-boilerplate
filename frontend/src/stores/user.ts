import { ref } from 'vue'

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

const userStore = useUserStore()

const userName = ref('')

function promptUserName() {
  userName.value = prompt('Please enter your name:') || ''
  if (userName.value) {
    userStore.setUser(userName.value)
  }
}

promptUserName()
