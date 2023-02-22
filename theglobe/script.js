// Facebook API
    window.fbAsyncInit = function() {
      FB.init({
        appId      : 'your-app-id',
        cookie     : true,
        xfbml      : true,
        version    : 'v11.0'
      });
    };
    
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    
    // Twitter API
    function loadTwitterSDK() {
      window.twttr = (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0],
          t = window.twttr || {};
        if (d.getElementById(id)) return t;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);
    
        t._e = [];
        t.ready = function(f) {
          t._e.push(f);
        };
    
        return t;
      }(document, "script", "twitter-wjs"));
    }
    
    // Instagram API
    function loadInstagramSDK() {
      var igScript = document.createElement('script');
      igScript.src = 'https://www.instagram.com/embed.js';
      igScript.async = true;
      igScript.defer = true;
      document.head.appendChild(igScript);
    }
    
    // Function to schedule post on selected platform
function schedulePost() {
    var platform = document.querySelector('#platform').value;
    var message = document.querySelector('#message').value;
    var image = document.querySelector('#image').files[0];
    var link = document.querySelector('#link').value;
    var date = document.querySelector('#date').value;
    var time = document.querySelector('#time').value;
    switch (platform) {
        case 'facebook':
        // Use Facebook API to create and schedule post
        FB.api('/me/photos', 'POST', {
            url: image,
            message: message
        }, 
    },
},
function(response)
