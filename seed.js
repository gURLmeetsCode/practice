const db = require('./server/db/_db')
const { Aircraft, Country} = require('./server/db/models')
const {green, red} = require('chalk')

// seed your database here!
  // const Aircraft = require('./server/db/models/Aircrafts');
  // const Country = require('./server/db/models/Countries')


  const seed = async () => {
    try {
      await db.sync({force: true})

      // COUNTRIES
      const country1 = await Country.create({
        name: 'United States of America',
        GFI: 9,
        flagUrl: 'https://cdn2.bigcommerce.com/server5000/250c5/products/465/images/599/american-flag-14__00474.1498062105.1280.1280.jpg?c=2'
      })
      const country2 = await Country.create({
        name: 'Italy',
        GFI: 3,
        flagUrl: 'https://www.worldatlas.com/webimage/flags/countrys/zzzflags/itlarge.gif'
      })
      const country3 = await Country.create({
        name: 'Japan',
        GFI: 6,
        flagUrl: 'https://www.worldatlas.com/r/w728-h425-c728x425/upload/2d/d4/a7/untitled-design-153.jpg'
      })
      const country4 = await Country.create({
        name: 'France',
        GFI: 8,
        flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1920px-Flag_of_France.svg.png'
      })
      const country5 = await Country.create({
        name: 'Spain',
        GFI: 10,
        flagUrl: 'https://www.worldatlas.com/r/w728-h425-c728x425/upload/23/08/01/shutterstock-104644850.jpg'
      })
      const country6 = await Country.create({
        name: 'Germany',
        GFI: 0,
        flagUrl: 'https://www.worldatlas.com/r/w728-h425-c728x425/upload/63/3f/7a/untitled-design-281.jpg'
      })
      const country7 = await Country.create({
        name: 'Argentina',
        GFI: 1,
        flagUrl: 'https://www.worldatlas.com/r/w728-h425-c728x425/upload/ad/a6/68/ar-flag-min.jpg'
      })
      const country8 = await Country.create({
        name: 'Canada',
        GFI: 3,
        flagUrl: 'https://www.graphicmaps.com/r/w1047/images/flags/ca-flag.jpg'
      })
      const country9 = await Country.create({
        name: 'Russia',
        GFI: 0,
        flagUrl: 'https://www.mapsofworld.com/images/world-countries-flags/russian-federation-flag.gif'
      })
      const country10 = await Country.create({
        name: 'Korea',
        GFI: 2,
        flagUrl: 'https://www.worldatlas.com/webimage/flags/countrys/zzzflags/krlarge.gif'
      })


      // AIRCRAFTS
      const aircraft1 = await Aircraft.create({
          make: 'Northop A-17',
          model: 'A17',
          year: '1935',
          type: 'Attack',
          cost: 5000,
          imageUrl: 'https://media.defense.gov/2005/Dec/28/2000571475/1088/820/0/051116-F-1234P-103.JPG',
          description: 'was a two-seat, single-engine, monoplane, attack bomber built in 1935 by the Northrop Corporation for the U.S. Army Air Corps.',
          countryId: country1.id
        })

      const aircraft2 = await Aircraft.create({
          make: 'Leonardo Helicopters AW249',
          model: 'AW249',
          year: '1990',
          type: 'Attack',
          cost: 2000,
          imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/89/Leonardo_AW249.jpeg',
          description: 'The Leonardo Helicopters AW249 is an attack helicopter project under development by the Italian firm Leonardo S.p.A.',
          countryId: country2.id
        })

      const aircraft3 = await Aircraft.create({
          make: 'Mitsubishi A5M',
          model: 'A5M',
          year: '1935',
          type: 'Transport',
          cost: 18000,
          imageUrl: 'https://i1075.photobucket.com/albums/w436/JapaneseAviationAndMore/CARRIER%20UNITS%20-%2012/QI-107photo1_zps16d235f3.jpg',
          description: 'Mitsubishi Ka-14, was a Japanese carrier-based fighter aircraft. It was the worlds first monoplane',
          countryId: country3.id
        })

        const aircraft4 = await Aircraft.create({
            make: 'Aerotecnica AC-14',
            model: 'AC-14',
            year: '1957',
            type: 'Transport',
            cost: 1000,
            imageUrl: 'https://cdn.jetphotos.com/full/2/26704_1207384045.jpg',
            description: 'The Aerotécnica AC-14 was a Spanish five-seat light helicopter of the 1950s',
            countryId: country5.id
          })

          const aircraft5 = await Aircraft.create({
              make: 'American Eagle A-129',
              model: 'A-129',
              year: '1957',
              type: 'Versatile',
              cost: 500,
              imageUrl: 'https://images.wisconsinhistory.org/700015140001/1514000007-l.jpg',
              description: 'The American Eagle A-129 was a 1920s biplane built in the U.S.A.',
              countryId: country1.id
            })

            const aircraft6 = await Aircraft.create({
                make: 'AEG',
                model: 'AEG Wagner Eule',
                year: '1915',
                type: 'Reconoissance',
                cost: 6500,
                imageUrl: 'http://www.samolotypolskie.pl/uploads/Products/product_195/AEG_E-2_Wagner_Eule.jpg',
                description: 'The AEG Wagner Eule was a German reconnaissance aircraft built in 1914 by Allgemeine Electricitäts Gesellschaft.',
                countryId: country6.id
              })

              const aircraft7 = await Aircraft.create({
                  make: 'Aerfer Ariete',
                  model: 'Aerfer Ariete',
                  year: '1958',
                  type: 'Attack',
                  cost: 400,
                  imageUrl: 'http://www.diseno-art.com/images_9/Aerfer-Ariette-4.jpg',
                  description: 'The Aerfer Ariete (Italian for Ram) was a prototype fighter aircraft built in Italy in 1958.',
                  countryId: country2.id
                })



      await Promise.all([country1, country2, country3, country4, country5, country6, country7, country8, country9, country10, aircraft1, aircraft2, aircraft3, aircraft4, aircraft5, aircraft6, aircraft7])

      console.log(green('Seeding success!'))
      return [country1, country2, country3, country4, country5, country6, country7, country8, country9, country10, aircraft1, aircraft2, aircraft3, aircraft4, aircraft5, aircraft6, aircraft7];
      db.close()

  }
  catch(err){
    console.error(red('Oh noes! Something went wrong!'))
    console.error(err)
    db.close()
  }

}

seed()
