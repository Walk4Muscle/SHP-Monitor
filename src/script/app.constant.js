var app = angular.module('app.Constant', []);

app.constant('CONST', {
    APP_NAME: 'Social Health Platform Monitor',
    APP_NAME_SHORT: 'SHP-Monitor',
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
        WS:'ws://10.168.176.27:8091/api/Notify/',
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
    WS_STATUS:{
        0 : 'connecting',
        1 : 'online',
        2 : 'closing',
        3 : 'offline'
    },
    ERRORS:{
        "1" : 'No Data Available',
        "2" : 'Null',
        "3" : 'N/A',
    }
})

module.exports = 'app.Constant';