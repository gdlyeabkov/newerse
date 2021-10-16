<template>
    <div>
        <Header />
        <div class="totalContainer">
            <div class="news">
                <div class="newsItem">
                    <div class="newsItemFooter">
                        <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                        <span>
                            {{
                                newsItem.author ?
                                    newsItem.author
                                :
                                    'Неизвестно'
                            }}
                        </span>
                    </div>
                    <span class="newsItemHeader">
                        {{
                            newsItem.title
                        }}
                    </span>
                    <span>
                        {{
                            newsItem.description
                        }}
                    </span>
                    <div class="carousel">
                        <span @click="scrollPictures(false)" class="material-icons">
                            chevron_left
                        </span>
                        <div ref="carouselContent" class="carouselContent">
                            <img width="35%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
                            <img width="35%" src="https://avatars.mds.yandex.net/get-ynews/114574/03cf1e2a56e5bf11e0c6f0193340b9c6/800x400" alt="">
                            <img width="35%" src="https://avatars.mds.yandex.net/get-ynews/2356057/2aa23066b5fb4cef77d1d9b40fcd0ef6/800x400" alt="">
                            <img width="35%" src="https://avatars.mds.yandex.net/get-ynews/2748487/aac5841b21c55a0fc0cb6b799fe49f9c/800x400" alt="">
                            <img width="35%" src="https://avatars.mds.yandex.net/get-ynews/3125085/4e81be4daacb6b8c0e1a64657a4f2bda/800x400" alt="">
                            <img width="35%" src="https://avatars.mds.yandex.net/get-ynews/2456605/7cc9285f6a521aa8c9632622151f13f0/800x400" alt="">
                            <img width="35%" src="https://avatars.mds.yandex.net/get-ynews/3332920/736008ffbbf76aa5e12c3192c90590d5/800x400" alt="">
                            <img width="35%" src="https://avatars.mds.yandex.net/get-ynews/3339532/26c46977685aa06dd68e56b4b57cfc19/800x400" alt="">
                            <img width="35%" src="https://avatars.mds.yandex.net/get-ynews/3129355/c55d5d829bc8e6ec07ca32b241cb7514/800x400" alt="">
                            <img width="35%" src="https://avatars.mds.yandex.net/get-ynews/2755188/dd43144558138db9308f258870c40cda/800x400" alt="">
                            <img width="35%" src="https://avatars.mds.yandex.net/get-ynews/2433085/d1f675c669c579695f75f2b0751e02c1/800x400" alt="">
                            <img width="35%" src="https://avatars.mds.yandex.net/get-ynews/3116109/27f020975269c33752dd9fa3d01e6e8c/800x400" alt="">
                            <img width="35%" src="https://avatars.mds.yandex.net/get-ynews/2364828/2e557eca443f2972d27555fe56b36e0b/800x400" alt="">
                            <img width="35%" src="https://avatars.mds.yandex.net/get-ynews/2811039/f6124a1fdda7bfb30c23dee9be43f396/800x400" alt="">
                        </div>
                        <span @click="scrollPictures(true)" class="material-icons">
                            chevron_right
                        </span>
                    </div>
                    <div class="actions">
                        <div class="action">
                            <span class="material-icons">
                                tag_faces
                            </span>
                            <span>
                                Оценить
                            </span>
                        </div>
                        <div class="action">
                            <span class="material-icons">
                                share
                            </span>
                            <span>
                                Оценить
                            </span>
                        </div>
                        <div class="action">
                            <span class="material-icons">
                                more_horiz
                            </span>
                        </div>

                    </div>
                </div>
            </div>
            <div class="ads">
                <div class="adsItem">
                <div class="adsItemHeader">
                    <div class="adsItemHeaderRow">
                    <span class="adsItemHeaderTitle">
                        Как писать в Дзен
                    </span>
                    <span class="material-icons">
                        more_vert
                    </span>
                    </div>
                    <div class="adsItemHeaderRow">
                    <span class="adsItemHeaderPromouter">
                        Яндекс Дзен
                    </span>
                    <span class="material-icons adsItemHeaderPromouter adsItemHeaderPromouterSeparator">
                        fiber_manual_record
                    </span>
                    <span class="adsItemHeaderPromouter">
                        Реклама
                    </span>
                    </div>
                </div>
                <div class="adsItemImg dzen">
                </div>
                </div>
                <div class="adsItem">
                <div class="adsItemHeader">
                    <div class="adsItemHeaderRow">
                    <span class="adsItemHeaderTitle">
                        Рукс 
                    </span>
                    <span class="material-icons">
                        more_vert
                    </span>
                    </div>
                    <div class="adsItemHeaderRow">
                    <span class="adsItemHeaderPromouter">
                        Яндекс практикум
                    </span>
                    <span class="material-icons adsItemHeaderPromouter adsItemHeaderPromouterSeparator">
                        fiber_manual_record
                    </span>
                    <span class="adsItemHeaderPromouter">
                        Реклама
                    </span>
                    </div>
                </div>
                <!-- <img width="150%" height="75%" src="https://avatars.mds.yandex.net/get-practicum/5750069/2a0000017bf1fd973b81bfb80d33c3cbe07c/optimize" alt=""> -->
                <div class="adsItemImg">

                </div>
                </div>
                <div class="adsItem">
                <div class="adsItemHeader">
                    <div class="adsItemHeaderRow">
                    <span class="adsItemHeaderTitle">
                        Сравниваем лучшие курсы в IT
                    </span>
                    <span class="material-icons">
                        more_vert
                    </span>
                    </div>
                    <div class="adsItemHeaderRow">
                    <span class="adsItemHeaderPromouter">
                        Яндекс практикум
                    </span>
                    <span class="material-icons adsItemHeaderPromouter adsItemHeaderPromouterSeparator">
                        fiber_manual_record
                    </span>
                    <span class="adsItemHeaderPromouter">
                        Реклама
                    </span>
                    </div>
                </div>
                <!-- <img width="150%" height="75%" src="https://avatars.mds.yandex.net/get-practicum/5750069/2a0000017bf1fd973b81bfb80d33c3cbe07c/optimize" alt=""> -->
                <div class="adsItemImg">

                </div>
                </div>
                <div class="adsItem">
                <div class="adsItemHeader">
                    <div class="adsItemHeaderRow">
                    <span class="adsItemHeaderTitle">
                        Сравниваем лучшие курсы в IT
                    </span>
                    <span class="material-icons">
                        more_vert
                    </span>
                    </div>
                    <div class="adsItemHeaderRow">
                    <span class="adsItemHeaderPromouter">
                        Яндекс практикум
                    </span>
                    <span class="material-icons adsItemHeaderPromouter adsItemHeaderPromouterSeparator">
                        fiber_manual_record
                    </span>
                    <span class="adsItemHeaderPromouter">
                        Реклама
                    </span>
                    </div>
                </div>
                <!-- <img width="150%" height="75%" src="https://avatars.mds.yandex.net/get-practicum/5750069/2a0000017bf1fd973b81bfb80d33c3cbe07c/optimize" alt=""> -->
                <div class="adsItemImg">

                </div>
                </div>
                <div class="adsItem">
                <div class="adsItemHeader">
                    <div class="adsItemHeaderRow">
                    <span class="adsItemHeaderTitle">
                        Сравниваем лучшие курсы в IT
                    </span>
                    <span class="material-icons">
                        more_vert
                    </span>
                    </div>
                    <div class="adsItemHeaderRow">
                    <span class="adsItemHeaderPromouter">
                        Яндекс практикум
                    </span>
                    <span class="material-icons adsItemHeaderPromouter adsItemHeaderPromouterSeparator">
                        fiber_manual_record
                    </span>
                    <span class="adsItemHeaderPromouter">
                        Реклама
                    </span>
                    </div>
                </div>
                <!-- <img width="150%" height="75%" src="https://avatars.mds.yandex.net/get-practicum/5750069/2a0000017bf1fd973b81bfb80d33c3cbe07c/optimize" alt=""> -->
                <div class="adsItemImg">

                </div>
                </div>
                <div class="adsItem">
                <div class="adsItemHeader">
                    <div class="adsItemHeaderRow">
                    <span class="adsItemHeaderTitle">
                        Сравниваем лучшие курсы в IT
                    </span>
                    <span class="material-icons">
                        more_vert
                    </span>
                    </div>
                    <div class="adsItemHeaderRow">
                    <span class="adsItemHeaderPromouter">
                        Яндекс практикум
                    </span>
                    <span class="material-icons adsItemHeaderPromouter adsItemHeaderPromouterSeparator">
                        fiber_manual_record
                    </span>
                    <span class="adsItemHeaderPromouter">
                        Реклама
                    </span>
                    </div>
                </div>
                <!-- <img width="150%" height="75%" src="https://avatars.mds.yandex.net/get-practicum/5750069/2a0000017bf1fd973b81bfb80d33c3cbe07c/optimize" alt=""> -->
                <div class="adsItemImg">

                </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'NewsItem',
    data(){
        return {
            news: [],
            newsItem: {},
        }
    },
    mounted(){
        fetch(`http://api.mediastack.com/v1/news?access_key=cc1688a90c2aa392ea8d81e6212bbf8a&limit=100&countries=ru&languages=ru`, {
            mode: 'cors',
            method: 'GET'
        }).then(response => response.body).then(rb  => {
            const reader = rb.getReader()
            return new ReadableStream({
                start(controller) {
                function push() {
                    reader.read().then( ({done, value}) => {
                    if (done) {
                        console.log('done', done);
                        controller.close();
                        return;
                    }
                    controller.enqueue(value);
                    console.log(done, value);
                    push();
                    })
                }
                push();
                }
            });
        }).then(stream => {
            return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
        })
        .then(async result => {
            console.log(`JSON.parse(result).data: ${JSON.parse(result).data.length}`)
            this.news = JSON.parse(result).data
            this.newsItem = this.news.filter(newsItem => {
                return newsItem.title.includes(this.$route.query.title)
            })[0]
        })
    },
    methods: {
        scrollPictures(directionForward){
            if(directionForward){
                this.$refs.carouselContent.scroll(this.$refs.carouselContent.scrollLeft + 500, 0)
            } else if(!directionForward){
                this.$refs.carouselContent.scroll(this.$refs.carouselContent.scrollLeft - 500, 0)
            }
        }
    },
    components: {
        Header,
        Footer
    }
}
</script>
<style scoped>

  .news {
    width: 70%;
    display: flex;
    justify-content: center;
  }

 
  .newsItem {
    margin: 5px;
    width: 75%;
    height: 475px;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 15px;
  }

  .newsItemHeader {
    font-weight: bolder;
    font-size: 18px;
  }

  .newsItemFooter {
    display: flex;
    align-items: center;
    align-self: flex-start;
  }

  .newsItemFooter > * {
    margin: 2px;
  }

