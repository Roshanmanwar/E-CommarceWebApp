 // collect here to url and option on get method
 export const  get = async(url)=>{
    try {     
         let data = await fetch(url,{method:"GET"});
         let result = await data.json();
         return result;
         
    } catch (error) {
        console.log('server error');
    } 
};

export const getotherData = async(url)=>{

    try {
        let result = await fetch(url);
        let data = result.json();
        return data;
    } catch (error) {
        console.log("server error");
    }

}