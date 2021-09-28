function search() {
   let townList =  document.querySelectorAll("ul li");
   
   let InputFieldText = document.getElementById('searchText').value;

   let resultField = document.getElementById('result');

   let countOfMatches = 0;

   for (const townName of townList){
      if (townName.textContent.includes(InputFieldText)){
         townName.style.fontWeight = "bold";
         townName.style.textDecoration= "underline";
         countOfMatches ++;

      }
   }

   resultField.textContent = `${countOfMatches} matches found`

}
