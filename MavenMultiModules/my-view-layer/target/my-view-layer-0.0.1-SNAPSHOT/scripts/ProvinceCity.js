var cityArr = new Array(366);
cityArr[0] = new Array('110000', '北京市', '110100', '北京市', 'BEIJING', 'BEIJING_CITY');
cityArr[1] = new Array('120000', '天津市', '120100', '天津市', 'TIANJIN', 'TIANJIN_CITY');
cityArr[2] = new Array('130000', '河北省', '130100', '石家庄市', 'HEBEI', 'SHIJIAZHUANG');
cityArr[3] = new Array('130000', '河北省', '130200', '唐山市', 'HEBEI', 'TANGSHAN');
cityArr[4] = new Array('130000', '河北省', '130300', '秦皇岛市', 'HEBEI', 'QINHUANGDAO');
cityArr[5] = new Array('130000', '河北省', '130400', '邯郸市', 'HEBEI', 'HANDAN');
cityArr[6] = new Array('130000', '河北省', '130500', '邢台市', 'HEBEI', 'XINGTAI');
cityArr[7] = new Array('130000', '河北省', '130600', '保定市', 'HEBEI', 'BAODING');
cityArr[8] = new Array('130000', '河北省', '130700', '张家口市', 'HEBEI', 'ZHANGJIAKOU');
cityArr[9] = new Array('130000', '河北省', '130800', '承德市', 'HEBEI', 'CHENGDE');
cityArr[10] = new Array('130000', '河北省', '130900', '沧州市', 'HEBEI', 'CANGZHOU');
cityArr[11] = new Array('130000', '河北省', '131000', '廊坊市', 'HEBEI', 'LANGFANG');
cityArr[12] = new Array('130000', '河北省', '131100', '衡水市', 'HEBEI', 'HENGSHUI');
cityArr[13] = new Array('140000', '山西省', '140100', '太原市', 'SHANXI', 'TAIYUAN');
cityArr[14] = new Array('140000', '山西省', '140200', '大同市', 'SHANXI', 'DATONG');
cityArr[15] = new Array('140000', '山西省', '140300', '阳泉市', 'SHANXI', 'YANGQUAN');
cityArr[16] = new Array('140000', '山西省', '140400', '长治市', 'SHANXI', 'CHANGZHI');
cityArr[17] = new Array('140000', '山西省', '140500', '晋城市', 'SHANXI', 'JINCHENG');
cityArr[18] = new Array('140000', '山西省', '140600', '朔州市', 'SHANXI', 'SHUOZHOU');
cityArr[19] = new Array('140000', '山西省', '140700', '晋中市', 'SHANXI', 'JINZHONG');
cityArr[20] = new Array('140000', '山西省', '140800', '运城市', 'SHANXI', 'YUNCHENG');
cityArr[21] = new Array('140000', '山西省', '140900', '忻州市', 'SHANXI', 'XINZHOU');
cityArr[22] = new Array('140000', '山西省', '141000', '临汾市', 'SHANXI', 'LINFEN');
cityArr[23] = new Array('140000', '山西省', '141100', '吕梁市', 'SHANXI', 'LVLIANG');
cityArr[24] = new Array('150000', '内蒙古自治区', '150100', '呼和浩特市', 'INNER_MONGOLIA', 'HOHHOT');
cityArr[25] = new Array('150000', '内蒙古自治区', '150200', '包头市', 'INNER_MONGOLIA', 'BAOTOU');
cityArr[26] = new Array('150000', '内蒙古自治区', '150300', '乌海市', 'INNER_MONGOLIA', 'WUHAI');
cityArr[27] = new Array('150000', '内蒙古自治区', '150400', '赤峰市', 'INNER_MONGOLIA', 'CHIFENG');
cityArr[28] = new Array('150000', '内蒙古自治区', '150500', '通辽市', 'INNER_MONGOLIA', 'TONGLIAO');
cityArr[29] = new Array('150000', '内蒙古自治区', '150600', '鄂尔多斯市', 'INNER_MONGOLIA', 'ERDOS');
cityArr[30] = new Array('150000', '内蒙古自治区', '150700', '呼伦贝尔市', 'INNER_MONGOLIA', 'HULUNBUIR');
cityArr[31] = new Array('150000', '内蒙古自治区', '150800', '巴彦淖尔市', 'INNER_MONGOLIA', 'BAYANNUR');
cityArr[32] = new Array('150000', '内蒙古自治区', '150900', '乌兰察布市', 'INNER_MONGOLIA', 'ULANQAB');
cityArr[33] = new Array('150000', '内蒙古自治区', '152200', '兴安盟', 'INNER_MONGOLIA', 'HINGGAN_LEAGUE');
cityArr[34] = new Array('150000', '内蒙古自治区', '152500', '锡林郭勒盟', 'INNER_MONGOLIA', 'XILINGOL_LEAGUE');
cityArr[35] = new Array('150000', '内蒙古自治区', '152900', '阿拉善盟', 'INNER_MONGOLIA', 'ALXA_LEAGUE');
cityArr[36] = new Array('210000', '辽宁省', '210100', '沈阳市', 'LIAONING', 'SHENYANG');
cityArr[37] = new Array('210000', '辽宁省', '210200', '大连市', 'LIAONING', 'DALIAN');
cityArr[38] = new Array('210000', '辽宁省', '210300', '鞍山市', 'LIAONING', 'ANSHAN');
cityArr[39] = new Array('210000', '辽宁省', '210400', '抚顺市', 'LIAONING', 'FUSHUN');
cityArr[40] = new Array('210000', '辽宁省', '210500', '本溪市', 'LIAONING', 'BENXI');
cityArr[41] = new Array('210000', '辽宁省', '210600', '丹东市', 'LIAONING', 'DANDONG');
cityArr[42] = new Array('210000', '辽宁省', '210700', '锦州市', 'LIAONING', 'JINZHOU');
cityArr[43] = new Array('210000', '辽宁省', '210800', '营口市', 'LIAONING', 'YINGKOU');
cityArr[44] = new Array('210000', '辽宁省', '210900', '阜新市', 'LIAONING', 'FUXIN');
cityArr[45] = new Array('210000', '辽宁省', '211000', '辽阳市', 'LIAONING', 'LIAOYANG');
cityArr[46] = new Array('210000', '辽宁省', '211100', '盘锦市', 'LIAONING', 'PANJIN');
cityArr[47] = new Array('210000', '辽宁省', '211200', '铁岭市', 'LIAONING', 'TIELING');
cityArr[48] = new Array('210000', '辽宁省', '211300', '朝阳市', 'LIAONING', 'CHANGYANG');
cityArr[49] = new Array('210000', '辽宁省', '211400', '葫芦岛市', 'LIAONING', 'HULUDAO');
cityArr[50] = new Array('220000', '吉林省', '220100', '长春市', 'JILIN', 'CHANGCHUN');
cityArr[51] = new Array('220000', '吉林省', '220200', '吉林市', 'JILIN', 'JILIN_CITY');
cityArr[52] = new Array('220000', '吉林省', '220300', '四平市', 'JILIN', 'SIPING');
cityArr[53] = new Array('220000', '吉林省', '220400', '辽源市', 'JILIN', 'LIAOYUAN');
cityArr[54] = new Array('220000', '吉林省', '220500', '通化市', 'JILIN', 'TONGHUA');
cityArr[55] = new Array('220000', '吉林省', '220600', '白山市', 'JILIN', 'BAISHAN');
cityArr[56] = new Array('220000', '吉林省', '220700', '松原市', 'JILIN', 'SONGYUAN');
cityArr[57] = new Array('220000', '吉林省', '220800', '白城市', 'JILIN', 'BAICHENG');
cityArr[58] = new Array('220000', '吉林省', '222400', '延边朝鲜族自治州', 'JILIN', 'YANBIAN');
cityArr[59] = new Array('230000', '黑龙江省', '230100', '哈尔滨市', 'HEILONGJIANG', 'HARBIN');
cityArr[60] = new Array('230000', '黑龙江省', '230200', '齐齐哈尔市', 'HEILONGJIANG', 'QIQIHAR');
cityArr[61] = new Array('230000', '黑龙江省', '230300', '鸡西市', 'HEILONGJIANG', 'JIXI');
cityArr[62] = new Array('230000', '黑龙江省', '230400', '鹤岗市', 'HEILONGJIANG', 'HEGANG');
cityArr[63] = new Array('230000', '黑龙江省', '230500', '双鸭山市', 'HEILONGJIANG', 'SHUANGYASHAN');
cityArr[64] = new Array('230000', '黑龙江省', '230600', '大庆市', 'HEILONGJIANG', 'QAQING');
cityArr[65] = new Array('230000', '黑龙江省', '230700', '伊春市', 'HEILONGJIANG', 'HLJ_YICHUN');
cityArr[66] = new Array('230000', '黑龙江省', '230800', '佳木斯市', 'HEILONGJIANG', 'JIAMUSI');
cityArr[67] = new Array('230000', '黑龙江省', '230900', '七台河市', 'HEILONGJIANG', 'QITAIHE');
cityArr[68] = new Array('230000', '黑龙江省', '231000', '牡丹江市', 'HEILONGJIANG', 'MUDANJIANG');
cityArr[69] = new Array('230000', '黑龙江省', '231100', '黑河市', 'HEILONGJIANG', 'HEIHE');
cityArr[70] = new Array('230000', '黑龙江省', '231200', '绥化市', 'HEILONGJIANG', 'SUIHUA');
cityArr[71] = new Array('230000', '黑龙江省', '232700', '大兴安岭地区', 'HEILONGJIANG', 'DAXINGANLING');
cityArr[72] = new Array('310000', '上海市', '310099', '上海市', 'SHANGHAI', 'SHANGHAI_CITY');
cityArr[73] = new Array('320000', '江苏省', '320100', '南京市', 'JIANGSU', 'NANJING');
cityArr[74] = new Array('320000', '江苏省', '320200', '无锡市', 'JIANGSU', 'WUXI');
cityArr[75] = new Array('320000', '江苏省', '320300', '徐州市', 'JIANGSU', 'XUZHOU');
cityArr[76] = new Array('320000', '江苏省', '320400', '常州市', 'JIANGSU', 'CHANGZHOU');
cityArr[77] = new Array('320000', '江苏省', '320500', '苏州市', 'JIANGSU', 'SUZHOU_CITY');
cityArr[78] = new Array('320000', '江苏省', '320600', '南通市', 'JIANGSU', 'NANTONG');
cityArr[79] = new Array('320000', '江苏省', '320700', '连云港市', 'JIANGSU', 'LIANYUNGANG');
cityArr[80] = new Array('320000', '江苏省', '320800', '淮安市', 'JIANGSU', 'HUAI_AN');
cityArr[81] = new Array('320000', '江苏省', '320900', '盐城市', 'JIANGSU', 'YANCHENG');
cityArr[82] = new Array('320000', '江苏省', '321000', '扬州市', 'JIANGSU', 'YANGZHOU');
cityArr[83] = new Array('320000', '江苏省', '321100', '镇江市', 'JIANGSU', 'ZHENJIANG');
cityArr[84] = new Array('320000', '江苏省', '321200', '泰州市', 'JIANGSU', 'JS_TAIZHOU');
cityArr[85] = new Array('320000', '江苏省', '321300', '宿迁市', 'JIANGSU', 'SUQIAN');
cityArr[86] = new Array('330000', '浙江省', '330100', '杭州市', 'ZHEJIANG', 'HANGZHOU');
cityArr[87] = new Array('330000', '浙江省', '330200', '宁波市', 'ZHEJIANG', 'NINGBO');
cityArr[88] = new Array('330000', '浙江省', '330300', '温州市', 'ZHEJIANG', 'WENZHOU');
cityArr[89] = new Array('330000', '浙江省', '330400', '嘉兴市', 'ZHEJIANG', 'JIAXING');
cityArr[90] = new Array('330000', '浙江省', '330500', '湖州市', 'ZHEJIANG', 'HUZHOU');
cityArr[91] = new Array('330000', '浙江省', '330600', '绍兴市', 'ZHEJIANG', 'SHAOXING');
cityArr[92] = new Array('330000', '浙江省', '330700', '金华市', 'ZHEJIANG', 'JINHUA');
cityArr[93] = new Array('330000', '浙江省', '330800', '衢州市', 'ZHEJIANG', 'QUZHOU');
cityArr[94] = new Array('330000', '浙江省', '330900', '舟山市', 'ZHEJIANG', 'ZHOUSHAN');
cityArr[95] = new Array('330000', '浙江省', '331000', '台州市', 'ZHEJIANG', 'ZJ_TAIZHOU');
cityArr[96] = new Array('330000', '浙江省', '331100', '丽水市', 'ZHEJIANG', 'LISHUI');
cityArr[97] = new Array('340000', '安徽省', '340100', '合肥市', 'ANHUI', 'HEFEI');
cityArr[98] = new Array('340000', '安徽省', '340200', '芜湖市', 'ANHUI', 'WUHU');
cityArr[99] = new Array('340000', '安徽省', '340300', '蚌埠市', 'ANHUI', 'BENGBU');
cityArr[100] = new Array('340000', '安徽省', '340400', '淮南市', 'ANHUI', 'HUAINAN');
cityArr[101] = new Array('340000', '安徽省', '340500', '马鞍山市', 'ANHUI', 'MA_ANSHAN');
cityArr[102] = new Array('340000', '安徽省', '340600', '淮北市', 'ANHUI', 'HUAIBEI');
cityArr[103] = new Array('340000', '安徽省', '340700', '铜陵市', 'ANHUI', 'TONGLING');
cityArr[104] = new Array('340000', '安徽省', '340800', '安庆市', 'ANHUI', 'ANQING');
cityArr[105] = new Array('340000', '安徽省', '341000', '黄山市', 'ANHUI', 'HUANGSHAN');
cityArr[106] = new Array('340000', '安徽省', '341100', '滁州市', 'ANHUI', 'CHUZHOU');
cityArr[107] = new Array('340000', '安徽省', '341200', '阜阳市', 'ANHUI', 'FUYANG');
cityArr[108] = new Array('340000', '安徽省', '341300', '宿州市', 'ANHUI', 'SUZHOU');
cityArr[109] = new Array('340000', '安徽省', '341500', '六安市', 'ANHUI', 'LIUAN');
cityArr[110] = new Array('340000', '安徽省', '341600', '亳州市', 'ANHUI', 'BOZHOU');
cityArr[111] = new Array('340000', '安徽省', '341700', '池州市', 'ANHUI', 'CHIZHOU');
cityArr[112] = new Array('340000', '安徽省', '341800', '宣城市', 'ANHUI', 'XUANCHENG');
cityArr[113] = new Array('350000', '福建省', '350100', '福州市', 'FUJIAN', 'FJ_FUZHOU');
cityArr[114] = new Array('350000', '福建省', '350200', '厦门市', 'FUJIAN', 'XIAMEN');
cityArr[115] = new Array('350000', '福建省', '350300', '莆田市', 'FUJIAN', 'PUTIAN');
cityArr[116] = new Array('350000', '福建省', '350400', '三明市', 'FUJIAN', 'SANMING');
cityArr[117] = new Array('350000', '福建省', '350500', '泉州市', 'FUJIAN', 'QUANZHOU');
cityArr[118] = new Array('350000', '福建省', '350600', '漳州市', 'FUJIAN', 'ZHANGZHOU');
cityArr[119] = new Array('350000', '福建省', '350700', '南平市', 'FUJIAN', 'NANPING');
cityArr[120] = new Array('350000', '福建省', '350800', '龙岩市', 'FUJIAN', 'LONGYAN');
cityArr[121] = new Array('350000', '福建省', '350900', '宁德市', 'FUJIAN', 'NINGDE');
cityArr[122] = new Array('360000', '江西省', '360100', '南昌市', 'JIANGXI', 'NANCHANG');
cityArr[123] = new Array('360000', '江西省', '360200', '景德镇市', 'JIANGXI', 'JINGDEZHEN');
cityArr[124] = new Array('360000', '江西省', '360300', '萍乡市', 'JIANGXI', 'PINGXIANG');
cityArr[125] = new Array('360000', '江西省', '360400', '九江市', 'JIANGXI', 'JIUJIANG');
cityArr[126] = new Array('360000', '江西省', '360500', '新余市', 'JIANGXI', 'XINYU');
cityArr[127] = new Array('360000', '江西省', '360600', '鹰潭市', 'JIANGXI', 'YINGTAN');
cityArr[128] = new Array('360000', '江西省', '360700', '赣州市', 'JIANGXI', 'GANZHOU');
cityArr[129] = new Array('360000', '江西省', '360800', '吉安市', 'JIANGXI', 'JI_AN');
cityArr[130] = new Array('360000', '江西省', '360900', '宜春市', 'JIANGXI', 'JX_YICHUN');
cityArr[131] = new Array('360000', '江西省', '361000', '抚州市', 'JIANGXI', 'JX_FUZHOU');
cityArr[132] = new Array('360000', '江西省', '361100', '上饶市', 'JIANGXI', 'SHANGRAO');
cityArr[133] = new Array('370000', '山东省', '370100', '济南市', 'SHANDONG', 'JINAN');
cityArr[134] = new Array('370000', '山东省', '370200', '青岛市', 'SHANDONG', 'QINGDAO');
cityArr[135] = new Array('370000', '山东省', '370300', '淄博市', 'SHANDONG', 'ZIBO');
cityArr[136] = new Array('370000', '山东省', '370400', '枣庄市', 'SHANDONG', 'ZAOZHUANG');
cityArr[137] = new Array('370000', '山东省', '370500', '东营市', 'SHANDONG', 'DONGYING');
cityArr[138] = new Array('370000', '山东省', '370600', '烟台市', 'SHANDONG', 'YANTAI');
cityArr[139] = new Array('370000', '山东省', '370700', '潍坊市', 'SHANDONG', 'WEIFANG');
cityArr[140] = new Array('370000', '山东省', '370800', '济宁市', 'SHANDONG', 'JINING');
cityArr[141] = new Array('370000', '山东省', '370900', '泰安市', 'SHANDONG', 'TAIAN');
cityArr[142] = new Array('370000', '山东省', '371000', '威海市', 'SHANDONG', 'WEIHAI');
cityArr[143] = new Array('370000', '山东省', '371100', '日照市', 'SHANDONG', 'RIZHAO');
cityArr[144] = new Array('370000', '山东省', '371200', '莱芜市', 'SHANDONG', 'LAIWU');
cityArr[145] = new Array('370000', '山东省', '371300', '临沂市', 'SHANDONG', 'LINYI');
cityArr[146] = new Array('370000', '山东省', '371400', '德州市', 'SHANDONG', 'DEZHOU');
cityArr[147] = new Array('370000', '山东省', '371500', '聊城市', 'SHANDONG', 'LIAOCHENG');
cityArr[148] = new Array('370000', '山东省', '371600', '滨州市', 'SHANDONG', 'BINZHOU');
cityArr[149] = new Array('370000', '山东省', '371700', '菏泽市', 'SHANDONG', 'HEZE');
cityArr[150] = new Array('410000', '河南省', '410100', '郑州市', 'HENAN', 'ZHENGZHOU');
cityArr[151] = new Array('410000', '河南省', '410200', '开封市', 'HENAN', 'KAIFENG');
cityArr[152] = new Array('410000', '河南省', '410300', '洛阳市', 'HENAN', 'LUOYANG');
cityArr[153] = new Array('410000', '河南省', '410400', '平顶山市', 'HENAN', 'PINGDINGSHAN');
cityArr[154] = new Array('410000', '河南省', '410500', '安阳市', 'HENAN', 'ANYANG');
cityArr[155] = new Array('410000', '河南省', '410600', '鹤壁市', 'HENAN', 'HEBI');
cityArr[156] = new Array('410000', '河南省', '410700', '新乡市', 'HENAN', 'XINXIANG');
cityArr[157] = new Array('410000', '河南省', '410800', '焦作市', 'HENAN', 'JIAOZUO');
cityArr[158] = new Array('410000', '河南省', '410900', '濮阳市', 'HENAN', 'PUYANG');
cityArr[159] = new Array('410000', '河南省', '411000', '许昌市', 'HENAN', 'XUCHANG');
cityArr[160] = new Array('410000', '河南省', '411100', '漯河市', 'HENAN', 'LUOHE');
cityArr[161] = new Array('410000', '河南省', '411200', '三门峡市', 'HENAN', 'SANMENXIA');
cityArr[162] = new Array('410000', '河南省', '411300', '南阳市', 'HENAN', 'NANYANG');
cityArr[163] = new Array('410000', '河南省', '411400', '商丘市', 'HENAN', 'SHANGQIU');
cityArr[164] = new Array('410000', '河南省', '411500', '信阳市', 'HENAN', 'XINYANG');
cityArr[165] = new Array('410000', '河南省', '411600', '周口市', 'HENAN', 'ZHOUKOU');
cityArr[166] = new Array('410000', '河南省', '411700', '驻马店市', 'HENAN', 'ZHUMADIAN');
cityArr[167] = new Array('410000', '河南省', '419098', '济源市', 'HENAN', 'HENAN_MUNICIPALITY');
cityArr[168] = new Array('420000', '湖北省', '420100', '武汉市', 'HUBEI', 'WUHAN');
cityArr[169] = new Array('420000', '湖北省', '420200', '黄石市', 'HUBEI', 'HUANGSHI');
cityArr[170] = new Array('420000', '湖北省', '420300', '十堰市', 'HUBEI', 'SHIYAN');
cityArr[171] = new Array('420000', '湖北省', '420500', '宜昌市', 'HUBEI', 'YICHANG');
cityArr[172] = new Array('420000', '湖北省', '420600', '襄阳市', 'HUBEI', 'XIANGYANG');
cityArr[173] = new Array('420000', '湖北省', '420700', '鄂州市', 'HUBEI', 'EZHOU');
cityArr[174] = new Array('420000', '湖北省', '420800', '荆门市', 'HUBEI', 'JINGMEN');
cityArr[175] = new Array('420000', '湖北省', '420900', '孝感市', 'HUBEI', 'XIAOGAN');
cityArr[176] = new Array('420000', '湖北省', '421000', '荆州市', 'HUBEI', 'JINGZHOU');
cityArr[177] = new Array('420000', '湖北省', '421100', '黄冈市', 'HUBEI', 'HUANGGANG');
cityArr[178] = new Array('420000', '湖北省', '421200', '咸宁市', 'HUBEI', 'XIANNING');
cityArr[179] = new Array('420000', '湖北省', '421300', '随州市', 'HUBEI', 'SUIZHOU');
cityArr[180] = new Array('420000', '湖北省', '422800', '恩施土家族苗族自治州', 'HUBEI', 'ENSHI');
cityArr[181] = new Array('420000', '湖北省', '429078', '神农架林区', 'HUBEI', 'HUBEI_MANICIPALITY');
cityArr[182] = new Array('420000', '湖北省', '429093', '天门市', 'HUBEI', 'HUBEI_MANICIPALITY');
cityArr[183] = new Array('420000', '湖北省', '429094', '潜江市', 'HUBEI', 'HUBEI_MANICIPALITY');
cityArr[184] = new Array('420000', '湖北省', '429095', '仙桃市', 'HUBEI', 'HUBEI_MANICIPALITY');
cityArr[185] = new Array('430000', '湖南省', '430100', '长沙市', 'HUNAN', 'CHANGSHA');
cityArr[186] = new Array('430000', '湖南省', '430200', '株洲市', 'HUNAN', 'ZHUZHOU');
cityArr[187] = new Array('430000', '湖南省', '430300', '湘潭市', 'HUNAN', 'XIANGTAN');
cityArr[188] = new Array('430000', '湖南省', '430400', '衡阳市', 'HUNAN', 'HENGYANG');
cityArr[189] = new Array('430000', '湖南省', '430500', '邵阳市', 'HUNAN', 'SHAOYANG');
cityArr[190] = new Array('430000', '湖南省', '430600', '岳阳市', 'HUNAN', 'YUEYANG');
cityArr[191] = new Array('430000', '湖南省', '430700', '常德市', 'HUNAN', 'CHANGDE');
cityArr[192] = new Array('430000', '湖南省', '430800', '张家界市', 'HUNAN', 'ZHANGJIAJIE');
cityArr[193] = new Array('430000', '湖南省', '430900', '益阳市', 'HUNAN', 'YIYANG');
cityArr[194] = new Array('430000', '湖南省', '431000', '郴州市', 'HUNAN', 'CHENZHOU');
cityArr[195] = new Array('430000', '湖南省', '431100', '永州市', 'HUNAN', 'YONGZHOU');
cityArr[196] = new Array('430000', '湖南省', '431200', '怀化市', 'HUNAN', 'HUAIHUA');
cityArr[197] = new Array('430000', '湖南省', '431300', '娄底市', 'HUNAN', 'LOUDI');
cityArr[198] = new Array('430000', '湖南省', '433100', '湘西土家族苗族自治州', 'HUNAN', 'XIANGXI');
cityArr[199] = new Array('440000', '广东省', '440100', '广州市', 'GUANGDONG', 'GUANGZHOU');
cityArr[200] = new Array('440000', '广东省', '440200', '韶关市', 'GUANGDONG', 'SHAOGUAN');
cityArr[201] = new Array('440000', '广东省', '440300', '深圳市', 'GUANGDONG', 'SHENZHEN');
cityArr[202] = new Array('440000', '广东省', '440400', '珠海市', 'GUANGDONG', 'ZHUHAI');
cityArr[203] = new Array('440000', '广东省', '440500', '汕头市', 'GUANGDONG', 'SHANTOU');
cityArr[204] = new Array('440000', '广东省', '440600', '佛山市', 'GUANGDONG', 'FOSHAN');
cityArr[205] = new Array('440000', '广东省', '440700', '江门市', 'GUANGDONG', 'JIANGMEN');
cityArr[206] = new Array('440000', '广东省', '440800', '湛江市', 'GUANGDONG', 'ZHANJIANG');
cityArr[207] = new Array('440000', '广东省', '440900', '茂名市', 'GUANGDONG', 'MAOMING');
cityArr[208] = new Array('440000', '广东省', '441200', '肇庆市', 'GUANGDONG', 'ZHAOQING');
cityArr[209] = new Array('440000', '广东省', '441300', '惠州市', 'GUANGDONG', 'HUIZHOU');
cityArr[210] = new Array('440000', '广东省', '441400', '梅州市', 'GUANGDONG', 'MEIZHOU');
cityArr[211] = new Array('440000', '广东省', '441500', '汕尾市', 'GUANGDONG', 'SHANWEI');
cityArr[212] = new Array('440000', '广东省', '441600', '河源市', 'GUANGDONG', 'HEYUAN');
cityArr[213] = new Array('440000', '广东省', '441700', '阳江市', 'GUANGDONG', 'YANGJIANG');
cityArr[214] = new Array('440000', '广东省', '441800', '清远市', 'GUANGDONG', 'QINGYUAN');
cityArr[215] = new Array('440000', '广东省', '441999', '东莞市', 'GUANGDONG', 'DONGGUAN');
cityArr[216] = new Array('440000', '广东省', '442099', '中山市', 'GUANGDONG', 'ZHONGSHAN');
cityArr[217] = new Array('440000', '广东省', '445100', '潮州市', 'GUANGDONG', 'CHAOZHOU');
cityArr[218] = new Array('440000', '广东省', '445200', '揭阳市', 'GUANGDONG', 'JIEYANG');
cityArr[219] = new Array('440000', '广东省', '445300', '云浮市', 'GUANGDONG', 'YUNFU');
cityArr[220] = new Array('450000', '广西壮族自治区', '450100', '南宁市', 'GUANGXI', 'NANNING');
cityArr[221] = new Array('450000', '广西壮族自治区', '450200', '柳州市', 'GUANGXI', 'LIUZHOU');
cityArr[222] = new Array('450000', '广西壮族自治区', '450300', '桂林市', 'GUANGXI', 'GUILIN');
cityArr[223] = new Array('450000', '广西壮族自治区', '450400', '梧州市', 'GUANGXI', 'WUZHOU');
cityArr[224] = new Array('450000', '广西壮族自治区', '450500', '北海市', 'GUANGXI', 'BEIHAI');
cityArr[225] = new Array('450000', '广西壮族自治区', '450600', '防城港市', 'GUANGXI', 'FANGCHENGGANG');
cityArr[226] = new Array('450000', '广西壮族自治区', '450700', '钦州市', 'GUANGXI', 'QINZHOU');
cityArr[227] = new Array('450000', '广西壮族自治区', '450800', '贵港市', 'GUANGXI', 'GUIGANG');
cityArr[228] = new Array('450000', '广西壮族自治区', '450900', '玉林市', 'GUANGXI', 'GX_YULIN');
cityArr[229] = new Array('450000', '广西壮族自治区', '451000', '百色市', 'GUANGXI', 'BAISE');
cityArr[230] = new Array('450000', '广西壮族自治区', '451100', '贺州市', 'GUANGXI', 'HEZHOU');
cityArr[231] = new Array('450000', '广西壮族自治区', '451200', '河池市', 'GUANGXI', 'HECHI');
cityArr[232] = new Array('450000', '广西壮族自治区', '451300', '来宾市', 'GUANGXI', 'LAIBIN');
cityArr[233] = new Array('450000', '广西壮族自治区', '451400', '崇左市', 'GUANGXI', 'CHONGZUO');
cityArr[234] = new Array('460000', '海南省', '460100', '海口市', 'HAINAN', 'HAIKOU');
cityArr[235] = new Array('460000', '海南省', '460200', '三亚市', 'HAINAN', 'SANYA');
cityArr[236] = new Array('460000', '海南省', '469068', '三沙市', 'HAINAN', 'SANSHA');
cityArr[237] = new Array('460000', '海南省', '469069', '琼中黎族苗族自治县', 'HAINAN', 'HAINAN_MUNICIPALITY');
cityArr[238] = new Array('460000', '海南省', '469070', '保亭黎族苗族自治县', 'HAINAN', 'HAINAN_MUNICIPALITY');
cityArr[239] = new Array('460000', '海南省', '469071', '陵水黎族自治县', 'HAINAN', 'HAINAN_MUNICIPALITY');
cityArr[240] = new Array('460000', '海南省', '469072', '乐东黎族自治县', 'HAINAN', 'HAINAN_MUNICIPALITY');
cityArr[241] = new Array('460000', '海南省', '469073', '昌江黎族自治县', 'HAINAN', 'HAINAN_MUNICIPALITY');
cityArr[242] = new Array('460000', '海南省', '469074', '白沙黎族自治县', 'HAINAN', 'HAINAN_MUNICIPALITY');
cityArr[243] = new Array('460000', '海南省', '469075', '临高县', 'HAINAN', 'HAINAN_MUNICIPALITY');
cityArr[244] = new Array('460000', '海南省', '469076', '澄迈县', 'HAINAN', 'HAINAN_MUNICIPALITY');
cityArr[245] = new Array('460000', '海南省', '469077', '屯昌县', 'HAINAN', 'HAINAN_MUNICIPALITY');
cityArr[246] = new Array('460000', '海南省', '469078', '定安县', 'HAINAN', 'HAINAN_MUNICIPALITY');
cityArr[247] = new Array('460000', '海南省', '469092', '东方市', 'HAINAN', 'HAINAN_MUNICIPALITY');
cityArr[248] = new Array('460000', '海南省', '469093', '万宁市', 'HAINAN', 'HAINAN_MUNICIPALITY');
cityArr[249] = new Array('460000', '海南省', '469094', '文昌市', 'HAINAN', 'HAINAN_MUNICIPALITY');
cityArr[250] = new Array('460000', '海南省', '469096', '儋州市', 'HAINAN', 'HAINAN_MUNICIPALITY');
cityArr[251] = new Array('460000', '海南省', '469097', '琼海市', 'HAINAN', 'HAINAN_MUNICIPALITY');
cityArr[252] = new Array('460000', '海南省', '469098', '五指山市', 'HAINAN', 'HAINAN_MUNICIPALITY');
cityArr[253] = new Array('500000', '重庆市', '500099', '重庆市', 'CHONGQING', 'CHONGQING_CITY');
cityArr[254] = new Array('510000', '四川省', '510100', '成都市', 'SICHUAN', 'CHENGDU');
cityArr[255] = new Array('510000', '四川省', '510300', '自贡市', 'SICHUAN', 'ZIGONG');
cityArr[256] = new Array('510000', '四川省', '510400', '攀枝花市', 'SICHUAN', 'PANZHIHUA');
cityArr[257] = new Array('510000', '四川省', '510500', '泸州市', 'SICHUAN', 'LUZHOU');
cityArr[258] = new Array('510000', '四川省', '510600', '德阳市', 'SICHUAN', 'DEYANG');
cityArr[259] = new Array('510000', '四川省', '510700', '绵阳市', 'SICHUAN', 'MIANYANG');
cityArr[260] = new Array('510000', '四川省', '510800', '广元市', 'SICHUAN', 'GUANGYUAN');
cityArr[261] = new Array('510000', '四川省', '510900', '遂宁市', 'SICHUAN', 'SUINING');
cityArr[262] = new Array('510000', '四川省', '511000', '内江市', 'SICHUAN', 'NEIJIANG');
cityArr[263] = new Array('510000', '四川省', '511100', '乐山市', 'SICHUAN', 'LESHAN');
cityArr[264] = new Array('510000', '四川省', '511300', '南充市', 'SICHUAN', 'NANCHONG');
cityArr[265] = new Array('510000', '四川省', '511400', '眉山市', 'SICHUAN', 'MEISHAN');
cityArr[266] = new Array('510000', '四川省', '511500', '宜宾市', 'SICHUAN', 'YIBIN');
cityArr[267] = new Array('510000', '四川省', '511600', '广安市', 'SICHUAN', 'GUANG_AN');
cityArr[268] = new Array('510000', '四川省', '511700', '达州市', 'SICHUAN', 'DAZHOU');
cityArr[269] = new Array('510000', '四川省', '511800', '雅安市', 'SICHUAN', 'YA_AN');
cityArr[270] = new Array('510000', '四川省', '511900', '巴中市', 'SICHUAN', 'BAZHONG');
cityArr[271] = new Array('510000', '四川省', '512000', '资阳市', 'SICHUAN', 'ZIYANG');
cityArr[272] = new Array('510000', '四川省', '513200', '阿坝藏族羌族自治州', 'SICHUAN', 'NGAWA');
cityArr[273] = new Array('510000', '四川省', '513300', '甘孜藏族自治州', 'SICHUAN', 'GARZE');
cityArr[274] = new Array('510000', '四川省', '513400', '凉山彝族自治州', 'SICHUAN', 'LIANGSHAN');
cityArr[275] = new Array('520000', '贵州省', '520100', '贵阳市', 'GUIZHOU', 'GUIYANG');
cityArr[276] = new Array('520000', '贵州省', '520200', '六盘水市', 'GUIZHOU', 'LIUPANSHUI');
cityArr[277] = new Array('520000', '贵州省', '520300', '遵义市', 'GUIZHOU', 'ZUNYI');
cityArr[278] = new Array('520000', '贵州省', '520400', '安顺市', 'GUIZHOU', 'ANSHUN');
cityArr[279] = new Array('520000', '贵州省', '522200', '铜仁市', 'GUIZHOU', 'TONGREN');
cityArr[280] = new Array('520000', '贵州省', '522300', '黔西南布依族苗族自治州', 'GUIZHOU', 'QIANXINAN');
cityArr[281] = new Array('520000', '贵州省', '522400', '毕节市', 'GUIZHOU', 'BIJIE');
cityArr[282] = new Array('520000', '贵州省', '522600', '黔东南苗族侗族自治州', 'GUIZHOU', 'QIANDONGNAN');
cityArr[283] = new Array('520000', '贵州省', '522700', '黔南布依族苗族自治州', 'GUIZHOU', 'QIANNAN');
cityArr[284] = new Array('530000', '云南省', '530100', '昆明市', 'YUNNAN', 'KUNMING');
cityArr[285] = new Array('530000', '云南省', '530300', '曲靖市', 'YUNNAN', 'QUJING');
cityArr[286] = new Array('530000', '云南省', '530400', '玉溪市', 'YUNNAN', 'YUXI');
cityArr[287] = new Array('530000', '云南省', '530500', '保山市', 'YUNNAN', 'BAOSHAN');
cityArr[288] = new Array('530000', '云南省', '530600', '昭通市', 'YUNNAN', 'ZHAOTONG');
cityArr[289] = new Array('530000', '云南省', '530700', '丽江市', 'YUNNAN', 'LIJIANG');
cityArr[290] = new Array('530000', '云南省', '530800', '普洱市', 'YUNNAN', 'PUER');
cityArr[291] = new Array('530000', '云南省', '530900', '临沧市', 'YUNNAN', 'LINCANG');
cityArr[292] = new Array('530000', '云南省', '532300', '楚雄彝族自治州', 'YUNNAN', 'CHUXIONG');
cityArr[293] = new Array('530000', '云南省', '532500', '红河哈尼族彝族自治州', 'YUNNAN', 'HONGHE');
cityArr[294] = new Array('530000', '云南省', '532600', '文山壮族苗族自治州', 'YUNNAN', 'WENSHAN');
cityArr[295] = new Array('530000', '云南省', '532800', '西双版纳傣族自治州', 'YUNNAN', 'XISHUANGBANNA');
cityArr[296] = new Array('530000', '云南省', '532900', '大理白族自治州', 'YUNNAN', 'DALI');
cityArr[297] = new Array('530000', '云南省', '533100', '德宏傣族景颇族自治州', 'YUNNAN', 'DEHONG');
cityArr[298] = new Array('530000', '云南省', '533300', '怒江傈僳族自治州', 'YUNNAN', 'NUJIANG');
cityArr[299] = new Array('530000', '云南省', '533400', '迪庆藏族自治州', 'YUNNAN', 'DEQEN');
cityArr[300] = new Array('540000', '西藏自治区', '540100', '拉萨市', 'TIBET', 'LHASA');
cityArr[301] = new Array('540000', '西藏自治区', '542100', '昌都地区', 'TIBET', 'CHAMDO');
cityArr[302] = new Array('540000', '西藏自治区', '542200', '山南地区', 'TIBET', 'SHANNAN');
cityArr[303] = new Array('540000', '西藏自治区', '542300', '日喀则地区', 'TIBET', 'SHIGATSE');
cityArr[304] = new Array('540000', '西藏自治区', '542400', '那曲地区', 'TIBET', 'NAGQU');
cityArr[305] = new Array('540000', '西藏自治区', '542500', '阿里地区', 'TIBET', 'NGARI');
cityArr[306] = new Array('540000', '西藏自治区', '542600', '林芝地区', 'TIBET', 'NYINGCHI');
cityArr[307] = new Array('610000', '陕西省', '610100', '西安市', 'SHAANXI', 'XI_AN');
cityArr[308] = new Array('610000', '陕西省', '610200', '铜川市', 'SHAANXI', 'TONGCHUAN');
cityArr[309] = new Array('610000', '陕西省', '610300', '宝鸡市', 'SHAANXI', 'BAOJI');
cityArr[310] = new Array('610000', '陕西省', '610400', '咸阳市', 'SHAANXI', 'XIANYANG');
cityArr[311] = new Array('610000', '陕西省', '610500', '渭南市', 'SHAANXI', 'WEINAN');
cityArr[312] = new Array('610000', '陕西省', '610600', '延安市', 'SHAANXI', 'YAN_AN');
cityArr[313] = new Array('610000', '陕西省', '610700', '汉中市', 'SHAANXI', 'HANZHONG');
cityArr[314] = new Array('610000', '陕西省', '610800', '榆林市', 'SHAANXI', 'SX_YULIN');
cityArr[315] = new Array('610000', '陕西省', '610900', '安康市', 'SHAANXI', 'ANKANG');
cityArr[316] = new Array('610000', '陕西省', '611000', '商洛市', 'SHAANXI', 'SHANGLUO');
cityArr[317] = new Array('620000', '甘肃省', '620100', '兰州市', 'GANSU', 'LANZHOU');
cityArr[318] = new Array('620000', '甘肃省', '620200', '嘉峪关市', 'GANSU', 'JIAYUGUAN');
cityArr[319] = new Array('620000', '甘肃省', '620300', '金昌市', 'GANSU', 'KIMCHANG');
cityArr[320] = new Array('620000', '甘肃省', '620400', '白银市', 'GANSU', 'BAIYIN');
cityArr[321] = new Array('620000', '甘肃省', '620500', '天水市', 'GANSU', 'TIANSHUI');
cityArr[322] = new Array('620000', '甘肃省', '620600', '武威市', 'GANSU', 'WUWEI');
cityArr[323] = new Array('620000', '甘肃省', '620700', '张掖市', 'GANSU', 'ZHANGYE');
cityArr[324] = new Array('620000', '甘肃省', '620800', '平凉市', 'GANSU', 'PINGLIANG');
cityArr[325] = new Array('620000', '甘肃省', '620900', '酒泉市', 'GANSU', 'JIUQUAN');
cityArr[326] = new Array('620000', '甘肃省', '621000', '庆阳市', 'GANSU', 'QINGYANG');
cityArr[327] = new Array('620000', '甘肃省', '621100', '定西市', 'GANSU', 'DINGXI');
cityArr[328] = new Array('620000', '甘肃省', '621200', '陇南市', 'GANSU', 'LONGNAN');
cityArr[329] = new Array('620000', '甘肃省', '622900', '临夏回族自治州', 'GANSU', 'LINXIA');
cityArr[330] = new Array('620000', '甘肃省', '623000', '甘南藏族自治州', 'GANSU', 'GANNAN');
cityArr[331] = new Array('630000', '青海省', '630100', '西宁市', 'QINGHAI', 'XINING');
cityArr[332] = new Array('630000', '青海省', '632100', '海东地区', 'QINGHAI', 'HAIDONG');
cityArr[333] = new Array('630000', '青海省', '632200', '海北藏族自治州', 'QINGHAI', 'HAIBEI');
cityArr[334] = new Array('630000', '青海省', '632300', '黄南藏族自治州', 'QINGHAI', 'Huangnan');
cityArr[335] = new Array('630000', '青海省', '632500', '海南藏族自治州', 'QINGHAI', 'HAINAN_TIBET');
cityArr[336] = new Array('630000', '青海省', '632600', '果洛藏族自治州', 'QINGHAI', 'Golog');
cityArr[337] = new Array('630000', '青海省', '632700', '玉树藏族自治州', 'QINGHAI', 'YUSHU');
cityArr[338] = new Array('630000', '青海省', '632800', '海西蒙古族藏族自治州', 'QINGHAI', 'HAIXI');
cityArr[339] = new Array('640000', '宁夏回族自治区', '640100', '银川市', 'NINGXIA', 'YINCHUAN');
cityArr[340] = new Array('640000', '宁夏回族自治区', '640200', '石嘴山市', 'NINGXIA', 'SHIZUISHAN');
cityArr[341] = new Array('640000', '宁夏回族自治区', '640300', '吴忠市', 'NINGXIA', 'WUZHONG');
cityArr[342] = new Array('640000', '宁夏回族自治区', '640400', '固原市', 'NINGXIA', 'GUYUAN');
cityArr[343] = new Array('640000', '宁夏回族自治区', '640500', '中卫市', 'NINGXIA', 'ZHONGWEI');
cityArr[344] = new Array('650000', '新疆维吾尔自治区', '650100', '乌鲁木齐市', 'XINJIANG', 'URUMQI');
cityArr[345] = new Array('650000', '新疆维吾尔自治区', '650200', '克拉玛依市', 'XINJIANG', 'KARAMAY');
cityArr[346] = new Array('650000', '新疆维吾尔自治区', '652100', '吐鲁番地区', 'XINJIANG', 'TURPAN');
cityArr[347] = new Array('650000', '新疆维吾尔自治区', '652200', '哈密地区', 'XINJIANG', 'HAMI');
cityArr[348] = new Array('650000', '新疆维吾尔自治区', '652300', '昌吉回族自治州', 'XINJIANG', 'ChANGJI');
cityArr[349] = new Array('650000', '新疆维吾尔自治区', '652700', '博尔塔拉蒙古自治州', 'XINJIANG', 'BORTALA');
cityArr[350] = new Array('650000', '新疆维吾尔自治区', '652800', '巴音郭楞蒙古自治州', 'XINJIANG', 'BAYINGOL');
cityArr[351] = new Array('650000', '新疆维吾尔自治区', '652900', '阿克苏地区', 'XINJIANG', 'AKESU');
cityArr[352] = new Array('650000', '新疆维吾尔自治区', '653000', '克孜勒苏柯尔克孜自治州', 'XINJIANG', 'KIZILSU');
cityArr[353] = new Array('650000', '新疆维吾尔自治区', '653100', '喀什地区', 'XINJIANG', 'KASHI');
cityArr[354] = new Array('650000', '新疆维吾尔自治区', '653200', '和田地区', 'XINJIANG', 'HETIAN');
cityArr[355] = new Array('650000', '新疆维吾尔自治区', '654000', '伊犁哈萨克自治州', 'XINJIANG', 'ILI');
cityArr[356] = new Array('650000', '新疆维吾尔自治区', '654200', '塔城地区', 'XINJIANG', 'TACHENG');
cityArr[357] = new Array('650000', '新疆维吾尔自治区', '654300', '阿勒泰地区', 'XINJIANG', 'ALTAY');
cityArr[358] = new Array('650000', '新疆维吾尔自治区', '659095', '五家渠市', 'XINJIANG', 'XINJIANG_AUTONOMOUS');
cityArr[359] = new Array('650000', '新疆维吾尔自治区', '659096', '图木舒克市', 'XINJIANG', 'XINJIANG_AUTONOMOUS');
cityArr[360] = new Array('650000', '新疆维吾尔自治区', '659097', '阿拉尔市', 'XINJIANG', 'XINJIANG_AUTONOMOUS');
cityArr[361] = new Array('650000', '新疆维吾尔自治区', '659098', '石河子市', 'XINJIANG', 'XINJIANG_AUTONOMOUS');
cityArr[362] = new Array('810000', '香港特別行政區', '810119', '香港', 'HONGKONG', 'HONGKONG');
cityArr[363] = new Array('810000', '香港特別行政區', '810120', '九龍', 'HONGKONG', 'JIULONG');
cityArr[364] = new Array('810000', '香港特別行政區', '810121', '新界', 'HONGKONG', 'XINJIE');
cityArr[365] = new Array('820000', '澳門特別行政區', '820100', '澳門', 'MACAU', 'MACAU');

