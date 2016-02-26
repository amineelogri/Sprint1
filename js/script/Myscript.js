 function ValiderFormulaire(formulaire) {


      if (formulaire.login.value =="" && formulaire.mtPasse.value =="") {
        $("#loginVide").html("champs vide");
        $("#mtPasseVide").html("champs2 vide");
        }


        else {
        if(formulaire.login.value =="")  {
          $("#loginVide").html("champs vide");
            }
          else {
            if(formulaire.mtPasse.value =="")  {
              $("#mtPasseVide").html("champs2 vide");
                }
              else {


                if(formulaire.login.value.length<5)  {
                   $("#loginVide").html("champs doit contenir au moins 5 lettres");
                     }
                   else {


                     if(formulaire.mtPasse.value.length<7)  {
                        $("#mtPasseVide").html("champs doit contenir au moins 7 lettres");
                        }
                        else {
                          formulaire.submit();
                        }


                   }



              }

          }

        //  formulaire.submit();
           // Pour valider le formulaire en javascript :
           // formulaire.submit()
        }
}
function ViderFormulaire() {
      $("#loginVide").html("");
          $("#mtPasseVide").html("");

}
