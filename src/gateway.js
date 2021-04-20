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
