import { defineStore } from 'pinia';
import { auth } from 'src/boot/firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged
} from 'firebase/auth'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null
  }),
  getters: {
    loggedIn: (state) => state.user !== null
  },
  actions: {
    async login(details) {
      const { email, password } = details
      try {
        await signInWithEmailAndPassword(auth, email, password)
      } catch (error) {
        switch (error.code) {
          case 'auth/user-not-found':
            alert("User not found")
            break
          case 'auth/wrong-password':
            alert("Wrong password")
            break
          default:
            alert("Something went wrong")
        }
        return
      }
      this.user = auth.currentUser
      this.router.push('/teacher/groups')
    },

    async register(details) {
      const { email, password } = details
      try {
        await createUserWithEmailAndPassword(auth, email, password)
      } catch (error) {
        switch (error.code) {
          case 'auth/email-already-in-use':
            alert("Email already in use")
            break
          case 'auth/invalid-email':
            alert("Invalid email")
            break
          case 'auth/operation-not-allowed':
            alert("Operation not allowed")
            break
          case 'auth/weak-password':
            alert("Weak password")
            break
          default:
            alert("Something went wrong")
        }
        return
      }
      this.user = auth.currentUser
      this.router.push('/teacher/groups')
    },

    async logout() {
      await signOut(auth)
      this.user = null
      this.router.push('/auth/login')
    },

    async forgotPassword(details) {
      const { email } = details
      await sendPasswordResetEmail(auth, email).then(() => {
        console.log('email sent')
      })
    },
  },
});
