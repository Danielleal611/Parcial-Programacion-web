function Libros(){
    let libro1 = "harry potter. Cod: HPJK1997. Autor: J.K Rowlling. Fecha pub: 1997 ";
    let libro2 = "los juegos del hambre. Cod: JHSC2008. Autor: Suzanne Collins. Fecha pub: 2008 ";
    let libro3 = "el hobbit. Cod: EHJR19374. Autor: J.R.R Tolkien. Fecha pub: 1937 ";
    let libro4 = "hamlet. Cod: HWS1589. Autor: William Shakespeare. Fecha pub: 1589 ";
    let libro5 = "Method of mathematical. Cod: MOF2900. Autor: Richard Courant. Fecha pub: 1924 ";
    let libro6 = "Electrodinamica clasica. Cod: ECA2100. Autor: John David Jackson. Fecha: 1962 ";
    let libro7 = "A Student's Guide to the Schrödinger Equation. Cod: EQA2222. Autor: Daniel A. Fleisch. Fecha pub: 2019 ";
    let libro8 = "The Feynman Lectures on Physics. Cod: FEY2312. Autor: Matthew Sands, Richard Feynman y Robert B Leighton. Fecha Pub: 1963 ";
    let total;
    
    let entrada1 = prompt("libro a comprar: ");
    
    let entrada2 = prompt("unidades a comprar:");
    
    let precio = prompt("precio del libro:");
    
    let costo = prompt("costo del libro:");

    if(entrada1 == "Harry potter" && entrada2 >= 100 && precio - costo >= 14000){
        document.write("El libro es ",libro1, " su precio es ", precio, " Libro rentable ");
    }
    else if(entrada1 == "Los juegos del hambre" && entrada2 >= 100 && precio - costo >=14000){
        document.write("El libro es ", libro2, " su precio es ", precio, " libro rentable ");
    }
    else if(entrada1 == "El hobbit" && entrada2 >= 100 && precio - costo >= 14000){
        document.write("El libro es ", libro3, " su precio es ", precio, " libro rentable ");
    }

    else if(entrada1 == "Hamlet" && entrada2 >= 100 && precio - costo <= 14000){
        document.write("El libro es ", libro4, " su precio es ", precio, " libro no rentable ");
    }
    else if(entrada1 == "Method of mathematical" && entrada2 >= 100 && precio - costo >= 14000){
        document.write("El libro es ", libro5, " su precio es ", precio, " libro rentable ");
    }
    else if(entrada1 == "Electrodinamica clasica" && entrada2 >= 100 && precio - costo >= 14000){
        document.write("El libro es ", libro6, " su precio es ", precio, " libro rentable ");
    }
    else if(entrada1 == "A Student's Guide to the Schrödinger Equation" && entrada2 >= 100 && precio - costo >= 14000){
        document.write("El libro es ", libro7, " su precio es ", precio, " libro rentable ");
    }
    else if(entrada1 == "The Feynman Lectures on Physics" && entrada2 >= 100 && precio - costo <= 14000){
        document.write("El libro es ", libro8, " su precio es ", precio, " libro no rentable ");
    }

    if(entrada2 >= 800){
        total = precio * 1.10;
        document.write("has comprado mas de 800 unidades, aumento del 10% ");
        document.write("el precio del libro queda en ",total);

    }
  } 
  
  Libros();