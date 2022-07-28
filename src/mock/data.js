let Mock = require('mockjs');
const fs = require('fs');

function mockListData() {
    let mockListData = Mock.mock({
        'list|1-100': [{
            id: () => {
                return Mock.Random.guid()
            },
            name: () => {
                return Mock.Random.name()
            },
            description: () => {
                return Mock.Random.sentence()
            },
            timestamp: () => {
                return Mock.Random.date("T")
            },
        }]
    })

    fs.writeFile(`${__dirname}/list.json`, JSON.stringify(mockListData), (err) => {
        if (err) throw err;
    });
}

function mockCakeData() {
    let mockCakeData = Mock.mock({
        'list|10': [{
            type: () => {
                return Mock.Random.cword(2,4)
            },
            value: () => {
                return 10
            },
        }]
    })

    fs.writeFile(`${__dirname}/cake.json`, JSON.stringify(mockCakeData), (err) => {
        if (err) throw err;
    });
}


function mockColumnData() {
    let mockColumnData = Mock.mock({
        'list|1-7': [{
            type: () => {
                return Mock.Random.cword(2,4)
            },
            sales: () => {
                return Mock.Random.natural(0, 200)
            },
            timestamp: () => {
                return Mock.Random.date("T")
            },
        }]
    })

    fs.writeFile(`${__dirname}/column.json`, JSON.stringify(mockColumnData), (err) => {
        if (err) throw err;
    });
}


function mockSplineData() {
    let mockSplineData = Mock.mock({
        'list|20-60': [{
            scales: () => {
                return Mock.Random.natural(0, 2000)
            },
            timestamp: () => {
                return Mock.Random.time("T")
            },
        }]
    })

    fs.writeFile(`${__dirname}/spline.json`, JSON.stringify(mockSplineData), (err) => {
        if (err) throw err;
    });
}

mockListData();
mockCakeData();
mockColumnData();
mockSplineData();


