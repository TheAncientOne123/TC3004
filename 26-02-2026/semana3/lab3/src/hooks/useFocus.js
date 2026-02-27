import { useRef, useCallback } from 'react';

/**
 * Hook personalizado que retorna una ref y una función para enfocar el elemento.
 * @returns {[React.RefObject, () => void]} [ref, setFocus]
 */
export const useFocus = () => {
  const ref = useRef(null);

  const setFocus = useCallback(() => {
    ref.current?.focus();
  }, []);

  return [ref, setFocus];
};
