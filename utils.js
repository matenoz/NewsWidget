function render(file, argsObject) {
  const template = HtmlService.createTemplateFromFile(file);
  if(argsObject){
    const keys = Object.keys(argsObject);
    keys.forEach(function(key){
      template[key] = argsObject[key];
    })
  }
  return template.evaluate();
}

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function loadPage(page){
  return render(page).setTitle(page);
}
 
function getRoute(e){
  if (Route[e.parameter.v]){
    return Route[e.parameter.v];
  } else {
    return render('news').setTitle(TITLE);
  }
}
function provideRoute(routes){
  routes.forEach(route => Route.path(route, loadPage(route)))
}

function associate(arr1, arr2){
  let assObj = {}
  for (let i = 0; i < arr1.length; i++){
    if(arr1[i] == 'tags'){
      assObj[arr1[i]] = arr2[i].split(', ');
    } else{
      assObj[arr1[i]] = arr2[i];
    }
    }

   
  return assObj;
}  
function cleanArray(actual) {
  var newArray = new Array();
  for (var i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i]);
    }
  }
  return newArray;
}