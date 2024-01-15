
import { Link } from 'react-router-dom';
import styles from './MainNav.module.css';
import CartContext from '../../store/CartContextProvider';
import { useContext } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
function MAinNav() {
  const {cartLength,cart}=useContext(CartContext)
  const { loginWithRedirect } = useAuth0();
  const { logout,isAuthenticated,user } = useAuth0();
   
  let total=0;
  for(let i=0;i<cart.length;i++){
    total+=cart[i].qty;
  }
 

  return (
    <nav className={styles.nav}>
    <ul>
        <li><Link to="/"><i class="fa-solid fa-burger"></i> React Foods</Link></li>
        <li><Link to="/mycart"><i class="fa-solid fa-cart-shopping"></i> Cart{isAuthenticated&&total!=0&&<sup>{total}</sup>}</Link></li>
        

        {!isAuthenticated&& <li><button onClick={() => loginWithRedirect()}>Log In</button></li>}
       { isAuthenticated&&  <li> <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button></li>}
        
    </ul>
</nav>
  );
}

export default MAinNav;