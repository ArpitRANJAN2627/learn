import React,{useContext,useRef}  from 'react';
import styles from './Food.module.css';
import CartContext from '../../store/CartContextProvider';
import { useAuth0 } from "@auth0/auth0-react";
const Food = (props) => {

  const { addToCart } = useContext(CartContext);
  const inputRef=useRef();
  const{isAuthenticated}=useAuth0()
  const addToCartHandler = () => {
    addToCart({
      id: props.id,
      name: props.name,
      price: props.price,
      desc: props.desc,
      qty:  1
    });
  }

  return (
    <li className={styles.food}>
    <div>
        <p className={styles.name}>{props.name}</p>
        <p className={styles.desc}>{props.desc}</p>
        <p className={styles.price}>${ props.price}</p>
    </div>
    <div>
      {isAuthenticated&&<span>
        <label>Amount</label>
        <input
            type="number"
            min="1"
            max="1"
            defaultValue={1}
            ref={inputRef}
        />
        <button onClick={addToCartHandler} className={styles['add-btn']}>+ Add</button></span>}
    </div>
</li>
  )
}

export default Food