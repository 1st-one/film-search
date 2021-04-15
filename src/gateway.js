export const fetchGet = (value = 'evil') => {
    return fetch(`https://www.omdbapi.com/?s=${value}&apikey=4a3b711b`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else throw new Error('Get request is failed');
        })
};

export const local = {
    set(key, value) {
        return localStorage.setItem(key, value);
    },
    get(key) {
        return localStorage.getItem(key);
    }
};


// API YouTube ????????
 // const api_key = 'AIzaSyCBFtDjKegL9nuvU1BxTH0t1YERDEm5mtw';
    // const idVideo = '8ugaeA-nMTc';
    // fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${idVideo}&key=${api_key}`)
    //   .then(res => res.json())
    //   .then(res => {
    //     console.log(res)
    //   })