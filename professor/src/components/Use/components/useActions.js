import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import { useMemo } from 'react'

const useActions = (actions, deps) => {
  const dispatch = useDispatch()
  return useMemo(
    () => {
      if (Array.isArray(actions)) {
        return actions.map(a => bindActionCreators(a, dispatch))
      }
      return bindActionCreators(actions, dispatch)
    },
    deps ? [dispatch, ...deps] : [dispatch]
  )
}

<<<<<<< HEAD
export default useActions;
=======
export default useActions;
>>>>>>> 8961fbfad117639409735673a72efe8e15a342e5
