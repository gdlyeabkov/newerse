<template>
  <div>
    <Header @changeRubric="changeRubricHandler" />
    <div class="totalContainer">
      <div class="news">
        <div class="newsRow">
          <div @click="$router.push({ name: 'NewsItem', query: {  } })" class="newsItem newsItemMain">
            <img class="newsItemMainImg" height="75%" width="50%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsVerticalFormat">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[0].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[0].description.substring(0, 45)
                }}
              </span>
            </div>
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[0].author
                }}
              </span>
            </div>
          </div>
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
        </div>
        <div class="newsRow">
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
        </div>
        <div class="newsRubric">
          <span class="newsRubricHeader">
            Москва и область
          </span>
          <div class="newsRubricTag">
            Театры
          </div>
          <div class="newsRubricTag">
            Музыка
          </div>
          <div class="newsRubricTag">
            Кино
          </div>
        </div>
        <div class="newsRow">
          <div @click="$router.push({ name: 'NewsItem', query: {  } })" class="newsItem newsItemMain">
            <img class="newsItemMainImg" height="75%" width="50%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsVerticalFormat">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[0].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[0].description
                }}
              </span>
            </div>
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[0].author
                }}
              </span>
            </div>
          </div>
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
        </div>
        <div class="newsRow">
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
        </div>
        <div class="newsRubric">
          <span class="newsRubricHeader">
            Интересное
          </span>
          <div class="newsRubricTag">
            Театры
          </div>
          <div class="newsRubricTag">
            Музыка
          </div>
          <div class="newsRubricTag">
            Кино
          </div>
        </div>
        <div class="newsRow">
          <div @click="$router.push({ name: 'NewsItem', query: {  } })" class="newsItem newsItemMain">
            <img class="newsItemMainImg" height="75%" width="50%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsVerticalFormat">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[0].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[0].description
                }}
              </span>
            </div>
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[0].author
                }}
              </span>
            </div>
          </div>
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
        </div>
        <div class="newsRow">
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
        </div>
        <div class="newsRubric">
          <span class="newsRubricHeader">
            Политика
          </span>
          <div class="newsRubricTag">
            Театры
          </div>
          <div class="newsRubricTag">
            Музыка
          </div>
          <div class="newsRubricTag">
            Кино
          </div>
        </div>
        <div class="newsRow">
          <div @click="$router.push({ name: 'NewsItem', query: {  } })" class="newsItem newsItemMain">
            <img class="newsItemMainImg" height="75%" width="50%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsVerticalFormat">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[0].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[0].description
                }}
              </span>
            </div>
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[0].author
                }}
              </span>
            </div>
          </div>
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
        </div>
        <div class="newsRow">
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
        </div>
        <div class="newsRubric">
          <span class="newsRubricHeader">
            Реклама
          </span>
          <div class="newsRubricTag">
            Театры
          </div>
          <div class="newsRubricTag">
            Музыка
          </div>
          <div class="newsRubricTag">
            Кино
          </div>
        </div>
        <div class="newsRow">
          <div @click="$router.push({ name: 'NewsItem', query: {  } })" class="newsItem newsItemMain">
            <img class="newsItemMainImg" height="75%" width="50%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsVerticalFormat">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[0].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[0].description
                }}
              </span>
            </div>
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[0].author
                }}
              </span>
            </div>
          </div>
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
        </div>
        <div class="newsRow">
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
        </div>
        <div class="newsRubric">
          <span class="newsRubricHeader">
            Общество
          </span>
          <div class="newsRubricTag">
            Театры
          </div>
          <div class="newsRubricTag">
            Музыка
          </div>
          <div class="newsRubricTag">
            Кино
          </div>
        </div>
        <div class="newsRow">
          <div @click="$router.push({ name: 'NewsItem', query: {  } })" class="newsItem newsItemMain">
            <img class="newsItemMainImg" height="75%" width="50%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsVerticalFormat">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[0].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[0].description
                }}
              </span>
            </div>
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[0].author
                }}
              </span>
            </div>
          </div>
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
        </div>
        <div class="newsRow">
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
        </div>
        <div class="newsRubric">
          <span class="newsRubricHeader">
            Экономика
          </span>
          <div class="newsRubricTag">
            Театры
          </div>
          <div class="newsRubricTag">
            Музыка
          </div>
          <div class="newsRubricTag">
            Кино
          </div>
        </div>
        <div class="newsRow">
          <div @click="$router.push({ name: 'NewsItem', query: {  } })" class="newsItem newsItemMain">
            <img class="newsItemMainImg" height="75%" width="50%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsVerticalFormat">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[0].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[0].description
                }}
              </span>
            </div>
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[0].author
                }}
              </span>
            </div>
          </div>
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
        </div>
        <div class="newsRow">
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
        </div>
        <div class="newsRubric">
          <span class="newsRubricHeader">
            В мире
          </span>
          <div class="newsRubricTag">
            Театры
          </div>
          <div class="newsRubricTag">
            Музыка
          </div>
          <div class="newsRubricTag">
            Кино
          </div>
        </div>
        <div class="newsRow">
          <div @click="$router.push({ name: 'NewsItem', query: {  } })" class="newsItem newsItemMain">
            <img class="newsItemMainImg" height="75%" width="50%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsVerticalFormat">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[0].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[0].description
                }}
              </span>
            </div>
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[0].author
                }}
              </span>
            </div>
          </div>
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
        </div>
        <div class="newsRow">
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
        </div>
        <div class="newsRubric">
          <span class="newsRubricHeader">
            Спорт
          </span>
          <div class="newsRubricTag">
            Театры
          </div>
          <div class="newsRubricTag">
            Музыка
          </div>
          <div class="newsRubricTag">
            Кино
          </div>
        </div>
        <div class="newsRow">
          <div @click="$router.push({ name: 'NewsItem', query: {  } })" class="newsItem newsItemMain">
            <img class="newsItemMainImg" height="75%" width="50%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsVerticalFormat">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[0].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[0].description
                }}
              </span>
            </div>
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[0].author
                }}
              </span>
            </div>
          </div>
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
        </div>
        <div class="newsRow">
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
        </div>
        <div class="newsRubric">
          <span class="newsRubricHeader">
            Проишествия
          </span>
          <div class="newsRubricTag">
            Театры
          </div>
          <div class="newsRubricTag">
            Музыка
          </div>
          <div class="newsRubricTag">
            Кино
          </div>
        </div>
        <div class="newsRow">
          <div @click="$router.push({ name: 'NewsItem', query: {  } })" class="newsItem newsItemMain">
            <img class="newsItemMainImg" height="75%" width="50%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsVerticalFormat">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[0].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[0].description
                }}
              </span>
            </div>
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[0].author
                }}
              </span>
            </div>
          </div>
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
        </div>
        <div class="newsRow">
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
        </div>
        <div class="newsRubric">
          <span class="newsRubricHeader">
            Культура
          </span>
          <div class="newsRubricTag">
            Театры
          </div>
          <div class="newsRubricTag">
            Музыка
          </div>
          <div class="newsRubricTag">
            Кино
          </div>
        </div>
        <div class="newsRow">
          <div @click="$router.push({ name: 'NewsItem', query: {  } })" class="newsItem newsItemMain">
            <img class="newsItemMainImg" height="75%" width="50%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsVerticalFormat">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[0].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[0].description
                }}
              </span>
            </div>
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[0].author
                }}
              </span>
            </div>
          </div>
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
        </div>
        <div class="newsRow">
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
        </div>
        <div class="newsRubric">
          <span class="newsRubricHeader">
            Технологии
          </span>
          <div class="newsRubricTag">
            Театры
          </div>
          <div class="newsRubricTag">
            Музыка
          </div>
          <div class="newsRubricTag">
            Кино
          </div>
        </div>
        <div class="newsRow">
          <div @click="$router.push({ name: 'NewsItem', query: {  } })" class="newsItem newsItemMain">
            <img class="newsItemMainImg" height="75%" width="50%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsVerticalFormat">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[0].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[0].description
                }}
              </span>
            </div>
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[0].author
                }}
              </span>
            </div>
          </div>
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
        </div>
        <div class="newsRow">
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
        </div>
        <div class="newsRubric">
          <span class="newsRubricHeader">
            Наука
          </span>
          <div class="newsRubricTag">
            Театры
          </div>
          <div class="newsRubricTag">
            Музыка
          </div>
          <div class="newsRubricTag">
            Кино
          </div>
        </div>
        <div class="newsRow">
          <div @click="$router.push({ name: 'NewsItem', query: {  } })" class="newsItem newsItemMain">
            <img class="newsItemMainImg" height="75%" width="50%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsVerticalFormat">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[0].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[0].description
                }}
              </span>
            </div>
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[0].author
                }}
              </span>
            </div>
          </div>
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
        </div>
        <div class="newsRow">
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
        </div>
        <div class="newsRubric">
          <span class="newsRubricHeader">
            Авто
          </span>
          <div class="newsRubricTag">
            Театры
          </div>
          <div class="newsRubricTag">
            Музыка
          </div>
          <div class="newsRubricTag">
            Кино
          </div>
        </div>
        <div class="newsRow">
          <div @click="$router.push({ name: 'NewsItem', query: {  } })" class="newsItem newsItemMain">
            <img class="newsItemMainImg" height="75%" width="50%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsVerticalFormat">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[0].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[0].description
                }}
              </span>
            </div>
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[0].author
                }}
              </span>
            </div>
          </div>
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
        </div>
        <div class="newsRow">
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
              </span>
            </div>
          </div>
          <div class="newsItem">
            <span class="newsItemHeader">
              Режиссер Мэтт Ривз опубликовал первый кадр из нового «Бэтмена»
            </span>
            <span>
              Режиссер Мэтт Ривз опубликовал в Twitter первый кадр из новой версии «Бэтмена». На фото Темный Рыцарь стоит на фоне алого рассвета.
            </span>
            <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
            <div class="newsItemFooter">
              <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
              <span>
                Компания
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
  name: 'Home',
  mounted(){
    if(this.$route.query.rubric !== null && this.$route.query.rubric !== undefined){
      this.rubric = this.$route.query.rubric
    }
    fetch(`http://api.mediastack.com/v1/news?access_key=cc1688a90c2aa392ea8d81e6212bbf8a`, {
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
    })
  },
  data(){
    return {
      news: [
        {
          title: 'Новая премьера фильма состоится в этом году',
          description: 'Сегодня стало известно, что известные всеми режиссёр XXXXXXXX XXXXXX снимет новую картину,премьера которой состоится в этом году.',
          category: 'general',
          author: 'Автор'
        }
      ],
      rubric: 'general'
    }
  },
  methods: {
    changeRubricHandler(newRubric){
      this.rubric = newRubric
      
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
  }

  .newsItemMain {
    width: 90% !important;  
    flex-direction: row !important;
    align-items: center;
    justify-content: space-between;
  }

  .newsRow {
    display: flex;
    width: 100%;
  }

  .newsItem {
    margin: 5px;
    width: 45%;
    height: 400px;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 15px;
    cursor: pointer;
  }

  .newsItem:hover {
    color: rgb(255, 0, 0);
  }

  .newsItemHeader {
    font-weight: bolder;
    font-size: 18px;
  }

  .newsItem > img {
    border-radius: 7px;
    margin: 15px auto;
  }

  .newsItemFooter {
    display: flex;
    align-items: flex-end;
    height: 100%;
  }

  .newsItemFooter > * {
    margin: 2px;
  }

  .newsVerticalFormat {
    margin: 15px;
    display: flex;
    flex-direction: column;

  }

  .newsItemMainImg {
    align-self: center;
    margin: 15px;
  }

  .newsRubric {
    display: flex;
    align-items: center;
    margin-top: 35px;
    margin-left: 35px;
  }
  
  .newsRubricHeader {
    font-size: 24px;
    font-weight: bolder;
  }

  .newsRubricTag {
    border-radius: 25px;
    background-color: rgb(255, 255, 255);
    width: 135px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 15px;
    height: 35px;
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

  .adsItemHeaderPromouterSeparator {
    font-size: 8px;
  }

</style>