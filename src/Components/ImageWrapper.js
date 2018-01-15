import React from 'react';

import performSearch from "../request";
import NotFound from './NotFound';
import Image from './Image';


//Class for all rendered images
class ImageWrapper extends React.Component {

  constructor() {
    super();
    this.state = {
      img: [],
      isLoading: true,
    }
  }

  //Calling on initial launch
  componentDidMount () {
    this.loadContent(this.props.match.params.query);
  }


  /**
   * Fetches images from API and sets state for the component
   * @param query
   */
  loadContent = (query) => {
    performSearch(query)
    .then(response =>{
      this.setState({
          img: response.data.photos.photo,
          isLoading: false
        });
      console.log(this.state.img);
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }


  //Updating the img on different searches
  componentWillUpdate(nextProps){
    const currentQuery = this.props.match.params.query;
    const nextQuery = nextProps.match.params.query;

    //comparing current and next queries 
    //if they're not equal content will change
    if(currentQuery !== nextQuery) {
      this.loadContent(nextQuery);
    }
  }


   render(){   
   
    const img = this.state.img;
    const query = this.props.match.params.query;
  
    return(    
      <div className="photo-container">
          {(query.length)? <h1>{query}</h1> : <h1>Result</h1>}
          {
          (this.state.isLoading)
          ? <p>Loading...</p>
          :
          <div>
            {
              (img.length > 0)

              ? <ul>{
                img.map((photo) => {
                  return (
                    <Image src={photo.url_m} key={photo.id} />
                  );
                })
                }
                </ul>
              : 
                <NotFound />
            }
          </div>
        }
      </div>
    );
  }
}


export default ImageWrapper;