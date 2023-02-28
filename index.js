console.log('O aplicativo foi iniciado!')

const name1 = process.argv[2]

if(!name1){
    console.log('Digite seu nome:')
}else{
    console.log(name1)
}