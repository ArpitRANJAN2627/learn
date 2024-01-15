import React, { useEffect,useState, Fragment} from 'react';
import axios from 'axios';
import FoodList from '../components/FoodList/FoodList';


const AllFood = () => {
    
    const [foods,setFoods]=useState([]);
    
    useEffect(() => {
      
        async function getfoods(){
            try {
                const res = await axios.get('http://localhost:9000/allfoods');
                
                if (res.status !== 200) {
                    throw new Error('something went wrong');
                }
               setFoods(() => res.data);
               
            }
            catch (err) {
                console.log(err);
            }
        
        }
        getfoods();

    }, []);


  return (
    <Fragment>
       <FoodList foods={foods} />
    </Fragment>
  )
}

export default AllFood;