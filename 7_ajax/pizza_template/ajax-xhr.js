function createRequest() {
  var xhrRequest = null;

  try {
    xhrRequest = new XMLHttpRequest();
  } catch (trymicrosoft) {
    try {
      xhrRequest = new ActiveXObject('Msxml2.XMLHTTP');
    } catch (othermicrosoft) {
      try {
        xhrRequest = new ActiveXObject('Microsoft.XMLHTTP');
      } catch (failed) {
        xhrRequest = null;
      }
    }
  }

  if (xhrRequest == null) {
    alert('Error creating request object!');
  }

  return xhrRequest;
}
