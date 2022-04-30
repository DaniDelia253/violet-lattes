const db = require('../config/connection');
const { User, Product } = require('../models');

db.once('open', async () => {
  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Hidden Bouquet Drawing',
      description:
        'hidden bouquet.',
      image: 'img1.png',
      image_link: 'https://drive.google.com/file/d/1BD-D2YmOclQFLeNMV-O9GR17y8FXvp6f/view?usp=sharing',
      price: 5.00,
      quantity: 10000
    },
    {
      name: 'Holly Jolly Fall ',
      description:
        'Holly Jolly Fall',
      image: 'img2.png',
      image_link: 'https://drive.google.com/file/d/1_GfqP2rf3c86LbLSA3YlAuXijPDQceeG/view?usp=sharing',
      price: 5.00,
      quantity: 10000
    },
    {
      name: 'Summertime Sweater',
      description:
        'Summertime Sweater',
      image: 'img3.png',
      image_link: 'https://drive.google.com/file/d/1tIVyLtya4-tq1_PyOIz12cneFZo-Jfiu/view?usp=sharing',
      price: 5.00,
      quantity: 10000
    },
    {
      name: 'inked portrait',
      description:
        'inked portrait',
      image: 'img4.png',
      image_link: 'https://drive.google.com/file/d/1-G8CYPDtgohBkrupnQTurnO2RMAm9bzF/view?usp=sharing',
      price: 5.00,
      quantity: 10000
    },
    {
      name: 'spacecatmagdalina',
      description:
        'spacecatmagdalina',
      image: 'img5.png',
      image_link: 'https://drive.google.com/file/d/1ca4w2o7qK4NUbd1gXOICNnXVmzCcD4dZ/view?usp=sharing',
      price: 5.00,
      quantity: 10000
    },
    {
      name: 'Girls Who Lift',
      description: 'Girls Who Lift',
      image: 'img6.png',
      image_link: 'https://drive.google.com/file/d/1YmtnSCkBzEl4asahMURidFzx-ARE0fYz/view?usp=sharing',
      price: 5.00,
      quantity: 10000
    },
    {
      name: 'Bubble Tea Bops',
      description: 'Bubble Tea Bops',
      image: 'img7.png',
      image_link: 'https://drive.google.com/file/d/1W-cK0KXcszijHtYJUxSdxoBtVZYzjSDP/view?usp=sharing',
      price: 5.00,
      quantity: 10000
    },
    {
      name: 'Be My Valentine',
      description: 'Be My Valentine',
      image: 'img8.png',
      image_link: 'https://drive.google.com/file/d/1_eJi-Br1m8cdalA_H6tvY0IOxJLgQY_i/view?usp=sharing',
      price: 5.00,
      quantity: 10000
    },
    {
      name: 'Fizzy Grape Soda',
      description: 'Fizzy Grape Soda',
      image: 'img9.png',
      image_link: 'https://drive.google.com/file/d/1eKGhciENeAp4tvOzXOkReg2iXTv6Mmrx/view?usp=sharing',
      price: 5.00,
      quantity: 10000
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
