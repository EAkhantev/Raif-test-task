import { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import { Button, Flex, Input, Table } from 'vienna-ui';

const responseMock: Response = {
  docs: [
    {
      _id: '5cd99d4bde30eff6ebccfbbe',
      name: 'Adanel',
      wikiUrl: 'http://lotr.wikia.com//wiki/Adanel',
      race: 'Human',
      birth: null,
      gender: 'Female',
      death: null,
      hair: null,
      height: null,
      realm: null,
      spouse: 'Belemir',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbbf',
      name: 'Adrahil I',
      wikiUrl: 'http://lotr.wikia.com//wiki/Adrahil_I',
      race: 'Human',
      birth: 'Before ,TA 1944',
      gender: 'Male',
      death: 'Late ,Third Age',
      hair: null,
      height: null,
      realm: null,
      spouse: null,
    },
    {
      _id: '5cd99d4bde30eff6ebccfbc0',
      name: 'Adrahil II',
      wikiUrl: 'http://lotr.wikia.com//wiki/Adrahil_II',
      race: 'Human',
      birth: 'TA 2917',
      gender: 'Male',
      death: 'TA 3010',
      hair: null,
      height: null,
      realm: null,
      spouse: 'Unnamed wife',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbc1',
      name: 'Aegnor',
      wikiUrl: 'http://lotr.wikia.com//wiki/Aegnor',
      race: 'Elf',
      birth: 'YT during the ,Noontide of Valinor',
      gender: 'Male',
      death: 'FA 455',
      hair: 'Golden',
      height: null,
      realm: null,
      spouse: 'Loved ,Andreth but remained unmarried',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbc2',
      name: 'Aerin',
      wikiUrl: 'http://lotr.wikia.com//wiki/Aerin',
      race: 'Human',
      birth: 'Mid ,First Age',
      gender: 'Female',
      death: 'FA 495',
      hair: null,
      height: null,
      realm: null,
      spouse: 'Brodda',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbc3',
      name: 'Ailinel',
      wikiUrl: 'http://lotr.wikia.com//wiki/Ailinel',
      race: 'Human',
      birth: 'Between ,SA 700, and ,SA 750',
      gender: 'Female',
      death: 'Early ,Second Age',
      hair: null,
      height: null,
      realm: null,
      spouse: 'Orchaldor',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbc4',
      name: 'Aglahad',
      wikiUrl: 'http://lotr.wikia.com//wiki/Aglahad',
      race: 'Human',
      birth: 'TA 2827',
      gender: 'Male',
      death: 'TA 2932',
      hair: null,
      height: null,
      realm: null,
      spouse: 'Unnamed wife',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbc5',
      name: 'Algund',
      wikiUrl: 'http://lotr.wikia.com//wiki/Algund',
      race: 'Human',
      birth: 'Late ,First Age',
      gender: 'Male',
      death: 'FA 489',
      hair: null,
      height: null,
      realm: null,
      spouse: 'None known',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbc6',
      name: 'Almiel',
      wikiUrl: 'http://lotr.wikia.com//wiki/Almiel',
      race: 'Human',
      birth: 'Between ,SA 700, and ,SA 750',
      gender: 'Female',
      death: 'Early ,Second Age',
      hair: null,
      height: null,
      realm: null,
      spouse: null,
    },
    {
      _id: '5cd99d4bde30eff6ebccfbc7',
      name: 'Alphros',
      wikiUrl: 'http://lotr.wikia.com//wiki/Alphros',
      race: 'Human',
      birth: 'TA 3017',
      gender: 'Male',
      death: 'FO 95',
      hair: null,
      height: null,
      realm: null,
      spouse: null,
    },
    {
      _id: '5cd99d4bde30eff6ebccfbc8',
      name: 'Almarian',
      wikiUrl: 'http://lotr.wikia.com//wiki/Almarian',
      race: 'Human',
      birth: null,
      gender: 'Female',
      death: null,
      hair: null,
      height: null,
      realm: 'Númenor',
      spouse: 'Tar-Meneldur',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbc9',
      name: 'Amandil',
      wikiUrl: 'http://lotr.wikia.com//wiki/Amandil',
      race: 'Human',
      birth: 'Late ,Second Age',
      gender: 'Male',
      death: 'Sailed West either SA 3310 fate unknown',
      hair: null,
      height: null,
      realm: null,
      spouse: 'Unnamed wife',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbca',
      name: 'Amarië',
      wikiUrl: 'http://lotr.wikia.com//wiki/Amari%C3%AB',
      race: 'Elf',
      birth: 'YT',
      gender: 'Female',
      death: 'Still alive',
      hair: null,
      height: null,
      realm: null,
      spouse: 'Loved ,Finrod, but it is unknown whether they married',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbcb',
      name: 'Aldor',
      wikiUrl: 'http://lotr.wikia.com//wiki/Aldor',
      race: 'Human',
      birth: 'TA 2544',
      gender: 'Male',
      death: 'TA 2645',
      hair: null,
      height: null,
      realm: 'Rohan',
      spouse: 'Unnamed wife',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbcc',
      name: 'Aldamir',
      wikiUrl: 'http://lotr.wikia.com//wiki/Aldamir',
      race: 'Human',
      birth: 'TA 1330',
      gender: 'Male',
      death: 'TA 1540',
      hair: null,
      height: null,
      realm: 'Gondor',
      spouse: 'Unnamed wife',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbcd',
      name: 'Amlaith',
      wikiUrl: 'http://lotr.wikia.com//wiki/Amlaith',
      race: 'Human',
      birth: 'TA 726',
      gender: 'Male',
      death: 'TA 946',
      hair: null,
      height: null,
      realm: 'Arthedain',
      spouse: 'Unnamed wife',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbce',
      name: 'Amroth',
      wikiUrl: 'http://lotr.wikia.com//wiki/Amroth',
      race: 'Elf',
      birth: null,
      gender: 'Male',
      death: 'TA 1981',
      hair: 'Golden',
      height: null,
      realm: 'Lórien',
      spouse: 'Nimrodel',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbcf',
      name: 'Amrothos',
      wikiUrl: 'http://lotr.wikia.com//wiki/Amrothos',
      race: 'Human',
      birth: 'TA 2994',
      gender: 'Male',
      death: null,
      hair: null,
      height: null,
      realm: null,
      spouse: null,
    },
    {
      _id: '5cd99d4bde30eff6ebccfbd0',
      name: 'Anairë',
      wikiUrl: 'http://lotr.wikia.com//wiki/Anair%C3%AB',
      race: 'Elf',
      birth: 'YT',
      gender: 'Female',
      death: null,
      hair: null,
      height: null,
      realm: null,
      spouse: 'Fingolfin',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbd1',
      name: 'Anardil',
      wikiUrl: 'http://lotr.wikia.com//wiki/Anardil',
      race: 'Human',
      birth: 'TA 136',
      gender: 'Male',
      death: 'TA 411',
      hair: null,
      height: null,
      realm: 'Gondor',
      spouse: 'Unnamed wife',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbd2',
      name: 'Anborn',
      wikiUrl: 'http://lotr.wikia.com//wiki/Anborn',
      race: 'Human',
      birth: 'Late ,Third Age',
      gender: 'Male',
      death: null,
      hair: 'Dark',
      height: null,
      realm: null,
      spouse: null,
    },
    {
      _id: '5cd99d4bde30eff6ebccfbd3',
      name: 'Andreth',
      wikiUrl: 'http://lotr.wikia.com//wiki/Andreth',
      race: 'Human',
      birth: 'FA 361',
      gender: 'Female',
      death: 'FA 455',
      hair: 'Dark brown',
      height: null,
      realm: null,
      spouse: 'Loved ,Aegnor, but they never married',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbd4',
      name: 'Andróg',
      wikiUrl: 'http://lotr.wikia.com//wiki/Andr%C3%B3g',
      race: 'Human',
      birth: 'FA 440',
      gender: 'Male',
      death: 'FA 489',
      hair: null,
      height: null,
      realm: null,
      spouse: 'Unnamed wife',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbd5',
      name: 'Amras',
      wikiUrl: 'http://lotr.wikia.com//wiki/Amras',
      race: 'Elf',
      birth: 'Years of the Trees',
      gender: 'Male',
      death: 'FA 538',
      hair: 'Dark red',
      height: null,
      realm: 'Estolad',
      spouse: null,
    },
    {
      _id: '5cd99d4bde30eff6ebccfbd6',
      name: 'Angamaitë',
      wikiUrl: 'http://lotr.wikia.com//wiki/Angamait%C3%AB',
      race: 'Human',
      birth: 'Mid-,Third Age',
      gender: 'Male',
      death: null,
      hair: null,
      height: null,
      realm: null,
      spouse: null,
    },
    {
      _id: '5cd99d4bde30eff6ebccfbd7',
      name: 'Amdír',
      wikiUrl: 'http://lotr.wikia.com//wiki/Amd%C3%ADr',
      race: 'Elf',
      birth: 'Sometime during ,Years of the Trees, or the ,First Age',
      gender: 'Male',
      death: 'SA 3434',
      hair: null,
      height: null,
      realm: 'Lórien',
      spouse: 'Unnamed wife',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbd8',
      name: 'Amrod',
      wikiUrl: 'http://lotr.wikia.com//wiki/Amrod',
      race: 'Elf',
      birth: 'Years of the Trees',
      gender: 'Male',
      death: 'YT 1497 ,Losgar',
      hair: 'Dark red',
      height: null,
      realm: null,
      spouse: null,
    },
    {
      _id: '5cd99d4bde30eff6ebccfbd9',
      name: 'Annael',
      wikiUrl: 'http://lotr.wikia.com//wiki/Annael',
      race: 'Elf',
      birth: null,
      gender: 'Male',
      death: null,
      hair: null,
      height: null,
      realm: null,
      spouse: null,
    },
    {
      _id: '5cd99d4bde30eff6ebccfbda',
      name: 'Angbor',
      wikiUrl: 'http://lotr.wikia.com//wiki/Angbor',
      race: 'Human',
      birth: 'Late ,Third Age',
      gender: 'Male',
      death: null,
      hair: null,
      height: null,
      realm: null,
      spouse: null,
    },
    {
      _id: '5cd99d4bde30eff6ebccfbdb',
      name: 'Angelimir',
      wikiUrl: 'http://lotr.wikia.com//wiki/Angelimir',
      race: 'Human',
      birth: 'TA 2866',
      gender: 'Male',
      death: 'TA 2977',
      hair: null,
      height: null,
      realm: null,
      spouse: 'Unnamed wife',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbdc',
      name: 'Angrod',
      wikiUrl: 'http://lotr.wikia.com//wiki/Angrod',
      race: 'Elf',
      birth: 'YT',
      gender: 'Male',
      death: 'FA 455',
      hair: 'Golden',
      height: null,
      realm: null,
      spouse: 'Eldalótë',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbdd',
      name: 'Anárion',
      wikiUrl: 'http://lotr.wikia.com//wiki/An%C3%A1rion',
      race: 'Human',
      birth: 'SA 3219',
      gender: 'Male',
      death: 'SA 3440',
      hair: null,
      height: null,
      realm: 'Gondor',
      spouse: 'Unnamed wife',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbde',
      name: 'Ar-Adûnakhôr',
      wikiUrl: 'http://lotr.wikia.com//wiki/Ar-Ad%C3%BBnakh%C3%B4r',
      race: 'Human',
      birth: 'SA 2709',
      gender: 'Male',
      death: 'SA 2962',
      hair: null,
      height: null,
      realm: 'Númenor',
      spouse: 'Unnamed wife',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbdf',
      name: 'Ar-Gimilzôr',
      wikiUrl: 'http://lotr.wikia.com//wiki/Ar-Gimilz%C3%B4r',
      race: 'Human',
      birth: 'SA 2960',
      gender: 'Male',
      death: 'SA 3177',
      hair: null,
      height: null,
      realm: 'Númenor',
      spouse: 'Inzilbêth',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbe0',
      name: 'Ar-Zimrathôn',
      wikiUrl: 'http://lotr.wikia.com//wiki/Ar-Zimrath%C3%B4n',
      race: 'Human',
      birth: 'SA 2798',
      gender: 'Male',
      death: 'SA 3033',
      hair: null,
      height: null,
      realm: 'Númenor',
      spouse: 'Unnamed wife',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbe1',
      name: 'Ar-Pharazôn',
      wikiUrl: 'http://lotr.wikia.com//wiki/Ar-Pharaz%C3%B4n',
      race: 'Human',
      birth: 'SA 3118',
      gender: 'Male',
      death: 'Still alive',
      hair: null,
      height: 'Tall',
      realm: 'Númenor',
      spouse: 'Tar-Míriel',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbe2',
      name: 'Ar-Sakalthôr',
      wikiUrl: 'http://lotr.wikia.com//wiki/Ar-Sakalth%C3%B4r',
      race: 'Human',
      birth: 'SA 2876',
      gender: 'Male',
      death: 'SA 3102',
      hair: null,
      height: null,
      realm: 'Númenor',
      spouse: 'Unnamed wife',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbe3',
      name: 'Arador',
      wikiUrl: 'http://lotr.wikia.com//wiki/Arador',
      race: 'Human',
      birth: 'TA 2820',
      gender: 'Male',
      death: 'TA 2930',
      hair: 'Dark, then grey (film)',
      height: null,
      realm: null,
      spouse: 'Unnamed wife',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbe4',
      name: 'Araglas',
      wikiUrl: 'http://lotr.wikia.com//wiki/Araglas',
      race: 'Human',
      birth: 'TA 2296',
      gender: 'Male',
      death: 'TA 2455',
      hair: null,
      height: null,
      realm: null,
      spouse: 'Unnamed wife',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbe5',
      name: 'Aragorn I',
      wikiUrl: 'http://lotr.wikia.com//wiki/Aragorn_I',
      race: 'Human',
      birth: 'TA 2227',
      gender: 'Male',
      death: 'TA 2327',
      hair: null,
      height: null,
      realm: null,
      spouse: 'Unnamed wife',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbe6',
      name: 'Aragorn II Elessar',
      wikiUrl: 'http://lotr.wikia.com//wiki/Aragorn_II_Elessar',
      race: 'Human',
      birth: 'March 1 ,2931',
      gender: 'Male',
      death: 'FO 120',
      hair: 'Dark',
      height: '198cm (6\'6")',
      realm: 'Reunited Kingdom,Arnor,Gondor',
      spouse: 'Arwen',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbe7',
      name: 'Aragost',
      wikiUrl: 'http://lotr.wikia.com//wiki/Aragost',
      race: 'Human',
      birth: 'TA 2431',
      gender: 'Male',
      death: 'TA 2588',
      hair: null,
      height: null,
      realm: null,
      spouse: 'Unnamed wife',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbe8',
      name: 'Arahad I',
      wikiUrl: 'http://lotr.wikia.com//wiki/Arahad_I',
      race: 'Human',
      birth: 'TA 2365',
      gender: 'Male',
      death: 'TA 2523',
      hair: null,
      height: null,
      realm: null,
      spouse: 'Unnamed wife',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbe9',
      name: 'Arahad II',
      wikiUrl: 'http://lotr.wikia.com//wiki/Arahad_II',
      race: 'Human',
      birth: 'TA 2563',
      gender: 'Male',
      death: 'TA 2719',
      hair: null,
      height: null,
      realm: null,
      spouse: 'Unnamed wife',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbea',
      name: 'Arahael',
      wikiUrl: 'http://lotr.wikia.com//wiki/Arahael',
      race: 'Human',
      birth: 'TA 2012',
      gender: 'Male',
      death: 'TA 2177',
      hair: null,
      height: null,
      realm: null,
      spouse: 'Unnamed wife',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbeb',
      name: 'Aranarth',
      wikiUrl: 'http://lotr.wikia.com//wiki/Aranarth',
      race: 'Human',
      birth: 'TA 1938',
      gender: 'Male',
      death: 'TA 2106',
      hair: null,
      height: null,
      realm: null,
      spouse: 'Unnamed wife',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbec',
      name: 'Arantar',
      wikiUrl: 'http://lotr.wikia.com//wiki/Arantar',
      race: 'Human',
      birth: 'TA 185',
      gender: 'Male',
      death: 'TA 435',
      hair: null,
      height: null,
      realm: 'Arnor',
      spouse: 'Unnamed wife',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbed',
      name: 'Aranuir',
      wikiUrl: 'http://lotr.wikia.com//wiki/Aranuir',
      race: 'Human',
      birth: 'TA 2084',
      gender: 'Male',
      death: 'TA 2247',
      hair: null,
      height: null,
      realm: null,
      spouse: 'Unnamed wife',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbee',
      name: 'Aranwë',
      wikiUrl: 'http://lotr.wikia.com//wiki/Aranw%C3%AB',
      race: 'Elf',
      birth: null,
      gender: 'Male',
      death: null,
      hair: null,
      height: null,
      realm: null,
      spouse: 'Unnamed wife',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbef',
      name: 'Araphant',
      wikiUrl: 'http://lotr.wikia.com//wiki/Araphant',
      race: 'Human',
      birth: 'TA 1789',
      gender: 'Male',
      death: 'TA 1964',
      hair: null,
      height: null,
      realm: 'Arthedain',
      spouse: 'Unnamed wife',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbf0',
      name: 'Arathorn I',
      wikiUrl: 'http://lotr.wikia.com//wiki/Arathorn_I',
      race: 'Human',
      birth: 'TA 2693',
      gender: 'Male',
      death: 'TA 2848',
      hair: null,
      height: null,
      realm: null,
      spouse: 'Unnamed wife',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbf1',
      name: 'Arathorn II',
      wikiUrl: 'http://lotr.wikia.com//wiki/Arathorn_II',
      race: 'Human',
      birth: 'TA 2873',
      gender: 'Male',
      death: 'TA 2933',
      hair: 'Dark (film)',
      height: null,
      realm: null,
      spouse: 'Gilraen',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbf2',
      name: 'Araval',
      wikiUrl: 'http://lotr.wikia.com//wiki/Araval',
      race: 'Human',
      birth: 'TA 1711',
      gender: 'Male',
      death: 'TA 1891',
      hair: null,
      height: null,
      realm: 'Arthedain,Arnor',
      spouse: 'Unnamed wife',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbf3',
      name: 'Aravir',
      wikiUrl: 'http://lotr.wikia.com//wiki/Aravir',
      race: 'Human',
      birth: 'TA 2156',
      gender: 'Male',
      death: 'TA 2319',
      hair: null,
      height: null,
      realm: null,
      spouse: 'Unnamed wife',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbf4',
      name: 'Aravorn',
      wikiUrl: 'http://lotr.wikia.com//wiki/Aravorn',
      race: 'Human',
      birth: 'TA 2497',
      gender: 'Male',
      death: 'TA 2654',
      hair: null,
      height: null,
      realm: null,
      spouse: 'Unnamed wife',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbf5',
      name: 'Arciryas',
      wikiUrl: 'http://lotr.wikia.com//wiki/Arciryas',
      race: 'Human',
      birth: 'After ,TA 1684',
      gender: 'Male',
      death: null,
      hair: null,
      height: null,
      realm: null,
      spouse: 'Unnamed wife',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbf6',
      name: 'Arassuil',
      wikiUrl: 'http://lotr.wikia.com//wiki/Arassuil',
      race: 'Human',
      birth: 'TA 2628',
      gender: 'Male',
      death: 'TA 2784',
      hair: null,
      height: null,
      realm: null,
      spouse: 'Unnamed wife',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbf7',
      name: 'Araphor',
      wikiUrl: 'http://lotr.wikia.com//wiki/Araphor',
      race: 'Human',
      birth: 'TA 1391',
      gender: 'Male',
      death: 'TA 1589',
      hair: null,
      height: null,
      realm: 'Arthedain',
      spouse: 'Unnamed wife',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbf8',
      name: 'Aratan',
      wikiUrl: 'http://lotr.wikia.com//wiki/Aratan',
      race: 'Human',
      birth: 'SA 3339',
      gender: 'Male',
      death: null,
      hair: null,
      height: null,
      realm: 'TA 2',
      spouse: 'Unknown, possibly known',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbf9',
      name: 'Ardamir (son of Axantur)',
      wikiUrl: 'http://lotr.wikia.com//wiki/Ardamir_(son_of_Axantur)',
      race: 'Human',
      birth: 'SA 562',
      gender: 'Male',
      death: null,
      hair: null,
      height: null,
      realm: null,
      spouse: null,
    },
    {
      _id: '5cd99d4bde30eff6ebccfbfa',
      name: 'Aredhel',
      wikiUrl: 'http://lotr.wikia.com//wiki/Aredhel',
      race: 'Elf',
      birth: 'YT 1362',
      gender: 'Female',
      death: 'FA 400',
      hair: 'Dark',
      height: 'Tall',
      realm: null,
      spouse: 'Eöl',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbfb',
      name: 'Argeleb I',
      wikiUrl: 'http://lotr.wikia.com//wiki/Argeleb_I',
      race: 'Human',
      birth: 'TA 1226',
      gender: 'Male',
      death: 'TA 1356',
      hair: null,
      height: null,
      realm: 'Arthedain,Arnor',
      spouse: 'Unnamed wife',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbfc',
      name: 'Arminas',
      wikiUrl: 'http://lotr.wikia.com//wiki/Arminas',
      race: 'Elf',
      birth: null,
      gender: 'Male',
      death: null,
      hair: null,
      height: null,
      realm: null,
      spouse: null,
    },
    {
      _id: '5cd99d4bde30eff6ebccfbfd',
      name: 'Arthad',
      wikiUrl: 'http://lotr.wikia.com//wiki/Arthad',
      race: 'Human',
      birth: 'Late ,First Age',
      gender: 'Male',
      death: 'FA 460',
      hair: null,
      height: null,
      realm: null,
      spouse: null,
    },
    {
      _id: '5cd99d4bde30eff6ebccfbfe',
      name: 'Arvedui',
      wikiUrl: 'http://lotr.wikia.com//wiki/Arvedui',
      race: 'Human',
      birth: 'TA 1864',
      gender: 'Male',
      death: 'TA 1975',
      hair: null,
      height: null,
      realm: 'Arthedain',
      spouse: 'Fíriel',
    },
    {
      _id: '5cd99d4bde30eff6ebccfbff',
      name: 'Arvegil',
      wikiUrl: 'http://lotr.wikia.com//wiki/Arvegil',
      race: 'Human',
      birth: 'TA 1553',
      gender: 'Male',
      death: 'TA 1743',
      hair: null,
      height: null,
      realm: 'Arthedain,Arnor',
      spouse: 'Unnamed wife',
    },
    {
      _id: '5cd99d4bde30eff6ebccfc00',
      name: 'Arveleg I',
      wikiUrl: 'http://lotr.wikia.com//wiki/Arveleg_I',
      race: 'Human',
      birth: 'TA 1309',
      gender: 'Male',
      death: 'TA 1409',
      hair: null,
      height: null,
      realm: 'Arnor,Arthedain',
      spouse: 'Unnamed wife',
    },
    {
      _id: '5cd99d4bde30eff6ebccfc01',
      name: 'Arveleg II',
      wikiUrl: 'http://lotr.wikia.com//wiki/Arveleg_II',
      race: 'Human',
      birth: 'TA 1633',
      gender: 'Male',
      death: 'TA 1813',
      hair: null,
      height: null,
      realm: 'Arthedain,Arnor',
      spouse: 'Unnamed wife',
    },
    {
      _id: '5cd99d4bde30eff6ebccfc02',
      name: 'Argon',
      wikiUrl: 'http://lotr.wikia.com//wiki/Argon',
      race: 'Elf',
      birth: 'Years of the Trees',
      gender: 'Male',
      death: 'YT 1500, or ,FA 1 ,Battle of the Lammoth',
      hair: 'Possibly dark',
      height: 'Tall',
      realm: null,
      spouse: null,
    },
    {
      _id: '5cd99d4bde30eff6ebccfc03',
      name: 'Argonui',
      wikiUrl: 'http://lotr.wikia.com//wiki/Argonui',
      race: 'Human',
      birth: 'TA 2757',
      gender: 'Male',
      death: 'TA 2912',
      hair: null,
      height: null,
      realm: null,
      spouse: 'Unnamed wife',
    },
    {
      _id: '5cd99d4bde30eff6ebccfc04',
      name: 'Argeleb II',
      wikiUrl: 'http://lotr.wikia.com//wiki/Argeleb_II',
      race: 'Human',
      birth: 'TA 1473',
      gender: 'Male',
      death: 'TA 1670',
      hair: null,
      height: null,
      realm: 'Arthedain',
      spouse: 'Unnamed wife',
    },
    {
      _id: '5cd99d4bde30eff6ebccfc05',
      name: 'Atanatar II',
      wikiUrl: 'http://lotr.wikia.com//wiki/Atanatar_II',
      race: 'Human',
      birth: 'TA 977',
      gender: 'Male',
      death: 'TA 1226',
      hair: null,
      height: null,
      realm: 'Gondor',
      spouse: 'Unnamed wife',
    },
    {
      _id: '5cd99d4bde30eff6ebccfc06',
      name: 'Atanalcar',
      wikiUrl: 'http://lotr.wikia.com//wiki/Atanalcar',
      race: 'Human',
      birth: 'After ,SA 61',
      gender: 'Male',
      death: 'Early ,Second Age',
      hair: null,
      height: null,
      realm: null,
      spouse: 'Possible unnamed wife',
    },
    {
      _id: '5cd99d4bde30eff6ebccfc07',
      name: 'Arwen',
      wikiUrl: 'http://lotr.wikia.com//wiki/Arwen',
      race: 'Elf',
      birth: 'TA 241',
      gender: 'Female',
      death: 'FO 121',
      hair: 'Black',
      height: null,
      realm: 'Reunited Kingdom',
      spouse: 'Aragorn II Elessar',
    },
    {
      _id: '5cd99d4bde30eff6ebccfc08',
      name: 'Azaghâl',
      wikiUrl: 'http://lotr.wikia.com//wiki/Azagh%C3%A2l',
      race: 'Dwarf',
      birth: 'FA 214',
      gender: 'Male',
      death: 'FA 473',
      hair: null,
      height: null,
      realm: null,
      spouse: null,
    },
    {
      _id: '5cd99d4bde30eff6ebccfc09',
      name: "Aulendil (Vardamir's son)",
      wikiUrl: 'http://lotr.wikia.com//wiki/Aulendil_(Vardamir%27s_son)',
      race: 'Human',
      birth: 'SA 213',
      gender: 'Male',
      death: 'Early ,Second Age',
      hair: null,
      height: null,
      realm: null,
      spouse: 'Unnamed wife',
    },
  ],
  total: 933,
  limit: 1000,
  offset: 0,
  page: 1,
  pages: 1,
};

interface Response {
  docs: DocsData[];
  total: number;
  limit: number;
  offset: number;
  page: number;
  pages: number;
}

interface DocsData {
  _id: string;
  name: string | null;
  wikiUrl: string | null;
  race: string | null;
  birth: string | null;
  gender: string | null;
  death: string | null;
  hair: string | null;
  height: string | null;
  realm: string | null;
  spouse: string | null;
}

interface TableRows {
  id: string;
  uuid: string;
  name: string;
  gender: string;
  race: string;
  realm: string;
  spouse: string;
  hair: string;
  height: string;
  birth: string;
  death: string;
  wikiUrl: string;
}

export default function App() {
  const [tableRows, setTableRows] = useState<TableRows[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [searchTableRows, setSearchTableRows] = useState<TableRows[]>([]);

  const fetchData = async () => {
    // const token = 'Y_NbE4mEPuopcu02IlaF';
    // const response = await fetch('https://the-one-api.dev/v2/character', {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // });
    // const data = await response.json();
    // setRequest(data.docs);

    const responseItem = responseMock.docs.map((item, id) => {
      return {
        id: String(id + 1),
        uuid: item._id,
        name: item.name ?? '-',
        gender: item.gender ?? '-',
        race: item.race ?? '-',
        realm: item.realm ?? '-',
        spouse: item.spouse ?? '-',
        hair: item.hair ?? '-',
        height: item.height ?? '-',
        birth: item.birth ?? '-',
        death: item.death ?? '-',
        wikiUrl: item.wikiUrl ?? '-',
      };
    });
    setTableRows(responseItem);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const results = tableRows.filter((item) => {
      const lenSerchValue = searchValue.length;
      const itemValue = item.name.toLowerCase().slice(0, lenSerchValue);
      return searchValue === itemValue;
    });
    setSearchTableRows(results);
  }, [searchValue, tableRows]);

  return (
    <>
      <Flex gap={'s4'} alignItems={'center'}>
        <Input
          style={{ maxWidth: '150px' }}
          placeholder="Search by name"
          value={searchValue}
          onChange={handleChange}
        />
        <Button>Search</Button>
      </Flex>
      <Table data={searchTableRows}>
        <Table.Column id="id" title="#">
          {(person) => person.id}
        </Table.Column>
        <Table.Column id="name" title="Имя">
          {(person) => person.name}
        </Table.Column>
        <Table.Column id="gender" title="Пол">
          {(person) => person.gender}
        </Table.Column>
        <Table.Column id="race" title="Раса">
          {(person) => person.race}
        </Table.Column>
        <Table.Column id="realm" title="Королевство">
          {(person) => person.realm}
        </Table.Column>

        <Table.Column id="spouse" title="Супруг(а)">
          {(person) => person.spouse}
        </Table.Column>
        <Table.Column id="hair" title="Цвет волос">
          {(person) => person.hair}
        </Table.Column>
        <Table.Column id="height" title="Рост">
          {(person) => person.height}
        </Table.Column>
        <Table.Column id="birth" title="Дата рождения">
          {(person) => person.birth}
        </Table.Column>
        <Table.Column id="death" title="Дата смерти">
          {(person) => person.death}
        </Table.Column>
        <Table.Column id="wikiUrl" title="Ссылка">
          {(person) => person.wikiUrl}
        </Table.Column>
      </Table>
    </>
  );
}
