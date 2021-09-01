import {useSelector, shallowEqual } from 'react-redux'

//객체가 달라지면 변경이 됐다고 알려줌, 같으면 변경 X , json 값은 비교를 못함
const useShallowEqualSelector = (selector) => {
    return useSelector(selector, shallowEqual) 
}
//json 까지 비교
const useShallowEqualSelectorToJS = (selector) => {
    const result = useSelector(selector, shallowEqual);
    return useMemo(()=> result.toJS(), [result])
}
export {
    useShallowEqualSelector
}