.ads {
    box-sizing: border-box;
    padding: 25px;
    margin: 25px;
    width: 25%;
    border: 1px solid rgb(215, 215, 215);
    border-radius: 15px;
    height: 100%;
    background-color: rgb(250, 250, 250);
  }

  .adsItem {
    border: 1px solid rgb(215, 215, 215);
    width: 100%;
    height: 250px;
    overflow: hidden;
    margin: 15px 0px;
  }

  .totalContainer {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-around;
  }

  .adsItemHeader {
    height: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .adsItemHeaderRow {
    height: 35%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
  }
  
  .adsItemHeaderTitle {
    font-weight: bolder;
  }

  .adsItemHeaderPromouter {
    color: rgb(180, 180, 180);
  }

  .adsItemImg {
    height: 65%;
    background-size: 100% 100%;
    background-image: url('https://avatars.mds.yandex.net/get-practicum/5750069/2a0000017bf1fd973b81bfb80d33c3cbe07c/optimize');
  }

    .dzen {
        background-image: url('https://thumb.tildacdn.com/tild3039-3831-4365-a538-363861333862/-/resize/594x/-/format/webp/illustration.png') !important;
    }

  .adsItemHeaderPromouterSeparator {
    font-size: 8px;
  }

    .carousel {
        /* overflow: hidden; */
        height: 175px;
        width: 100%;
        display: flex;
        align-items: center;
    }

    .carouselContent {
        overflow: hidden;
        height: 100%;
        width: 100%;
        display: flex;
    }

    .carousel > span {
        cursor: pointer;
    }

    .carouselContent > img {
        margin: 0px 15px;
        border-radius: 10px;
    }

    .actions {
        display: flex;
        width: 100%;
        margin: 15px 0px;
    }

    .action {
        display: flex;
        align-items: center;
    }
    
    .action > * {
        margin: 0px 5px;
    }


</style>