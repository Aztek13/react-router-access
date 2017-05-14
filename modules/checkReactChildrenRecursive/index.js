import {Children} from 'react';

// TODO find better name
// TODO tests
export default function recursiveCheck(element, checkFn) {
  if (!element) {
    return true;
  }

  if (!checkFn(element)) {
    return false;
  }

  if (!element.props) {
    return true;
  }

  const childrenArray = Children.toArray(element.props.children);

  return childrenArray.reduce(
    (pv, cv) => pv && recursiveCheck(cv, checkFn),
    true
  );
}
