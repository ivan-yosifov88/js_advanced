function solve() {
  const textAreas = document.querySelectorAll('#exercise textarea');
  const buttons = document.querySelectorAll('button');
  const table = document.querySelector('table tbody');

  const furnitureList = textAreas[0]
  const generateButton = buttons[0];
  generateButton.addEventListener('click', generateProduct)

  const buyList = textAreas[1]
  const buyButton = buttons[1]
  buyButton.addEventListener('click', buyProduct)


  function generateProduct() {
    let products = JSON.parse(furnitureList.value);
    for (let product of products) {
      let imageElementTd = document.createElement('td');
      let imgElement = document.createElement('img');
      imgElement.src = product.img;
      imageElementTd.appendChild(imgElement);

      let nameElementTd = document.createElement('td');
      let nameParagraph = document.createElement('p');
      nameParagraph.textContent = product.name;
      nameElementTd.appendChild(nameParagraph)

      let priceElementTd = document.createElement('td');
      let priceParagraph = document.createElement('p');
      priceParagraph.textContent = product.price;
      priceElementTd.appendChild(priceParagraph);

      let decorationFactorElement = document.createElement('td');
      let decorationFactorParagraph = document.createElement('p');
      decorationFactorParagraph.textContent = product.decFactor;
      decorationFactorElement.appendChild(decorationFactorParagraph);

      let checkBoxElementTd = document.createElement('td');
      let checkboxInput = document.createElement('input')
      checkboxInput.setAttribute('type', 'checkbox');
      // checkboxInput.setAttribute('disabled', '')
      checkBoxElementTd.appendChild(checkboxInput);

      let tableRow = document.createElement('tr');
      tableRow.appendChild(imageElementTd);
      tableRow.appendChild(nameElementTd);
      tableRow.appendChild(priceElementTd);
      tableRow.appendChild(decorationFactorElement);
      tableRow.appendChild(checkBoxElementTd);

      table.appendChild(tableRow);
      furnitureList.value = ''


    }

  }
  function buyProduct() {
    const boughtProducts = [];
    let totalPrice = 0;
    let totalDecorationFactor = 0;
    let checkBoxes = table.querySelectorAll('td:last-child :checked');
    for (let checkbox of checkBoxes){
      if (checkbox.checked == true) {
        let parent = checkbox.parentElement.parentElement;

        let productName = parent.children[1].textContent;
        boughtProducts.push(productName);

        let productPrice = Number(parent.children[2].textContent);
        totalPrice += productPrice

        let productDecorationFactor = Number(parent.children[3].textContent);
        totalDecorationFactor += productDecorationFactor

      }
    }
    if (boughtProducts.length > 0){
      let averageDecorationFactor = totalDecorationFactor / boughtProducts.length
    
    buyList.textContent += `Bought furniture: ${boughtProducts.join(', ')}\n`
    buyList.textContent += `Total price: ${totalPrice.toFixed(2)}\n`
    buyList.textContent += `Average decoration factor: ${averageDecorationFactor}`
    }
  }
}