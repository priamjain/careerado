import {useEffect} from 'react'
import { useHistory } from 'react-router';
interface Props {
}

export const ScrollToTop = (props: Props) => {
    const history = useHistory();
    useEffect(() => {
      const unlisten = history.listen(() => {
        window.scrollTo(0, 0);
      });
      return () => {
        unlisten();
      }
    }, [history]);
    
    return null;
}
