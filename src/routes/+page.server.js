// @ts-nocheck

export async function load({ params }) {
  const fetchData = async () => {
    const responseAll = await fetch(`http://localhost:8081/api/v1/planets/`);
    const dataAll = await responseAll.json();
    
    
    let newData = { ...dataAll };
    // console.log('Here is the data');
    console.log(newData.data[0].id); 
    const response = await fetch(`http://localhost:8081/api/v1/planets/${newData.data[0].id}`);
    const data = await response.json();
    newData = { ...data };
    // console.log(newData);  
    return newData;
  }

  return {
    superPlanets: fetchData(),
  }
  
}