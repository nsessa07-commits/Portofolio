const observador = new IntersectionObserver((anime) => {

console.log(anime);

      anime.forEach((entry) => {

          if (entry.isIntersecting) {

               entry.target.classList.add('aparecer');     
              
          }else {

               entry.target.classList.remove('aparecer');

          }

     })

});

const drm = document.querySelectorAll('.Ver');
drm.forEach((element) => observador.observe(element));





let h1 = document.querySelector('.Ponteiro');
let welcome = 'Programador Full-Stack';

welcome.split('').forEach((letra,index)=> {

    setTimeout(()=> {
    
        h1.innerHTML += letra;

    }, 200*index);

})

const  welcome1 = ' Nsessa Sebastião Manzambi Natural de Uíge Municipio do Uíge nascido aos 19 de Agosto de 2004 Tendo passado boa parte da sua infancia no bairro dunga nas emediações das escaritas Filho de Suzana C. Soqui e Zola Ramiro Seu pai Licenciado em Mat/Física pela Universidade ISCED Instituto Superiror de Ciencias de Educação do Uíge e sua Mãe tendo passado pela mesma Universidade mas Licenciada em Ensino Especial pela mesma universidade  Nsessa Sebastião Terminou  o seu Primario na Escola numero 68 nas emediações da saude Pública do Uige e fez o primeiro ciclo e segundario No Instituto Politecnico do Kituma No curso de Informatica de Gestão onde partiu a sua curiosidade em Tecnologia e Especifiamente em Engenharia de Software Tendo um Percurso'+
                'Com muitos desafios Para poder transformar ideias em codigo  por falta de Equipamentos e Acesso a Internet mas não deixou se abalar por isso pk todo homem grande  foi feito de experiencias ruins que na verdade passaram a ser boas para ele Palavras de Nsessa Sebastião Manzambi valorize sua integridade e quem mantem ela de pe a vida tem coisas belas e ruins e muitos delas transcendem os nossos desejos então encontre proposito na aflição se não ela fara de ti escravo  e não de tudo a quem precisa aprender  se não isso matara a sua criatividade e passa ser um lugar vazio';

const h4 =document.querySelector('.History');
welcome1.split('').forEach((letra,index)=> {

    setTimeout(()=> {
    
        h4.innerHTML += letra;

    }, 90*index);

})








const img = document.querySelector('.Ecomerce');
const ativa = document.querySelector('.ative');


     if(img.src="assets/Ecomerce.PNG"){

         ativa.style.backgroundColor = '#ffffff';

     }

 function p(){
     img.src = "assets/Ecomerce1.PNG"
     ativa.style.backgroundColor = '#f31010';
     document.querySelector('.ec1').style.backgroundColor = '#f6f6f6';
                    document.querySelector('.ec2').style.backgroundColor = '#b51818';
      
 }    

 function po(){
     img.src = "assets/Ecomerce2.PNG"
     ativa.style.backgroundColor = '#f41515';
     document.querySelector('.ec1').style.backgroundColor = '#ce1616';
     ativa.style.backgroundColor = '#fc1414';
                    document.querySelector('.ec2').style.backgroundColor = '#fefbfb';
 }    

  function por(){
     img.src = "assets/Ecomerce.PNG"
     ativa.style.backgroundColor = '#ffffff';
          document.querySelector('.ec1').style.backgroundColor = '#d11616';
                    document.querySelector('.ec2').style.backgroundColor = '#d11616';


 }  

const Abrir = document.querySelector('.Men-Mobile');

 const menu = document.getElementById('Mobile').addEventListener('click',()=>{

    Abrir.style.display ='flex';

 })


 document.querySelectorAll('.close').forEach((e)=>{

            e.addEventListener('click',()=>{

                 Abrir.style.display ='none';

            })

 })
 

