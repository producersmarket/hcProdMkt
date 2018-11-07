
// curl -X POST "http://localhost:4141/fn/listingZome/listingEntryCreate" -H "accept: text/plain" -H "Content-Type: application/json" -d "{\"stub\":\"string\"}"
function holoTextWrite (message, callback) {
  console.log("holoTextWrite("+message+")");
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

  xhr.send(message)
  //xhr.send("{\"stub\":\"string\"}")
}

function holoTextRead (hash, callback) {
  console.log("holoTextRead("+hash+")");

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