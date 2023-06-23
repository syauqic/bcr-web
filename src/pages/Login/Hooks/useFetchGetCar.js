import { useDispatch } from "react-redux"
import { getCarDetail , createOrder } from "../../Redux/DetailCar/slice"
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const {id} = useParams();

function useFetchGetCars() {

    const [detailCar, SetDetailCar] = useState({});

    const fetchGetCar = async () => {
        try {
          const response = await axios.get(`https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`,
          {
            headers: {
            access_token: 
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc"
            }
          }
          );
          console.log('ini response', response);
          SetDetailCar(response.data)
        }catch(error) {
          console.log('error', error)
    
        }
      }
      useEffect(() => {
          fetchGetCar(id);
      }, [id]);
     
    
    const dispatch  = useDispatch()

    const handleSubmit = (e) => 
  {
    e.preventDefault()

    try {
      
    } catch (error) {
      
    }
  }

  return {
    handleSubmit,
    detailCar,
    SetDetailCar
  }

}


export default useFetchGetCars