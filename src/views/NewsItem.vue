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
                            <img width="35%" :src="posterOne" alt="">
                            <img width="35%" :src="posterTwo" alt="">
                            <img width="35%" :src="posterThree" alt="">
                            <img width="35%" :src="posterFour" alt="">
                            <img width="35%" :src="posterFive" alt="">
                            <img width="35%" :src="posterSix" alt="">
                            <img width="35%" :src="posterSeven" alt="">
                            <img width="35%" :src="posterEight" alt="">
                            <img width="35%" :src="posterNine" alt="">
                            <img width="35%" :src="posterTen" alt="">
                            <img width="35%" :src="posterEleven" alt="">
                            <img width="35%" :src="posterTwelph" alt="">
                            <img width="35%" :src="posterFirthin" alt="">
                            <img width="35%" :src="posterFourtin" alt="">
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
                        Колледж нового уровня
                    </span>
                    <span class="material-icons">
                        more_vert
                    </span>
                    </div>
                    <div class="adsItemHeaderRow">
                    <span class="adsItemHeaderPromouter">
                        Колледж нового уровня
                    </span>
                    <span class="material-icons adsItemHeaderPromouter adsItemHeaderPromouterSeparator">
                        fiber_manual_record
                    </span>
                    <span class="adsItemHeaderPromouter">
                        Реклама
                    </span>
                    </div>
                </div>
                <div class="adsItemImg college">

                </div>
                </div>
                <div class="adsItem">
                <div class="adsItemHeader">
                    <div class="adsItemHeaderRow">
                    <span class="adsItemHeaderTitle">
                        Отзовик всех курсов в IT и digital
                    </span>
                    <span class="material-icons">
                        more_vert
                    </span>
                    </div>
                    <div class="adsItemHeaderRow">
                    <span class="adsItemHeaderPromouter">
                        it
                    </span>
                    <span class="material-icons adsItemHeaderPromouter adsItemHeaderPromouterSeparator">
                        fiber_manual_record
                    </span>
                    <span class="adsItemHeaderPromouter">
                        Реклама
                    </span>
                    </div>
                </div>
                <div class="adsItemImg it">

                </div>
                </div>
                <div class="adsItem">
                <div class="adsItemHeader">
                    <div class="adsItemHeaderRow">
                    <span class="adsItemHeaderTitle">
                        Всё о профессии "Аналитик данных" с нуля
                    </span>
                    <span class="material-icons">
                        more_vert
                    </span>
                    </div>
                    <div class="adsItemHeaderRow">
                    <span class="adsItemHeaderPromouter">
                        bigdata
                    </span>
                    <span class="material-icons adsItemHeaderPromouter adsItemHeaderPromouterSeparator">
                        fiber_manual_record
                    </span>
                    <span class="adsItemHeaderPromouter">
                        Реклама
                    </span>
                    </div>
                </div>
                <div class="adsItemImg bigData">

                </div>
                </div>
                <div class="adsItem">
                <div class="adsItemHeader">
                    <div class="adsItemHeaderRow">
                    <span class="adsItemHeaderTitle">
                        Профессия SMM менеджер
                    </span>
                    <span class="material-icons">
                        more_vert
                    </span>
                    </div>
                    <div class="adsItemHeaderRow">
                    <span class="adsItemHeaderPromouter">
                        smm
                    </span>
                    <span class="material-icons adsItemHeaderPromouter adsItemHeaderPromouterSeparator">
                        fiber_manual_record
                    </span>
                    <span class="adsItemHeaderPromouter">
                        Реклама
                    </span>
                    </div>
                </div>
                <div class="adsItemImg smm">

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
            posterOne: '',
            posterTwo: '',
            posterThree: '',
            posterFour: '',
            posterFive: '',
            posterSix: '',
            posterSeven: '',
            posterEight: '',
            posterNine: '',
            posterTen: '',
            posterEleven: '',
            posterTwelph: '',
            posterFirthin: '',
            posterFourtin: ''
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
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
    
            setTimeout(() => {
                // fetch(`https://newerse.herokuapp.com/data/item/?title=${this.newsItem.title.split(' ')[0]}&index=${0    }`, {
                fetch(`http://localhost:4000/data/item/?title=${this.newsItem.title.split(' ')[0]}&index=${0    }`, {
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
                .then(result => {
                    console.log(`JSON.parse(result).source: ${JSON.parse(result).source}`)
                    this.posterOne = JSON.parse(result).source
                })
                // fetch(`https://newerse.herokuapp.com/data/item/?title=${this.newsItem.title.split(' ')[0]}&index=${1}`, {
                fetch(`http://localhost:4000/data/item/?title=${this.newsItem.title.split(' ')[0]}&index=${1}`, {
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
                .then(result => {
                    console.log(`JSON.parse(result).source: ${JSON.parse(result).source}`)
                    this.posterTwo = JSON.parse(result).source
                })
                // fetch(`https://newerse.herokuapp.com/data/item/?title=${this.newsItem.title.split(' ')[0]}&index=${2}`, {
                fetch(`http://localhost:4000/data/item/?title=${this.newsItem.title.split(' ')[0]}&index=${2}`, {
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
                .then(result => {
                    console.log(`JSON.parse(result).source: ${JSON.parse(result).source}`)
                    this.posterThree = JSON.parse(result).source
                })
                // fetch(`https://newerse.herokuapp.com/data/item/?title=${this.newsItem.title.split(' ')[0]}&index=${3}`, {
                fetch(`http://localhost:4000/data/item/?title=${this.newsItem.title.split(' ')[0]}&index=${3}`, {
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
                .then(result => {
                    console.log(`JSON.parse(result).source: ${JSON.parse(result).source}`)
                    this.posterFour = JSON.parse(result).source
                })
                // fetch(`https://newerse.herokuapp.com/data/item/?title=${this.newsItem.title.split(' ')[0]}&index=${4}`, {
                fetch(`http://localhost:4000/data/item/?title=${this.newsItem.title.split(' ')[0]}&index=${4}`, {
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
                .then(result => {
                    console.log(`JSON.parse(result).source: ${JSON.parse(result).source}`)
                    this.posterFive = JSON.parse(result).source
                })
                // fetch(`https://newerse.herokuapp.com/data/item/?title=${this.newsItem.title.split(' ')[0]}&index=${5}`, {
                fetch(`http://localhost:4000/data/item/?title=${this.newsItem.title.split(' ')[0]}&index=${5}`, {
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
                .then(result => {
                    console.log(`JSON.parse(result).source: ${JSON.parse(result).source}`)
                    this.posterSix = JSON.parse(result).source
                })
                // fetch(`https://newerse.herokuapp.com/data/item/?title=${this.newsItem.title.split(' ')[0]}&index=${6}`, {
                fetch(`http://localhost:4000/data/item/?title=${this.newsItem.title.split(' ')[0]}&index=${6}`, {
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
                .then(result => {
                    console.log(`JSON.parse(result).source: ${JSON.parse(result).source}`)
                    this.posterSeven = JSON.parse(result).source
                })
                // fetch(`https://newerse.herokuapp.com/data/item/?title=${this.newsItem.title.split(' ')[0]}&index=${7}`, {
                fetch(`http://localhost:4000/data/item/?title=${this.newsItem.title.split(' ')[0]}&index=${7}`, {
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
                .then(result => {
                    console.log(`JSON.parse(result).source: ${JSON.parse(result).source}`)
                    this.posterEight = JSON.parse(result).source
                })
                // fetch(`https://newerse.herokuapp.com/data/item/?title=${this.newsItem.title.split(' ')[0]}&index=${8}`, {
                fetch(`http://localhost:4000/data/item/?title=${this.newsItem.title.split(' ')[0]}&index=${8}`, {
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
                .then(result => {
                    console.log(`JSON.parse(result).source: ${JSON.parse(result).source}`)
                    this.posterNine = JSON.parse(result).source
                })
                // fetch(`https://newerse.herokuapp.com/data/item/?title=${this.newsItem.title.split(' ')[0]}&index=${9}`, {
                fetch(`http://localhost:4000/data/item/?title=${this.newsItem.title.split(' ')[0]}&index=${9}`, {
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
                .then(result => {
                    console.log(`JSON.parse(result).source: ${JSON.parse(result).source}`)
                    this.posterTen = JSON.parse(result).source
                })
                // fetch(`https://newerse.herokuapp.com/data/item/?title=${this.newsItem.title.split(' ')[0]}&index=${10}`, {
                fetch(`http://localhost:4000/data/item/?title=${this.newsItem.title.split(' ')[0]}&index=${10}`, {
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
                .then(result => {
                    console.log(`JSON.parse(result).source: ${JSON.parse(result).source}`)
                    this.posterEleven = JSON.parse(result).source
                })
                
                // fetch(`https://newerse.herokuapp.com/data/item/?title=${this.newsItem.title.split(' ')[0]}&index=${11}`, {
                fetch(`http://localhost:4000/data/item/?title=${this.newsItem.title.split(' ')[0]}&index=${11}`, {
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
                .then(result => {
                    console.log(`JSON.parse(result).source: ${JSON.parse(result).source}`)
                    this.posterTwelph = JSON.parse(result).source
                })
                
                // fetch(`https://newerse.herokuapp.com/data/item/?title=${this.newsItem.title.split(' ')[0]}&index=${12}`, {
                fetch(`http://localhost:4000/data/item/?title=${this.newsItem.title.split(' ')[0]}&index=${12}`, {
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
                .then(result => {
                    console.log(`JSON.parse(result).source: ${JSON.parse(result).source}`)
                    this.posterFirthin = JSON.parse(result).source
                })
                
                // fetch(`https://newerse.herokuapp.com/data/item/?title=${this.newsItem.title.split(' ')[0]}&index=${13}`, {
                fetch(`http://localhost:4000/data/item/?title=${this.newsItem.title.split(' ')[0]}&index=${13}`, {
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
                .then(result => {
                    console.log(`JSON.parse(result).source: ${JSON.parse(result).source}`)
                    this.posterFourtin = JSON.parse(result).source
                })
            })
        }, 5000)
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

    .college {
        background-image: url('https://ithub.ru/vardata/cache/resized/modules/dynalenta/files/29/2021/08/33/3f09609234f7bae282313/W274_H274_Ocenter.jpg') !important;
    }

    .it {
        background-image: url('https://tutortop.ru/wp-content/themes/tutortop/img/bg.svg') !important;
    }

    .bigData {
        background-image: url('https://thumb.tildacdn.com/tild6430-3137-4637-b931-373935646663/-/resize/105x/-/format/webp/Mask_Group.png') !important;
    }

    .smm {
        background-image: url('https://imba.ru/theme_imba/static/src/img/other/im-learn.png') !important;
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
        user-select: none;
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