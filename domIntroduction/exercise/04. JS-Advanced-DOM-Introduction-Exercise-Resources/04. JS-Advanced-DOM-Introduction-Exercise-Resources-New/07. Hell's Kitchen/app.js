function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const inputTextField = document.querySelector('#inputs textarea');
   const bestRestaurantParagraph = document.querySelector('#bestRestaurant p');
   const workersParagraph = document.querySelector('#workers p')
   

   function onClick () {

      let textArray = JSON.parse(inputTextField.value)
      
      const restaurants= {}
      for (let line of textArray){
         let [restaurantName, workersAndSalary] = line.split(' - ')
         let workers = workersAndSalary.split(', ').map(currentWorker => {
            let [worker, salary] = currentWorker.split(' ');
            return {worker, salary : Number(salary)}
         })
         if (restaurants[restaurantName]){
            workers = workers.concat(restaurants[restaurantName].workers)
         }
            restaurants[restaurantName] = {
               workers,
               getAverageSalary(){
                  let averageSalary = 0
                  for (let workerName of this.workers){
                     averageSalary += workerName.salary / this.workers.length
                  }
                  return averageSalary
               }
            }
         
      }
      let sortedRestaurantsBySalary = Object.entries(restaurants).sort((a, b) => b[1].getAverageSalary() - a[1].getAverageSalary());
      let bestRestaurant = sortedRestaurantsBySalary[0];
      let workersInBestRestaurantSortedBySalary = bestRestaurant[1].workers.sort((a, b) => b.salary - a.salary);

      let bestRestaurantStringResult = `Name: ${bestRestaurant[0]} Average Salary: ${bestRestaurant[1].getAverageSalary().toFixed(2)} Best Salary: ${workersInBestRestaurantSortedBySalary[0].salary.toFixed(2)}`;
      
      let bestWorkersStringResult = workersInBestRestaurantSortedBySalary.map(worker => `Name: ${worker.worker} With Salary: ${worker.salary}`).join(' ');

      bestRestaurantParagraph.textContent = bestRestaurantStringResult;
      workersParagraph.textContent = bestWorkersStringResult;
   
   }
}