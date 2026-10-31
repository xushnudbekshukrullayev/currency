let usd = document.getElementById("usd")
let uzs = document.getElementById("uzs")
let data = []

async function getCurrency(){
    try {
        const responce = await fetch ("https://cbu.uz/uz/arkhiv-kursov-valyut/json/",)
        console.log(responce);
        data= await responce.json()
        console.log(data);

        let valyuta = data.find((currency)=> currency.Ccy === "USD").Rate
        console.log(valyuta);

        usd.addEventListener("input", ()=>{
            uzs.value = valyuta * usd.value +"so'm"
        })
        
        
        
    }
    catch(error)
    {console.log("xatolik",error);
    

    }
}
getCurrency()