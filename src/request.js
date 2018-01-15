import api from "./config";
import axios from 'axios';

//Fetching data using axios
//@param query
//key = api.key
//text = query
let performSearch = query => 

   axios.get(` https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api.key}&text=${query}&extras=url_m&format=json&nojsoncallback=1&per_page=24`)



 export default performSearch;