var app = angular.module('app.Constant', []);

app.constant('CONST', {
    APP_NAME: 'Social Health Platform Develop Dashboard',
    APP_NAME_SHORT: 'SHP Develop Dashboard',
    // AD_CONFIG: {
    //     TENANT_ID: 'microsoft.onmicrosoft.com',
    //     CLIENT_ID: '482514c8-43d4-4421-a58e-73771b9e9e4c'
    // },
    MESSAGE_TYPES: {
        'PostsVolumeSpikeDetected': 'Posts volumn spike detected',
        'UniqueUserSessionsSpikeDetected': 'Unique user sessions spike detected',
        'PositiveVolumePostSpikeDetected': 'Positive volume post spike detected',
        'NegativeVolumePostSpikeDetected': 'Negative volume post spike detected',
        'ServicesMentionedSpikeDetected': 'Services mentioned spike detected',
        'InfluenceVolumeSpikeDetected': 'Influence volume spike detected',
        'ServiceOutageDetected': 'Support experience issues',
        'SupportExperienceIssuesDetected': 'Possible service outage issues'
    },
    SERVICE_INFO: {
        ENDPOINT: 'http://10.168.176.27:8091/WebServices/S3PDataService/',
        WS: 'ws://10.168.176.27:8091/api/Notify/',
        // WS: 'ws://localhost:8889/',
        LOCAL_TEST_DATA: '/data/'
    },
    ALL_ENABLED_PLARFORMS: {
        'twitter': 'Twitter',
        'so': 'Stackoverflow',
        'sf': 'Serverfault',
        'su': 'Superuser',
        'msdn': 'MSDN',
        'tn': 'Technet'
    },
    WS_STATUS: {
        0: 'connecting',
        1: 'online',
        2: 'closing',
        3: 'offline'
    },
    ERRORS: {
        "1": 'No Data Available',
        "2": 'Null',
        "3": 'N/A',
    }
})

// app.constant('MENU', [{
//     name: 'Dashboard',
//     type: 'heading',
//     children: [{
//         name: 'Forum RawData',
//         type: 'toggle',
//         pages: [{
//             name: 'IPAs',
//             type: 'link',
//             state: 'home.beers.ipas',
//             icon: 'fa fa-group'
//         }, {
//             name: 'Porters',
//             state: 'home.beers.porters',
//             type: 'link',
//             icon: 'fa fa-map-marker'
//         }, {
//             name: 'Wheat',
//             state: 'home.beers.wheat',
//             type: 'link',
//             icon: 'fa fa-plus'
//         }]
//     }]
// }, {
//     name: 'Munchies',
//     type: 'toggle',
//     pages: [{
//         name: 'Cheetos',
//         type: 'link',
//         state: 'munchies.cheetos',
//         icon: 'fa fa-group'
//     }, {
//         name: 'Banana Chips',
//         state: 'munchies.bananachips',
//         type: 'link',
//         icon: 'fa fa-map-marker'
//     }, {
//         name: 'Donuts',
//         state: 'munchies.donuts',
//         type: 'link',
//         icon: 'fa fa-map-marker'
//     }]
// }])
module.exports = 'app.Constant';