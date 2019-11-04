import { SET_CURRENT_USER } from './user.types'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

export const setCurrentUser = () => dispatch => {
  let unsubuscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth)

      userRef.onSnapshot(snapShot => {
        dispatch({
          type: SET_CURRENT_USER,
          payload: {
            id: snapShot.id,
            ...snapShot.data()
          }
        })
      })
    } else {
      dispatch({
        type: SET_CURRENT_USER,
        payload: userAuth
      })
    }
  })

  return () => unsubuscribeFromAuth()
}
