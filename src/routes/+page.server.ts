// @ts-nocheck

export async function load({ params }) {
  const fetchData = async () => {
    const responseAll = await fetch(`http://localhost:8081/api/v1/planets/`);
    const dataAll = await responseAll.json();
    
    
    let newData = { ...dataAll };
    const response = await fetch(`http://localhost:8081/api/v1/planets/${newData.data[0].id}`);
    const data = await response.json();

    newData = { ...data };
    return newData;
  }

  return {
    superPlanets: fetchData(),
  }
  
}