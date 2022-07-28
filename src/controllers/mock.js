import MockService from "../service/MockService";
import basic from "../utils/basic";

let getColumnMockData = async (ctx, next) => {
    const body = basic.getBodyInfo(ctx)

    return await MockService.getInstance().getMockColumnData(body);
}

let getCakeMockData = async (ctx, next) => {
    const body = basic.getBodyInfo(ctx)

    return await MockService.getInstance().getMockCakeData(body);
}

let getListMockData = async (ctx, next) => {
    const body = basic.getBodyInfo(ctx)

    return await MockService.getInstance().getMockListData(body);
}

let getSplineMockData = async (ctx, next) => {
    const body = basic.getBodyInfo(ctx)

    return await MockService.getInstance().getMockSplineData(body);
}

module.exports = {
    'POST /mock/data/column': getColumnMockData,
    'GET /mock/data/column': getColumnMockData,
    'POST /mock/data/cake': getCakeMockData,
    'POST /mock/data/list': getListMockData,
    'POST /mock/data/spline': getSplineMockData,
};
