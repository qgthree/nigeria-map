// Number is the key, so it should include no duplicates.
// Only use the Total field when activity amounts are not available.
// Amounts and totals use a comma as a thousands separator, and do not include a dollar sign.
// Dates should all be formatted as yyyy-mm-dd.
// 'sector' should match a 'code' in sectors.js.
// 'Partner' should match a Partner_Code in partners.js.
// Each 'state' must match an 'OFDA_Name' in states.js

export default [{
  Number: '720FDA19GR00226',
  Partner_Code: 'INTERSOS',
  Start_Date: '2019-09-14',
  End_Date: '2021-06-13',
  NCE_Date: '',
  Total: '7,500,380',
  Summary: '',
  activities: [{
    amount: '2,096,907',
    sector: 'HLTH',
    state: ['Borno'],
    lgas: ['Ngala', 'Bama', 'Dikwa', 'Magumeri']
  }, {
    amount: '1,937,729',
    sector: 'NUTR',
    state: ['Borno'],
    lgas: ['Ngala', 'Bama', 'Dikwa', 'Magumeri']
  }, {
    amount: '1,164,411',
    sector: 'WASH',
    state: ['Borno'],
    lgas: ['Ngala', 'Bama', 'Dikwa', 'Magumeri']
  }, {
    amount: '2,301,333',
    sector: 'PROT',
    state: ['Borno'],
    lgas: ['Ngala', 'Bama', 'Dikwa', 'Magumeri']
  }]
},
{
  Number: '720BHA21GR00033',
  Partner_Code: 'FHI360',
  Start_Date: '2021-01-21',
  End_Date: '2021-12-31',
  NCE_Date: '',
  Total: '10,000,000',
  Summary: '',
  activities: [{
     'sector': 'HLTH',
     'amount': '3,023,715',
     'state': ['Borno'],
     'lgas': ['Bama--Banki', 'Mobbar--Damasak', 'Ngala']
   },
   {
     'sector': 'PROT',
     'amount': '2,604,885',
     'state': ['Borno'],
     'lgas': ['Bama--Banki', 'Mobbar--Damasak', 'Ngala']
   },
   {
     'sector': 'WASH',
     'amount': '2,207,624',
     'state': ['Borno'],
     'lgas': ['Bama--Banki', 'Mobbar--Damasak', 'Ngala']
   },
   {
     'sector': 'NUTR',
     'amount': '2,163,776',
     'state': ['Borno'],
     'lgas': ['Bama--Banki', 'Mobbar--Damasak', 'Ngala']
   }]
},
{
  Number: '720BHA21GR00051',
  Partner_Code: 'MC',
  Start_Date: '2021-03-01',
  End_Date: '2022-02-28',
  NCE_Date: '',
  Total: '19,400,000',
  Summary: '',
  activities: [{
    'sector': 'AG',
    'amount': '205,582',
    'state': ['Borno'],
    'lgas': ['Damboa']
  }, {
    'sector': 'FOOD',
    'amount': '11,242,329',
    'state': ['Borno'],
    'lgas': ['Bama, Damboa']
  }, {
    'sector': 'HPSAA',
    'amount': '217,797',
    'state': ['Borno']
  }, {
    'sector': 'MPCA',
    'amount': '716,434',
    'state': ['Borno'],
    'lgas': ['Bama', 'Damboa', 'Dikwa', 'Gwoza', 'Ngala']
  }, {
    'sector': 'NUTR',
    'amount': '1,569,558',
    'state': ['Borno'],
    'lgas': ['Bama', 'Damboa', 'Dikwa', 'Gwoza', 'Ngala']
  }, {
    'sector': 'PROT',
    'amount': '848,123',
    'state': ['Borno'],
    'lgas': ['Bama', 'Damboa', 'Dikwa', 'Gwoza', 'Ngala']
  }, {
    'sector': 'S&S',
    'amount': '2,425,061',
    'state': ['Borno'],
    'lgas': ['Bama', 'Damboa', 'Dikwa', 'Gwoza', 'Konduga', 'Mobbar--Damasak', 'Monguno', 'Ngala']
  }, {
    'sector': 'WASH',
    'amount': '2,175,116',
    'state': ['Borno'],
    'lgas': ['Bama', 'Damboa', 'Dikwa', 'Gwoza', 'Ngala']
  }]
},
{
  Number: '720BHA21GR00068',
  Partner_Code: 'ACTED',
  Start_Date: '2021-04-15',
  End_Date: '2022-04-14',
  NCE_Date: '',
  Total: '2,050,000',
  Summary: '',
  activities: [{
    'award': '720BHA21GR00068',
    'sector': 'HCIMA',
    'amount': '710,549',
    'state': ['Adamawa', 'Borno', 'Yobe']
  }, {
    'award': '720BHA21GR00068',
    'sector': 'S&S',
    'amount': '524,312',
    'state': ['Borno'],
    'lgas': ['Dikwa', 'Monguno']
  }, {
    'award': '720BHA21GR00068',
    'sector': 'WASH',
    'amount': '440,800',
    'state': ['Borno'],
    'lgas': ['Dikwa', 'Monguno']
  }, {
    'award': '720BHA21GR00068',
    'sector': 'PROT',
    'amount': '374,339',
    'state': ['Borno'],
    'lgas': ['Dikwa', 'Monguno']
  }]
},
{
  Number: '720BHA21IO00034',
  Partner_Code: 'WFP',
  Start_Date: '2021-01-01',
  End_Date: '2022-06-30',
  NCE_Date: '',
  Total: '5,733,460',
  Summary: '',
  activities: [{
    'award': '720BHA21IO00034',
    'sector': 'NUTR',
    'amount': '5,733,460',
    'state': ['Borno', 'Adamawa', 'Yobe']
  }]
},
{
  Number: '720BHA21IO00079',
  Partner_Code: 'UNDP',
  Start_Date: '2021-03-01',
  End_Date: '2022-02-28',
  NCE_Date: '',
  Total: '750,252',
  Summary: '',
  activities: [{
    'award': '720BHA21IO00079',
    'sector': 'HCIMA',
    'amount': '750,252',
    'state': ['Countrywide']
  }]
},
{
  Number: '720BHA21IO00082',
  Partner_Code: 'UNWFP',
  Start_Date: '2021-01-01',
  End_Date: '2022-12-31',
  NCE_Date: '',
  Total: '8,000,000',
  Summary: '',
  activities: [{
    'award': '720BHA21IO00082',
    'sector': 'HCIMA',
    'amount': '750,000',
    'state': ['Countrywide']
  }]
},
{
  Number: '720FDA19GR00090',
  Partner_Code: 'DRC',
  Start_Date: '2019-08-07',
  End_Date: '2021-06-06',
  NCE_Date: '',
  Total: '12,000,000',
  Summary: '',
  activities: [{
    'award': '720FDA19GR00090',
    'sector': 'PROT',
    'amount': '1,857,332',
    'state': ['Borno'],
    'lgas': ['Jere-Mafa-Dikwa-Ngala', 'Kanduga-Bama-banki', 'Michika-Madagali-Gwoza-Pulka', 'Monguno and Damasak']
  }, {
    'award': '720FDA19GR00090',
    'sector': 'S&S',
    'amount': '4,570,857',
    'state': ['Borno'],
    'lgas': ['Bama', 'Gwoza', 'Ngala', 'MMC', 'Jere', 'Konduga', 'Mafa', 'Monguno', 'Magumeri', 'Dikwa', 'Kala Balge', 'Michika', 'Gombi', 'Madagali', 'Chibok']
  }, {
    'award': '720FDA19GR00090',
    'sector': 'WASH',
    'amount': '5,571,811',
    'state': ['Borno', 'Adamawa'],
    'lgas': ['Bama', 'Gwoza', 'Ngala', 'MMC', 'Jere', 'Konduga', 'Mafa', 'Monguno', 'Magumeri', 'Dikwa', 'Kala Balge', 'Askira Uba', 'Chikok', 'Madagali', 'Michika', 'Gombi', 'Mubi North', 'Mubi South']
  }]
},
{
  Number: '720FDA19GR00123',
  Partner_Code: 'IMC',
  Start_Date: '2019-07-01',
  End_Date: '2021-06-30',
  NCE_Date: '',
  Total: '6,750,000',
  Summary: '',
  activities: [{
    'award': '720FDA19GR00123',
    'sector': 'NUTR',
    'amount': '2,705,570',
    'state': ['Borno'],
    'lgas': ['Damboa', 'Maiduguri', 'Jere', 'Konduga']
  }, {
    'award': '720FDA19GR00123',
    'sector': 'WASH',
    'amount': '2,491,788',
    'state': ['Borno'],
    'lgas': ['Damboa']
  }, {
    'award': '720FDA19GR00123',
    'sector': 'PROT',
    'amount': '1,552,642',
    'state': ['Borno'],
    'lgas': ['Damboa', 'MMC']
  }]
},
{
  Number: '720FDA19GR00229',
  Partner_Code: 'SI',
  Start_Date: '2019-07-01',
  End_Date: '2021-06-30',
  NCE_Date: '2021-09-30',
  Total: '14,402,612',
  Summary: '',
  activities: [{
    'award': '720FDA19GR00229',
    'sector': 'S&S',
    'amount': '2,174,539',
    'state': ['Borno'],
    'lgas': ['Maiduguri', 'Ngala', 'Dikwa', 'Monguno']
  }, {
    'award': '720FDA19GR00229',
    'sector': 'WASH',
    'amount': '4,260,247',
    'state': ['Borno'],
    'lgas': ['Maiduguri', 'Ngala', 'Dikwa', 'Monguno']
  }, {
    'award': '720FDA19GR00229',
    'sector': 'HCIMA',
    'amount': '126,567',
    'state': ['Borno'],
    'lgas': ['Maiduguri', 'Ngala', 'Dikwa', 'Monguno']
  }, {
    'award': '720FDA19GR00229',
    'sector': 'NUTR',
    'amount': '3,089,776',
    'state': ['Borno'],
    'lgas': ['Maiduguri', 'Ngala', 'Dikwa', 'Monguno']
  }, {
    'award': '720FDA19GR00229',
    'sector': 'HLTH',
    'amount': '4,751,483',
    'state': ['Borno'],
    'lgas': ['Maiduguri', 'Ngala', 'Dikwa', 'Monguno']
  }]
},
{
  Number: '720FDA19GR00238',
  Partner_Code: 'PUI',
  Start_Date: '2019-08-01',
  End_Date: '2021-07-31',
  NCE_Date: '',
  Total: '13,800,000',
  Summary: '',
  activities: [{
    'award': '720FDA19GR00238',
    'sector': 'HLTH',
    'amount': '9,512,470',
    'state': ['Borno']
  }, {
    'award': '720FDA19GR00238',
    'sector': 'NUTR',
    'amount': '2,003,163',
    'state': ['Borno']
  }, {
    'award': '720FDA19GR00238',
    'sector': 'PROT',
    'amount': '1,751,217',
    'state': ['Borno']
  }, {
    'award': '720FDA19GR00238',
    'sector': 'WASH',
    'amount': '533,150',
    'state': ['Borno']
  }]
},
{
  Number: '720FDA19GR00251',
  Partner_Code: 'iMMAP',
  Start_Date: '2019-10-01',
  End_Date: '2021-09-30',
  NCE_Date: '',
  Total: '3,082,090',
  Summary: '',
  activities: [{
    'award': '720FDA19GR00251',
    'sector': 'HCIMA',
    'amount': '3,082,090',
    'state': ['Borno']
  }]
},
{
  Number: '720FDA19GR00253',
  Partner_Code: 'ACF',
  Start_Date: '2019-10-01',
  End_Date: '2021-05-31',
  NCE_Date: '',
  Total: '9,723,436',
  Summary: '',
  activities: [{
    'award': '720FDA19GR00253',
    'sector': 'HLTH',
    'amount': '4,773,134',
    'state': ['Borno', 'Yobe']
  }, {
    'award': '720FDA19GR00253',
    'sector': 'NUTR',
    'amount': '1,294,549',
    'state': ['Borno', 'Yobe']
  }, {
    'award': '720FDA19GR00253',
    'sector': 'WASH',
    'amount': '3,655,753',
    'state': ['Borno', 'Yobe']
  }]
},
{
  Number: '720FDA19GR00287',
  Partner_Code: 'NRC',
  Start_Date: '2019-09-08',
  End_Date: '2021-09-07',
  NCE_Date: '',
  Total: '4,900,000',
  Summary: '',
  activities: [{
    'sector': 'PROT',
    'amount': '496,535',
    'state': ['Adamawa', 'Borno']
  }, {
    'sector': 'S&S',
    'amount': '2,491,349',
    'state': ['Adamawa', 'Borno']
  }, {
    'award': '720FDA19GR00287',
    'sector': 'WASH',
    'amount': '1,341,639',
    'state': ['Adamawa', 'Borno']
  }, {
    'award': '720FDA19GR00287',
    'sector': 'DRRPP',
    'amount': '313,000',
    'state': ['Federal Capital Territory', 'Borno', 'Adamawa', 'Yobe']
  }, {
    'award': '720FDA19GR00287',
    'sector': 'HCIMA',
    'amount': '257,477',
    'state': ['Federal Capital Territory', 'Borno', 'Adamawa', 'Yobe']
  }]
},
{
  Number: '720FDA19IO00085',
  Partner_Code: 'UNICEF',
  Start_Date: '2019-09-26',
  End_Date: '2021-09-25',
  NCE_Date: '',
  Total: '3,654,526',
  Summary: '',
  activities: [{
    'award': '720FDA19IO00085',
    'sector': 'NUTR',
    'amount': '1,003,513',
    'state': ['Federal Capital Territory', 'Borno', 'Adamawa', 'Yobe']
  }, {
    'award': '720FDA19IO00085',
    'sector': 'PROT',
    'amount': '811,041',
    'state': ['Federal Capital Territory', 'Borno', 'Adamawa', 'Yobe']
  }, {
    'award': '720FDA19IO00085',
    'sector': 'WASH',
    'amount': '861,851',
    'state': ['Federal Capital Territory', 'Borno', 'Adamawa', 'Yobe']
  }, {
    'award': '720FDA19IO00085',
    'sector': 'HCIMA',
    'amount': '978,121',
    'state': ['Federal Capital Territory', 'Borno', 'Adamawa', 'Yobe']
  }]
},
{
  Number: '720FDA19IO00103',
  Partner_Code: 'IOM',
  Start_Date: '2019-10-01',
  End_Date: '2021-09-30',
  NCE_Date: '',
  Total: '23,350,000',
  Summary: '',
  activities: [{
    'award': '720FDA19IO00103',
    'sector': 'HCIMA',
    'amount': '5,466,775',
    'state': ['Adamawa', 'Bauchi', 'Borno', 'Gombe', 'Tarabe', 'Yobe']
  }, {
    'award': '720FDA19IO00103',
    'sector': 'S&S',
    'amount': '13,285,181',
    'state': ['Adamawa', 'Bauchi', 'Borno', 'Gombe', 'Tarabe', 'Yobe']
  }, {
    'award': '720FDA19IO00103',
    'sector': 'PROT',
    'amount': '2,063,287',
    'state': ['Adamawa', 'Bauchi', 'Borno', 'Gombe', 'Tarabe', 'Yobe']
  }, {
    'award': '720FDA19IO00103',
    'sector': 'WASH',
    'amount': '2,534,757',
    'state': ['Adamawa', 'Bauchi', 'Borno', 'Gombe', 'Tarabe', 'Yobe']
  }]
},
{
  Number: '720FDA20GR00016',
  Partner_Code: 'CRS',
  Start_Date: '2020-07-01',
  End_Date: '2021-06-30',
  NCE_Date: '',
  Total: '3,500,000',
  Summary: '',
  activities: [{
    'award': '720FDA20GR00016',
    'sector': 'S&S',
    'amount': '1,620,607',
    'state': ['Borno']
  }, {
    'award': '720FDA20GR00016',
    'sector': 'WASH',
    'amount': '1,879,393',
    'state': ['Borno']
  }]
},
{
  Number: '720FDA20GR00109',
  Partner_Code: 'IMC',
  Start_Date: '2020-06-15',
  End_Date: '2021-06-14',
  NCE_Date: '',
  Total: '2,033,282',
  Summary: '',
  activities: [{
    'award': '720FDA20GR00109',
    'sector': 'WASH',
    'amount': '1,538,362',
    'state': ['Borno']
  }, {
    'award': '720FDA20GR00109',
    'sector': 'HLTH',
    'amount': '147,106',
    'state': ['Borno']
  }, {
    'award': '720FDA20GR00109',
    'sector': 'PROT',
    'amount': '347,814',
    'state': ['Borno']
  }]
},
{
  Number: '720FDA20GR00177',
  Partner_Code: 'INTERSOS',
  Start_Date: '2020-07-27',
  End_Date: '2021-07-26',
  NCE_Date: '',
  Total: '1,691,470',
  Summary: '',
  activities: [{
    'award': '720FDA20GR00177',
    'sector': 'WASH',
    'amount': '1,090,252',
    'state': ['Borno']
  }, {
    'award': '720FDA20GR00177',
    'sector': 'HLTH',
    'amount': '364,767',
    'state': ['Borno']
  }, {
    'award': '720FDA20GR00177',
    'sector': 'PROT',
    'amount': '140,538',
    'state': ['Borno']
  }, {
    'award': '720FDA20GR00177',
    'sector': 'ERMS',
    'amount': '95,912',
    'state': ['Borno']
  }]
},
{
  Number: '720FDA20GR00185',
  Partner_Code: 'SI',
  Start_Date: '2020-08-01',
  End_Date: '2021-07-31',
  NCE_Date: '',
  Total: '1,760,000',
  Summary: '',
  activities: [{
    'sector': 'WASH',
    'amount': '1,618,579',
    'state': ['Borno']
  }, {
    'sector': 'HLTH',
    'amount': '141,021',
    'state': ['Borno']
  }]
},
{
  Number: '720FDA20GR00190',
  Partner_Code: 'DRC',
  Start_Date: '2020-07-13',
  End_Date: '2021-07-12',
  NCE_Date: '',
  Total: '4,300,000',
  Summary: '',
  activities: [{
    'award': '720FDA20GR00190',
    'sector': 'WASH',
    'amount': '1,867,005',
    'state': ['Adamawa', 'Borno']
  }, {
    'award': '720FDA20GR00190',
    'sector': 'PROT',
    'amount': '411,827',
    'state': ['Adamawa', 'Borno']
  }, {
    'award': '720FDA20GR00190',
    'sector': 'HLTH',
    'amount': '1,898,897',
    'state': ['Adamawa', 'Borno']
  }, {
    'award': '720FDA20GR00190',
    'sector': 'LOGS',
    'amount': '122,271',
    'state': ['Adamawa', 'Borno']
  }]
},
{
  Number: '720FDA20GR00192',
  Partner_Code: 'CRS',
  Start_Date: '2020-08-01',
  End_Date: '2021-06-30',
  NCE_Date: '',
  Total: '1,200,000',
  Summary: '',
  activities: [{
    'award': '720FDA20GR00192',
    'sector': 'HLTH',
    'amount': '452,625',
    'state': ['Yobe']
  }, {
    'award': '720FDA20GR00192',
    'sector': 'WASH',
    'amount': '747,375',
    'state': ['Yobe']
  }]
},
{
  Number: '720FDA20GR00209',
  Partner_Code: 'FHI360',
  Start_Date: '2020-08-01',
  End_Date: '2021-06-30',
  NCE_Date: '',
  Total: '2,579,583',
  Summary: '',
  activities: [{
    'award': '720FDA20GR00209',
    'sector': 'HLTH',
    'amount': '1,250,582',
    'state': ['Borno']
  }, {
    'award': '720FDA20GR00209',
    'sector': 'WASH',
    'amount': '1,329,001',
    'state': ['Borno']
  }]
},
{
  Number: '720FDA20GR00213',
  Partner_Code: 'ACF',
  Start_Date: '2020-08-01',
  End_Date: '2021-07-31',
  NCE_Date: '',
  Total: '1,167,093',
  Summary: '',
  activities: [{
    'award': '720FDA20GR00213',
    'sector': 'ERMS',
    'amount': '61,579',
    'state': ['Borno']
  }, {
    'award': '720FDA20GR00213',
    'sector': 'HLTH',
    'amount': '182,938',
    'state': ['Borno']
  }, {
    'award': '720FDA20GR00213',
    'sector': 'WASH',
    'amount': '922,576',
    'state': ['Borno']
  }]
},
{
  Number: '720FDA20GR00270',
  Partner_Code: 'INSO',
  Start_Date: '2020-07-01',
  End_Date: '2021-06-30',
  NCE_Date: '',
  Total: '1,000,000',
  Summary: '',
  activities: [{
    'award': '720FDA20GR00270',
    'sector': 'HCIMA',
    'amount': '1,000,000',
    'state': ['Adamawa', 'Borno', 'Yobe', 'Gombe']
  }]
},
{
  Number: '720FDA20GR00319',
  Partner_Code: 'DotW',
  Start_Date: '2020-07-01',
  End_Date: '2021-06-30',
  NCE_Date: '',
  Total: '2,000,000',
  Summary: '',
  activities: [{
    'award': '720FDA20GR00319',
    'sector': 'HLTH',
    'amount': '1,051,553',
    'state': ['Borno']
  }, {
    'award': '720FDA20GR00319',
    'sector': 'NUTR',
    'amount': '363,829',
    'state': ['Borno']
  }, {
    'award': '720FDA20GR00319',
    'sector': 'PROT',
    'amount': '584,618',
    'state': ['Borno']
  }]
},
{
  Number: '720FDA20GR00320',
  Partner_Code: 'SCF',
  Start_Date: '2020-08-14',
  End_Date: '2021-08-13',
  NCE_Date: '',
  Total: '3,000,000',
  Summary: '',
  activities: [{
    'award': '720FDA20GR00320',
    'sector': 'PROT',
    'amount': '1,026,308',
    'state': ['Borno']
  }, {
    'award': '720FDA20GR00320',
    'sector': 'NUTR',
    'amount': '1,352,580',
    'state': ['Borno']
  }, {
    'award': '720FDA20GR00320',
    'sector': 'WASH',
    'amount': '621,112',
    'state': ['Borno']
  }]
},
{
  Number: '720FDA20IO00057',
  Partner_Code: 'IOM',
  Start_Date: '2020-06-19',
  End_Date: '2021-09-18',
  NCE_Date: '',
  Total: '6,220,000',
  Summary: '',
  activities: [{
    'award': '720FDA20IO00057',
    'sector': 'WASH',
    'amount': '6,220,000',
    'state': ['Borno']
  }]
},
{
  Number: '720FDA20IO00117',
  Partner_Code: 'UNICEF',
  Start_Date: '2020-10-01',
  End_Date: '2021-09-30',
  NCE_Date: '',
  Total: '4,550,618',
  Summary: '',
  activities: [{
    'award': '720FDA20IO00117',
    'sector': 'HLTH',
    'amount': '4,550,618',
    'state': ['Adamawa', 'Borno', 'Yobe']
  }]
},
{
  Number: '72BHA21GR00052',
  Partner_Code: 'DRC',
  Start_Date: '2021-03-05',
  End_Date: '2022-03-04',
  NCE_Date: '',
  Total: '10,400,000',
  Summary: '',
  activities: [{
    'award': '72BHA21GR00052',
    'sector': 'FOOD',
    'amount': '6,323,065',
    'state': ['Adamawa', 'Borno']
  }, {
    'award': '72BHA21GR00052',
    'sector': 'PROT',
    'amount': '1,107,998',
    'state': ['Adamawa', 'Borno']
  }, {
    'award': '72BHA21GR00052',
    'sector': 'S&S',
    'amount': '1,198,829',
    'state': ['Adamawa', 'Borno']
  }, {
    'award': '72BHA21GR00052',
    'sector': 'WASH',
    'amount': '1,770,107',
    'state': ['Adamawa', 'Borno']
  }]
},
{
  Number: '72DFFP19GR00087',
  Partner_Code: 'PUI',
  Start_Date: '2019-06-01',
  End_Date: '2021-07-31',
  NCE_Date: '',
  Total: '18,360,000',
  Summary: '',
  activities: [{
    'award': '72DFFP19GR00087',
    'sector': 'NUTR',
    'amount': '1,467,273',
    'state': ['Borno']
  }, {
    'award': '72DFFP19GR00087',
    'sector': 'FOOD',
    'amount': '16,869,496',
    'state': ['Borno']
  }, {
    'award': '72DFFP19GR00087',
    'sector': 'FOOD',
    'amount': '23,231',
    'state': ['Borno']
  }]
},
{
  Number: '72DFFP19IO00028',
  Partner_Code: 'UNWFP',
  Start_Date: '2019-02-01',
  End_Date: '2021-06-30',
  NCE_Date: '',
  Total: '17,015,405',
  Summary: '',
  activities: [{
    'award': '72DFFP19IO00028',
    'sector': 'FOOD',
    'amount': '17,015,405',
    'state': ['Adamawa', 'Borno', 'Yobe']
  }]
},
{
  Number: '72DFFP20GR000010',
  Partner_Code: 'CRS',
  Start_Date: '2020-03-01',
  End_Date: '2021-04-30',
  NCE_Date: '2021-05-31',
  Total: '15,000,000',
  Summary: '',
  activities: [{
    'award': '72DFFP20GR000010',
    'sector': 'AG',
    'amount': '74,645',
    'state': ['Borno']
  }, {
    'award': '72DFFP20GR000010',
    'sector': 'HCIMA',
    'amount': '171,935',
    'state': ['Borno']
  }, {
    'award': '72DFFP20GR000010',
    'sector': 'FOOD',
    'amount': '13,737,241',
    'state': ['Borno']
  }, {
    'award': '72DFFP20GR000010',
    'sector': 'FOOD',
    'amount': '508,089',
    'state': ['Borno'],
    'lgas': 'Gubio'
  }]
},
{
  Number: '72DFFP20GR00025',
  Partner_Code: 'SCF',
  Start_Date: '2020-03-01',
  End_Date: '2021-07-31',
  NCE_Date: '',
  Total: '40,000,000',
  Summary: '',
  activities: [{
    'award': '72DFFP20GR00025',
    'sector': 'FOOD',
    'amount': '37,261,697',
    'state': ['Borno']
  }, {
    'award': '72DFFP20GR00025',
    'sector': 'FOOD',
    'amount': '1,545,841',
    'state': ['Borno']
  }, {
    'award': '72DFFP20GR00025',
    'sector': 'NUTR',
    'amount': '1,192,462',
    'state': ['Borno']
  }]
},
{
  Number: '72DFFP20GR00039',
  Partner_Code: 'ACF',
  Start_Date: '2020-06-01',
  End_Date: '2021-05-31',
  NCE_Date: '',
  Total: '31,375,000',
  Summary: '',
  activities: [{
    'award': '72DFFP20GR00039',
    'sector': 'MPCA',
    'amount': '6,054,167',
    'state': ['Borno']
  }, {
    'award': '72DFFP20GR00039',
    'sector': 'FOOD',
    'amount': '24,538,478',
    'state': ['Yobe']
  }, {
    'award': '72DFFP20GR00039',
    'sector': 'NUTR',
    'amount': '782,355',
    'state': ['Borno']
  }]
},
{
  Number: '72DFFP20GR00046',
  Partner_Code: 'ACF',
  Start_Date: '2020-06-10',
  End_Date: '2021-06-09',
  NCE_Date: '',
  Total: '4,397,696',
  Summary: '',
  activities: [{
    'award': '72DFFP20GR00046',
    'sector': 'FOOD',
    'amount': '2,541,395',
    'state': ['Adamawa', 'Borno', 'Yobe']
  }, {
    'award': '72DFFP20GR00046',
    'sector': 'FOOD',
    'amount': '1,856,301',
    'state': ['Adamawa', 'Borno', 'Yobe']
  }]
},
{
  Number: '72DFFP20IO00015',
  Partner_Code: 'UNWFP',
  Start_Date: '2020-01-03',
  End_Date: '2021-06-30',
  NCE_Date: '',
  Total: '40,000,000',
  Summary: '',
  activities: [{
    'award': '72DFFP20IO00015',
    'sector': 'FOOD',
    'amount': '40,000,000',
    'state': ['Adamawa', 'Borno', 'Yobe']
  }]
},
{
  Number: '72DFFP20IO00039',
  Partner_Code: 'UNICEF',
  Start_Date: '2020-04-16',
  End_Date: '2021-09-30',
  NCE_Date: '',
  Total: '2,000,000',
  Summary: '',
  activities: [{
    'award': '72DFFP20IO00039',
    'sector': 'FOOD',
    'amount': '2,000,000',
    'state': ['Sokoto', 'Zamfara']
  }]
},
{
  Number: '72DFFP20IO00041',
  Partner_Code: 'UNWFP',
  Start_Date: '2020-03-25',
  End_Date: '2021-09-22',
  NCE_Date: '',
  Total: '7,096,080',
  Summary: '',
  activities: [{
    'award': '72DFFP20IO00041',
    'sector': 'FOOD',
    'amount': '7,096,080',
    'state': ['Adamawa', 'Borno', 'Yobe']
  }]
},
{
  Number: '72DFFP20IO00091',
  Partner_Code: 'UNWFP',
  Start_Date: '2020-06-15',
  End_Date: '2021-06-14',
  NCE_Date: '',
  Total: '22,600,000',
  Summary: '',
  activities: [{
    'award': '72DFFP20IO00091',
    'sector': 'FOOD',
    'amount': '22,600,000',
    'state': ['Adamawa', 'Borno', 'Yobe']
  }]
},
{
  Number: '72DFFP20IO00142',
  Partner_Code: 'UNICEF',
  Start_Date: '2020-09-01',
  End_Date: '2022-12-31',
  NCE_Date: '',
  Total: '2,496,800',
  Summary: '',
  activities: [{
    'award': '72DFFP20IO00142',
    'sector': 'FOOD',
    'amount': '2,496,800',
    'state': ['Katsina', 'Sokoto', 'Zamfara']
  }]
}]
