class API {
  static getProducts = async () => {
    const response = await fetch("http://localhost:5000/shop");
    const data = await response.json();
    return data;
  };
  static setBought = async (cart) => { 

   fetch("http://localhost:5000/bought", {
      method: "POST", 
      headers: { "Content-Type": "aplication/json" },
      body: JSON.stringify(cart)
   }).then(response => { console.log(response) }).catch((err) => { console.log(err)});
 

  }
}

export default API;
