<template>
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
            <div class="adsItemImg">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Ads'
}
</script>

<style scoped>
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
</style>