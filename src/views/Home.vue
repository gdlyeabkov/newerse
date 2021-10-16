<template>
  <div>
    <Header @changeRubric="changeRubricHandler" />
    <div class="totalContainer">
      <div class="news">
        <div v-if="news.filter(newsItem => {
          return newsItem.category.includes('general')
        }).length >= 5">
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
                    })[0].description.substring(0, 45).substring(0, 45)
                  }}
                </span>
              </div>
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.category.includes("general")
                    })[0].author ?
                      news.filter(newsItem => {
                        return newsItem.category.includes("general")
                      })[0].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[1].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[1].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.category.includes("general")
                    })[1].author ?
                      news.filter(newsItem => {
                        return newsItem.category.includes("general")
                      })[1].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
          </div>
          <div class="newsRow">
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[2].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[2].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.category.includes("general")
                    })[2].author ?
                      news.filter(newsItem => {
                        return newsItem.category.includes("general")
                      })[2].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[3].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[3].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.category.includes("general")
                    })[3].author ?
                      news.filter(newsItem => {
                        return newsItem.category.includes("general")
                      })[3].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[4].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[4].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.category.includes("general")
                    })[4].author ?
                      news.filter(newsItem => {
                        return newsItem.category.includes("general")
                      })[4].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div v-if="news.filter(newsItem => {
            return newsItem.description.toLowerCase().includes('московск') || newsItem.description.toLowerCase().includes('москв')
          }).length >= 5">
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
                      return newsItem.description.toLowerCase().includes("московск") || newsItem.description.toLowerCase().includes("москв")
                    })[0].title
                  }}
                </span>
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("московск") || newsItem.description.toLowerCase().includes("москв")
                    })[0].description.substring(0, 45)
                  }}
                </span>
              </div>
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("московск") || newsItem.description.toLowerCase().includes("москв")
                    })[0].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("московск") || newsItem.description.toLowerCase().includes("москв")
                      })[0].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("московск") || newsItem.description.toLowerCase().includes("москв")
                  })[1].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("московск") || newsItem.description.toLowerCase().includes("москв")
                  })[1].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("московск") || newsItem.description.toLowerCase().includes("москв")
                    })[1].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("московск") || newsItem.description.toLowerCase().includes("москв")
                      })[1].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
          </div>
          <div class="newsRow">
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("московск") || newsItem.description.toLowerCase().includes("москв")
                  })[2].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("московск") || newsItem.description.toLowerCase().includes("москв")
                  })[2].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("московск") || newsItem.description.toLowerCase().includes("москв")
                    })[2].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("московск") || newsItem.description.toLowerCase().includes("москв")
                      })[2].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("московск") || newsItem.description.toLowerCase().includes("москв")
                  })[3].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("московск") || newsItem.description.toLowerCase().includes("москв")
                  })[3].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("московск") || newsItem.description.toLowerCase().includes("москв")
                    })[3].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("московск") || newsItem.description.toLowerCase().includes("москв")
                      })[3].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("московск") || newsItem.description.toLowerCase().includes("москв")
                  })[4].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("московск") || newsItem.description.toLowerCase().includes("москв")
                  })[4].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("московск") || newsItem.description.toLowerCase().includes("москв")
                    })[4].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("московск") || newsItem.description.toLowerCase().includes("москв")
                      })[4].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div v-if="news.filter(newsItem => {
          return newsItem.description.toLowerCase().includes('интересн') || newsItem.description.toLowerCase().includes('нов')
        }).length >= 5">
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
                      return newsItem.description.toLowerCase().includes('интересн') || newsItem.description.toLowerCase().includes('нов')
                    })[0].title
                  }}
                </span>
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes('интересн') || newsItem.description.toLowerCase().includes('нов')
                    })[0].description.substring(0, 45)
                  }}
                </span>
              </div>
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes('интересн') || newsItem.description.toLowerCase().includes('нов')
                    })[0].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes('интересн') || newsItem.description.toLowerCase().includes('нов')
                      })[0].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes('интересн') || newsItem.description.toLowerCase().includes('нов')
                  })[1].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes('интересн') || newsItem.description.toLowerCase().includes('нов')
                  })[1].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes('интересн') || newsItem.description.toLowerCase().includes('нов')
                    })[1].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes('интересн') || newsItem.description.toLowerCase().includes('нов')
                      })[1].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
          </div>
          <div class="newsRow">
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes('интересн') || newsItem.description.toLowerCase().includes('нов')
                  })[2].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes('интересн') || newsItem.description.toLowerCase().includes('нов')
                  })[2].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes('интересн') || newsItem.description.toLowerCase().includes('нов')
                    })[2].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes('интересн') || newsItem.description.toLowerCase().includes('нов')
                      })[2].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes('интересн') || newsItem.description.toLowerCase().includes('нов')
                  })[3].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes('интересн') || newsItem.description.toLowerCase().includes('нов')
                  })[3].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes('интересн') || newsItem.description.toLowerCase().includes('нов')
                    })[3].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes('интересн') || newsItem.description.toLowerCase().includes('нов')
                      })[3].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes('интересн') || newsItem.description.toLowerCase().includes('нов')
                  })[4].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes('интересн') || newsItem.description.toLowerCase().includes('нов')
                  })[4].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes('интересн') || newsItem.description.toLowerCase().includes('нов')
                    })[4].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes('интересн') || newsItem.description.toLowerCase().includes('нов')
                      })[4].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div v-if="news.filter(newsItem => {
          return newsItem.description.toLowerCase().includes('nord stream') || newsItem.description.toLowerCase().includes('северный поток') || newsItem.description.toLowerCase().includes('журналист')
        }).length >= 5">
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
                      return newsItem.description.toLowerCase().includes("nord stream") || newsItem.description.toLowerCase().includes("северный поток") || newsItem.description.toLowerCase().includes("журналист")
                    })[0].title
                  }}
                </span>
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("nord stream") || newsItem.description.toLowerCase().includes("северный поток") || newsItem.description.toLowerCase().includes("журналист")
                    })[0].description.substring(0, 45)
                  }}
                </span>
              </div>
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("nord stream") || newsItem.description.toLowerCase().includes("северный поток") || newsItem.description.toLowerCase().includes("журналист")
                    })[0].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("nord stream") || newsItem.description.toLowerCase().includes("северный поток") || newsItem.description.toLowerCase().includes("журналист")
                      })[0].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("nord stream") || newsItem.description.toLowerCase().includes("северный поток") || newsItem.description.toLowerCase().includes("журналист")
                  })[1].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("nord stream") || newsItem.description.toLowerCase().includes("северный поток") || newsItem.description.toLowerCase().includes("журналист")
                  })[1].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("nord stream") || newsItem.description.toLowerCase().includes("северный поток") || newsItem.description.toLowerCase().includes("журналист")
                    })[1].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("nord stream") || newsItem.description.toLowerCase().includes("северный поток") || newsItem.description.toLowerCase().includes("журналист")
                      })[1].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
          </div>
          <div class="newsRow">
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("nord stream") || newsItem.description.toLowerCase().includes("северный поток") || newsItem.description.toLowerCase().includes("журналист")
                  })[2].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("nord stream") || newsItem.description.toLowerCase().includes("северный поток") || newsItem.description.toLowerCase().includes("журналист")
                  })[2].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("nord stream") || newsItem.description.toLowerCase().includes("северный поток") || newsItem.description.toLowerCase().includes("журналист")
                    })[2].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("nord stream") || newsItem.description.toLowerCase().includes("северный поток") || newsItem.description.toLowerCase().includes("журналист")
                      })[2].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("nord stream") || newsItem.description.toLowerCase().includes("северный поток") || newsItem.description.toLowerCase().includes("журналист")
                  })[3].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("nord stream") || newsItem.description.toLowerCase().includes("северный поток") || newsItem.description.toLowerCase().includes("журналист")
                  })[3].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("nord stream") || newsItem.description.toLowerCase().includes("северный поток") || newsItem.description.toLowerCase().includes("журналист")
                    })[3].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("nord stream") || newsItem.description.toLowerCase().includes("северный поток") || newsItem.description.toLowerCase().includes("журналист")
                      })[3].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("nord stream") || newsItem.description.toLowerCase().includes("северный поток") || newsItem.description.toLowerCase().includes("журналист")
                  })[4].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("nord stream") || newsItem.description.toLowerCase().includes("северный поток") || newsItem.description.toLowerCase().includes("журналист")
                  })[4].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("nord stream") || newsItem.description.toLowerCase().includes("северный поток") || newsItem.description.toLowerCase().includes("журналист")
                    })[4].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("nord stream") || newsItem.description.toLowerCase().includes("северный поток") || newsItem.description.toLowerCase().includes("журналист")
                      })[4].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div v-if="news.filter(newsItem => {
          return newsItem.category.includes('general')
        }).length >= 5">
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
                    })[0].author ?
                      news.filter(newsItem => {
                        return newsItem.category.includes("general")
                      })[0].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[1].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[1].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.category.includes("general")
                    })[1].author ?
                      news.filter(newsItem => {
                        return newsItem.category.includes("general")
                      })[1].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
          </div>
          <div class="newsRow">
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[2].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[2].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.category.includes("general")
                    })[2].author ?
                      news.filter(newsItem => {
                        return newsItem.category.includes("general")
                      })[2].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[3].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[3].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.category.includes("general")
                    })[3].author ?
                      news.filter(newsItem => {
                        return newsItem.category.includes("general")
                      })[3].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[4].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[4].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.category.includes("general")
                    })[4].author ?
                      news.filter(newsItem => {
                        return newsItem.category.includes("general")
                      })[4].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div v-if="news.filter(newsItem => {
          return newsItem.description.toLowerCase().includes('социал') || newsItem.description.toLowerCase().includes('президент') || newsItem.description.toLowerCase().includes('пенси') || newsItem.description.toLowerCase().includes('обществ')
        }).length >= 5">
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
                      return newsItem.description.toLowerCase().includes("социал") || newsItem.description.toLowerCase().includes("президент") || newsItem.description.toLowerCase().includes("пенси") || newsItem.description.toLowerCase().includes("обществ")
                    })[0].title
                  }}
                </span>
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("социал") || newsItem.description.toLowerCase().includes("президент") || newsItem.description.toLowerCase().includes("пенси") || newsItem.description.toLowerCase().includes("обществ")
                    })[0].description.substring(0, 45)
                  }}
                </span>
              </div>
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("социал") || newsItem.description.toLowerCase().includes("президент") || newsItem.description.toLowerCase().includes("пенси") || newsItem.description.toLowerCase().includes("обществ")
                    })[0].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("социал") || newsItem.description.toLowerCase().includes("президент") || newsItem.description.toLowerCase().includes("пенси") || newsItem.description.toLowerCase().includes("обществ")
                      })[0].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("социал") || newsItem.description.toLowerCase().includes("президент") || newsItem.description.toLowerCase().includes("пенси") || newsItem.description.toLowerCase().includes("обществ")
                  })[1].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("социал") || newsItem.description.toLowerCase().includes("президент") || newsItem.description.toLowerCase().includes("пенси") || newsItem.description.toLowerCase().includes("обществ")
                  })[1].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("социал") || newsItem.description.toLowerCase().includes("президент") || newsItem.description.toLowerCase().includes("пенси") || newsItem.description.toLowerCase().includes("обществ")
                    })[1].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("социал") || newsItem.description.toLowerCase().includes("президент") || newsItem.description.toLowerCase().includes("пенси") || newsItem.description.toLowerCase().includes("обществ")
                      })[1].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
          </div>
          <div class="newsRow">
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("социал") || newsItem.description.toLowerCase().includes("президент") || newsItem.description.toLowerCase().includes("пенси") || newsItem.description.toLowerCase().includes("обществ")
                  })[2].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("социал") || newsItem.description.toLowerCase().includes("президент") || newsItem.description.toLowerCase().includes("пенси") || newsItem.description.toLowerCase().includes("обществ")
                  })[2].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("социал") || newsItem.description.toLowerCase().includes("президент") || newsItem.description.toLowerCase().includes("пенси") || newsItem.description.toLowerCase().includes("обществ")
                    })[2].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("социал") || newsItem.description.toLowerCase().includes("президент") || newsItem.description.toLowerCase().includes("пенси") || newsItem.description.toLowerCase().includes("обществ")
                      })[2].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("социал") || newsItem.description.toLowerCase().includes("президент") || newsItem.description.toLowerCase().includes("пенси") || newsItem.description.toLowerCase().includes("обществ")
                  })[3].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("социал") || newsItem.description.toLowerCase().includes("президент") || newsItem.description.toLowerCase().includes("пенси") || newsItem.description.toLowerCase().includes("обществ")
                  })[3].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("социал") || newsItem.description.toLowerCase().includes("президент") || newsItem.description.toLowerCase().includes("пенси") || newsItem.description.toLowerCase().includes("обществ")
                    })[3].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("социал") || newsItem.description.toLowerCase().includes("президент") || newsItem.description.toLowerCase().includes("пенси") || newsItem.description.toLowerCase().includes("обществ")
                      })[3].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("социал") || newsItem.description.toLowerCase().includes("президент") || newsItem.description.toLowerCase().includes("пенси") || newsItem.description.toLowerCase().includes("обществ")
                  })[4].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("социал") || newsItem.description.toLowerCase().includes("президент") || newsItem.description.toLowerCase().includes("пенси") || newsItem.description.toLowerCase().includes("обществ")
                  })[4].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("социал") || newsItem.description.toLowerCase().includes("президент") || newsItem.description.toLowerCase().includes("пенси") || newsItem.description.toLowerCase().includes("обществ")
                    })[4].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("социал") || newsItem.description.toLowerCase().includes("президент") || newsItem.description.toLowerCase().includes("пенси") || newsItem.description.toLowerCase().includes("обществ")
                      })[4].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div v-if="news.filter(newsItem => {
          return newsItem.description.toLowerCase().includes('банк') || newsItem.description.toLowerCase().includes('эконом') || newsItem.description.toLowerCase().includes('денеж') || newsItem.description.toLowerCase().includes('монет')
        }).length >= 5">
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
                      return newsItem.description.toLowerCase().includes('банк') || newsItem.description.toLowerCase().includes('эконом') || newsItem.description.toLowerCase().includes('денеж') || newsItem.description.toLowerCase().includes('монет')
                    })[0].title
                  }}
                </span>
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes('банк') || newsItem.description.toLowerCase().includes('эконом') || newsItem.description.toLowerCase().includes('денеж') || newsItem.description.toLowerCase().includes('монет')
                    })[0].description.substring(0, 45)
                  }}
                </span>
              </div>
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes('банк') || newsItem.description.toLowerCase().includes('эконом') || newsItem.description.toLowerCase().includes('денеж') || newsItem.description.toLowerCase().includes('монет')
                    })[0].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes('банк') || newsItem.description.toLowerCase().includes('эконом') || newsItem.description.toLowerCase().includes('денеж') || newsItem.description.toLowerCase().includes('монет')
                      })[0].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes('банк') || newsItem.description.toLowerCase().includes('эконом') || newsItem.description.toLowerCase().includes('денеж') || newsItem.description.toLowerCase().includes('монет')
                  })[1].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes('банк') || newsItem.description.toLowerCase().includes('эконом') || newsItem.description.toLowerCase().includes('денеж') || newsItem.description.toLowerCase().includes('монет')
                  })[1].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes('банк') || newsItem.description.toLowerCase().includes('эконом') || newsItem.description.toLowerCase().includes('денеж') || newsItem.description.toLowerCase().includes('монет')
                    })[1].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes('банк') || newsItem.description.toLowerCase().includes('эконом') || newsItem.description.toLowerCase().includes('денеж') || newsItem.description.toLowerCase().includes('монет')
                      })[1].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
          </div>
          <div class="newsRow">
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes('банк') || newsItem.description.toLowerCase().includes('эконом') || newsItem.description.toLowerCase().includes('денеж') || newsItem.description.toLowerCase().includes('монет')
                  })[2].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes('банк') || newsItem.description.toLowerCase().includes('эконом') || newsItem.description.toLowerCase().includes('денеж') || newsItem.description.toLowerCase().includes('монет')
                  })[2].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes('банк') || newsItem.description.toLowerCase().includes('эконом') || newsItem.description.toLowerCase().includes('денеж') || newsItem.description.toLowerCase().includes('монет')
                    })[2].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes('банк') || newsItem.description.toLowerCase().includes('эконом') || newsItem.description.toLowerCase().includes('денеж') || newsItem.description.toLowerCase().includes('монет')
                      })[2].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes('банк') || newsItem.description.toLowerCase().includes('эконом') || newsItem.description.toLowerCase().includes('денеж') || newsItem.description.toLowerCase().includes('монет')
                  })[3].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes('банк') || newsItem.description.toLowerCase().includes('эконом') || newsItem.description.toLowerCase().includes('денеж') || newsItem.description.toLowerCase().includes('монет')
                  })[3].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes('банк') || newsItem.description.toLowerCase().includes('эконом') || newsItem.description.toLowerCase().includes('денеж') || newsItem.description.toLowerCase().includes('монет')
                    })[3].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes('банк') || newsItem.description.toLowerCase().includes('эконом') || newsItem.description.toLowerCase().includes('денеж') || newsItem.description.toLowerCase().includes('монет')
                      })[3].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes('банк') || newsItem.description.toLowerCase().includes('эконом') || newsItem.description.toLowerCase().includes('денеж') || newsItem.description.toLowerCase().includes('монет')
                  })[4].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes('банк') || newsItem.description.toLowerCase().includes('эконом') || newsItem.description.toLowerCase().includes('денеж') || newsItem.description.toLowerCase().includes('монет')
                  })[4].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes('банк') || newsItem.description.toLowerCase().includes('эконом') || newsItem.description.toLowerCase().includes('денеж') || newsItem.description.toLowerCase().includes('монет')
                    })[4].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes('банк') || newsItem.description.toLowerCase().includes('эконом') || newsItem.description.toLowerCase().includes('денеж') || newsItem.description.toLowerCase().includes('монет')
                      })[4].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div v-if="news.filter(newsItem => {
          return newsItem.description.toLowerCase().includes('норвеж') || newsItem.description.toLowerCase().includes('варшав') || newsItem.description.toLowerCase().includes('мир') || newsItem.description.toLowerCase().includes('стран')
        }).length >= 5">
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
                      return newsItem.description.toLowerCase().includes("норвеж") || newsItem.description.toLowerCase().includes("варшав") || newsItem.description.toLowerCase().includes("мир") || newsItem.description.toLowerCase().includes("стран")
                    })[0].title
                  }}
                </span>
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("норвеж") || newsItem.description.toLowerCase().includes("варшав") || newsItem.description.toLowerCase().includes("мир") || newsItem.description.toLowerCase().includes("стран")
                    })[0].description.substring(0, 45)
                  }}
                </span>
              </div>
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("норвеж") || newsItem.description.toLowerCase().includes("варшав") || newsItem.description.toLowerCase().includes("мир") || newsItem.description.toLowerCase().includes("стран")
                    })[0].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("норвеж") || newsItem.description.toLowerCase().includes("варшав") || newsItem.description.toLowerCase().includes("мир") || newsItem.description.toLowerCase().includes("стран")
                      })[0].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("норвеж") || newsItem.description.toLowerCase().includes("варшав") || newsItem.description.toLowerCase().includes("мир") || newsItem.description.toLowerCase().includes("стран")
                  })[1].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("норвеж") || newsItem.description.toLowerCase().includes("варшав") || newsItem.description.toLowerCase().includes("мир") || newsItem.description.toLowerCase().includes("стран")
                  })[1].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("норвеж") || newsItem.description.toLowerCase().includes("варшав") || newsItem.description.toLowerCase().includes("мир") || newsItem.description.toLowerCase().includes("стран")
                    })[1].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("норвеж") || newsItem.description.toLowerCase().includes("варшав") || newsItem.description.toLowerCase().includes("мир") || newsItem.description.toLowerCase().includes("стран")
                      })[1].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
          </div>
          <div class="newsRow">
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("норвеж") || newsItem.description.toLowerCase().includes("варшав") || newsItem.description.toLowerCase().includes("мир") || newsItem.description.toLowerCase().includes("стран")
                  })[2].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("норвеж") || newsItem.description.toLowerCase().includes("варшав") || newsItem.description.toLowerCase().includes("мир") || newsItem.description.toLowerCase().includes("стран")
                  })[2].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("норвеж") || newsItem.description.toLowerCase().includes("варшав") || newsItem.description.toLowerCase().includes("мир") || newsItem.description.toLowerCase().includes("стран")
                    })[2].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("норвеж") || newsItem.description.toLowerCase().includes("варшав") || newsItem.description.toLowerCase().includes("мир") || newsItem.description.toLowerCase().includes("стран")
                      })[2].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("норвеж") || newsItem.description.toLowerCase().includes("варшав") || newsItem.description.toLowerCase().includes("мир") || newsItem.description.toLowerCase().includes("стран")
                  })[3].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("норвеж") || newsItem.description.toLowerCase().includes("варшав") || newsItem.description.toLowerCase().includes("мир") || newsItem.description.toLowerCase().includes("стран")
                  })[3].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("норвеж") || newsItem.description.toLowerCase().includes("варшав") || newsItem.description.toLowerCase().includes("мир") || newsItem.description.toLowerCase().includes("стран")
                    })[3].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("норвеж") || newsItem.description.toLowerCase().includes("варшав") || newsItem.description.toLowerCase().includes("мир") || newsItem.description.toLowerCase().includes("стран")
                      })[3].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("норвеж") || newsItem.description.toLowerCase().includes("варшав") || newsItem.description.toLowerCase().includes("мир") || newsItem.description.toLowerCase().includes("стран")
                  })[4].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("норвеж") || newsItem.description.toLowerCase().includes("варшав") || newsItem.description.toLowerCase().includes("мир") || newsItem.description.toLowerCase().includes("стран")
                  })[4].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("норвеж") || newsItem.description.toLowerCase().includes("варшав") || newsItem.description.toLowerCase().includes("мир") || newsItem.description.toLowerCase().includes("стран")
                    })[4].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("норвеж") || newsItem.description.toLowerCase().includes("варшав") || newsItem.description.toLowerCase().includes("мир") || newsItem.description.toLowerCase().includes("стран")
                      })[4].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div v-if="news.filter(newsItem => {
          return newsItem.description.toLowerCase().includes('олимпий') || newsItem.description.toLowerCase().includes('футбол') || newsItem.description.toLowerCase().includes('волейбол') || newsItem.description.toLowerCase().includes('баскетболл')
        }).length >= 5">
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
                      return newsItem.description.toLowerCase().includes("олимпий") || newsItem.description.toLowerCase().includes("футбол") || newsItem.description.toLowerCase().includes("волейбол") || newsItem.description.toLowerCase().includes("баскетболл")
                    })[0].title
                  }}
                </span>
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("олимпий") || newsItem.description.toLowerCase().includes("футбол") || newsItem.description.toLowerCase().includes("волейбол") || newsItem.description.toLowerCase().includes("баскетболл")
                    })[0].description.substring(0, 45)
                  }}
                </span>
              </div>
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("олимпий") || newsItem.description.toLowerCase().includes("футбол") || newsItem.description.toLowerCase().includes("волейбол") || newsItem.description.toLowerCase().includes("баскетболл")
                    })[0].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("олимпий") || newsItem.description.toLowerCase().includes("футбол") || newsItem.description.toLowerCase().includes("волейбол") || newsItem.description.toLowerCase().includes("баскетболл")
                      })[0].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("олимпий") || newsItem.description.toLowerCase().includes("футбол") || newsItem.description.toLowerCase().includes("волейбол") || newsItem.description.toLowerCase().includes("баскетболл")
                  })[1].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("олимпий") || newsItem.description.toLowerCase().includes("футбол") || newsItem.description.toLowerCase().includes("волейбол") || newsItem.description.toLowerCase().includes("баскетболл")
                  })[1].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("олимпий") || newsItem.description.toLowerCase().includes("футбол") || newsItem.description.toLowerCase().includes("волейбол") || newsItem.description.toLowerCase().includes("баскетболл")
                    })[1].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("олимпий") || newsItem.description.toLowerCase().includes("футбол") || newsItem.description.toLowerCase().includes("волейбол") || newsItem.description.toLowerCase().includes("баскетболл")
                      })[1].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
          </div>
          <div class="newsRow">
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("олимпий") || newsItem.description.toLowerCase().includes("футбол") || newsItem.description.toLowerCase().includes("волейбол") || newsItem.description.toLowerCase().includes("баскетболл")
                  })[2].description.substring(0, 45)
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("олимпий") || newsItem.description.toLowerCase().includes("футбол") || newsItem.description.toLowerCase().includes("волейбол") || newsItem.description.toLowerCase().includes("баскетболл")
                  })[2].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("олимпий") || newsItem.description.toLowerCase().includes("футбол") || newsItem.description.toLowerCase().includes("волейбол") || newsItem.description.toLowerCase().includes("баскетболл")
                    })[2].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("олимпий") || newsItem.description.toLowerCase().includes("футбол") || newsItem.description.toLowerCase().includes("волейбол") || newsItem.description.toLowerCase().includes("баскетболл")
                      })[2].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("олимпий") || newsItem.description.toLowerCase().includes("футбол") || newsItem.description.toLowerCase().includes("волейбол") || newsItem.description.toLowerCase().includes("баскетболл")
                  })[3].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("олимпий") || newsItem.description.toLowerCase().includes("футбол") || newsItem.description.toLowerCase().includes("волейбол") || newsItem.description.toLowerCase().includes("баскетболл")
                  })[3].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("олимпий") || newsItem.description.toLowerCase().includes("футбол") || newsItem.description.toLowerCase().includes("волейбол") || newsItem.description.toLowerCase().includes("баскетболл")
                    })[3].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("олимпий") || newsItem.description.toLowerCase().includes("футбол") || newsItem.description.toLowerCase().includes("волейбол") || newsItem.description.toLowerCase().includes("баскетболл")
                      })[3].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("олимпий") || newsItem.description.toLowerCase().includes("футбол") || newsItem.description.toLowerCase().includes("волейбол") || newsItem.description.toLowerCase().includes("баскетболл")
                  })[4].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("олимпий") || newsItem.description.toLowerCase().includes("футбол") || newsItem.description.toLowerCase().includes("волейбол") || newsItem.description.toLowerCase().includes("баскетболл")
                  })[4].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("олимпий") || newsItem.description.toLowerCase().includes("футбол") || newsItem.description.toLowerCase().includes("волейбол") || newsItem.description.toLowerCase().includes("баскетболл")
                    })[4].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("олимпий") || newsItem.description.toLowerCase().includes("футбол") || newsItem.description.toLowerCase().includes("волейбол") || newsItem.description.toLowerCase().includes("баскетболл")
                      })[4].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div v-if="news.filter(newsItem => {
          return newsItem.description.toLowerCase().includes('проишествие') || newsItem.description.toLowerCase().includes('землятресение') || newsItem.description.toLowerCase().includes('умер')
        }).length >= 5">
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
                      return newsItem.description.toLowerCase().includes("проишествие") || newsItem.description.toLowerCase().includes("землятресение") || newsItem.description.toLowerCase().includes("умер")
                    })[0].title
                  }}
                </span>
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("проишествие") || newsItem.description.toLowerCase().includes("землятресение") || newsItem.description.toLowerCase().includes("умер")
                    })[0].description.substring(0, 45)
                  }}
                </span>
              </div>
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("проишествие") || newsItem.description.toLowerCase().includes("землятресение") || newsItem.description.toLowerCase().includes("умер")
                    })[0].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("проишествие") || newsItem.description.toLowerCase().includes("землятресение") || newsItem.description.toLowerCase().includes("умер")
                      })[0].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("проишествие") || newsItem.description.toLowerCase().includes("землятресение") || newsItem.description.toLowerCase().includes("умер")
                  })[1].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("проишествие") || newsItem.description.toLowerCase().includes("землятресение") || newsItem.description.toLowerCase().includes("умер")
                  })[1].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("проишествие") || newsItem.description.toLowerCase().includes("землятресение") || newsItem.description.toLowerCase().includes("умер")
                    })[1].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("проишествие") || newsItem.description.toLowerCase().includes("землятресение") || newsItem.description.toLowerCase().includes("умер")
                      })[1].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
          </div>
          <div class="newsRow">
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("проишествие") || newsItem.description.toLowerCase().includes("землятресение") || newsItem.description.toLowerCase().includes("умер")
                  })[2].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("проишествие") || newsItem.description.toLowerCase().includes("землятресение") || newsItem.description.toLowerCase().includes("умер")
                  })[2].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("проишествие") || newsItem.description.toLowerCase().includes("землятресение") || newsItem.description.toLowerCase().includes("умер")
                    })[2].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("проишествие") || newsItem.description.toLowerCase().includes("землятресение") || newsItem.description.toLowerCase().includes("умер")
                      })[2].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("проишествие") || newsItem.description.toLowerCase().includes("землятресение") || newsItem.description.toLowerCase().includes("умер")
                  })[3].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("проишествие") || newsItem.description.toLowerCase().includes("землятресение") || newsItem.description.toLowerCase().includes("умер")
                  })[3].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("проишествие") || newsItem.description.toLowerCase().includes("землятресение") || newsItem.description.toLowerCase().includes("умер")
                    })[3].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("проишествие") || newsItem.description.toLowerCase().includes("землятресение") || newsItem.description.toLowerCase().includes("умер")
                      })[3].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("проишествие") || newsItem.description.toLowerCase().includes("землятресение") || newsItem.description.toLowerCase().includes("умер")
                  })[4].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("проишествие") || newsItem.description.toLowerCase().includes("землятресение") || newsItem.description.toLowerCase().includes("умер")
                  })[4].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("проишествие") || newsItem.description.toLowerCase().includes("землятресение") || newsItem.description.toLowerCase().includes("умер")
                    })[4].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("проишествие") || newsItem.description.toLowerCase().includes("землятресение") || newsItem.description.toLowerCase().includes("умер")
                      })[4].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div v-if="news.filter(newsItem => {
          return newsItem.description.toLowerCase().includes('сериал') || newsItem.description.toLowerCase().includes('кино') || newsItem.description.toLowerCase().includes('звезда') || newsItem.description.toLowerCase().includes('франшиза') || newsItem.description.toLowerCase().includes('премьера') || newsItem.description.toLowerCase().includes('акт')
        }).length >= 5">
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
                      return newsItem.description.toLowerCase().includes("сериал") || newsItem.description.toLowerCase().includes("кино") || newsItem.description.toLowerCase().includes("звезда") || newsItem.description.toLowerCase().includes("франшиза") || newsItem.description.toLowerCase().includes("премьера") || newsItem.description.toLowerCase().includes("акт")
                    })[0].title
                  }}
                </span>
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("сериал") || newsItem.description.toLowerCase().includes("кино") || newsItem.description.toLowerCase().includes("звезда") || newsItem.description.toLowerCase().includes("франшиза") || newsItem.description.toLowerCase().includes("премьера") || newsItem.description.toLowerCase().includes("акт")
                    })[0].description.substring(0, 45)
                  }}
                </span>
              </div>
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("сериал") || newsItem.description.toLowerCase().includes("кино") || newsItem.description.toLowerCase().includes("звезда") || newsItem.description.toLowerCase().includes("франшиза") || newsItem.description.toLowerCase().includes("премьера") || newsItem.description.toLowerCase().includes("акт")
                    })[0].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("сериал") || newsItem.description.toLowerCase().includes("кино") || newsItem.description.toLowerCase().includes("звезда") || newsItem.description.toLowerCase().includes("франшиза") || newsItem.description.toLowerCase().includes("премьера") || newsItem.description.toLowerCase().includes("акт")
                      })[0].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("сериал") || newsItem.description.toLowerCase().includes("кино") || newsItem.description.toLowerCase().includes("звезда") || newsItem.description.toLowerCase().includes("франшиза") || newsItem.description.toLowerCase().includes("премьера") || newsItem.description.toLowerCase().includes("акт")
                  })[1].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("сериал") || newsItem.description.toLowerCase().includes("кино") || newsItem.description.toLowerCase().includes("звезда") || newsItem.description.toLowerCase().includes("франшиза") || newsItem.description.toLowerCase().includes("премьера") || newsItem.description.toLowerCase().includes("акт")
                  })[1].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("сериал") || newsItem.description.toLowerCase().includes("кино") || newsItem.description.toLowerCase().includes("звезда") || newsItem.description.toLowerCase().includes("франшиза") || newsItem.description.toLowerCase().includes("премьера") || newsItem.description.toLowerCase().includes("акт")
                    })[1].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("сериал") || newsItem.description.toLowerCase().includes("кино") || newsItem.description.toLowerCase().includes("звезда") || newsItem.description.toLowerCase().includes("франшиза") || newsItem.description.toLowerCase().includes("премьера") || newsItem.description.toLowerCase().includes("акт")
                      })[1].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
          </div>
          <div class="newsRow">
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("сериал") || newsItem.description.toLowerCase().includes("кино") || newsItem.description.toLowerCase().includes("звезда") || newsItem.description.toLowerCase().includes("франшиза") || newsItem.description.toLowerCase().includes("премьера") || newsItem.description.toLowerCase().includes("акт")
                  })[2].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("сериал") || newsItem.description.toLowerCase().includes("кино") || newsItem.description.toLowerCase().includes("звезда") || newsItem.description.toLowerCase().includes("франшиза") || newsItem.description.toLowerCase().includes("премьера") || newsItem.description.toLowerCase().includes("акт")
                  })[2].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("сериал") || newsItem.description.toLowerCase().includes("кино") || newsItem.description.toLowerCase().includes("звезда") || newsItem.description.toLowerCase().includes("франшиза") || newsItem.description.toLowerCase().includes("премьера") || newsItem.description.toLowerCase().includes("акт")
                    })[2].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("сериал") || newsItem.description.toLowerCase().includes("кино") || newsItem.description.toLowerCase().includes("звезда") || newsItem.description.toLowerCase().includes("франшиза") || newsItem.description.toLowerCase().includes("премьера") || newsItem.description.toLowerCase().includes("акт")
                      })[2].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("сериал") || newsItem.description.toLowerCase().includes("кино") || newsItem.description.toLowerCase().includes("звезда") || newsItem.description.toLowerCase().includes("франшиза") || newsItem.description.toLowerCase().includes("премьера") || newsItem.description.toLowerCase().includes("акт")
                  })[3].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("сериал") || newsItem.description.toLowerCase().includes("кино") || newsItem.description.toLowerCase().includes("звезда") || newsItem.description.toLowerCase().includes("франшиза") || newsItem.description.toLowerCase().includes("премьера") || newsItem.description.toLowerCase().includes("акт")
                  })[3].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("сериал") || newsItem.description.toLowerCase().includes("кино") || newsItem.description.toLowerCase().includes("звезда") || newsItem.description.toLowerCase().includes("франшиза") || newsItem.description.toLowerCase().includes("премьера") || newsItem.description.toLowerCase().includes("акт")
                    })[3].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("сериал") || newsItem.description.toLowerCase().includes("кино") || newsItem.description.toLowerCase().includes("звезда") || newsItem.description.toLowerCase().includes("франшиза") || newsItem.description.toLowerCase().includes("премьера") || newsItem.description.toLowerCase().includes("акт")
                      })[3].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("сериал") || newsItem.description.toLowerCase().includes("кино") || newsItem.description.toLowerCase().includes("звезда") || newsItem.description.toLowerCase().includes("франшиза") || newsItem.description.toLowerCase().includes("премьера") || newsItem.description.toLowerCase().includes("акт")
                  })[4].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("сериал") || newsItem.description.toLowerCase().includes("кино") || newsItem.description.toLowerCase().includes("звезда") || newsItem.description.toLowerCase().includes("франшиза") || newsItem.description.toLowerCase().includes("премьера") || newsItem.description.toLowerCase().includes("акт")
                  })[4].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("сериал") || newsItem.description.toLowerCase().includes("кино") || newsItem.description.toLowerCase().includes("звезда") || newsItem.description.toLowerCase().includes("франшиза") || newsItem.description.toLowerCase().includes("премьера") || newsItem.description.toLowerCase().includes("акт")
                    })[4].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("сериал") || newsItem.description.toLowerCase().includes("кино") || newsItem.description.toLowerCase().includes("звезда") || newsItem.description.toLowerCase().includes("франшиза") || newsItem.description.toLowerCase().includes("премьера") || newsItem.description.toLowerCase().includes("акт")
                      })[4].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div v-if="news.filter(newsItem => {
            return newsItem.description.toLowerCase().includes('xiaomi') || newsItem.description.toLowerCase().includes('samsung') || newsItem.description.toLowerCase().includes('планшет') || newsItem.description.toLowerCase().includes('фитнес-браслет') || newsItem.description.toLowerCase().includes('игров') || newsItem.description.toLowerCase().includes('игрок') || newsItem.description.toLowerCase().includes('разработчик') || newsItem.description.toLowerCase().includes('ios') || newsItem.description.toLowerCase().includes('android') || newsItem.description.toLowerCase().includes('навигатор') || newsItem.description.toLowerCase().includes('яндекс') || newsItem.description.toLowerCase().includes('активы') || newsItem.description.toLowerCase().includes('смартфон') || newsItem.description.toLowerCase().includes('часы') || newsItem.description.toLowerCase().includes('sony') || newsItem.description.toLowerCase().includes('mastercard') || newsItem.description.toLowerCase().includes('visa') || newsItem.description.toLowerCase().includes('игра') || newsItem.description.toLowerCase().includes('apple') || newsItem.description.toLowerCase().includes('google') || newsItem.description.toLowerCase().includes('nothing') || newsItem.description.toLowerCase().includes('microsoft') || newsItem.description.toLowerCase().includes('vivo') || newsItem.description.toLowerCase().includes('oppo') || newsItem.description.toLowerCase().includes('oneplus') || newsItem.description.toLowerCase().includes('realme') || newsItem.description.toLowerCase().includes('redmi') || newsItem.description.toLowerCase().includes('miui')
          }).length >= 5">
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
                      return newsItem.description.toLowerCase().includes("xiaomi") || newsItem.description.toLowerCase().includes("samsung") || newsItem.description.toLowerCase().includes("планшет") || newsItem.description.toLowerCase().includes("фитнес-браслет") || newsItem.description.toLowerCase().includes("игров") || newsItem.description.toLowerCase().includes("игрок") || newsItem.description.toLowerCase().includes("разработчик") || newsItem.description.toLowerCase().includes("ios") || newsItem.description.toLowerCase().includes("android") || newsItem.description.toLowerCase().includes("навигатор") || newsItem.description.toLowerCase().includes("яндекс") || newsItem.description.toLowerCase().includes("активы") || newsItem.description.toLowerCase().includes("смартфон") || newsItem.description.toLowerCase().includes("часы") || newsItem.description.toLowerCase().includes("sony") || newsItem.description.toLowerCase().includes("mastercard") || newsItem.description.toLowerCase().includes("visa") || newsItem.description.toLowerCase().includes("игра") || newsItem.description.toLowerCase().includes("apple") || newsItem.description.toLowerCase().includes("google") || newsItem.description.toLowerCase().includes("nothing") || newsItem.description.toLowerCase().includes("microsoft") || newsItem.description.toLowerCase().includes("vivo") || newsItem.description.toLowerCase().includes("oppo") || newsItem.description.toLowerCase().includes("oneplus") || newsItem.description.toLowerCase().includes("realme") || newsItem.description.toLowerCase().includes("redmi") || newsItem.description.toLowerCase().includes("miui")
                    })[0].title
                  }}
                </span>
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("xiaomi") || newsItem.description.toLowerCase().includes("samsung") || newsItem.description.toLowerCase().includes("планшет") || newsItem.description.toLowerCase().includes("фитнес-браслет") || newsItem.description.toLowerCase().includes("игров") || newsItem.description.toLowerCase().includes("игрок") || newsItem.description.toLowerCase().includes("разработчик") || newsItem.description.toLowerCase().includes("ios") || newsItem.description.toLowerCase().includes("android") || newsItem.description.toLowerCase().includes("навигатор") || newsItem.description.toLowerCase().includes("яндекс") || newsItem.description.toLowerCase().includes("активы") || newsItem.description.toLowerCase().includes("смартфон") || newsItem.description.toLowerCase().includes("часы") || newsItem.description.toLowerCase().includes("sony") || newsItem.description.toLowerCase().includes("mastercard") || newsItem.description.toLowerCase().includes("visa") || newsItem.description.toLowerCase().includes("игра") || newsItem.description.toLowerCase().includes("apple") || newsItem.description.toLowerCase().includes("google") || newsItem.description.toLowerCase().includes("nothing") || newsItem.description.toLowerCase().includes("microsoft") || newsItem.description.toLowerCase().includes("vivo") || newsItem.description.toLowerCase().includes("oppo") || newsItem.description.toLowerCase().includes("oneplus") || newsItem.description.toLowerCase().includes("realme") || newsItem.description.toLowerCase().includes("redmi") || newsItem.description.toLowerCase().includes("miui")
                    })[0].description.substring(0, 45)
                  }}
                </span>
              </div>
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("xiaomi") || newsItem.description.toLowerCase().includes("samsung") || newsItem.description.toLowerCase().includes("планшет") || newsItem.description.toLowerCase().includes("фитнес-браслет") || newsItem.description.toLowerCase().includes("игров") || newsItem.description.toLowerCase().includes("игрок") || newsItem.description.toLowerCase().includes("разработчик") || newsItem.description.toLowerCase().includes("ios") || newsItem.description.toLowerCase().includes("android") || newsItem.description.toLowerCase().includes("навигатор") || newsItem.description.toLowerCase().includes("яндекс") || newsItem.description.toLowerCase().includes("активы") || newsItem.description.toLowerCase().includes("смартфон") || newsItem.description.toLowerCase().includes("часы") || newsItem.description.toLowerCase().includes("sony") || newsItem.description.toLowerCase().includes("mastercard") || newsItem.description.toLowerCase().includes("visa") || newsItem.description.toLowerCase().includes("игра") || newsItem.description.toLowerCase().includes("apple") || newsItem.description.toLowerCase().includes("google") || newsItem.description.toLowerCase().includes("nothing") || newsItem.description.toLowerCase().includes("microsoft") || newsItem.description.toLowerCase().includes("vivo") || newsItem.description.toLowerCase().includes("oppo") || newsItem.description.toLowerCase().includes("oneplus") || newsItem.description.toLowerCase().includes("realme") || newsItem.description.toLowerCase().includes("redmi") || newsItem.description.toLowerCase().includes("miui")
                    })[0].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("xiaomi") || newsItem.description.toLowerCase().includes("samsung") || newsItem.description.toLowerCase().includes("планшет") || newsItem.description.toLowerCase().includes("фитнес-браслет") || newsItem.description.toLowerCase().includes("игров") || newsItem.description.toLowerCase().includes("игрок") || newsItem.description.toLowerCase().includes("разработчик") || newsItem.description.toLowerCase().includes("ios") || newsItem.description.toLowerCase().includes("android") || newsItem.description.toLowerCase().includes("навигатор") || newsItem.description.toLowerCase().includes("яндекс") || newsItem.description.toLowerCase().includes("активы") || newsItem.description.toLowerCase().includes("смартфон") || newsItem.description.toLowerCase().includes("часы") || newsItem.description.toLowerCase().includes("sony") || newsItem.description.toLowerCase().includes("mastercard") || newsItem.description.toLowerCase().includes("visa") || newsItem.description.toLowerCase().includes("игра") || newsItem.description.toLowerCase().includes("apple") || newsItem.description.toLowerCase().includes("google") || newsItem.description.toLowerCase().includes("nothing") || newsItem.description.toLowerCase().includes("microsoft") || newsItem.description.toLowerCase().includes("vivo") || newsItem.description.toLowerCase().includes("oppo") || newsItem.description.toLowerCase().includes("oneplus") || newsItem.description.toLowerCase().includes("realme") || newsItem.description.toLowerCase().includes("redmi") || newsItem.description.toLowerCase().includes("miui")
                      })[0].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("xiaomi") || newsItem.description.toLowerCase().includes("samsung") || newsItem.description.toLowerCase().includes("планшет") || newsItem.description.toLowerCase().includes("фитнес-браслет") || newsItem.description.toLowerCase().includes("игров") || newsItem.description.toLowerCase().includes("игрок") || newsItem.description.toLowerCase().includes("разработчик") || newsItem.description.toLowerCase().includes("ios") || newsItem.description.toLowerCase().includes("android") || newsItem.description.toLowerCase().includes("навигатор") || newsItem.description.toLowerCase().includes("яндекс") || newsItem.description.toLowerCase().includes("активы") || newsItem.description.toLowerCase().includes("смартфон") || newsItem.description.toLowerCase().includes("часы") || newsItem.description.toLowerCase().includes("sony") || newsItem.description.toLowerCase().includes("mastercard") || newsItem.description.toLowerCase().includes("visa") || newsItem.description.toLowerCase().includes("игра") || newsItem.description.toLowerCase().includes("apple") || newsItem.description.toLowerCase().includes("google") || newsItem.description.toLowerCase().includes("nothing") || newsItem.description.toLowerCase().includes("microsoft") || newsItem.description.toLowerCase().includes("vivo") || newsItem.description.toLowerCase().includes("oppo") || newsItem.description.toLowerCase().includes("oneplus") || newsItem.description.toLowerCase().includes("realme") || newsItem.description.toLowerCase().includes("redmi") || newsItem.description.toLowerCase().includes("miui")
                  })[1].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("xiaomi") || newsItem.description.toLowerCase().includes("samsung") || newsItem.description.toLowerCase().includes("планшет") || newsItem.description.toLowerCase().includes("фитнес-браслет") || newsItem.description.toLowerCase().includes("игров") || newsItem.description.toLowerCase().includes("игрок") || newsItem.description.toLowerCase().includes("разработчик") || newsItem.description.toLowerCase().includes("ios") || newsItem.description.toLowerCase().includes("android") || newsItem.description.toLowerCase().includes("навигатор") || newsItem.description.toLowerCase().includes("яндекс") || newsItem.description.toLowerCase().includes("активы") || newsItem.description.toLowerCase().includes("смартфон") || newsItem.description.toLowerCase().includes("часы") || newsItem.description.toLowerCase().includes("sony") || newsItem.description.toLowerCase().includes("mastercard") || newsItem.description.toLowerCase().includes("visa") || newsItem.description.toLowerCase().includes("игра") || newsItem.description.toLowerCase().includes("apple") || newsItem.description.toLowerCase().includes("google") || newsItem.description.toLowerCase().includes("nothing") || newsItem.description.toLowerCase().includes("microsoft") || newsItem.description.toLowerCase().includes("vivo") || newsItem.description.toLowerCase().includes("oppo") || newsItem.description.toLowerCase().includes("oneplus") || newsItem.description.toLowerCase().includes("realme") || newsItem.description.toLowerCase().includes("redmi") || newsItem.description.toLowerCase().includes("miui")
                  })[1].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("xiaomi") || newsItem.description.toLowerCase().includes("samsung") || newsItem.description.toLowerCase().includes("планшет") || newsItem.description.toLowerCase().includes("фитнес-браслет") || newsItem.description.toLowerCase().includes("игров") || newsItem.description.toLowerCase().includes("игрок") || newsItem.description.toLowerCase().includes("разработчик") || newsItem.description.toLowerCase().includes("ios") || newsItem.description.toLowerCase().includes("android") || newsItem.description.toLowerCase().includes("навигатор") || newsItem.description.toLowerCase().includes("яндекс") || newsItem.description.toLowerCase().includes("активы") || newsItem.description.toLowerCase().includes("смартфон") || newsItem.description.toLowerCase().includes("часы") || newsItem.description.toLowerCase().includes("sony") || newsItem.description.toLowerCase().includes("mastercard") || newsItem.description.toLowerCase().includes("visa") || newsItem.description.toLowerCase().includes("игра") || newsItem.description.toLowerCase().includes("apple") || newsItem.description.toLowerCase().includes("google") || newsItem.description.toLowerCase().includes("nothing") || newsItem.description.toLowerCase().includes("microsoft") || newsItem.description.toLowerCase().includes("vivo") || newsItem.description.toLowerCase().includes("oppo") || newsItem.description.toLowerCase().includes("oneplus") || newsItem.description.toLowerCase().includes("realme") || newsItem.description.toLowerCase().includes("redmi") || newsItem.description.toLowerCase().includes("miui")
                    })[1].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("xiaomi") || newsItem.description.toLowerCase().includes("samsung") || newsItem.description.toLowerCase().includes("планшет") || newsItem.description.toLowerCase().includes("фитнес-браслет") || newsItem.description.toLowerCase().includes("игров") || newsItem.description.toLowerCase().includes("игрок") || newsItem.description.toLowerCase().includes("разработчик") || newsItem.description.toLowerCase().includes("ios") || newsItem.description.toLowerCase().includes("android") || newsItem.description.toLowerCase().includes("навигатор") || newsItem.description.toLowerCase().includes("яндекс") || newsItem.description.toLowerCase().includes("активы") || newsItem.description.toLowerCase().includes("смартфон") || newsItem.description.toLowerCase().includes("часы") || newsItem.description.toLowerCase().includes("sony") || newsItem.description.toLowerCase().includes("mastercard") || newsItem.description.toLowerCase().includes("visa") || newsItem.description.toLowerCase().includes("игра") || newsItem.description.toLowerCase().includes("apple") || newsItem.description.toLowerCase().includes("google") || newsItem.description.toLowerCase().includes("nothing") || newsItem.description.toLowerCase().includes("microsoft") || newsItem.description.toLowerCase().includes("vivo") || newsItem.description.toLowerCase().includes("oppo") || newsItem.description.toLowerCase().includes("oneplus") || newsItem.description.toLowerCase().includes("realme") || newsItem.description.toLowerCase().includes("redmi") || newsItem.description.toLowerCase().includes("miui")
                      })[1].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
          </div>
          <div class="newsRow">
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("xiaomi") || newsItem.description.toLowerCase().includes("samsung") || newsItem.description.toLowerCase().includes("планшет") || newsItem.description.toLowerCase().includes("фитнес-браслет") || newsItem.description.toLowerCase().includes("игров") || newsItem.description.toLowerCase().includes("игрок") || newsItem.description.toLowerCase().includes("разработчик") || newsItem.description.toLowerCase().includes("ios") || newsItem.description.toLowerCase().includes("android") || newsItem.description.toLowerCase().includes("навигатор") || newsItem.description.toLowerCase().includes("яндекс") || newsItem.description.toLowerCase().includes("активы") || newsItem.description.toLowerCase().includes("смартфон") || newsItem.description.toLowerCase().includes("часы") || newsItem.description.toLowerCase().includes("sony") || newsItem.description.toLowerCase().includes("mastercard") || newsItem.description.toLowerCase().includes("visa") || newsItem.description.toLowerCase().includes("игра") || newsItem.description.toLowerCase().includes("apple") || newsItem.description.toLowerCase().includes("google") || newsItem.description.toLowerCase().includes("nothing") || newsItem.description.toLowerCase().includes("microsoft") || newsItem.description.toLowerCase().includes("vivo") || newsItem.description.toLowerCase().includes("oppo") || newsItem.description.toLowerCase().includes("oneplus") || newsItem.description.toLowerCase().includes("realme") || newsItem.description.toLowerCase().includes("redmi") || newsItem.description.toLowerCase().includes("miui")
                  })[2].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("xiaomi") || newsItem.description.toLowerCase().includes("samsung") || newsItem.description.toLowerCase().includes("планшет") || newsItem.description.toLowerCase().includes("фитнес-браслет") || newsItem.description.toLowerCase().includes("игров") || newsItem.description.toLowerCase().includes("игрок") || newsItem.description.toLowerCase().includes("разработчик") || newsItem.description.toLowerCase().includes("ios") || newsItem.description.toLowerCase().includes("android") || newsItem.description.toLowerCase().includes("навигатор") || newsItem.description.toLowerCase().includes("яндекс") || newsItem.description.toLowerCase().includes("активы") || newsItem.description.toLowerCase().includes("смартфон") || newsItem.description.toLowerCase().includes("часы") || newsItem.description.toLowerCase().includes("sony") || newsItem.description.toLowerCase().includes("mastercard") || newsItem.description.toLowerCase().includes("visa") || newsItem.description.toLowerCase().includes("игра") || newsItem.description.toLowerCase().includes("apple") || newsItem.description.toLowerCase().includes("google") || newsItem.description.toLowerCase().includes("nothing") || newsItem.description.toLowerCase().includes("microsoft") || newsItem.description.toLowerCase().includes("vivo") || newsItem.description.toLowerCase().includes("oppo") || newsItem.description.toLowerCase().includes("oneplus") || newsItem.description.toLowerCase().includes("realme") || newsItem.description.toLowerCase().includes("redmi") || newsItem.description.toLowerCase().includes("miui")
                  })[2].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("xiaomi") || newsItem.description.toLowerCase().includes("samsung") || newsItem.description.toLowerCase().includes("планшет") || newsItem.description.toLowerCase().includes("фитнес-браслет") || newsItem.description.toLowerCase().includes("игров") || newsItem.description.toLowerCase().includes("игрок") || newsItem.description.toLowerCase().includes("разработчик") || newsItem.description.toLowerCase().includes("ios") || newsItem.description.toLowerCase().includes("android") || newsItem.description.toLowerCase().includes("навигатор") || newsItem.description.toLowerCase().includes("яндекс") || newsItem.description.toLowerCase().includes("активы") || newsItem.description.toLowerCase().includes("смартфон") || newsItem.description.toLowerCase().includes("часы") || newsItem.description.toLowerCase().includes("sony") || newsItem.description.toLowerCase().includes("mastercard") || newsItem.description.toLowerCase().includes("visa") || newsItem.description.toLowerCase().includes("игра") || newsItem.description.toLowerCase().includes("apple") || newsItem.description.toLowerCase().includes("google") || newsItem.description.toLowerCase().includes("nothing") || newsItem.description.toLowerCase().includes("microsoft") || newsItem.description.toLowerCase().includes("vivo") || newsItem.description.toLowerCase().includes("oppo") || newsItem.description.toLowerCase().includes("oneplus") || newsItem.description.toLowerCase().includes("realme") || newsItem.description.toLowerCase().includes("redmi") || newsItem.description.toLowerCase().includes("miui")
                    })[2].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("xiaomi") || newsItem.description.toLowerCase().includes("samsung") || newsItem.description.toLowerCase().includes("планшет") || newsItem.description.toLowerCase().includes("фитнес-браслет") || newsItem.description.toLowerCase().includes("игров") || newsItem.description.toLowerCase().includes("игрок") || newsItem.description.toLowerCase().includes("разработчик") || newsItem.description.toLowerCase().includes("ios") || newsItem.description.toLowerCase().includes("android") || newsItem.description.toLowerCase().includes("навигатор") || newsItem.description.toLowerCase().includes("яндекс") || newsItem.description.toLowerCase().includes("активы") || newsItem.description.toLowerCase().includes("смартфон") || newsItem.description.toLowerCase().includes("часы") || newsItem.description.toLowerCase().includes("sony") || newsItem.description.toLowerCase().includes("mastercard") || newsItem.description.toLowerCase().includes("visa") || newsItem.description.toLowerCase().includes("игра") || newsItem.description.toLowerCase().includes("apple") || newsItem.description.toLowerCase().includes("google") || newsItem.description.toLowerCase().includes("nothing") || newsItem.description.toLowerCase().includes("microsoft") || newsItem.description.toLowerCase().includes("vivo") || newsItem.description.toLowerCase().includes("oppo") || newsItem.description.toLowerCase().includes("oneplus") || newsItem.description.toLowerCase().includes("realme") || newsItem.description.toLowerCase().includes("redmi") || newsItem.description.toLowerCase().includes("miui")
                      })[2].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("xiaomi") || newsItem.description.toLowerCase().includes("samsung") || newsItem.description.toLowerCase().includes("планшет") || newsItem.description.toLowerCase().includes("фитнес-браслет") || newsItem.description.toLowerCase().includes("игров") || newsItem.description.toLowerCase().includes("игрок") || newsItem.description.toLowerCase().includes("разработчик") || newsItem.description.toLowerCase().includes("ios") || newsItem.description.toLowerCase().includes("android") || newsItem.description.toLowerCase().includes("навигатор") || newsItem.description.toLowerCase().includes("яндекс") || newsItem.description.toLowerCase().includes("активы") || newsItem.description.toLowerCase().includes("смартфон") || newsItem.description.toLowerCase().includes("часы") || newsItem.description.toLowerCase().includes("sony") || newsItem.description.toLowerCase().includes("mastercard") || newsItem.description.toLowerCase().includes("visa") || newsItem.description.toLowerCase().includes("игра") || newsItem.description.toLowerCase().includes("apple") || newsItem.description.toLowerCase().includes("google") || newsItem.description.toLowerCase().includes("nothing") || newsItem.description.toLowerCase().includes("microsoft") || newsItem.description.toLowerCase().includes("vivo") || newsItem.description.toLowerCase().includes("oppo") || newsItem.description.toLowerCase().includes("oneplus") || newsItem.description.toLowerCase().includes("realme") || newsItem.description.toLowerCase().includes("redmi") || newsItem.description.toLowerCase().includes("miui")
                  })[3].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("xiaomi") || newsItem.description.toLowerCase().includes("samsung") || newsItem.description.toLowerCase().includes("планшет") || newsItem.description.toLowerCase().includes("фитнес-браслет") || newsItem.description.toLowerCase().includes("игров") || newsItem.description.toLowerCase().includes("игрок") || newsItem.description.toLowerCase().includes("разработчик") || newsItem.description.toLowerCase().includes("ios") || newsItem.description.toLowerCase().includes("android") || newsItem.description.toLowerCase().includes("навигатор") || newsItem.description.toLowerCase().includes("яндекс") || newsItem.description.toLowerCase().includes("активы") || newsItem.description.toLowerCase().includes("смартфон") || newsItem.description.toLowerCase().includes("часы") || newsItem.description.toLowerCase().includes("sony") || newsItem.description.toLowerCase().includes("mastercard") || newsItem.description.toLowerCase().includes("visa") || newsItem.description.toLowerCase().includes("игра") || newsItem.description.toLowerCase().includes("apple") || newsItem.description.toLowerCase().includes("google") || newsItem.description.toLowerCase().includes("nothing") || newsItem.description.toLowerCase().includes("microsoft") || newsItem.description.toLowerCase().includes("vivo") || newsItem.description.toLowerCase().includes("oppo") || newsItem.description.toLowerCase().includes("oneplus") || newsItem.description.toLowerCase().includes("realme") || newsItem.description.toLowerCase().includes("redmi") || newsItem.description.toLowerCase().includes("miui")
                  })[3].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("xiaomi") || newsItem.description.toLowerCase().includes("samsung") || newsItem.description.toLowerCase().includes("планшет") || newsItem.description.toLowerCase().includes("фитнес-браслет") || newsItem.description.toLowerCase().includes("игров") || newsItem.description.toLowerCase().includes("игрок") || newsItem.description.toLowerCase().includes("разработчик") || newsItem.description.toLowerCase().includes("ios") || newsItem.description.toLowerCase().includes("android") || newsItem.description.toLowerCase().includes("навигатор") || newsItem.description.toLowerCase().includes("яндекс") || newsItem.description.toLowerCase().includes("активы") || newsItem.description.toLowerCase().includes("смартфон") || newsItem.description.toLowerCase().includes("часы") || newsItem.description.toLowerCase().includes("sony") || newsItem.description.toLowerCase().includes("mastercard") || newsItem.description.toLowerCase().includes("visa") || newsItem.description.toLowerCase().includes("игра") || newsItem.description.toLowerCase().includes("apple") || newsItem.description.toLowerCase().includes("google") || newsItem.description.toLowerCase().includes("nothing") || newsItem.description.toLowerCase().includes("microsoft") || newsItem.description.toLowerCase().includes("vivo") || newsItem.description.toLowerCase().includes("oppo") || newsItem.description.toLowerCase().includes("oneplus") || newsItem.description.toLowerCase().includes("realme") || newsItem.description.toLowerCase().includes("redmi") || newsItem.description.toLowerCase().includes("miui")
                    })[3].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("xiaomi") || newsItem.description.toLowerCase().includes("samsung") || newsItem.description.toLowerCase().includes("планшет") || newsItem.description.toLowerCase().includes("фитнес-браслет") || newsItem.description.toLowerCase().includes("игров") || newsItem.description.toLowerCase().includes("игрок") || newsItem.description.toLowerCase().includes("разработчик") || newsItem.description.toLowerCase().includes("ios") || newsItem.description.toLowerCase().includes("android") || newsItem.description.toLowerCase().includes("навигатор") || newsItem.description.toLowerCase().includes("яндекс") || newsItem.description.toLowerCase().includes("активы") || newsItem.description.toLowerCase().includes("смартфон") || newsItem.description.toLowerCase().includes("часы") || newsItem.description.toLowerCase().includes("sony") || newsItem.description.toLowerCase().includes("mastercard") || newsItem.description.toLowerCase().includes("visa") || newsItem.description.toLowerCase().includes("игра") || newsItem.description.toLowerCase().includes("apple") || newsItem.description.toLowerCase().includes("google") || newsItem.description.toLowerCase().includes("nothing") || newsItem.description.toLowerCase().includes("microsoft") || newsItem.description.toLowerCase().includes("vivo") || newsItem.description.toLowerCase().includes("oppo") || newsItem.description.toLowerCase().includes("oneplus") || newsItem.description.toLowerCase().includes("realme") || newsItem.description.toLowerCase().includes("redmi") || newsItem.description.toLowerCase().includes("miui")
                      })[3].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("xiaomi") || newsItem.description.toLowerCase().includes("samsung") || newsItem.description.toLowerCase().includes("планшет") || newsItem.description.toLowerCase().includes("фитнес-браслет") || newsItem.description.toLowerCase().includes("игров") || newsItem.description.toLowerCase().includes("игрок") || newsItem.description.toLowerCase().includes("разработчик") || newsItem.description.toLowerCase().includes("ios") || newsItem.description.toLowerCase().includes("android") || newsItem.description.toLowerCase().includes("навигатор") || newsItem.description.toLowerCase().includes("яндекс") || newsItem.description.toLowerCase().includes("активы") || newsItem.description.toLowerCase().includes("смартфон") || newsItem.description.toLowerCase().includes("часы") || newsItem.description.toLowerCase().includes("sony") || newsItem.description.toLowerCase().includes("mastercard") || newsItem.description.toLowerCase().includes("visa") || newsItem.description.toLowerCase().includes("игра") || newsItem.description.toLowerCase().includes("apple") || newsItem.description.toLowerCase().includes("google") || newsItem.description.toLowerCase().includes("nothing") || newsItem.description.toLowerCase().includes("microsoft") || newsItem.description.toLowerCase().includes("vivo") || newsItem.description.toLowerCase().includes("oppo") || newsItem.description.toLowerCase().includes("oneplus") || newsItem.description.toLowerCase().includes("realme") || newsItem.description.toLowerCase().includes("redmi") || newsItem.description.toLowerCase().includes("miui")
                    })[4].title
                  }}
              </span>
              <span>
                {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("xiaomi") || newsItem.description.toLowerCase().includes("samsung") || newsItem.description.toLowerCase().includes("планшет") || newsItem.description.toLowerCase().includes("фитнес-браслет") || newsItem.description.toLowerCase().includes("игров") || newsItem.description.toLowerCase().includes("игрок") || newsItem.description.toLowerCase().includes("разработчик") || newsItem.description.toLowerCase().includes("ios") || newsItem.description.toLowerCase().includes("android") || newsItem.description.toLowerCase().includes("навигатор") || newsItem.description.toLowerCase().includes("яндекс") || newsItem.description.toLowerCase().includes("активы") || newsItem.description.toLowerCase().includes("смартфон") || newsItem.description.toLowerCase().includes("часы") || newsItem.description.toLowerCase().includes("sony") || newsItem.description.toLowerCase().includes("mastercard") || newsItem.description.toLowerCase().includes("visa") || newsItem.description.toLowerCase().includes("игра") || newsItem.description.toLowerCase().includes("apple") || newsItem.description.toLowerCase().includes("google") || newsItem.description.toLowerCase().includes("nothing") || newsItem.description.toLowerCase().includes("microsoft") || newsItem.description.toLowerCase().includes("vivo") || newsItem.description.toLowerCase().includes("oppo") || newsItem.description.toLowerCase().includes("oneplus") || newsItem.description.toLowerCase().includes("realme") || newsItem.description.toLowerCase().includes("redmi") || newsItem.description.toLowerCase().includes("miui")
                    })[4].description.substring(0, 45)
                  }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("xiaomi") || newsItem.description.toLowerCase().includes("samsung") || newsItem.description.toLowerCase().includes("планшет") || newsItem.description.toLowerCase().includes("фитнес-браслет") || newsItem.description.toLowerCase().includes("игров") || newsItem.description.toLowerCase().includes("игрок") || newsItem.description.toLowerCase().includes("разработчик") || newsItem.description.toLowerCase().includes("ios") || newsItem.description.toLowerCase().includes("android") || newsItem.description.toLowerCase().includes("навигатор") || newsItem.description.toLowerCase().includes("яндекс") || newsItem.description.toLowerCase().includes("активы") || newsItem.description.toLowerCase().includes("смартфон") || newsItem.description.toLowerCase().includes("часы") || newsItem.description.toLowerCase().includes("sony") || newsItem.description.toLowerCase().includes("mastercard") || newsItem.description.toLowerCase().includes("visa") || newsItem.description.toLowerCase().includes("игра") || newsItem.description.toLowerCase().includes("apple") || newsItem.description.toLowerCase().includes("google") || newsItem.description.toLowerCase().includes("nothing") || newsItem.description.toLowerCase().includes("microsoft") || newsItem.description.toLowerCase().includes("vivo") || newsItem.description.toLowerCase().includes("oppo") || newsItem.description.toLowerCase().includes("oneplus") || newsItem.description.toLowerCase().includes("realme") || newsItem.description.toLowerCase().includes("redmi") || newsItem.description.toLowerCase().includes("miui")
                    })[4].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("xiaomi") || newsItem.description.toLowerCase().includes("samsung") || newsItem.description.toLowerCase().includes("планшет") || newsItem.description.toLowerCase().includes("фитнес-браслет") || newsItem.description.toLowerCase().includes("игров") || newsItem.description.toLowerCase().includes("игрок") || newsItem.description.toLowerCase().includes("разработчик") || newsItem.description.toLowerCase().includes("ios") || newsItem.description.toLowerCase().includes("android") || newsItem.description.toLowerCase().includes("навигатор") || newsItem.description.toLowerCase().includes("яндекс") || newsItem.description.toLowerCase().includes("активы") || newsItem.description.toLowerCase().includes("смартфон") || newsItem.description.toLowerCase().includes("часы") || newsItem.description.toLowerCase().includes("sony") || newsItem.description.toLowerCase().includes("mastercard") || newsItem.description.toLowerCase().includes("visa") || newsItem.description.toLowerCase().includes("игра") || newsItem.description.toLowerCase().includes("apple") || newsItem.description.toLowerCase().includes("google") || newsItem.description.toLowerCase().includes("nothing") || newsItem.description.toLowerCase().includes("microsoft") || newsItem.description.toLowerCase().includes("vivo") || newsItem.description.toLowerCase().includes("oppo") || newsItem.description.toLowerCase().includes("oneplus") || newsItem.description.toLowerCase().includes("realme") || newsItem.description.toLowerCase().includes("redmi") || newsItem.description.toLowerCase().includes("miui")
                      })[4].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div v-if="news.filter(newsItem => {
          return newsItem.description.toLowerCase().includes('учен')
        }).length >= 5">
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
                      return newsItem.description.toLowerCase().includes("учен")
                    })[0].title
                  }}
                </span>
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("учен")
                    })[0].description.substring(0, 45)
                  }}
                </span>
              </div>
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("учен")
                    })[0].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("учен")
                      })[0].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("учен")
                  })[1].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("учен")
                  })[1].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("учен")
                    })[1].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("учен")
                      })[1].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
          </div>
          <div class="newsRow">
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("учен")
                  })[2].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("учен")
                  })[2].title
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("учен")
                    })[2].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("учен")
                      })[2].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("учен")
                  })[3].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("учен")
                  })[3].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("учен")
                    })[3].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("учен")
                      })[3].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[4].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.category.includes("general")
                  })[4].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("учен")
                    })[4].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("учен")
                      })[4].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div v-if="news.filter(newsItem => {
          return newsItem.description.toLowerCase().includes('Skoda') || newsItem.description.toLowerCase().includes('Toyota') || newsItem.description.toLowerCase().includes('АвтоВАЗ') || newsItem.description.toLowerCase().includes('mercedes') || newsItem.description.toLowerCase().includes('dacia') || newsItem.description.toLowerCase().includes('lada') || newsItem.description.toLowerCase().includes('Tesla') || newsItem.description.toLowerCase().includes('пикап') || newsItem.description.toLowerCase().includes('Hyundai') || newsItem.description.toLowerCase().includes('Kia') || newsItem.description.toLowerCase().includes('Haval')
        }).length >= 5">
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
                      return newsItem.description.toLowerCase().includes("Skoda") || newsItem.description.toLowerCase().includes("Toyota") || newsItem.description.toLowerCase().includes("АвтоВАЗ") || newsItem.description.toLowerCase().includes("mercedes") || newsItem.description.toLowerCase().includes("dacia") || newsItem.description.toLowerCase().includes("lada") || newsItem.description.toLowerCase().includes("Tesla") || newsItem.description.toLowerCase().includes("пикап") || newsItem.description.toLowerCase().includes("Hyundai") || newsItem.description.toLowerCase().includes("Kia") || newsItem.description.toLowerCase().includes("Haval")
                    })[0].title
                  }}
                </span>
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("Skoda") || newsItem.description.toLowerCase().includes("Toyota") || newsItem.description.toLowerCase().includes("АвтоВАЗ") || newsItem.description.toLowerCase().includes("mercedes") || newsItem.description.toLowerCase().includes("dacia") || newsItem.description.toLowerCase().includes("lada") || newsItem.description.toLowerCase().includes("Tesla") || newsItem.description.toLowerCase().includes("пикап") || newsItem.description.toLowerCase().includes("Hyundai") || newsItem.description.toLowerCase().includes("Kia") || newsItem.description.toLowerCase().includes("Haval")
                    })[0].description.substring(0, 45)
                  }}
                </span>
              </div>
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("Skoda") || newsItem.description.toLowerCase().includes("Toyota") || newsItem.description.toLowerCase().includes("АвтоВАЗ") || newsItem.description.toLowerCase().includes("mercedes") || newsItem.description.toLowerCase().includes("dacia") || newsItem.description.toLowerCase().includes("lada") || newsItem.description.toLowerCase().includes("Tesla") || newsItem.description.toLowerCase().includes("пикап") || newsItem.description.toLowerCase().includes("Hyundai") || newsItem.description.toLowerCase().includes("Kia") || newsItem.description.toLowerCase().includes("Haval")
                    })[0].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("Skoda") || newsItem.description.toLowerCase().includes("Toyota") || newsItem.description.toLowerCase().includes("АвтоВАЗ") || newsItem.description.toLowerCase().includes("mercedes") || newsItem.description.toLowerCase().includes("dacia") || newsItem.description.toLowerCase().includes("lada") || newsItem.description.toLowerCase().includes("Tesla") || newsItem.description.toLowerCase().includes("пикап") || newsItem.description.toLowerCase().includes("Hyundai") || newsItem.description.toLowerCase().includes("Kia") || newsItem.description.toLowerCase().includes("Haval")
                      })[0].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("Skoda") || newsItem.description.toLowerCase().includes("Toyota") || newsItem.description.toLowerCase().includes("АвтоВАЗ") || newsItem.description.toLowerCase().includes("mercedes") || newsItem.description.toLowerCase().includes("dacia") || newsItem.description.toLowerCase().includes("lada") || newsItem.description.toLowerCase().includes("Tesla") || newsItem.description.toLowerCase().includes("пикап") || newsItem.description.toLowerCase().includes("Hyundai") || newsItem.description.toLowerCase().includes("Kia") || newsItem.description.toLowerCase().includes("Haval")
                  })[1].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("Skoda") || newsItem.description.toLowerCase().includes("Toyota") || newsItem.description.toLowerCase().includes("АвтоВАЗ") || newsItem.description.toLowerCase().includes("mercedes") || newsItem.description.toLowerCase().includes("dacia") || newsItem.description.toLowerCase().includes("lada") || newsItem.description.toLowerCase().includes("Tesla") || newsItem.description.toLowerCase().includes("пикап") || newsItem.description.toLowerCase().includes("Hyundai") || newsItem.description.toLowerCase().includes("Kia") || newsItem.description.toLowerCase().includes("Haval")
                  })[1].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("Skoda") || newsItem.description.toLowerCase().includes("Toyota") || newsItem.description.toLowerCase().includes("АвтоВАЗ") || newsItem.description.toLowerCase().includes("mercedes") || newsItem.description.toLowerCase().includes("dacia") || newsItem.description.toLowerCase().includes("lada") || newsItem.description.toLowerCase().includes("Tesla") || newsItem.description.toLowerCase().includes("пикап") || newsItem.description.toLowerCase().includes("Hyundai") || newsItem.description.toLowerCase().includes("Kia") || newsItem.description.toLowerCase().includes("Haval")
                    })[1].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("Skoda") || newsItem.description.toLowerCase().includes("Toyota") || newsItem.description.toLowerCase().includes("АвтоВАЗ") || newsItem.description.toLowerCase().includes("mercedes") || newsItem.description.toLowerCase().includes("dacia") || newsItem.description.toLowerCase().includes("lada") || newsItem.description.toLowerCase().includes("Tesla") || newsItem.description.toLowerCase().includes("пикап") || newsItem.description.toLowerCase().includes("Hyundai") || newsItem.description.toLowerCase().includes("Kia") || newsItem.description.toLowerCase().includes("Haval")
                      })[1].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
          </div>
          <div class="newsRow">
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("Skoda") || newsItem.description.toLowerCase().includes("Toyota") || newsItem.description.toLowerCase().includes("АвтоВАЗ") || newsItem.description.toLowerCase().includes("mercedes") || newsItem.description.toLowerCase().includes("dacia") || newsItem.description.toLowerCase().includes("lada") || newsItem.description.toLowerCase().includes("Tesla") || newsItem.description.toLowerCase().includes("пикап") || newsItem.description.toLowerCase().includes("Hyundai") || newsItem.description.toLowerCase().includes("Kia") || newsItem.description.toLowerCase().includes("Haval")
                  })[2].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("Skoda") || newsItem.description.toLowerCase().includes("Toyota") || newsItem.description.toLowerCase().includes("АвтоВАЗ") || newsItem.description.toLowerCase().includes("mercedes") || newsItem.description.toLowerCase().includes("dacia") || newsItem.description.toLowerCase().includes("lada") || newsItem.description.toLowerCase().includes("Tesla") || newsItem.description.toLowerCase().includes("пикап") || newsItem.description.toLowerCase().includes("Hyundai") || newsItem.description.toLowerCase().includes("Kia") || newsItem.description.toLowerCase().includes("Haval")
                  })[2].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("Skoda") || newsItem.description.toLowerCase().includes("Toyota") || newsItem.description.toLowerCase().includes("АвтоВАЗ") || newsItem.description.toLowerCase().includes("mercedes") || newsItem.description.toLowerCase().includes("dacia") || newsItem.description.toLowerCase().includes("lada") || newsItem.description.toLowerCase().includes("Tesla") || newsItem.description.toLowerCase().includes("пикап") || newsItem.description.toLowerCase().includes("Hyundai") || newsItem.description.toLowerCase().includes("Kia") || newsItem.description.toLowerCase().includes("Haval")
                    })[2].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("Skoda") || newsItem.description.toLowerCase().includes("Toyota") || newsItem.description.toLowerCase().includes("АвтоВАЗ") || newsItem.description.toLowerCase().includes("mercedes") || newsItem.description.toLowerCase().includes("dacia") || newsItem.description.toLowerCase().includes("lada") || newsItem.description.toLowerCase().includes("Tesla") || newsItem.description.toLowerCase().includes("пикап") || newsItem.description.toLowerCase().includes("Hyundai") || newsItem.description.toLowerCase().includes("Kia") || newsItem.description.toLowerCase().includes("Haval")
                      })[2].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("Skoda") || newsItem.description.toLowerCase().includes("Toyota") || newsItem.description.toLowerCase().includes("АвтоВАЗ") || newsItem.description.toLowerCase().includes("mercedes") || newsItem.description.toLowerCase().includes("dacia") || newsItem.description.toLowerCase().includes("lada") || newsItem.description.toLowerCase().includes("Tesla") || newsItem.description.toLowerCase().includes("пикап") || newsItem.description.toLowerCase().includes("Hyundai") || newsItem.description.toLowerCase().includes("Kia") || newsItem.description.toLowerCase().includes("Haval")
                  })[3].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("Skoda") || newsItem.description.toLowerCase().includes("Toyota") || newsItem.description.toLowerCase().includes("АвтоВАЗ") || newsItem.description.toLowerCase().includes("mercedes") || newsItem.description.toLowerCase().includes("dacia") || newsItem.description.toLowerCase().includes("lada") || newsItem.description.toLowerCase().includes("Tesla") || newsItem.description.toLowerCase().includes("пикап") || newsItem.description.toLowerCase().includes("Hyundai") || newsItem.description.toLowerCase().includes("Kia") || newsItem.description.toLowerCase().includes("Haval")
                  })[3].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("Skoda") || newsItem.description.toLowerCase().includes("Toyota") || newsItem.description.toLowerCase().includes("АвтоВАЗ") || newsItem.description.toLowerCase().includes("mercedes") || newsItem.description.toLowerCase().includes("dacia") || newsItem.description.toLowerCase().includes("lada") || newsItem.description.toLowerCase().includes("Tesla") || newsItem.description.toLowerCase().includes("пикап") || newsItem.description.toLowerCase().includes("Hyundai") || newsItem.description.toLowerCase().includes("Kia") || newsItem.description.toLowerCase().includes("Haval")
                    })[3].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("Skoda") || newsItem.description.toLowerCase().includes("Toyota") || newsItem.description.toLowerCase().includes("АвтоВАЗ") || newsItem.description.toLowerCase().includes("mercedes") || newsItem.description.toLowerCase().includes("dacia") || newsItem.description.toLowerCase().includes("lada") || newsItem.description.toLowerCase().includes("Tesla") || newsItem.description.toLowerCase().includes("пикап") || newsItem.description.toLowerCase().includes("Hyundai") || newsItem.description.toLowerCase().includes("Kia") || newsItem.description.toLowerCase().includes("Haval")
                      })[3].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
            <div class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("Skoda") || newsItem.description.toLowerCase().includes("Toyota") || newsItem.description.toLowerCase().includes("АвтоВАЗ") || newsItem.description.toLowerCase().includes("mercedes") || newsItem.description.toLowerCase().includes("dacia") || newsItem.description.toLowerCase().includes("lada") || newsItem.description.toLowerCase().includes("Tesla") || newsItem.description.toLowerCase().includes("пикап") || newsItem.description.toLowerCase().includes("Hyundai") || newsItem.description.toLowerCase().includes("Kia") || newsItem.description.toLowerCase().includes("Haval")
                  })[4].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("Skoda") || newsItem.description.toLowerCase().includes("Toyota") || newsItem.description.toLowerCase().includes("АвтоВАЗ") || newsItem.description.toLowerCase().includes("mercedes") || newsItem.description.toLowerCase().includes("dacia") || newsItem.description.toLowerCase().includes("lada") || newsItem.description.toLowerCase().includes("Tesla") || newsItem.description.toLowerCase().includes("пикап") || newsItem.description.toLowerCase().includes("Hyundai") || newsItem.description.toLowerCase().includes("Kia") || newsItem.description.toLowerCase().includes("Haval")
                  })[4].description.substring(0, 45)
                }}
              </span>
              <img width="100%" src="https://avatars.mds.yandex.net/get-ynews/2456605/165fe7243ff380342d56d670e6e59fd6/800x400" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    news.filter(newsItem => {
                      return newsItem.description.toLowerCase().includes("Skoda") || newsItem.description.toLowerCase().includes("Toyota") || newsItem.description.toLowerCase().includes("АвтоВАЗ") || newsItem.description.toLowerCase().includes("mercedes") || newsItem.description.toLowerCase().includes("dacia") || newsItem.description.toLowerCase().includes("lada") || newsItem.description.toLowerCase().includes("Tesla") || newsItem.description.toLowerCase().includes("пикап") || newsItem.description.toLowerCase().includes("Hyundai") || newsItem.description.toLowerCase().includes("Kia") || newsItem.description.toLowerCase().includes("Haval")
                    })[4].author ?
                      news.filter(newsItem => {
                        return newsItem.description.toLowerCase().includes("Skoda") || newsItem.description.toLowerCase().includes("Toyota") || newsItem.description.toLowerCase().includes("АвтоВАЗ") || newsItem.description.toLowerCase().includes("mercedes") || newsItem.description.toLowerCase().includes("dacia") || newsItem.description.toLowerCase().includes("lada") || newsItem.description.toLowerCase().includes("Tesla") || newsItem.description.toLowerCase().includes("пикап") || newsItem.description.toLowerCase().includes("Hyundai") || newsItem.description.toLowerCase().includes("Kia") || newsItem.description.toLowerCase().includes("Haval")
                      })[4].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
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
    /* width: 100%; */
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
    /* width: 850px; */
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