import { useSelector, shallowEqual } from "react-redux";
import { useMemo } from "react";

const useShallowEqualSelector = (selector) => {
  return useSelector(selector, shallowEqual);
};

const useShallowEqualSelectorToJS = (selector) => {
  const result = useSelector(selector, shallowEqual);
  return useMemo(() => result.toJS(), [result]);
};

//객체값을 비교하게 => 객체가 같으면 return X, 다르면 변경이 되었음을 알려주는 것 = shallowEqual
export { useShallowEqualSelector, useShallowEqualSelectorToJS };
