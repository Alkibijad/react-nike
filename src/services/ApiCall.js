class API {
  static getProducts = async () => {
    const response = await fetch("http://localhost:5000/shop");
    const data = await response.json();
    return data;
  };
}

export default API;
