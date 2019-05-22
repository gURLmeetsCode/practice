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
        flagUrl: ''
      })
      const country2 = await Country.create({
        name: 'Italy',
        GFI: 3,
        flagUrl: ''
      })
      const country3 = await Country.create({
        name: 'Japan',
        GFI: 6,
        flagUrl: ''
      })
      const country4 = await Country.create({
        name: 'France',
        GFI: 8,
        flagUrl: ''
      })
      const country5 = await Country.create({
        name: 'Spain',
        GFI: 10,
        flagUrl: ''
      })
      const country6 = await Country.create({
        name: 'Germany',
        GFI: 0,
        flagUrl: ''
      })
      const country7 = await Country.create({
        name: 'Argentina',
        GFI: 1,
        flagUrl: ''
      })
      const country8 = await Country.create({
        name: 'Canada',
        GFI: 3,
        flagUrl: ''
      })
      const country9 = await Country.create({
        name: 'Russia',
        GFI: 0,
        flagUrl: ''
      })
      const country10 = await Country.create({
        name: 'Korea',
        GFI: 2,
        flagUrl: ''
      })


      // AIRCRAFTS
      const aircraft1 = await Aircraft.create({
          make: 'Northop A-17',
          model: 'A17',
          year: '1935',
          type: 'Attack',
          cost: 5000,
          imageUrl: '',
          description: 'was a two-seat, single-engine, monoplane, attack bomber built in 1935 by the Northrop Corporation for the U.S. Army Air Corps.',
          countryId: country1.id
        })

      const aircraft2 = await Aircraft.create({
          make: 'Leonardo Helicopters AW249',
          model: 'AW249',
          year: '1990',
          type: 'Attack',
          cost: 2000,
          imageUrl: '',
          description: 'The Leonardo Helicopters AW249 is an attack helicopter project under development by the Italian firm Leonardo S.p.A.',
          countryId: country2.id
        })

      const aircraft3 = await Aircraft.create({
          make: 'Mitsubishi A5M',
          model: 'A5M',
          year: '1935',
          type: 'Transport',
          cost: 18000,
          imageUrl: '',
          description: 'Mitsubishi Ka-14, was a Japanese carrier-based fighter aircraft. It was the worlds first monoplane',
          countryId: country3.id
        })

        const aircraft4 = await Aircraft.create({
            make: 'Aerotecnica AC-14',
            model: 'AC-14',
            year: '1957',
            type: 'Transport',
            cost: 1000,
            imageUrl: '',
            description: 'The Aerotécnica AC-14 was a Spanish five-seat light helicopter of the 1950s',
            countryId: country5.id
          })

          const aircraft5 = await Aircraft.create({
              make: 'American Eagle A-129',
              model: 'A-129',
              year: '1957',
              type: 'Versatile',
              cost: 500,
              imageUrl: '',
              description: 'The American Eagle A-129 was a 1920s biplane built in the U.S.A.',
              countryId: country1.id
            })

            const aircraft6 = await Aircraft.create({
                make: 'AEG',
                model: 'AEG Wagner Eule',
                year: '1915',
                type: 'Reconoissance',
                cost: 6500,
                imageUrl: '',
                description: 'The AEG Wagner Eule was a German reconnaissance aircraft built in 1914 by Allgemeine Electricitäts Gesellschaft.',
                countryId: country6.id
              })

              const aircraft7 = await Aircraft.create({
                  make: 'Aerfer Ariete',
                  model: 'Aerfer Ariete',
                  year: '1958',
                  type: 'Attack',
                  cost: 400,
                  imageUrl: '',
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
