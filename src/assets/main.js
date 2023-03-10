const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCaCDQ4zjVfvbP79YMAwgrDg&part=snippet%2Cid&order=date&maxResults=6';

var content = null || document.getElementById('content')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8111ef2c8amsh66328124e7128acp1f5cc6jsn9a55a4f466bb',
        // Esta key no se debe mostrar a nadie
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

// fetch('', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));


async function fetchData(urlApi){
    const response = await fetch(urlApi,options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
            ${videos.items.map(video => `
                <div class="group relative">
                    <div
                        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                    </div>
                    <div class="mt-4 flex justify-between">
                        <h3 class="text-sm text-gray-700">
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            ${video.snippet.title}
                        </h3>
                    </div>
                </div>
            `).slice(0,4).join('')}

    `;
    content.innerHTML = view;
    }catch(error){
        // Lo ideal no es solamente mostrar un error en consola, tambien es ideal mostrar el error el pantalla para el usuario
        console.log(error)  
    };
})();


// api yahoo finances
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '8111ef2c8amsh66328124e7128acp1f5cc6jsn9a55a4f466bb',
// 		'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
// 	}
// };

// fetch('https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?symbol=AMRN&region=US', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));