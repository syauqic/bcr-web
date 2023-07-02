import axios from "axios";

function getPembayaran() {
  const handleData = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://bootcamp-rent-cars.herokuapp.com/customer/order/1"
      );
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.log("Error");
    }
  };
  return {
    handleData,
  };
}
export default getPembayaran;
