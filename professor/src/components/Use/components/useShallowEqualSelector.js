import { useSelector, shallowEqual } from 'react-redux'
import { useMemo } from 'react'

const useShallowEqualSelector = (selector) => {
  return useSelector(selector, shallowEqual)
}

const useShallowEqualSelectorToJS = (selector) => {
    const result = useSelector(selector, shallowEqual);
    return useMemo(() => result.toJS(), [result]);
  };


export {
    useShallowEqualSelector,
    useShallowEqualSelectorToJS
<<<<<<< HEAD
}
=======
}
>>>>>>> 8961fbfad117639409735673a72efe8e15a342e5
