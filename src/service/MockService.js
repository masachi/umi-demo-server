import BasicService from "./BasicService";

const listMockData = require('../mock/list.json');
const cakeMockData = require('../mock/cake.json');
const columnMockData = require('../mock/column.json');
const splineMockData = require('../mock/spline.json');

export default class MockService extends BasicService {

    constructor() {
        super()
    }


    static getInstance() {
        if (!this.instance) {
            this.instance = new MockService();
        }

        return this.instance;
    };

    async getMockCakeData (bodyParams) {
        if(bodyParams.keyword) {
            cakeMockData.list = cakeMockData.filter((item) =>
                 item.type.includes(bodyParams.keyword)
            );
        }

        if(bodyParams.startTime) {

        }

        if(bodyParams.endTime) {

        }

        return cakeMockData;
    }

    async getMockColumnData (bodyParams){
        if(bodyParams.keyword) {
            cakeMockData.list = cakeMockData.filter((item) =>
                item.type.includes(bodyParams.keyword)
            );
        }

        if(bodyParams.startTime) {

        }

        if(bodyParams.endTime) {

        }

        return columnMockData;
    }

    async getMockListData(bodyParams) {
        if(bodyParams.keyword) {
            listMockData.list = listMockData.list.filter((item) => {
                return item.name.includes(bodyParams.keyword)
            });
        }

        if(bodyParams.startTime) {

        }

        if(bodyParams.endTime) {

        }

        return listMockData;
    }

    async getMockSplineData (bodyParams) {
        if(bodyParams.keyword) {
            // TODO keyword查询
        }

        if(bodyParams.startTime) {

        }

        if(bodyParams.endTime) {

        }

        return splineMockData;
    }
}