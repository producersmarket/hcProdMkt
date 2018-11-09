
// curl -X POST "http://localhost:4141/fn/listingZome/listingEntryCreate" -H "accept: text/plain" -H "Content-Type: application/json" -d "{\"stub\":\"string\"}"
function holoTextWrite (listingEntry, callback) {
  console.log("holoTextWrite("+listingEntry+", callback)");
  var xhr = new XMLHttpRequest()
  //var url = '/fn/readerWriter/holoTextWrite'
  //var url = '/fn/Posts/CreatePost'
  var url = '/fn/listingZome/listingEntryCreate'
  xhr.open('POST', url, true)
  xhr.setRequestHeader('accept', 'text/plain')
  xhr.setRequestHeader('Content-type', 'application/json')
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log("xhr.responseText = "+xhr.responseText);
      callback(xhr.responseText)
    }
  }

  xhr.send(listingEntry)
  //xhr.send(JSON.stringify(listingEntry));
  //xhr.send("{\"stub\":\"string\"}")
}

function holoTextRead (hash, callback) {
  console.log("holoTextRead("+hash+", callback)");

  var xhr = new XMLHttpRequest()
  //var url = '/fn/readerWriter/holoTextRead'
  //var url = '/fn/Posts/GetPost'
  var url = '/fn/listingZome/listingEntryRead'
  xhr.open('POST', url, true)
  xhr.setRequestHeader('accept', 'text/plain')
  //xhr.setRequestHeader('Content-type', 'application/json')
  xhr.setRequestHeader('Content-type', 'text/plain')
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log("xhr.responseText = "+xhr.responseText);
      console.log("xhr.responseText = "+JSON.stringify(xhr.responseText));
      callback(xhr.responseText)
    }
  }
  xhr.send(hash)
}

function holoTextUpdate (hash, listingEntry, callback) {
  console.log("holoTextUpdate("+hash+", "+listingEntry+", callback)");

  var xhr = new XMLHttpRequest()
  var url = '/fn/listingZome/listingEntryUpdate'
  xhr.open('POST', url, true)
  //xhr.setRequestHeader('accept', 'application/json')
  xhr.setRequestHeader('accept', 'text/plain')
  //xhr.setRequestHeader('Content-type', 'application/json')
  xhr.setRequestHeader('Content-type', 'text/plain')
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log("xhr.responseText = "+xhr.responseText);
      callback(xhr.responseText)
    }
  }

  /*
  var listingEntryJsonObject = {
      "listingEntryHash" : hash
    , "listingEntry" : listingEntry
  };

  console.log("listingEntryJsonObject = "+listingEntryJsonObject);
  console.log(JSON.stringify(listingEntryJsonObject));
  */

  var listingEntryJsonArray = [
      hash
    , listingEntry
  ];

  console.log("listingEntryJsonArray = "+listingEntryJsonArray);
  console.log(JSON.stringify(listingEntryJsonArray));

  //xhr.send(listingEntry)
  //xhr.send(hash)
  //xhr.send(JSON.stringify(listingEntryJsonObject));
  xhr.send(JSON.stringify(listingEntryJsonArray));
  //xhr.send("test");
}

function holoTextDelete (hash, callback) {
  console.log("holoTextDelete("+hash+", callback)");

  var xhr = new XMLHttpRequest()
  var url = '/fn/listingZome/listingEntryDelete'
  xhr.open('POST', url, true)
  xhr.setRequestHeader('accept', 'text/plain')
  xhr.setRequestHeader('Content-type', 'application/json')
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log("xhr.responseText = "+xhr.responseText);
      callback(xhr.responseText)
    }
  }

  //xhr.send(listingEntry)
  xhr.send(hash)
}
