export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key':process.env.REACT_APP_RAPID_API_KEY

    }
  };

 
export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '5b80e7a2f0mshbce2cad4ba25b21p1b955fjsn937ed2bb55b5',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};
 
export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };
