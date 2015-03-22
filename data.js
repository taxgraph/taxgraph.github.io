single_data = [[0, 0], [1000, 100], [2000, 200], [3000, 300], [4000, 400], [5000, 500], [6000, 600], [7000, 700], [8000, 800], [9000, 900], [10000, 1046], [11000, 1196], [12000, 1346], [13000, 1496], [14000, 1646], [15000, 1796], [16000, 1946], [17000, 2096], [18000, 2246], [19000, 2396], [20000, 2546], [21000, 2696], [22000, 2846], [23000, 2996], [24000, 3146], [25000, 3296], [26000, 3446], [27000, 3596], [28000, 3746], [29000, 3896], [30000, 4046], [31000, 4196], [32000, 4346], [33000, 4496], [34000, 4646], [35000, 4796], [36000, 4946], [37000, 5106], [38000, 5356], [39000, 5606], [40000, 5856], [41000, 6106], [42000, 6356], [43000, 6606], [44000, 6856], [45000, 7106], [46000, 7356], [47000, 7606], [48000, 7856], [49000, 8106], [50000, 8356], [51000, 8606], [52000, 8856], [53000, 9106], [54000, 9356], [55000, 9606], [56000, 9856], [57000, 10106], [58000, 10356], [59000, 10606], [60000, 10856], [61000, 11106], [62000, 11356], [63000, 11606], [64000, 11856], [65000, 12106], [66000, 12356], [67000, 12606], [68000, 12856], [69000, 13106], [70000, 13356], [71000, 13606], [72000, 13856], [73000, 14106], [74000, 14356], [75000, 14606], [76000, 14856], [77000, 15106], [78000, 15356], [79000, 15606], [80000, 15856], [81000, 16106], [82000, 16356], [83000, 16606], [84000, 16856], [85000, 17106], [86000, 17356], [87000, 17606], [88000, 17856], [89000, 18106], [90000, 18376], [91000, 18656], [92000, 18936], [93000, 19216], [94000, 19496], [95000, 19776], [96000, 20056], [97000, 20336], [98000, 20616], [99000, 20896], [100000, 21176], [101000, 21456], [102000, 21736], [103000, 22016], [104000, 22296], [105000, 22576], [106000, 22856], [107000, 23136], [108000, 23416], [109000, 23696], [110000, 23976], [111000, 24256], [112000, 24536], [113000, 24816], [114000, 25096], [115000, 25376], [116000, 25656], [117000, 25936], [118000, 26216], [119000, 26496], [120000, 26776], [121000, 27056], [122000, 27336], [123000, 27616], [124000, 27896], [125000, 28176], [126000, 28456], [127000, 28736], [128000, 29016], [129000, 29296], [130000, 29576], [131000, 29856], [132000, 30136], [133000, 30416], [134000, 30696], [135000, 30976], [136000, 31256], [137000, 31536], [138000, 31816], [139000, 32096], [140000, 32376], [141000, 32656], [142000, 32936], [143000, 33216], [144000, 33496], [145000, 33776], [146000, 34056], [147000, 34336], [148000, 34616], [149000, 34896], [150000, 35176], [151000, 35456], [152000, 35736], [153000, 36016], [154000, 36296], [155000, 36576], [156000, 36856], [157000, 37136], [158000, 37416], [159000, 37696], [160000, 37976], [161000, 38256], [162000, 38536], [163000, 38816], [164000, 39096], [165000, 39376], [166000, 39656], [167000, 39936], [168000, 40216], [169000, 40496], [170000, 40776], [171000, 41056], [172000, 41336], [173000, 41616], [174000, 41896], [175000, 42176], [176000, 42456], [177000, 42736], [178000, 43016], [179000, 43296], [180000, 43576], [181000, 43856], [182000, 44136], [183000, 44416], [184000, 44696], [185000, 44976], [186000, 45256], [187000, 45568], [188000, 45898], [189000, 46228], [190000, 46558], [191000, 46888], [192000, 47218], [193000, 47548], [194000, 47878], [195000, 48208], [196000, 48538], [197000, 48868], [198000, 49198], [199000, 49528], [200000, 49858], [201000, 50188], [202000, 50518], [203000, 50848], [204000, 51178], [205000, 51508], [206000, 51838], [207000, 52168], [208000, 52498], [209000, 52828], [210000, 53158], [211000, 53488], [212000, 53818], [213000, 54148], [214000, 54478], [215000, 54808], [216000, 55138], [217000, 55468], [218000, 55798], [219000, 56128], [220000, 56458], [221000, 56788], [222000, 57118], [223000, 57448], [224000, 57778], [225000, 58108], [226000, 58438], [227000, 58768], [228000, 59098], [229000, 59428], [230000, 59758], [231000, 60088], [232000, 60418], [233000, 60748], [234000, 61078], [235000, 61408], [236000, 61738], [237000, 62068], [238000, 62398], [239000, 62728], [240000, 63058], [241000, 63388], [242000, 63718], [243000, 64048], [244000, 64378], [245000, 64708], [246000, 65038], [247000, 65368], [248000, 65698], [249000, 66028], [250000, 66358]];
joint_data = single_data;
sep_data = single_data;
head_data = single_data;

function getDataRows(tax_type) {
  var data = single_data;
  if (tax_type == 'married-sep') {
    data = sep_data;
  } else if (tax_type == 'married-joint') {
    data = joint_data;
  } else if (tax_type == 'head') {
    data = head_data;
  }

  for (var i = 0; i < data.length; ++i) {
    if (data[i].length == 2) {
      data[i].push(toolTipDisplayData(data[i][0], data[i][1]));
    }
  }
  return data;
}

function formatMoney(x) {
   return '$' + x.toLocaleString();
}

// Tooltip display function.
function toolTipDisplayData(income, tax) {
  console.log('income: '+income+', tax: '+tax)
   return '<div id="tooltip"><table border=0><tr><td align=right>If you earned:</td><td align=right>'+formatMoney(income)+'</td></tr><tr><td align=right>You owe about:</td><td align=right>'+formatMoney(tax)+'</td></tr><tr><td align=right>Effective tax rate:</td><td align=right>'+Math.round(1000*tax/income)/10+'%</td><tr></table></div>';
}
