// const YoutubeMusicApi = require('youtube-music-api')

const api = new YoutubeMusicApi()
api.initalize() // Retrieves Innertube Config
    .then(info => {
        api.getSearchSuggestions("ne deve ne kush").then(result => {
            /*[
              'ne deve ne kush',
              'ne deve ne kush canlı',
              'ne deve ne kush lyrics',
              'ne deve ne kush konser',
              'ne deve ne kush cover',
              'ne deve ne kush sözleri',
              'ne deve ne kush akor'
            ]*/
            console.log(result)
        })

        api.search("ne deve ne kush").then(result => {
            /*{content: [
                {
                    type: 'song', videoId: 'kvoO5hwsYQo', playlistId: 'RDAMVMkvoO5hwsYQo', name: 'ne deve ne kush', artist: [Array], album: [Object], duration: 159000, thumbnails: [Array], params: 'wAEB'
                },
                {
                    type: 'video', videoId: 'sixP2AyFOjY', playlistId: 'RDAMVMsixP2AyFOjY', name: 'Büyük Ev Ablukada - Ne Deve Ne Kush (Mutsuz Parti Şekli)', author: 'Mustafa TAŞ', views: '993 views', duration: 12000, thumbnails: [Array], params: 'wAEB'
                },
                {
                    type: 'single', browseId: 'MPREb_9TuSrHElFSO', playlistId: 'OLAK5uy_mj-G8ekrTNJbudAD6ehLFM8cW3yezUEe8', name: 'ne deve ne kush', artist: 'Büyük Ev Ablukada, Ezhel', year: '2019', thumbnails: [Array]
                },
                {
                    type: 'artist', browseId: 'UCCvxgd2z194wYgpBt-sajrA', name: 'Büyük Ev Ablukada', thumbnails: [Array]
                },
                {
                    type: 'playlist', browseId: 'VLPLTw3BBwcLBjG-4fernx2Xt-GHdYMPYAFM', title: 'ne deve ne kush Radio', author: 'Ateş Tan', count: 51, thumbnails: [Array]
                },
                ....
                ]
            }*/
            console.log(result)
        })
    })