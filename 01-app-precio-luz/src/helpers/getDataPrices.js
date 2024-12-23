/**
 * 
 * @param {*} url 
 * @returns 
 */
export const getDataPrices = async (url) => {
    try {

      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error("Error al obtener la data");
      }
  
      const getData = await response.json();
     
      const { included: [{ attributes: {values} }]} = getData;

      return values;
  
    } catch (error) {
      console.error("Ha caido en el catch:", error);
    }
  };
  

//  value: El precio en euros/MWh
// datetime: La fecha y hora correspondientes al valor