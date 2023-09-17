import { defineStore } from 'pinia'
import { auth, usersCollection } from '../includes/firebase'

export default defineStore('user', {
  state: () => ({
    userLoggedIn: false
  }),
  actions: {
    async register(values) {
      const userCred = await auth.createUserWithEmailAndPassword(values.email, values.password)

      // 1st solution (with automatically generated uid by Firebase and the add-function):
      // the add-function returns a promise --> await
      // await usersCollection.add({
      //   name: values.name,
      //   email: values.email,
      //   age: values.age,
      //   country: values.country
      // })

      // 2nd solution (with the generated uid as authentication-method - and the set()-function)
      await usersCollection.doc(userCred.user.uid).set({
        name: values.name,
        email: values.email,
        age: values.age,
        country: values.country
      })

      // every registered user gets a profile; here, a displayName and a profilePicture can be stored
      await userCred.user.updateProfile({
        displayName: values.name
      })

      this.userLoggedIn = true
    }
  }
})
