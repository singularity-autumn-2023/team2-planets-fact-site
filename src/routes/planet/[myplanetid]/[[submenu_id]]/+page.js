// @ts-nocheck
export const load = ({ fetch, params}) => {
    console.log(params);
  
    const fetchData = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.myplanetid}`);

      const data = await response.json();
      console.log(data);

      return data
    }
  
    return {
      product: fetchData()
    }
  
  }