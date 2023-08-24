
//! Patron 
//! Banderas 
    //? g : busca el patron en todo el texto
    //? i : no distingue entre mayusculas y minusculas 
    //? m : multilinea
 
    //! Crear un patron con el constructor RegExp
    
    
    let patron='javascript'
    let regExp= new RegExp(patron)
    
    //? banderas
    let patron1='javascript'
    let bandera='gi'
    let regExp1= new RegExp(patron1,bandera)
    console.log(regExp1);
    
    //! Crear un patron sin el constructor RegExp
    let regExp2= /javascript/gi

    //!Metodos de las expresiones Regulares
    // test(): prueba una coincidencia en una cadena . Devuelve verdadero o falso
        const text = 'JavaScript es muy bueno';
        const patron3=/javaScript/i   
        const resultado=patron3.test(text) 
        console.log(resultado);
        //match
        //    match() devuelve la primera aparicion del patron que encuentra en una cadena. Si no lo encuentra , si no usamos una bandera global match devuelve el arreglo que contiene el patron indice entrada y grupo
        const text1 = 'JavaScript es muy bueno';
        const patron4=/javaScript/i  
        const resultado1= text1.match(patron4)
        console.log(resultado1);
        //search
        const text2 =' es muy bueno JavaScript';
        const patron5=/javaScript/ig
        const resultado2= text2.search(patron5)//buscar la primera ocurrencia del patron
        console.log(resultado2);//devuelve -1 si no encuentra nada
        // replace
        const text3 ='Python es muy bueno ';
        const resultado3= text3.replace(/Python|python/,'JavaScript')//buscar la primera ocurrencia del patron
        console.log(resultado3);//devuelve -1 si no encuentra nada
        
    // Corchete
    
    const patron6 = /[Mm]anzana |[Nn]aranja/g
    const text4= 'Me gusta comer Manzana y Naranja en invierno'
    const matches= text4.match(patron6)
    console.log(matches);
    
    
    // Caracteres de escape (\)
    const patron7= /\d/g
    const texto7="Estoy aprendiendo Javascript 24, 2023"
    const matches1= texto7.match(patron7)
    console.log(matches1);
    //(+)
    const patron8= /\d+/g
    const texto8="Estoy aprendiendo Javascript en Agosto 24, 2023"
    const matches2= texto8.match(patron8)
    console.log(matches2);
    


        

