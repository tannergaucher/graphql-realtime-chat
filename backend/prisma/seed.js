const { prisma } = require('../src/generated/prisma-client')

async function main() {
  await prisma.createUser({
    email: 'grimes@grimes.com',
    name: 'Grimes',
    password: 'password',
    avatarUrl:
      'https://res.cloudinary.com/tannergaucher/image/upload/v1557104220/chat-app/0713-grimes-getty-3.jpg',
  })

  await prisma.createUser({
    email: 'elon@gmail.com.com',
    name: 'Elon Musk',
    password: 'password',
    avatarUrl:
      'https://res.cloudinary.com/tannergaucher/image/upload/v1557104071/chat-app/0_UabFjZCc8yJ0JK3x.jpg',
  })

  await prisma.createUser({
    email: 'obama@gmail.com',
    name: 'Barack Obama',
    password: 'password',
    avatarUrl:
      'https://res.cloudinary.com/tannergaucher/image/upload/v1557104040/chat-app/obama-600x587.jpg',
  })

  await prisma.createUser({
    email: 'alexjones@gmail.com',
    name: 'Alex Jones',
    password: 'password',
    avatarUrl:
      'https://res.cloudinary.com/tannergaucher/image/upload/v1557104038/chat-app/images.jpg',
  })

  await prisma.createUser({
    email: 'donaldtrump@gmail.com',
    name: 'Donald Trump',
    password: 'password',
    avatarUrl:
      'https://res.cloudinary.com/tannergaucher/image/upload/v1557104035/chat-app/trump-video-games.jpg',
  })

  await prisma.createUser({
    email: 'timferris@gmail.com',
    name: 'Tim Ferris',
    password: 'password',
    avatarUrl:
      'https://res.cloudinary.com/tannergaucher/image/upload/v1557104033/chat-app/0_cyKQZFRV7QtIndBz.jpg',
  })

  await prisma.createUser({
    email: 'mpj@gmail.com',
    name: 'MPJ',
    password: 'password',
    avatarUrl:
      'https://res.cloudinary.com/tannergaucher/image/upload/v1557104030/chat-app/download.jpg',
  })

  await prisma.createUser({
    email: 'markzuckerberb@gmail.com',
    name: 'Mark Zuckerburg',
    password: 'password',
    avatarUrl:
      'https://res.cloudinary.com/tannergaucher/image/upload/v1557104029/chat-app/416x416-1.jpg',
  })

  await prisma.createUser({
    email: 'danabramov@gmail.com',
    name: 'Dan Abramov',
    password: 'password',
    avatarUrl:
      'https://res.cloudinary.com/tannergaucher/image/upload/v1557104028/chat-app/oapgW_Fp_400x400.jpg',
  })

  await prisma.createUser({
    email: 'satoshinakamoto@gmail.com',
    name: 'Satoshi Nakamoto',
    password: 'password',
    avatarUrl:
      'https://res.cloudinary.com/tannergaucher/image/upload/v1557104027/chat-app/AP325540479269-860x430.jpg',
  })

  await prisma.createUser({
    email: 'ericweinstein@gmail.com',
    name: 'Eric Weinstein',
    password: 'password',
    avatarUrl:
      'https://res.cloudinary.com/tannergaucher/image/upload/v1557104027/chat-app/eric-weinstein-intellectual-dark-web.jpg',
  })

  await prisma.createUser({
    email: 'joerogan@gmail.com',
    name: 'Joe Rogan',
    password: 'password',
    avatarUrl:
      'https://res.cloudinary.com/tannergaucher/image/upload/v1557104026/chat-app/1_rcjlb3CeIUak4Eqm5GD01A.png',
  })

  await prisma.createUser({
    email: 'hillaryclinton@gmail.com',
    name: 'Hillary Clinton',
    password: 'password',
    avatarUrl:
      'https://res.cloudinary.com/tannergaucher/image/upload/v1557104024/chat-app/Election_2020_Hillary_Clinton_23161.jpg-7a10e_c0-129-3101-1937_s885x516.jpg',
  })

  await prisma.createUser({
    email: 'wesbos@gmail.com',
    name: 'Wes Bos',
    password: 'password',
    avatarUrl:
      'https://res.cloudinary.com/tannergaucher/image/upload/v1557104024/chat-app/unnamed.jpg',
  })

  await prisma.createUser({
    email: 'oprah@gmail.com',
    name: 'Oprah',
    password: 'password',
    avatarUrl:
      'https://res.cloudinary.com/tannergaucher/image/upload/v1557104023/chat-app/Oprah-responds-to-million-dollar-chicken-recipe.jpg',
  })

  await prisma.createUser({
    email: 'peterthiel@gmail.com',
    name: 'Peter Thiel',
    password: 'password',
    avatarUrl:
      'https://res.cloudinary.com/tannergaucher/image/upload/v1557104023/chat-app/416x416.jpg',
  })

  await prisma.createUser({
    email: 'jordanpeterson@gmail.com',
    name: 'Jordan Peterson',
    password: 'password',
    avatarUrl:
      'https://res.cloudinary.com/tannergaucher/image/upload/v1557104022/chat-app/220px-Jordan_Peterson_June_2018.jpg',
  })

  await prisma.createUser({
    email: 'malcomgladwell@gmail.com',
    name: 'Malcom Gladwell',
    password: 'password',
  })

  await prisma.createUser({
    email: 'yuval@gmail.com',
    name: 'Yuval Noah Harari',
    password: 'password',
  })

  await prisma.createUser({
    email: 'stevenpinker@gmail.com',
    name: 'Steven Pinker',
    password: 'password',
  })

  await prisma.createUser({
    email: 'natalieportnam@gmail.com',
    name: 'Natalie Portman',
    password: 'password',
  })
}

main().catch(e => console.error(e))