var provArr = new Array(33);
provArr[0] = new Array('BEIJING', '北京市');
provArr[1] = new Array('TIANJIN', '天津市');
provArr[2] = new Array('HEBEI', '河北省');
provArr[3] = new Array('SHANXI', '山西省');
provArr[4] = new Array('INNER_MONGOLIA', '内蒙古自治区');
provArr[5] = new Array('LIAONING', '辽宁省');
provArr[6] = new Array('JILIN', '吉林省');
provArr[7] = new Array('HEILONGJIANG', '黑龙江省');
provArr[8] = new Array('SHANGHAI', '上海市');
provArr[9] = new Array('JIANGSU', '江苏省');
provArr[10] = new Array('ZHEJIANG', '浙江省');
provArr[11] = new Array('ANHUI', '安徽省');
provArr[12] = new Array('FUJIAN', '福建省');
provArr[13] = new Array('JIANGXI', '江西省');
provArr[14] = new Array('SHANDONG', '山东省');
provArr[15] = new Array('HENAN', '河南省');
provArr[16] = new Array('HUBEI', '湖北省');
provArr[17] = new Array('HUNAN', '湖南省');
provArr[18] = new Array('GUANGDONG', '广东省');
provArr[19] = new Array('GUANGXI', '广西壮族自治区');
provArr[20] = new Array('HAINAN', '海南省');
provArr[21] = new Array('CHONGQING', '重庆市');
provArr[22] = new Array('SICHUAN', '四川省');
provArr[23] = new Array('GUIZHOU', '贵州省');
provArr[24] = new Array('YUNNAN', '云南省');
provArr[25] = new Array('TIBET', '西藏自治区');
provArr[26] = new Array('SHAANXI', '陕西省');
provArr[27] = new Array('GANSU', '甘肃省');
provArr[28] = new Array('QINGHAI', '青海省');
provArr[29] = new Array('NINGXIA', '宁夏回族自治区');
provArr[30] = new Array('XINJIANG', '新疆维吾尔自治区');
provArr[31] = new Array('HONGKONG', '香港特別行政區');
provArr[32] = new Array('MACAU', '澳門特別行政區');

