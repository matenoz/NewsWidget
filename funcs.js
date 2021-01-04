function getOAuthToken() {
  DriveApp.getFolderById(UPLOAD_FOLDER_ID);
  DriveApp.addFile();
  return ScriptApp.getOAuthToken();
}

function getThumbnailURL(id){
  const url = 'https://drive.google.com/uc?id='+ id + '&export=download';
  return {id, url}

}

function getNewsObj(){ 
  const news = {};
  const data = ws.getRange(2,1, ws.getLastRow()-1, 9).getValues();
  const header = ws.getRange(1,1,1,9).getValues();
  const tagsArea = ts.getRange(2,1, ts.getLastRow()-1, 5).getValues();
  const items = [];
  const tags = [];
  data.forEach(array => {
    items.push(associate(header[0], array));
  });
  tagsArea.forEach(r => {
    r.forEach(el =>{
      tags.push(el);
    })
  })
  const arrayTags = cleanArray(tags);
  news.items = items;
  news.tags =  [...new Set(arrayTags)];
  news.updated = Date();
  return news;
}
