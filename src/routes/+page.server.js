// @ts-nocheck

export async function load({ params }) {
  //console.log(params); 
  
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8081/api/v1/planets/`);
      const response1All = await fetch(`http://localhost:8081/api/v1/planets/${params.myplanetid}`);
      


      const data = await response.json();
      // console.log(data);
      const dataAll = await response1All.json();
      // console.log(dataAll);  
      const newData = { ...data, ...dataAll};
      console.log(newData);  
      return newData
    }


    return {
      superPlanets: fetchData()
    }
  
  }