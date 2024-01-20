// @ts-nocheck

export async function load({ params }) {
  const fetchData = async () => {
    const responseAll = await fetch(`http://localhost:8081/api/v1/planets/`);
    const response = await fetch(`http://localhost:8081/api/v1/planets/${params.myplanetid}`);
    
    const dataAll = await responseAll.json();
    const data = await response.json();
    
    const newData = { ...data, ...dataAll};
    console.log('Here is the data');
    console.log(newData);  
    return newData;
  }

  return {
    superPlanets: fetchData(),
  }
  
}