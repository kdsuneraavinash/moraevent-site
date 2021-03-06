class MockDatabase {

    static async getAllEvents() {
        await new Promise((r, j) => setTimeout(r, 1000))
        return this.getData().map((v) => {
            let w = {
                ...v
            };
            w.description = w.description + '';
            w.description = w.description.slice(0, 105);
            return w;
        });
    }

    static async getEvent(id) {
        await new Promise((r, j) => setTimeout(r, 1000))
        return this.getData().find((v) => v.id == id);
    }

    static getData() {
        return [{
                id: "5ce94998bb85ce1bc4b36d03",
                name: "Tropolis Animalia",
                organizer: "Radiantix Virva",
                venue: "694 Clark Street, Allentown, Minnesota, 6953",
                description: "Excepteur quis cupidatat cupidatat proident. Aliquip nostrud fugiat consequat ea veniam ad esse ut commodo ut proident consectetur. Amet non exercitation enim exercitation dolore quis nisi fugiat irure culpa anim non. Non ullamco excepteur veniam deserunt consequat nulla Lorem ex est. Aliqua elit excepteur id officia aliquip amet reprehenderit ut. Adipisicing cupidatat dolor Lorem est aliquip adipisicing pariatur ex occaecat ad esse. Amet adipisicing veniam in veniam nisi sit laboris est.\r\nSunt officia aute aliquip excepteur labore dolor labore enim eu commodo laboris et. Dolore Lorem elit nisi occaecat amet excepteur dolor ullamco. Laboris minim ad minim veniam. Non culpa elit magna excepteur esse laborum minim ullamco cillum eu. Veniam magna Lorem anim culpa dolor esse aute aliquip labore veniam ullamco enim irure. Lorem proident amet do voluptate voluptate aliquip mollit. Dolore ut incididunt laboris quis cupidatat excepteur consequat culpa in pariatur nulla.\r\n",
                startDateTime: "2016-02-21T08:44:03",
                endDateTime: "2017-09-11T12:17:47",
                startMomentTime: "2019-02-27T07:58:38",
                endMomentTime: "2018-09-07T02:46:18",
                isAllDay: false,
                stars: 61,
                coverImageUrl: "https://picsum.photos/1000/1000?image=28",
                iLiked: true
            },
            {
                id: "5ce9499801deba6b6e7f4f5d",
                name: "Enomen Comtrail",
                organizer: "Buzzopia Kog",
                venue: "109 Pulaski Street, Dexter, Florida, 1873",
                description: "Reprehenderit aliquip reprehenderit nisi aliqua pariatur ex. Fugiat laborum qui nulla dolore non. Cupidatat deserunt occaecat sit culpa minim voluptate adipisicing voluptate deserunt aliquip in. Nostrud in dolore est do consequat dolor ullamco commodo proident fugiat mollit occaecat voluptate duis.\r\nMinim excepteur et eu commodo occaecat sit ullamco laborum sunt. Cillum fugiat deserunt et laborum nisi aliqua. Reprehenderit pariatur sit id irure culpa ad ad enim mollit quis magna do est sunt. Eiusmod eiusmod enim mollit nulla commodo eiusmod consequat consequat minim sunt quis reprehenderit. Cillum nostrud ad labore aliqua dolor minim magna tempor mollit mollit minim duis minim.\r\n",
                startDateTime: "2016-12-29T07:46:03",
                endDateTime: "2018-03-11T11:55:10",
                startMomentTime: "2015-10-18T02:56:56",
                endMomentTime: "2017-08-11T12:24:53",
                isAllDay: false,
                stars: 701,
                coverImageUrl: "https://picsum.photos/1000/1000?image=96",
                iLiked: false
            },
            {
                id: "5ce94998e928ffd67ea41a8b",
                name: "Qualitern Isonus",
                organizer: "Xymonk Zaj",
                venue: "502 Battery Avenue, Crown, Alaska, 8066",
                description: "Pariatur sint duis sunt enim quis ut. Magna est velit nulla ut. Non fugiat quis nulla elit tempor sunt et incididunt in tempor sint consectetur. Esse consequat commodo eiusmod sit nostrud minim est anim non voluptate. Pariatur officia laborum amet fugiat in irure irure irure sint aliquip tempor minim reprehenderit anim.\r\nConsequat laborum do velit incididunt sunt amet Lorem. Laboris tempor do eu aliqua in officia nisi qui veniam ex cupidatat ad magna. Culpa culpa est voluptate cillum nisi pariatur eu deserunt minim officia deserunt enim consequat commodo. Ea nisi quis ex cupidatat dolore ut occaecat magna cillum qui cupidatat ea voluptate. Tempor adipisicing fugiat commodo ipsum dolore nostrud cupidatat magna et consequat reprehenderit. Voluptate nulla ut ut eu ullamco voluptate. Dolor commodo minim sunt minim ut.\r\n",
                startDateTime: "2014-02-25T04:28:49",
                endDateTime: "2015-04-21T09:37:58",
                startMomentTime: "2014-04-28T04:03:01",
                endMomentTime: "2017-10-26T06:31:31",
                isAllDay: true,
                stars: 243,
                coverImageUrl: "https://picsum.photos/1000/1000?image=27",
                iLiked: true
            },
            {
                id: "5ce94998bcd9ee227e3829a8",
                name: "Elentrix Cubix",
                organizer: "Speedbolt Sensate",
                venue: "596 Monaco Place, Draper, American Samoa, 2674",
                description: "Adipisicing Lorem nisi sint excepteur ea ullamco magna elit velit culpa consequat nostrud excepteur. Sit amet adipisicing id amet ullamco veniam in officia sit enim. Irure eu adipisicing velit ipsum ex duis eu non eiusmod. Est occaecat eiusmod quis enim ea reprehenderit ipsum. Nisi ipsum anim culpa qui excepteur nisi magna pariatur eiusmod. Quis irure nisi quis fugiat occaecat fugiat et aute pariatur exercitation. Sit ullamco minim do esse eu est deserunt tempor elit adipisicing laborum est incididunt.\r\nMinim excepteur nulla ex laboris. Ex esse sit ad voluptate occaecat. Do ex incididunt anim reprehenderit. Cillum irure reprehenderit proident amet duis qui ex do officia qui aliquip labore. Proident sunt laboris fugiat sunt tempor id irure irure irure. Proident occaecat voluptate minim adipisicing aliquip magna do ut amet nostrud labore amet do dolore. In ut ullamco fugiat sunt irure minim duis ea voluptate.\r\n",
                startDateTime: "2014-01-08T11:37:26",
                endDateTime: "2016-01-16T10:25:35",
                startMomentTime: "2016-04-21T05:42:11",
                endMomentTime: "2016-01-17T09:23:23",
                isAllDay: false,
                stars: 37,
                coverImageUrl: "https://picsum.photos/1000/1000?image=92",
                iLiked: true
            },
            {
                id: "5ce94998c745521af43b6ff9",
                name: "Exposa Techmania",
                organizer: "Genekom Poshome",
                venue: "396 Robert Street, Chemung, Wisconsin, 7874",
                description: "Consectetur eu officia tempor quis aute ut sunt ullamco sit sint proident quis. Et tempor duis non sit anim eu ea consequat aute sint laborum. Nulla id ipsum ea tempor laboris veniam ut tempor nulla laboris dolore nostrud fugiat dolore. Fugiat proident commodo dolor elit deserunt quis. Laboris incididunt et aliqua non sunt minim amet cupidatat laborum cupidatat excepteur tempor adipisicing. Veniam sint dolore voluptate proident aute veniam sit.\r\nCulpa eu pariatur elit incididunt voluptate tempor ut esse aute ullamco sit magna dolore nulla. Mollit consequat elit eu exercitation aute voluptate ut reprehenderit nulla. Eiusmod ut esse est anim ipsum id incididunt laboris velit Lorem veniam eu aliquip. Fugiat cillum in aliquip laboris magna consectetur. Reprehenderit laboris minim exercitation incididunt do duis aliquip in anim labore. Est ea ullamco consequat labore sint do amet ex labore ad consectetur reprehenderit irure ex.\r\n",
                startDateTime: "2017-03-17T08:31:16",
                endDateTime: "2015-07-30T05:24:20",
                startMomentTime: "2018-11-16T03:15:46",
                endMomentTime: "2014-01-14T11:46:42",
                isAllDay: true,
                stars: 831,
                coverImageUrl: "https://picsum.photos/1000/1000?image=19",
                iLiked: false
            },
            {
                id: "5ce94998ae1645610a8875f1",
                name: "Zentury Quilm",
                organizer: "Ziggles Zillanet",
                venue: "739 Ovington Court, Buxton, Illinois, 5712",
                description: "Nisi officia consectetur eiusmod est ullamco deserunt aute eiusmod consequat nostrud elit do. Laborum qui excepteur aliquip mollit magna ullamco id magna ad commodo sunt duis fugiat deserunt. Ut ipsum labore elit dolore est irure labore incididunt aliquip excepteur ea ad excepteur velit. Aliqua amet aute et pariatur consectetur excepteur dolor cupidatat occaecat consequat ad culpa excepteur eiusmod. Nisi do culpa cillum commodo non.\r\nFugiat anim ad magna minim deserunt. Ipsum consequat nostrud cillum ipsum eiusmod fugiat ad quis elit. Id do sunt tempor irure do dolore anim esse. Sit quis aliqua nisi nulla reprehenderit tempor.\r\n",
                startDateTime: "2015-07-05T12:28:47",
                endDateTime: "2017-11-29T03:20:28",
                startMomentTime: "2017-02-12T09:01:47",
                endMomentTime: "2014-10-28T04:40:52",
                isAllDay: false,
                stars: 566,
                coverImageUrl: "https://picsum.photos/1000/1000?image=122",
                iLiked: false
            },
            {
                id: "5ce94998cd3f233b62be74fe",
                name: "Rotodyne Cognicode",
                organizer: "Ewaves Futuris",
                venue: "494 College Place, Kanauga, Michigan, 9083",
                description: "Commodo Lorem fugiat pariatur in Lorem. Laborum voluptate consequat tempor consectetur amet aute dolore fugiat proident. Voluptate excepteur quis adipisicing cupidatat cupidatat reprehenderit.\r\nLaboris ut duis esse aute consectetur quis sunt. Lorem eiusmod incididunt elit laborum pariatur ipsum est anim magna ipsum aute amet Lorem nostrud. Laborum reprehenderit aute reprehenderit Lorem excepteur do ex est. Qui et aute irure consectetur non enim qui pariatur non elit velit dolore officia dolor. Incididunt enim aute dolor est occaecat dolore excepteur reprehenderit qui occaecat. Elit commodo in pariatur sint quis exercitation elit pariatur labore eu aliqua tempor ad.\r\n",
                startDateTime: "2018-12-28T07:48:25",
                endDateTime: "2019-04-01T09:05:49",
                startMomentTime: "2014-05-13T10:39:56",
                endMomentTime: "2017-11-14T11:55:32",
                isAllDay: false,
                stars: 971,
                coverImageUrl: "https://picsum.photos/1000/1000?image=34",
                iLiked: true
            },
            {
                id: "5ce949983d49e9dd1eb151b5",
                name: "Scentric Isostream",
                organizer: "Endipin Phuel",
                venue: "935 Village Road, Wells, Colorado, 4908",
                description: "Mollit ullamco dolore incididunt esse nulla aute sunt velit reprehenderit dolor commodo ipsum. Ut amet sit laboris excepteur. Culpa velit mollit culpa et nisi commodo sunt. Incididunt commodo irure id in deserunt laboris quis cupidatat. Proident pariatur sit exercitation excepteur laboris eu do anim.\r\nConsequat non veniam proident adipisicing proident esse veniam. Aute fugiat irure sit proident mollit laboris laboris labore fugiat Lorem commodo non in Lorem. Esse id in ad excepteur dolore in do veniam aute laboris anim eiusmod reprehenderit id. Duis mollit consequat incididunt do mollit veniam cupidatat ut consequat ut tempor officia.\r\n",
                startDateTime: "2014-05-11T08:28:41",
                endDateTime: "2014-03-07T08:07:33",
                startMomentTime: "2019-01-12T04:10:19",
                endMomentTime: "2016-01-01T11:20:33",
                isAllDay: true,
                stars: 194,
                coverImageUrl: "https://picsum.photos/1000/1000?image=27",
                iLiked: false
            },
            {
                id: "5ce94998206a180a27bf07f8",
                name: "Podunk Furnigeer",
                organizer: "Soprano Neptide",
                venue: "279 Meeker Avenue, Martinez, Oklahoma, 7528",
                description: "Exercitation culpa commodo labore irure ut velit cupidatat cillum officia exercitation do velit velit. Consectetur tempor officia commodo cillum Lorem et aliquip excepteur sunt mollit adipisicing. Nisi voluptate magna nostrud commodo magna anim.\r\nAd labore duis exercitation est nisi. Aliquip do pariatur enim Lorem tempor nostrud tempor. Mollit minim pariatur id tempor id cupidatat non aliquip ullamco. Ex adipisicing est labore excepteur occaecat. Consequat culpa culpa esse excepteur duis consequat nisi quis. Minim in Lorem anim voluptate commodo officia sunt consectetur labore.\r\n",
                startDateTime: "2016-03-15T06:11:48",
                endDateTime: "2018-12-15T09:31:28",
                startMomentTime: "2017-01-09T03:21:25",
                endMomentTime: "2015-11-06T03:26:21",
                isAllDay: false,
                stars: 391,
                coverImageUrl: "https://picsum.photos/1000/1000?image=95",
                iLiked: false
            },
            {
                id: "5ce94998ae04b4fb1d27687b",
                name: "Miracula Bullzone",
                organizer: "Oatfarm Quantasis",
                venue: "476 Grattan Street, Emerald, Ohio, 9341",
                description: "Lorem nostrud qui culpa et minim non consequat. Labore culpa eu sunt dolor mollit eiusmod eiusmod sit veniam laborum reprehenderit. Commodo dolor deserunt velit proident.\r\nIn reprehenderit id incididunt velit aliquip cupidatat quis occaecat cillum ipsum id mollit nulla laboris. Eiusmod veniam mollit quis culpa anim. Esse id sint excepteur velit labore magna pariatur. Quis est ex consectetur mollit cillum laboris ea consequat quis eu. Esse adipisicing ad culpa esse labore et tempor duis. Reprehenderit incididunt fugiat non laborum ipsum sit consequat fugiat mollit et pariatur sit in. Magna duis non velit veniam mollit.\r\n",
                startDateTime: "2018-07-16T10:46:14",
                endDateTime: "2017-07-06T12:38:04",
                startMomentTime: "2016-10-28T09:27:12",
                endMomentTime: "2019-04-29T06:56:12",
                isAllDay: true,
                stars: 272,
                coverImageUrl: "https://picsum.photos/1000/1000?image=134",
                iLiked: true
            },
            {
                id: "5ce94998dc22b85b25a6386a",
                name: "Vinch Ziore",
                organizer: "Entroflex Tasmania",
                venue: "788 Bedford Avenue, Sehili, Arizona, 6964",
                description: "Reprehenderit proident cupidatat est culpa mollit sunt pariatur. Consequat elit ullamco sit anim quis qui consectetur. Ut exercitation tempor irure deserunt ipsum qui laborum. Excepteur commodo dolor magna ullamco amet. Id esse cillum magna sint duis. Fugiat ipsum consequat cupidatat ad veniam. Nostrud enim qui id commodo voluptate fugiat commodo pariatur laboris esse do pariatur irure.\r\nVelit laboris proident culpa nulla laboris pariatur sunt occaecat. Quis elit culpa sunt ipsum ea amet veniam dolore laborum labore Lorem fugiat veniam. Officia ad in proident elit laborum voluptate quis cillum culpa. Aliquip exercitation reprehenderit sint eu deserunt ad consectetur ea et consequat ea. Minim ad nisi aliquip ex tempor ut labore labore mollit. Adipisicing duis dolore aute occaecat occaecat. Amet velit eu enim excepteur id dolore sit.\r\n",
                startDateTime: "2015-06-18T11:03:57",
                endDateTime: "2018-02-25T12:19:19",
                startMomentTime: "2016-10-13T07:56:17",
                endMomentTime: "2016-08-14T01:25:07",
                isAllDay: true,
                stars: 92,
                coverImageUrl: "https://picsum.photos/1000/1000?image=83",
                iLiked: true
            },
            {
                id: "5ce94998883dae5efe1162db",
                name: "Songbird Ginkogene",
                organizer: "Zentia Eternis",
                venue: "667 Exeter Street, Curtice, Connecticut, 3178",
                description: "In proident reprehenderit nisi id incididunt eiusmod pariatur sit reprehenderit magna reprehenderit pariatur et tempor. Laborum sunt eu pariatur nisi reprehenderit consectetur do tempor sint occaecat. Do ullamco exercitation ad pariatur enim dolor sint dolor non fugiat eu nisi proident. Aute proident ullamco do pariatur ea aliquip aliqua cillum elit do magna Lorem consectetur. Ad duis culpa consequat et et. Dolore in cupidatat consequat ut fugiat veniam consequat proident laboris non mollit culpa.\r\nAute quis qui qui elit est exercitation nulla. Nisi do cillum aliquip incididunt. Do excepteur labore amet in exercitation adipisicing quis tempor tempor excepteur ex qui aute pariatur. Dolore do velit eiusmod nulla quis dolore ut ex. Cillum sunt nostrud exercitation id velit amet elit aliquip nulla aliqua anim cillum nisi laboris. Culpa sunt ipsum labore deserunt adipisicing magna quis non aute anim magna aliquip velit. Proident tempor ea mollit nostrud Lorem pariatur ad ea ut est veniam sit.\r\n",
                startDateTime: "2019-01-16T05:50:50",
                endDateTime: "2016-05-21T02:28:53",
                startMomentTime: "2016-01-11T01:34:52",
                endMomentTime: "2014-09-27T04:49:26",
                isAllDay: false,
                stars: 780,
                coverImageUrl: "https://picsum.photos/1000/1000?image=23",
                iLiked: false
            },
            {
                id: "5ce949985c85dda34e1cbd61",
                name: "Xylar Vetron",
                organizer: "Repetwire Netagy",
                venue: "326 Tapscott Avenue, Cornfields, Mississippi, 3603",
                description: "Deserunt commodo nulla laborum consectetur exercitation pariatur enim proident amet ea veniam qui aute laboris. Dolor laboris incididunt et labore eu. Ullamco magna quis magna labore consequat amet Lorem exercitation. Proident nisi nulla do consectetur adipisicing amet exercitation tempor. Esse fugiat nulla eu adipisicing sit non ut sit.\r\nCulpa id dolore do do in nostrud dolor labore ut qui ullamco. Do non enim deserunt pariatur eu commodo pariatur commodo ad ea proident nisi reprehenderit veniam. Quis nisi officia elit tempor consequat aliqua incididunt nulla qui est Lorem in cupidatat nulla. Adipisicing voluptate magna non minim culpa eu elit. Excepteur pariatur fugiat amet reprehenderit. Eiusmod deserunt qui ex incididunt adipisicing esse ex labore sit eu aliquip labore nulla. Officia velit ullamco ipsum laboris duis.\r\n",
                startDateTime: "2019-03-24T12:38:10",
                endDateTime: "2014-03-11T06:31:31",
                startMomentTime: "2015-09-30T12:33:50",
                endMomentTime: "2015-06-12T02:29:59",
                isAllDay: false,
                stars: 410,
                coverImageUrl: "https://picsum.photos/1000/1000?image=48",
                iLiked: false
            },
            {
                id: "5ce949983b100670ef6fd5ce",
                name: "Valpreal Plasmosis",
                organizer: "Voipa Datagene",
                venue: "185 Homecrest Avenue, Coral, South Dakota, 7926",
                description: "In laboris pariatur consectetur et eiusmod tempor mollit pariatur velit magna nostrud. Eu et nulla culpa dolore aliqua ad do cillum culpa magna magna consectetur. Aliquip deserunt ad eu dolor do eu mollit adipisicing sit occaecat officia in ipsum. Sit dolore consectetur esse nostrud velit velit. Cupidatat anim cillum dolore qui commodo aliqua deserunt veniam ipsum aute. Irure in sunt nostrud non aliqua aliqua non Lorem do.\r\nEiusmod minim adipisicing est deserunt minim qui aute ex tempor. Anim proident consequat do ullamco. In incididunt elit ut adipisicing eiusmod reprehenderit ad ex magna. Cillum minim deserunt ad sint fugiat. Ad enim aute sit reprehenderit eu. Nulla mollit esse duis laboris id minim officia reprehenderit sint aliqua aute cupidatat labore eu.\r\n",
                startDateTime: "2017-09-27T01:27:45",
                endDateTime: "2017-07-20T03:46:18",
                startMomentTime: "2019-05-08T10:02:20",
                endMomentTime: "2016-09-22T06:36:42",
                isAllDay: false,
                stars: 179,
                coverImageUrl: "https://picsum.photos/1000/1000?image=133",
                iLiked: false
            },
            {
                id: "5ce9499898759cb103be6c24",
                name: "Elpro Acumentor",
                organizer: "Flumbo Portalis",
                venue: "347 Lester Court, Seymour, Puerto Rico, 9490",
                description: "Voluptate consequat cillum do ea occaecat. Adipisicing et ea eu irure pariatur cillum enim. Culpa velit cupidatat quis aliqua non reprehenderit ullamco esse mollit minim.\r\nDo elit aute laboris excepteur dolor mollit pariatur ipsum. Adipisicing laboris laborum esse est cupidatat occaecat duis minim commodo Lorem ipsum consequat non adipisicing. Duis qui sunt commodo amet occaecat adipisicing.\r\n",
                startDateTime: "2017-01-24T12:59:22",
                endDateTime: "2016-10-14T01:47:08",
                startMomentTime: "2015-03-09T09:14:31",
                endMomentTime: "2015-01-02T05:16:47",
                isAllDay: false,
                stars: 561,
                coverImageUrl: "https://picsum.photos/1000/1000?image=104",
                iLiked: true
            },
            {
                id: "5ce9499887a061b75d1439d4",
                name: "Isologia Caxt",
                organizer: "Zilodyne Lotron",
                venue: "294 Delmonico Place, Collins, Arkansas, 2882",
                description: "Esse labore nulla duis proident duis ullamco labore. Pariatur eu officia elit reprehenderit sunt incididunt anim consectetur. Cupidatat fugiat ipsum Lorem eiusmod incididunt excepteur ea pariatur proident enim exercitation ea amet cillum.\r\nDo ea aute ipsum ut. Ipsum aliquip ea pariatur enim ut ullamco aliqua ullamco. Veniam labore nostrud cupidatat ad labore nisi ex in. Do veniam esse nostrud veniam tempor sit mollit ex voluptate cillum laboris duis consequat.\r\n",
                startDateTime: "2015-07-14T09:45:35",
                endDateTime: "2016-08-17T09:19:02",
                startMomentTime: "2018-07-09T12:30:37",
                endMomentTime: "2016-04-24T09:30:46",
                isAllDay: false,
                stars: 349,
                coverImageUrl: "https://picsum.photos/1000/1000?image=96",
                iLiked: true
            },
            {
                id: "5ce94998b61b29b3a9a41c43",
                name: "Utara Nspire",
                organizer: "Xyqag Digigen",
                venue: "995 Voorhies Avenue, Yonah, Oregon, 8119",
                description: "Sint nulla voluptate dolor eu eu eu aute est exercitation. Est ullamco in amet sint quis incididunt nostrud non do sint magna. Do Lorem ea velit labore veniam Lorem cupidatat quis cillum pariatur consectetur occaecat minim.\r\nIpsum aliqua ex minim id nisi nisi tempor id et anim laboris deserunt. Sit do laborum sit laboris et magna nostrud do. Ea consectetur veniam laborum labore. Ad ipsum eu cillum nisi commodo. Ex dolor ullamco labore voluptate ut anim sunt sint consequat. Irure dolore nulla anim incididunt exercitation in occaecat ullamco officia in nisi qui ullamco. Fugiat veniam occaecat ipsum exercitation consectetur mollit consectetur consequat ullamco.\r\n",
                startDateTime: "2017-06-27T12:32:22",
                endDateTime: "2015-05-22T04:18:11",
                startMomentTime: "2016-11-14T01:16:39",
                endMomentTime: "2016-06-02T12:26:48",
                isAllDay: true,
                stars: 424,
                coverImageUrl: "https://picsum.photos/1000/1000?image=111",
                iLiked: true
            }
        ]
    };
}

module.exports = MockDatabase;