function getCitysByProvinceCode(str){//根据省代码，得到一个城市的相关数据（联动可用）
    var citysArr = new Array();
    for(var i=0;i<cityArr.length;i++){
        if(cityArr[i][4] == str){
			citysArr.push(new Array(cityArr[i][3],cityArr[i][5]));
        }
    }
    return citysArr;
}

function getProvince(){//得到省
	
    var provsArr = new Array();
    for(var i=0;i<provArr.length;i++){
    	provsArr.push(new Array(provArr[i][1],provArr[i][0]));
    } 
    return provsArr;
}

function getCity(val,cityName)
{   
	var f=document.getElementById(cityName);
	
    var citysArr = getCitysByProvinceCode(val);    
    if(f.options.length > 1){//clear olditems
        for(var i=f.options.length-1;i>0;i--){
            f.options.remove(i);
        }
    }
    for(var i=0;i<citysArr.length;i++){
        f.add(new Option(citysArr[i][0],citysArr[i][1]));
    }
  
    $('#address_province').selectmenu('refresh', true);
	$('#address_city').selectmenu('refresh',true);
}

function initProvinceCity(ProvName, CityName)
{ 
	var f=document.getElementById('address_province');
	var provsArr = getProvince(); 
	for(var i=0;i<provsArr.length;i++){
		f.add(new Option(provsArr[i][0],provsArr[i][1]));
		if(ProvName !='' && f.options[i].value==ProvName){
			f.options[i].setAttribute("selected", "selected");
		}
	}	
    if(CityName!='' && ProvName!='')
    {		
		var found = false;
        for(var i=0;i<cityArr.length;i++){
			if(cityArr[i][5]==CityName){
				found = true;
				break;
			}
        }			
		if(found){
			f=document.getElementById('address_city');
			var citysArr = getCitysByProvinceCode(ProvName);       
			for(var i=f.options.length-1;i>0;i--){
				f.options.remove(i);
			}		
			for(var i=0;i<citysArr.length;i++){
				f.add(new Option(citysArr[i][0],citysArr[i][1]));
				if(f.options[i+1].value==CityName){
					f.options[i+1].setAttribute("selected", "selected");
				}
			}	
			
        }
	}
}    
