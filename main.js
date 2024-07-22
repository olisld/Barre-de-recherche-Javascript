document.addEventListener('DOMContentLoaded',()=>{
  class search_barre{


    constructor(){
      this.form = document.getElementById("form-search");
      
      
      this.soumission(this.form)
    }
    
    soumission(form){
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        let alltr = document.querySelectorAll('tr')
        let valeur_formulaire=document.querySelector('.input-search').value
        let resultat = this.récupérations_alltd(alltr)
        let table_body=document.querySelector('#table')

        if(valeur_formulaire){

          resultat.forEach((element,index)=>{

            let correspondingtr=alltr[index+1]

            if(valeur_formulaire=== element){
              correspondingtr.style.display=''
            }
            else{
              
              correspondingtr.style.display='none'
            }

          })

        }
        else{
          alltr.forEach(tr =>{ 
            tr.style.display = ''
          })
          let tr=document.createElement('tr')
          let td =document.createElement('td')
          td.colSpan=3
          td.innerText='ERREUR'
          tr.appendChild(td)
          tr.style.textAlign='center'
          // table_body.appendChild(tr)
          table_body.insertBefore(tr, table_body.firstChild);

        }
        // Code
      })
    }
    récupérations_alltd(alltr){
      let alltd=[]
      alltr.forEach(element => {
        let firsttd = element.querySelector('td:first-child')
        if (firsttd) {
          let value = firsttd.textContent || firsttd.innerText;
          alltd.push(value);
          
        }
      })
      return alltd
    }
  }
  new search_barre()
 
})


