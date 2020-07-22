import { useEffect } from 'react';

const useHideOnSize = (size, id) => {
  let el = null;

  useEffect(() => {
    if (!el) 
      el = document.getElementById(id);

    window.addEventListener('resize', () => {
      if (window.innerWidth < size) {
        el.style.display = 'none';
      } else {
        el.style.display = '';
      }
    });
  }, []);
}

export default useHideOnSize;
