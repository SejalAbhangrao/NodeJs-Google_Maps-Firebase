# NodeJs-Google_Maps-Firebase


A simple NodeJS project that uses google maps API and firebase.

Search any place using google maps autocomplete and add its name along with longitude and latitude in firebase. All the places added into your firebase are shown simultaneuosly on the Map using Markers.


1] Clone the project. 

2] npm install.

3] You need to make few changes in index.html before you can run it. 

a) Add your own google maps api key . 

<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE&libraries=places"
      ></script>

b] Also, create a firebase account and add your own configurations.

var config = {
       apiKey: "___",
       authDomain: "___",
       databaseURL: "____"
     };


4] You can run it using node server.js. :)
