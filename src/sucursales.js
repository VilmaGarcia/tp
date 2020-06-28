const fs=require("fs");
	const rutaSucursales="./data/theaters.json";
	const leerRutaSucursales=fs.readFileSync(rutaSucursales,"utf-8");
	const parseLeerRutaSucursales=JSON.parse(leerRutaSucursales);
	
	let Sucursales=
	{
	    titulo:"Nuestas Salas",
	
	    returnListaSucursales:function()
	    {
	        let listaSucursales=[];
	        parseLeerRutaSucursales.theaters.forEach(element => 
	        {
	            listaSucursales.push(element);    
	        });
	        return listaSucursales;
	
	    },
	    retornaTotalDeSalas:function()
	    {
	        let cantidadSucursales=this.returnListaSucursales().length;
	
	        return cantidadSucursales+"\n";
	    },
	}
	
	module.exports=Sucursales;

