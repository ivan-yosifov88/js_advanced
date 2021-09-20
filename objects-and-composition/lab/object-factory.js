function factory(library, orders){
  let products = []
    for (const order of orders){
      const composer = Object.assign({}, order.template)
      for (let part of order.parts){
        composer[part] = library[part]
      }
        products.push(composer)
    }
    return products
}

const library = {
    print: function () {
      console.log(`${this.name} is printing a page`);
    },
    scan: function () {
      console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
      console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
  };
  const orders = [
    {
      template: { name: 'ACME Printer'},
      parts: ['print']      
    },
    {
      template: { name: 'Initech Scanner'},
      parts: ['scan']      
    },
    {
      template: { name: 'ComTron Copier'},
      parts: ['scan', 'print']      
    },
    {
      template: { name: 'BoomBox Stereo'},
      parts: ['play']      
    },
  ];
  const products = factory(library, orders);
  console.log(products);

const player = products[3]
player.play('Bibi', 'Bibi\'s favorite song')
  