function contador(){
    this.cont = 0;

    thisCont = this;
    setInterval(function contar(){
                    thisCont.cont++;
                    console.log(thisCont.cont);
    }/*.bind(this)*/, 1000);

    /* Duas poss�veis solu��es s�o usar o bind ou 
    criar uma vari�vel para referenciar o this */
}

contador();