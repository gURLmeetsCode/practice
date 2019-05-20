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
        GFI: 5,
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


      await Promise.all([country1, country2, country3, aircraft1, aircraft2, aircraft3])

      console.log(green('Seeding success!'))
      return [country1, country2, country3, aircraft1, aircraft2, aircraft3];
      db.close()

  }
  catch(err){
    console.error(red('Oh noes! Something went wrong!'))
    console.error(err)
    db.close()
  }

}

seed()
