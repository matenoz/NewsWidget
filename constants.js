const TITLE = 'isicastweb';
const Route = {}
Route.path = function(route, callback){
  Route[route] = callback;
};
const ROUTES = ['news'];

const SHEET_ID ="1OgiYWuNJIAPo04PpJK9DT38GPBZ-MRO27RV9tRbsQDU";
const UPLOAD_FOLDER_ID ="1ZQsYjzO-V2IvyT5Tv_GWXbfV1CdJUqmN";
const ss = SpreadsheetApp.openById(SHEET_ID);
const ws = ss.getSheetByName('Data');
const ts = ss.getSheetByName('Tags');