function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   const searchField = document.getElementById('searchField')

   const table = Array.from(document.querySelectorAll('.container tbody tr'));


   function onClick() {
      table.forEach(row => row.className = '')

      let res = table.filter(row => {
         let cell = Array.from(row.children)
            if (cell.some(element => element.textContent.includes(searchField.value))){
               row.className = 'select';
            }
      })
      

      // for (let row = 0; row < table.length; row ++){
      //    for (let col = 0; col < table[row].children.length; col ++){
      //       if (table[row].children[col].textContent.toLowerCase().includes(searchField.value.toLowerCase())) {
      //          table[row].className = "select";

      //       }
      //    }
      // }
      
      searchField.value = '';
   }
}