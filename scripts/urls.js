// channels_mobile:{
//   url:'http://telus.com/en/shop/home/pik/channels',
//   options:{
//     rootElement: 'main>section',
//     viewport: { "width": 480, "height": 600 }
//   }
// },
// channels_desktop:{
//   url:'http://telus.com/en/shop/home/pik/channels',
//   options:{
//     rootElement: 'main>section',
//     viewport: { "width": 1280, "height": 1024 }
//   }
// }

module.exports = {
  'Pik Home': {
    url: 'http://telus.com/en/shop/home/pik',
    options: {
      rootElement: 'main>section',
      viewport: { 'width': 1280, 'height': 1024 }
    }
  },
  'Telus.com': {
    url: 'http://telus.com'
  }
}
