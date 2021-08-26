const getDetail = require('./getDetail');
const getTitle = require('./getTitle');
var a = {
    "X2121_腕豪": [
        "高德地图—打车——行程单@@AMAP ITINERARY@@申请时间：2021-08-19@@行程时间：2021-07-12 21:11至2021-07-12 21:17@@行程人手机号：13852895816@@共计1单行程，合计10.71元@@序号@@服务商@@车型@@上车时间@@城市@@起点@@终点@@金额(元)@@1@@T3出行@@T3经济型@@2021-07-12 21:11@@重庆市@@轨道三亚湾站(公交站)-路北@@上城国际公寓@@10.71@@1. 报销金额请以发票金额为准。@@2. 行程单金额可能包括路桥费、高速费、停车费、优惠券等附加费用金额。@@3. 发票发送时间可能与行程单不同，请耐心等候。@@页码： @@1@@ / @@1"
    ],
    "X7777_徐世炀": [
        "-@@滴滴出行—行程单@@DIDI TRAVEL - TRIP TABLE@@　姓名：　@@____________________________________@@　工号：　@@____________________________________@@　部门：　@@____________________________________@@申请日期:@@2021-08-06@@行程起止日期:@@2017-08-23 至 2018-01-14@@行程人手机号:@@13852895816@@共11笔行程， 合计 140.60元@@序号@@车型@@ \n  上车时间@@城 市@@起点@@终点@@里程@@[公里]@@金额@@[元]@@备注@@1@@快车@@08-23 17:27 周三@@泰州市@@兴化市垛田镇杭州路169号昭阳湖御@@景园附近|昭阳湖御景园-东门@@长安食府@@3.81@@10.16@@2@@快车@@08-24 23:04 周四@@泰州市@@金花园菊苑正门对面@@昭阳湖御景园@@3.22@@12.32@@3@@快车@@09-29 13:46 周五@@徐州市@@泉山区.七里沟街道.迎宾大道|汽车南@@站\n  -公交站@@徐州站(老火车站)[公交站]@@5.9@@14.24@@4@@快车@@10-05 14:38 周四@@泰州市@@兴化市.昭阳镇.昭阳西路|兴化裕华花@@园酒店@@青柠影咖@@2.43@@3.83@@5@@快车@@10-05 17:12 周四@@泰州市@@兴化市.昭阳镇.英武中路|东方商厦(兴@@化店)@@学珍大院@@2.65@@3.88@@6@@快车@@11-10 15:49 周五@@徐州市@@云龙区.大龙湖街道.昆仑大道|大龙湖-@@公交站@@徐州工程\n  学院(中心校区)@@3.7@@8.32@@7@@快车@@12-01 19:36 周五@@南京市@@栖霞区.仙林.仙隐北路|尧胜村-公交站@@南京站@@10.2@@16.91@@8@@快车@@12-30 09:41 周六@@徐州市@@云龙区大龙湖 \n  街道清风路17号中锐星@@尚城1号楼|龙吟大酒店@@云龙山@@16.0@@44.46@@9@@快车@@01-12 18:36 周五@@徐州市@@云龙区.元和路|昆仑大道/元和路(路口@@)西北侧@@徐州工程学院(中心校区)@@2.1@@8.00@@10@@快车@@01-14 13:30 周日@@泰州市@@兴化市.文峰路|昭阳湖御景园-东门@@楚水实验学校@@4.38@@11.48@@11@@快车@@01-14 13:58 周日@@泰州市@@兴化市昭阳路360|楚水实\n  验学校@@青柠影咖@@2.02@@7.00@@页码：1/1"
    ],
    "X7778_凌旺": [
        "-@@滴滴出行—行程单@@DIDI TRAVEL - TRIP TABLE@@　姓名：　@@____________________________________@@　工号：　@@____________________________________@@　部门：　@@____________________________________@@申请日期:@@2021-08-06@@行程起止日期:@@2021-05-22 至 2021-06-14@@行程人手机号:@@13196772527@@共3笔行程， 合计 60.13元@@序号@@车型@@上 \n  车时间@@城 市@@起点@@终点@@里程@@[公里]@@金额@@[元]@@备注@@1@@滴滴快@@车@@05-22 18:41 周六@@常州市@@星河澜月湾-北门东侧@@湖塘|常州大学(武进科教城校区)-西门@@14.2@@40.13@@2@@滴滴快@@车@@06-13 18:32 周日@@常州市@@湖塘|小庙村-西门@@清沐精品酒店(常州淹城湖塘世贸中心@@店)@@1.3@@10.00@@3@@滴滴快@@车@@06-14 12:01 周一@@常州市@@清沐精品酒店\n  (常州淹城湖塘世贸中心@@店)东北侧-上车点@@湖塘|龙卫臻缘酒店(常州大学城店)@@1.9@@10.00@@页码：1/1"
    ],
    "X9528_阿百川": [
        "T3@@出行@@—@@行程单@@姓名：@@____________________________________@@　工号：@@____________________________________@@　部门：@@____________________________________@@申请日期@@:2021-07-31@@行程日期@@:2021-0@@7@@-@@14@@至@@ 2021-07-2@@8@@行程人手机号@@:@@13883297602@@共@@6@@笔行程，@@合计@@ 360.74@@元@@序号车型下单时间行程结束时间 \n  城市起点@@终点里程@@[@@公里@@]@@金额@@[@@元@@]@@备注@@1@@快车@@2021-07-2@@8@@ 2@@2@@:10@@2021-07-2@@8@@ 2@@2@@:48@@重庆市@@2@@9@@.23@@6@@3@@.16@@2@@快车@@2021-07-26 2@@2@@:@@0@@9@@2021-07-26 2@@2@@:@@49@@重庆市@@北大资源燕南二街@@区停车场@@2@@8@@.88@@5@@8@@.32@@3@@快车@@2021-07-2@@1@@ 2@@2@@:04@@2021-07-2@@1@@ 2@@2@@:47@@重庆市@@北 \n  大资源燕南二街@@区停车场@@2@@9@@.46@@64@@.41@@4@@快车@@2021-07-@@19@@22@@:@@0@@9@@2021-07-@@19@@ 2@@2@@:4@@5 @@重庆市@@北大资源燕南二街@@区停车场@@2@@8@@.75@@6@@1.77@@5@@快车@@2021-07-1@@5@@2@@2:@@0@@4@@2021-07-1@@5@@22@@:@@3@@6@@重庆市@@北大资源燕南二街@@区停车场@@2@@9.61@@5@@4@@.@@54@@6@@快车@@北大资源燕南二街@@区停车场@@2@@8@@.4@@5@@8.54@@第 1 页 /共@@ 1 页@@2021-07-14 2@@2@@:@@0@@2@@2021-07-14 2@@2@@:@@42 @@重庆市@@三亚湾出入境@@北大资源燕南二街@@区停车场@@ 三亚湾出入境@@三亚湾出入境@@金石大 \n  道中段@@（公交站）@@三亚湾出入境@@金石大道中段@@（公交站）",
        "-@@滴滴出行—行程单@@DIDI TRAVEL - TRIP TABLE@@　姓名：　@@____________________________________@@　工号：　@@____________________________________@@　部门：　@@____________________________________@@申请日期:@@2021-08-18@@行程起止日期:@@2018-01-14 至 2020-01-10@@行程人手机号:@@13852895816@@共26笔行程， 合计 755.21元@@序号@@车型@@ \n  上车时间@@城 市@@起点@@终点@@里程@@[公里]@@金额@@[元]@@备注@@1@@快车@@01-14 22:38 周日@@泰州市@@兴化市星海花园东区(昭阳路南)|春萍@@超市@@昭阳湖御景园-东门@@4.84@@12.91@@2@@快车@@01-16 13:47 周二@@泰州市@@兴化市星海花园东区(昭阳路南)|春萍@@超市@@东方商厦(兴化店)@@0.5@@7.00@@3@@快车@@01-27 13:17 周六@@泰州市@@兴化市.文峰路|昭阳湖御景 \n  园-东门@@兴化市新城派出所@@4.8@@13.14@@4@@快车@@03-16 21:04 周五@@徐州市@@元和路|杨小民美术馆-北门对面@@徐州工程学院(中心校区)@@2.2@@8.00@@5@@快车@@03-26 19:45 周一@@ \n  徐州市@@311国道|徐州工程学院(城南校区)@@徐州工程学院(中心校区)@@8.5@@19.20@@6@@快车@@04-29 21:40 周日@@常州市@@衡山路高邮湖路-公交站@@薛家|奥林匹克花园-南门@@5.9@@15.76@@7@@快车@@05-01 12:45 周二@@常州市@@薛家|奥园艺术培训@@湖塘|常州大学(武进校区)@@25.0@@54.87@@8@@快车@@05-02 13:40 周三@@常州市@@滆湖路花园街(工程学院)-公交站@@新北区\n  |常州北站@@29.6@@69.24@@9@@快车@@05-02 17:54 周三@@徐州市@@徐州东站-公交站路南@@云龙区|徐州工程学院(中心校区)@@11.7@@25.22@@10@@快车@@07-06 12:29 周五@@徐州市@@工程学 \n  院中心校区-公交站路南@@云龙区|徐州站@@14.0@@33.66@@11@@快车@@11-16 18:10 周五@@徐州市@@徐州老火车站|七加七时尚快速餐饮@@(汽车总站店)@@云龙区|龙吟大酒店@@14.8@@41.58@@12@@快车@@11-17 12:07 周六@@徐州市@@工程学院中心校区-公交站路北@@泰山|徐州动物园@@14.1@@34.04@@页码：1/2-@@序号@@车型@@上车时间@@城 市@@起点@@终点@@里程@@[公里]@@金额@@[元]@@备注@@13@@快车@@11-17 15:51 周六@@徐州市@@泰山|徐州动物园售票处@@云龙区|绿地商务城@@12.6@@33.72@@14@@快车@@11-18 13:56 周日@@徐州市@@工程学院中心校区-公交站路南@@贾汪区|徐州东站@@12.4@@28.43@@15@@快车@@01-12 08:22 周六@@徐州市@@工程学院(中心校区)-公交站路南@@云龙区|徐州站@@15.7@@42.37@@16@@快车@@01-13 15:13 周日@@常州市@@湖塘|常州大学武进校区-北1门@@红梅|常州站@@13.2@@39.22@@17@@快车@@02-10 14:43 周日@@泰州市@@昭阳路|华莱士(幸福小城店)-上车点@@兴化市安达汽车客运站@@4.9@@14.05@@18@@快车@@04-06 18:36 周六@@常州市@@永新路|常州市明益机械有限公司-北@@门@@湖塘|常州大学武进校区-南门@@27.4@@68.95@@19@@快车@@04-07 10:46 周日@@常州市@@湖塘|常州大学武进校区-北1门@@红梅|常州站@@12.5@@35.83@@20@@快车@@07-06 09:10 周六@@徐州市@@宣武市场站-公交站路东@@云龙区|徐州站@@1.3@@8.00@@21@@快车@@07-06 15:52 周六@@常州市@@出站直行-出租车上客 \n  区旁@@湖塘|常州大学武进校区-北1门@@13.3@@38.29@@22@@快车@@08-23 14:54 周五@@常州市@@湖塘|小庙村-西门@@红梅|常州站北广场进站口@@19.9@@52.54@@23@@快车@@10-01 18:37 周二@@杭州市@@灵竺路|必胜客(西湖灵隐店)东侧@@黄龙|川味观毛肚火锅(学院路店)@@4.9@@18.18@@24@@快车@@10-02 21:26 周三@@杭州市@@玉古路|杭州玉泉饭店-西北门@@黄龙|庆丰新村-西南1 \n  门@@1.3@@11.00@@25@@快车@@01-10 11:31 周五@@常州市@@湖塘|清沐精选酒店(常州淹城又一城@@广场店)@@红梅|常州站@@9.8@@21.51@@26@@快车@@01-10 15:28 周五@@泰州市@@博德瓷砖@@ \n  兴化市|昭阳湖御景园@@1.7@@8.50@@页码：2/2",
        "-@@滴滴出行—行程单@@DIDI TRAVEL - TRIP TABLE@@　姓名：　@@____________________________________@@　工号：　@@____________________________________@@　部门：　@@____________________________________@@申请日期:@@2021-08-18@@行程起止日期:@@2020-10-01 至 2020-10-01@@行程人手机号:@@13852895816@@共1笔行程， 合计 8.50元@@序号@@车型@@上车\n  时间@@城 市@@起点@@终点@@里程@@[公里]@@金额@@[元]@@备注@@1@@滴滴快@@车@@10-01 12:11 周四@@泰州市@@春天地板@@兴化市垛田镇中和路昭阳湖御景园@@1.8@@8.50@@页码：1/1"
    ]
}

var data = [
    {
        id: 'X2121',
        name: 'xxx',
        title: 'xxx',
        detail: [
            {
                date: "2020/10/1",
                money: '8.7',
                reason: 'xxx',
                time: '12:09',
            }
        ]
    },
    {
        id: 'X2221',
        name: 'xxx2',
        title: 'xxx2',
        detail: [
            {
                date: "2020/10/2",
                money: '8.2',
                reason: 'xx2',
                time: '12:02',
            }
        ]
    },
]


function transform(data) {
    return Object.keys(data).map(key => {
        const [id, name] = key.split('_');
        const detail = getDetail(data[key]);
        const title = getTitle(detail);
        return {
            id, 
            name,
            title,
            detail,
        }
    })
};