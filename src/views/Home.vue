<template>
  <div>
    <Header @changeRubric="changeRubricHandler" />
    <div class="totalContainer">
      <div class="news">
        <div v-if="rubricConditions.length >= 5">
          <div class="newsRow">
            <div @click="$router.push({ name: 'NewsItem', query: { title: rubricConditions[0].title } })" class="newsItem newsItemMain">
              <img class="newsItemMainImg" height="75%" width="50%" :src="rubricConditions[0].source" alt="">
              <div class="newsVerticalFormat">
                <span class="newsItemHeader">
                  {{
                    rubricConditions[0].title
                  }}
                </span>
                <span>
                  {{
                    rubricConditions[0].description.substring(0, 45)
                  }}
                </span>
              </div>
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    rubricConditions[0].author ?
                      rubricConditions[0].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
            <div @click="$router.push({ name: 'NewsItem', query: { title: rubricConditions[1].title } })" class="newsItem">
              <span class="newsItemHeader">
                {{
                  rubricConditions[1].title
                }}
              </span>
              <span>
                {{
                  rubricConditions[1].description.substring(0, 45)
                }}
              </span>
              <img width="100%" :src="rubricConditions[1].source" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    rubricConditions[1].author ?
                      rubricConditions[1].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
          </div>
          <div class="newsRow">
            <div @click="$router.push({ name: 'NewsItem', query: { title: rubricConditions[2].title } })" class="newsItem">
              <span class="newsItemHeader">
                {{
                  rubricConditions[2].title
                }}
              </span>
              <span>
                {{
                  rubricConditions[2].description.substring(0, 45)
                }}
              </span>
              <img width="100%" :src="rubricConditions[2].source" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    rubricConditions[2].author ?
                      rubricConditions[2].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
            <div @click="$router.push({ name: 'NewsItem', query: { title: rubricConditions[3].title } })" class="newsItem">
              <span class="newsItemHeader">
                {{
                  rubricConditions[3].title
                }}
              </span>
              <span>
                {{
                  rubricConditions[3].description.substring(0, 45)
                }}
              </span>
              <img width="100%" :src="rubricConditions[3].source" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    rubricConditions[3].author ?
                      rubricConditions[3].author
                    :
                      'Неизвестно'
                  }}
                </span>
              </div>
            </div>
            <div @click="$router.push({ name: 'NewsItem', query: { title: rubricConditions[4].title } })" class="newsItem">
              <span class="newsItemHeader">
                {{
                  rubricConditions[4].title
                }}
              </span>
              <span>
                {{
                  rubricConditions[4].description.substring(0, 45)
                }}
              </span>
              <img width="100%" :src="rubricConditions[4].source" alt="">
              <div class="newsItemFooter">
                <img width="15px" src="https://avatars.mds.yandex.net/get-ynews-logo/50744/254154182-1550152741834-square/logo-square" alt="">
                <span>
                  {{
                    rubricConditions[4].author ?
                      rubricConditions[4].author
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('московск') || newsItem.description.toLowerCase().includes('москв')
                })[0].title } })" class="newsItem newsItemMain">
              <img class="newsItemMainImg" height="75%" width="50%" :src="news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('московск') || newsItem.description.toLowerCase().includes('москв')
                })[0].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('московск') || newsItem.description.toLowerCase().includes('москв')
                })[1].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('московск') || newsItem.description.toLowerCase().includes('москв')
                })[1].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('московск') || newsItem.description.toLowerCase().includes('москв')
                })[2].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('московск') || newsItem.description.toLowerCase().includes('москв')
                })[2].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('московск') || newsItem.description.toLowerCase().includes('москв')
                })[3].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('московск') || newsItem.description.toLowerCase().includes('москв')
                })[3].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('московск') || newsItem.description.toLowerCase().includes('москв')
                })[4].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('московск') || newsItem.description.toLowerCase().includes('москв')
                })[4].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('интересн') || newsItem.description.toLowerCase().includes('нов')
                })[0].title } })" class="newsItem newsItemMain">
              <img class="newsItemMainImg" height="75%" width="50%" :src="news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('интересн') || newsItem.description.toLowerCase().includes('нов')
                })[0].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('интересн') || newsItem.description.toLowerCase().includes('нов')
                })[1].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('интересн') || newsItem.description.toLowerCase().includes('нов')
                })[1].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('интересн') || newsItem.description.toLowerCase().includes('нов')
                })[2].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('интересн') || newsItem.description.toLowerCase().includes('нов')
                })[2].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('интересн') || newsItem.description.toLowerCase().includes('нов')
                })[3].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('интересн') || newsItem.description.toLowerCase().includes('нов')
                })[3].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('интересн') || newsItem.description.toLowerCase().includes('нов')
                })[4].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('интересн') || newsItem.description.toLowerCase().includes('нов')
                })[4].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('nord stream') || newsItem.description.toLowerCase().includes('северный поток') || newsItem.description.toLowerCase().includes('журналист')
                })[0].title } })" class="newsItem newsItemMain">
              <img class="newsItemMainImg" height="75%" width="50%" :src="news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes('nord stream') || newsItem.description.toLowerCase().includes('северный поток') || newsItem.description.toLowerCase().includes('журналист')
                  })[0].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('nord stream') || newsItem.description.toLowerCase().includes('северный поток') || newsItem.description.toLowerCase().includes('журналист')
                })[1].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes('nord stream') || newsItem.description.toLowerCase().includes('северный поток') || newsItem.description.toLowerCase().includes('журналист')
                  })[1].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('nord stream') || newsItem.description.toLowerCase().includes('северный поток') || newsItem.description.toLowerCase().includes('журналист')
                })[2].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes('nord stream') || newsItem.description.toLowerCase().includes('северный поток') || newsItem.description.toLowerCase().includes('журналист')
                  })[2].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('nord stream') || newsItem.description.toLowerCase().includes('северный поток') || newsItem.description.toLowerCase().includes('журналист')
                })[3].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes('nord stream') || newsItem.description.toLowerCase().includes('северный поток') || newsItem.description.toLowerCase().includes('журналист')
                  })[3].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('nord stream') || newsItem.description.toLowerCase().includes('северный поток') || newsItem.description.toLowerCase().includes('журналист')
                })[4].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes('nord stream') || newsItem.description.toLowerCase().includes('северный поток') || newsItem.description.toLowerCase().includes('журналист')
                  })[4].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.category.includes('general')
                })[0].title } })" class="newsItem newsItemMain">
              <img class="newsItemMainImg" height="75%" width="50%" :src="news.filter(newsItem => {
                  return newsItem.category.includes('general')
                })[0].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.category.includes('general')
                })[1].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                  return newsItem.category.includes('general')
                })[1].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.category.includes('general')
                })[2].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                  return newsItem.category.includes('general')
                })[2].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.category.includes('general')
                })[3].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                  return newsItem.category.includes('general')
                })[3].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.category.includes('general')
                })[4].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                  return newsItem.category.includes('general')
                })[4].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('социал') || newsItem.description.toLowerCase().includes('президент') || newsItem.description.toLowerCase().includes('пенси') || newsItem.description.toLowerCase().includes('обществ')
                })[0].title } })" class="newsItem newsItemMain">
              <img class="newsItemMainImg" height="75%" width="50%" :src="news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('социал') || newsItem.description.toLowerCase().includes('президент') || newsItem.description.toLowerCase().includes('пенси') || newsItem.description.toLowerCase().includes('обществ')
                })[0].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('социал') || newsItem.description.toLowerCase().includes('президент') || newsItem.description.toLowerCase().includes('пенси') || newsItem.description.toLowerCase().includes('обществ')
                })[1].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('социал') || newsItem.description.toLowerCase().includes('президент') || newsItem.description.toLowerCase().includes('пенси') || newsItem.description.toLowerCase().includes('обществ')
                })[1].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('социал') || newsItem.description.toLowerCase().includes('президент') || newsItem.description.toLowerCase().includes('пенси') || newsItem.description.toLowerCase().includes('обществ')
                })[2].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('социал') || newsItem.description.toLowerCase().includes('президент') || newsItem.description.toLowerCase().includes('пенси') || newsItem.description.toLowerCase().includes('обществ')
                })[2].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('социал') || newsItem.description.toLowerCase().includes('президент') || newsItem.description.toLowerCase().includes('пенси') || newsItem.description.toLowerCase().includes('обществ')
                })[3].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('социал') || newsItem.description.toLowerCase().includes('президент') || newsItem.description.toLowerCase().includes('пенси') || newsItem.description.toLowerCase().includes('обществ')
                })[3].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('социал') || newsItem.description.toLowerCase().includes('президент') || newsItem.description.toLowerCase().includes('пенси') || newsItem.description.toLowerCase().includes('обществ')
                })[4].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('социал') || newsItem.description.toLowerCase().includes('президент') || newsItem.description.toLowerCase().includes('пенси') || newsItem.description.toLowerCase().includes('обществ')
                })[4].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('банк') || newsItem.description.toLowerCase().includes('эконом') || newsItem.description.toLowerCase().includes('денеж') || newsItem.description.toLowerCase().includes('монет')
                })[0].title } })" class="newsItem newsItemMain">
              <img class="newsItemMainImg" height="75%" width="50%" :src="news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('банк') || newsItem.description.toLowerCase().includes('эконом') || newsItem.description.toLowerCase().includes('денеж') || newsItem.description.toLowerCase().includes('монет')
                })[0].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('банк') || newsItem.description.toLowerCase().includes('эконом') || newsItem.description.toLowerCase().includes('денеж') || newsItem.description.toLowerCase().includes('монет')
                })[1].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('банк') || newsItem.description.toLowerCase().includes('эконом') || newsItem.description.toLowerCase().includes('денеж') || newsItem.description.toLowerCase().includes('монет')
                })[1].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('банк') || newsItem.description.toLowerCase().includes('эконом') || newsItem.description.toLowerCase().includes('денеж') || newsItem.description.toLowerCase().includes('монет')
                })[2].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('банк') || newsItem.description.toLowerCase().includes('эконом') || newsItem.description.toLowerCase().includes('денеж') || newsItem.description.toLowerCase().includes('монет')
                })[2].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('банк') || newsItem.description.toLowerCase().includes('эконом') || newsItem.description.toLowerCase().includes('денеж') || newsItem.description.toLowerCase().includes('монет')
                })[3].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('банк') || newsItem.description.toLowerCase().includes('эконом') || newsItem.description.toLowerCase().includes('денеж') || newsItem.description.toLowerCase().includes('монет')
                })[3].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('банк') || newsItem.description.toLowerCase().includes('эконом') || newsItem.description.toLowerCase().includes('денеж') || newsItem.description.toLowerCase().includes('монет')
                })[4].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('банк') || newsItem.description.toLowerCase().includes('эконом') || newsItem.description.toLowerCase().includes('денеж') || newsItem.description.toLowerCase().includes('монет')
                })[4].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('норвеж') || newsItem.description.toLowerCase().includes('варшав') || newsItem.description.toLowerCase().includes('мир') || newsItem.description.toLowerCase().includes('стран')
                })[0].title } })" class="newsItem newsItemMain">
              <img class="newsItemMainImg" height="75%" width="50%" :src="news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('норвеж') || newsItem.description.toLowerCase().includes('варшав') || newsItem.description.toLowerCase().includes('мир') || newsItem.description.toLowerCase().includes('стран')
                })[0].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('норвеж') || newsItem.description.toLowerCase().includes('варшав') || newsItem.description.toLowerCase().includes('мир') || newsItem.description.toLowerCase().includes('стран')
                })[1].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('норвеж') || newsItem.description.toLowerCase().includes('варшав') || newsItem.description.toLowerCase().includes('мир') || newsItem.description.toLowerCase().includes('стран')
                })[1].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('норвеж') || newsItem.description.toLowerCase().includes('варшав') || newsItem.description.toLowerCase().includes('мир') || newsItem.description.toLowerCase().includes('стран')
                })[2].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('норвеж') || newsItem.description.toLowerCase().includes('варшав') || newsItem.description.toLowerCase().includes('мир') || newsItem.description.toLowerCase().includes('стран')
                })[2].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('норвеж') || newsItem.description.toLowerCase().includes('варшав') || newsItem.description.toLowerCase().includes('мир') || newsItem.description.toLowerCase().includes('стран')
                })[3].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('норвеж') || newsItem.description.toLowerCase().includes('варшав') || newsItem.description.toLowerCase().includes('мир') || newsItem.description.toLowerCase().includes('стран')
                })[3].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('норвеж') || newsItem.description.toLowerCase().includes('варшав') || newsItem.description.toLowerCase().includes('мир') || newsItem.description.toLowerCase().includes('стран')
                })[4].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('норвеж') || newsItem.description.toLowerCase().includes('варшав') || newsItem.description.toLowerCase().includes('мир') || newsItem.description.toLowerCase().includes('стран')
                })[4].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('олимпий') || newsItem.description.toLowerCase().includes('футбол') || newsItem.description.toLowerCase().includes('волейбол') || newsItem.description.toLowerCase().includes('баскетболл')
                })[0].title } })" class="newsItem newsItemMain">
              <img class="newsItemMainImg" height="75%" width="50%" :src="news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('олимпий') || newsItem.description.toLowerCase().includes('футбол') || newsItem.description.toLowerCase().includes('волейбол') || newsItem.description.toLowerCase().includes('баскетболл')
                })[0].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('олимпий') || newsItem.description.toLowerCase().includes('футбол') || newsItem.description.toLowerCase().includes('волейбол') || newsItem.description.toLowerCase().includes('баскетболл')
                })[1].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('олимпий') || newsItem.description.toLowerCase().includes('футбол') || newsItem.description.toLowerCase().includes('волейбол') || newsItem.description.toLowerCase().includes('баскетболл')
                })[1].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('олимпий') || newsItem.description.toLowerCase().includes('футбол') || newsItem.description.toLowerCase().includes('волейбол') || newsItem.description.toLowerCase().includes('баскетболл')
                })[2].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('олимпий') || newsItem.description.toLowerCase().includes('футбол') || newsItem.description.toLowerCase().includes('волейбол') || newsItem.description.toLowerCase().includes('баскетболл')
                })[2].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('олимпий') || newsItem.description.toLowerCase().includes('футбол') || newsItem.description.toLowerCase().includes('волейбол') || newsItem.description.toLowerCase().includes('баскетболл')
                })[3].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('олимпий') || newsItem.description.toLowerCase().includes('футбол') || newsItem.description.toLowerCase().includes('волейбол') || newsItem.description.toLowerCase().includes('баскетболл')
                })[3].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('олимпий') || newsItem.description.toLowerCase().includes('футбол') || newsItem.description.toLowerCase().includes('волейбол') || newsItem.description.toLowerCase().includes('баскетболл')
                })[4].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('олимпий') || newsItem.description.toLowerCase().includes('футбол') || newsItem.description.toLowerCase().includes('волейбол') || newsItem.description.toLowerCase().includes('баскетболл')
                })[4].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('проишествие') || newsItem.description.toLowerCase().includes('землятресение') || newsItem.description.toLowerCase().includes('умер')
                })[0].title } })" class="newsItem newsItemMain">
              <img class="newsItemMainImg" height="75%" width="50%" :src="news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes('проишествие') || newsItem.description.toLowerCase().includes('землятресение') || newsItem.description.toLowerCase().includes('умер')
                  })[0].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('проишествие') || newsItem.description.toLowerCase().includes('землятресение') || newsItem.description.toLowerCase().includes('умер')
                })[1].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes('проишествие') || newsItem.description.toLowerCase().includes('землятресение') || newsItem.description.toLowerCase().includes('умер')
                  })[1].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('проишествие') || newsItem.description.toLowerCase().includes('землятресение') || newsItem.description.toLowerCase().includes('умер')
                })[2].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('проишествие') || newsItem.description.toLowerCase().includes('землятресение') || newsItem.description.toLowerCase().includes('умер')
                })[2].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('проишествие') || newsItem.description.toLowerCase().includes('землятресение') || newsItem.description.toLowerCase().includes('умер')
                })[3].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('проишествие') || newsItem.description.toLowerCase().includes('землятресение') || newsItem.description.toLowerCase().includes('умер')
                })[3].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('проишествие') || newsItem.description.toLowerCase().includes('землятресение') || newsItem.description.toLowerCase().includes('умер')
                })[4].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes('проишествие') || newsItem.description.toLowerCase().includes('землятресение') || newsItem.description.toLowerCase().includes('умер')
                  })[4].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('сериал') || newsItem.description.toLowerCase().includes('кино') || newsItem.description.toLowerCase().includes('звезда') || newsItem.description.toLowerCase().includes('франшиза') || newsItem.description.toLowerCase().includes('премьера') || newsItem.description.toLowerCase().includes('акт')
                })[0].title } })" class="newsItem newsItemMain">
              <img class="newsItemMainImg" height="75%" width="50%" :src="news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('сериал') || newsItem.description.toLowerCase().includes('кино') || newsItem.description.toLowerCase().includes('звезда') || newsItem.description.toLowerCase().includes('франшиза') || newsItem.description.toLowerCase().includes('премьера') || newsItem.description.toLowerCase().includes('акт')
                })[0].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('сериал') || newsItem.description.toLowerCase().includes('кино') || newsItem.description.toLowerCase().includes('звезда') || newsItem.description.toLowerCase().includes('франшиза') || newsItem.description.toLowerCase().includes('премьера') || newsItem.description.toLowerCase().includes('акт')
                })[1].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('сериал') || newsItem.description.toLowerCase().includes('кино') || newsItem.description.toLowerCase().includes('звезда') || newsItem.description.toLowerCase().includes('франшиза') || newsItem.description.toLowerCase().includes('премьера') || newsItem.description.toLowerCase().includes('акт')
                })[1].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('сериал') || newsItem.description.toLowerCase().includes('кино') || newsItem.description.toLowerCase().includes('звезда') || newsItem.description.toLowerCase().includes('франшиза') || newsItem.description.toLowerCase().includes('премьера') || newsItem.description.toLowerCase().includes('акт')
                })[2].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('сериал') || newsItem.description.toLowerCase().includes('кино') || newsItem.description.toLowerCase().includes('звезда') || newsItem.description.toLowerCase().includes('франшиза') || newsItem.description.toLowerCase().includes('премьера') || newsItem.description.toLowerCase().includes('акт')
                })[2].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('сериал') || newsItem.description.toLowerCase().includes('кино') || newsItem.description.toLowerCase().includes('звезда') || newsItem.description.toLowerCase().includes('франшиза') || newsItem.description.toLowerCase().includes('премьера') || newsItem.description.toLowerCase().includes('акт')
                })[3].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('сериал') || newsItem.description.toLowerCase().includes('кино') || newsItem.description.toLowerCase().includes('звезда') || newsItem.description.toLowerCase().includes('франшиза') || newsItem.description.toLowerCase().includes('премьера') || newsItem.description.toLowerCase().includes('акт')
                })[3].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('сериал') || newsItem.description.toLowerCase().includes('кино') || newsItem.description.toLowerCase().includes('звезда') || newsItem.description.toLowerCase().includes('франшиза') || newsItem.description.toLowerCase().includes('премьера') || newsItem.description.toLowerCase().includes('акт')
                })[4].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('сериал') || newsItem.description.toLowerCase().includes('кино') || newsItem.description.toLowerCase().includes('звезда') || newsItem.description.toLowerCase().includes('франшиза') || newsItem.description.toLowerCase().includes('премьера') || newsItem.description.toLowerCase().includes('акт')
                })[4].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('xiaomi') || newsItem.description.toLowerCase().includes('samsung') || newsItem.description.toLowerCase().includes('планшет') || newsItem.description.toLowerCase().includes('фитнес-браслет') || newsItem.description.toLowerCase().includes('игров') || newsItem.description.toLowerCase().includes('игрок') || newsItem.description.toLowerCase().includes('разработчик') || newsItem.description.toLowerCase().includes('ios') || newsItem.description.toLowerCase().includes('android') || newsItem.description.toLowerCase().includes('навигатор') || newsItem.description.toLowerCase().includes('яндекс') || newsItem.description.toLowerCase().includes('активы') || newsItem.description.toLowerCase().includes('смартфон') || newsItem.description.toLowerCase().includes('часы') || newsItem.description.toLowerCase().includes('sony') || newsItem.description.toLowerCase().includes('mastercard') || newsItem.description.toLowerCase().includes('visa') || newsItem.description.toLowerCase().includes('игра') || newsItem.description.toLowerCase().includes('apple') || newsItem.description.toLowerCase().includes('google') || newsItem.description.toLowerCase().includes('nothing') || newsItem.description.toLowerCase().includes('microsoft') || newsItem.description.toLowerCase().includes('vivo') || newsItem.description.toLowerCase().includes('oppo') || newsItem.description.toLowerCase().includes('oneplus') || newsItem.description.toLowerCase().includes('realme') || newsItem.description.toLowerCase().includes('redmi') || newsItem.description.toLowerCase().includes('miui')
                })[0].title } })" class="newsItem newsItemMain">
              <img class="newsItemMainImg" height="75%" width="50%" :src="news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('xiaomi') || newsItem.description.toLowerCase().includes('samsung') || newsItem.description.toLowerCase().includes('планшет') || newsItem.description.toLowerCase().includes('фитнес-браслет') || newsItem.description.toLowerCase().includes('игров') || newsItem.description.toLowerCase().includes('игрок') || newsItem.description.toLowerCase().includes('разработчик') || newsItem.description.toLowerCase().includes('ios') || newsItem.description.toLowerCase().includes('android') || newsItem.description.toLowerCase().includes('навигатор') || newsItem.description.toLowerCase().includes('яндекс') || newsItem.description.toLowerCase().includes('активы') || newsItem.description.toLowerCase().includes('смартфон') || newsItem.description.toLowerCase().includes('часы') || newsItem.description.toLowerCase().includes('sony') || newsItem.description.toLowerCase().includes('mastercard') || newsItem.description.toLowerCase().includes('visa') || newsItem.description.toLowerCase().includes('игра') || newsItem.description.toLowerCase().includes('apple') || newsItem.description.toLowerCase().includes('google') || newsItem.description.toLowerCase().includes('nothing') || newsItem.description.toLowerCase().includes('microsoft') || newsItem.description.toLowerCase().includes('vivo') || newsItem.description.toLowerCase().includes('oppo') || newsItem.description.toLowerCase().includes('oneplus') || newsItem.description.toLowerCase().includes('realme') || newsItem.description.toLowerCase().includes('redmi') || newsItem.description.toLowerCase().includes('miui')
                })[0].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('xiaomi') || newsItem.description.toLowerCase().includes('samsung') || newsItem.description.toLowerCase().includes('планшет') || newsItem.description.toLowerCase().includes('фитнес-браслет') || newsItem.description.toLowerCase().includes('игров') || newsItem.description.toLowerCase().includes('игрок') || newsItem.description.toLowerCase().includes('разработчик') || newsItem.description.toLowerCase().includes('ios') || newsItem.description.toLowerCase().includes('android') || newsItem.description.toLowerCase().includes('навигатор') || newsItem.description.toLowerCase().includes('яндекс') || newsItem.description.toLowerCase().includes('активы') || newsItem.description.toLowerCase().includes('смартфон') || newsItem.description.toLowerCase().includes('часы') || newsItem.description.toLowerCase().includes('sony') || newsItem.description.toLowerCase().includes('mastercard') || newsItem.description.toLowerCase().includes('visa') || newsItem.description.toLowerCase().includes('игра') || newsItem.description.toLowerCase().includes('apple') || newsItem.description.toLowerCase().includes('google') || newsItem.description.toLowerCase().includes('nothing') || newsItem.description.toLowerCase().includes('microsoft') || newsItem.description.toLowerCase().includes('vivo') || newsItem.description.toLowerCase().includes('oppo') || newsItem.description.toLowerCase().includes('oneplus') || newsItem.description.toLowerCase().includes('realme') || newsItem.description.toLowerCase().includes('redmi') || newsItem.description.toLowerCase().includes('miui')
                })[1].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('xiaomi') || newsItem.description.toLowerCase().includes('samsung') || newsItem.description.toLowerCase().includes('планшет') || newsItem.description.toLowerCase().includes('фитнес-браслет') || newsItem.description.toLowerCase().includes('игров') || newsItem.description.toLowerCase().includes('игрок') || newsItem.description.toLowerCase().includes('разработчик') || newsItem.description.toLowerCase().includes('ios') || newsItem.description.toLowerCase().includes('android') || newsItem.description.toLowerCase().includes('навигатор') || newsItem.description.toLowerCase().includes('яндекс') || newsItem.description.toLowerCase().includes('активы') || newsItem.description.toLowerCase().includes('смартфон') || newsItem.description.toLowerCase().includes('часы') || newsItem.description.toLowerCase().includes('sony') || newsItem.description.toLowerCase().includes('mastercard') || newsItem.description.toLowerCase().includes('visa') || newsItem.description.toLowerCase().includes('игра') || newsItem.description.toLowerCase().includes('apple') || newsItem.description.toLowerCase().includes('google') || newsItem.description.toLowerCase().includes('nothing') || newsItem.description.toLowerCase().includes('microsoft') || newsItem.description.toLowerCase().includes('vivo') || newsItem.description.toLowerCase().includes('oppo') || newsItem.description.toLowerCase().includes('oneplus') || newsItem.description.toLowerCase().includes('realme') || newsItem.description.toLowerCase().includes('redmi') || newsItem.description.toLowerCase().includes('miui')
                })[1].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('xiaomi') || newsItem.description.toLowerCase().includes('samsung') || newsItem.description.toLowerCase().includes('планшет') || newsItem.description.toLowerCase().includes('фитнес-браслет') || newsItem.description.toLowerCase().includes('игров') || newsItem.description.toLowerCase().includes('игрок') || newsItem.description.toLowerCase().includes('разработчик') || newsItem.description.toLowerCase().includes('ios') || newsItem.description.toLowerCase().includes('android') || newsItem.description.toLowerCase().includes('навигатор') || newsItem.description.toLowerCase().includes('яндекс') || newsItem.description.toLowerCase().includes('активы') || newsItem.description.toLowerCase().includes('смартфон') || newsItem.description.toLowerCase().includes('часы') || newsItem.description.toLowerCase().includes('sony') || newsItem.description.toLowerCase().includes('mastercard') || newsItem.description.toLowerCase().includes('visa') || newsItem.description.toLowerCase().includes('игра') || newsItem.description.toLowerCase().includes('apple') || newsItem.description.toLowerCase().includes('google') || newsItem.description.toLowerCase().includes('nothing') || newsItem.description.toLowerCase().includes('microsoft') || newsItem.description.toLowerCase().includes('vivo') || newsItem.description.toLowerCase().includes('oppo') || newsItem.description.toLowerCase().includes('oneplus') || newsItem.description.toLowerCase().includes('realme') || newsItem.description.toLowerCase().includes('redmi') || newsItem.description.toLowerCase().includes('miui')
                })[2].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('xiaomi') || newsItem.description.toLowerCase().includes('samsung') || newsItem.description.toLowerCase().includes('планшет') || newsItem.description.toLowerCase().includes('фитнес-браслет') || newsItem.description.toLowerCase().includes('игров') || newsItem.description.toLowerCase().includes('игрок') || newsItem.description.toLowerCase().includes('разработчик') || newsItem.description.toLowerCase().includes('ios') || newsItem.description.toLowerCase().includes('android') || newsItem.description.toLowerCase().includes('навигатор') || newsItem.description.toLowerCase().includes('яндекс') || newsItem.description.toLowerCase().includes('активы') || newsItem.description.toLowerCase().includes('смартфон') || newsItem.description.toLowerCase().includes('часы') || newsItem.description.toLowerCase().includes('sony') || newsItem.description.toLowerCase().includes('mastercard') || newsItem.description.toLowerCase().includes('visa') || newsItem.description.toLowerCase().includes('игра') || newsItem.description.toLowerCase().includes('apple') || newsItem.description.toLowerCase().includes('google') || newsItem.description.toLowerCase().includes('nothing') || newsItem.description.toLowerCase().includes('microsoft') || newsItem.description.toLowerCase().includes('vivo') || newsItem.description.toLowerCase().includes('oppo') || newsItem.description.toLowerCase().includes('oneplus') || newsItem.description.toLowerCase().includes('realme') || newsItem.description.toLowerCase().includes('redmi') || newsItem.description.toLowerCase().includes('miui')
                })[2].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('xiaomi') || newsItem.description.toLowerCase().includes('samsung') || newsItem.description.toLowerCase().includes('планшет') || newsItem.description.toLowerCase().includes('фитнес-браслет') || newsItem.description.toLowerCase().includes('игров') || newsItem.description.toLowerCase().includes('игрок') || newsItem.description.toLowerCase().includes('разработчик') || newsItem.description.toLowerCase().includes('ios') || newsItem.description.toLowerCase().includes('android') || newsItem.description.toLowerCase().includes('навигатор') || newsItem.description.toLowerCase().includes('яндекс') || newsItem.description.toLowerCase().includes('активы') || newsItem.description.toLowerCase().includes('смартфон') || newsItem.description.toLowerCase().includes('часы') || newsItem.description.toLowerCase().includes('sony') || newsItem.description.toLowerCase().includes('mastercard') || newsItem.description.toLowerCase().includes('visa') || newsItem.description.toLowerCase().includes('игра') || newsItem.description.toLowerCase().includes('apple') || newsItem.description.toLowerCase().includes('google') || newsItem.description.toLowerCase().includes('nothing') || newsItem.description.toLowerCase().includes('microsoft') || newsItem.description.toLowerCase().includes('vivo') || newsItem.description.toLowerCase().includes('oppo') || newsItem.description.toLowerCase().includes('oneplus') || newsItem.description.toLowerCase().includes('realme') || newsItem.description.toLowerCase().includes('redmi') || newsItem.description.toLowerCase().includes('miui')
                })[3].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('xiaomi') || newsItem.description.toLowerCase().includes('samsung') || newsItem.description.toLowerCase().includes('планшет') || newsItem.description.toLowerCase().includes('фитнес-браслет') || newsItem.description.toLowerCase().includes('игров') || newsItem.description.toLowerCase().includes('игрок') || newsItem.description.toLowerCase().includes('разработчик') || newsItem.description.toLowerCase().includes('ios') || newsItem.description.toLowerCase().includes('android') || newsItem.description.toLowerCase().includes('навигатор') || newsItem.description.toLowerCase().includes('яндекс') || newsItem.description.toLowerCase().includes('активы') || newsItem.description.toLowerCase().includes('смартфон') || newsItem.description.toLowerCase().includes('часы') || newsItem.description.toLowerCase().includes('sony') || newsItem.description.toLowerCase().includes('mastercard') || newsItem.description.toLowerCase().includes('visa') || newsItem.description.toLowerCase().includes('игра') || newsItem.description.toLowerCase().includes('apple') || newsItem.description.toLowerCase().includes('google') || newsItem.description.toLowerCase().includes('nothing') || newsItem.description.toLowerCase().includes('microsoft') || newsItem.description.toLowerCase().includes('vivo') || newsItem.description.toLowerCase().includes('oppo') || newsItem.description.toLowerCase().includes('oneplus') || newsItem.description.toLowerCase().includes('realme') || newsItem.description.toLowerCase().includes('redmi') || newsItem.description.toLowerCase().includes('miui')
                })[3].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('xiaomi') || newsItem.description.toLowerCase().includes('samsung') || newsItem.description.toLowerCase().includes('планшет') || newsItem.description.toLowerCase().includes('фитнес-браслет') || newsItem.description.toLowerCase().includes('игров') || newsItem.description.toLowerCase().includes('игрок') || newsItem.description.toLowerCase().includes('разработчик') || newsItem.description.toLowerCase().includes('ios') || newsItem.description.toLowerCase().includes('android') || newsItem.description.toLowerCase().includes('навигатор') || newsItem.description.toLowerCase().includes('яндекс') || newsItem.description.toLowerCase().includes('активы') || newsItem.description.toLowerCase().includes('смартфон') || newsItem.description.toLowerCase().includes('часы') || newsItem.description.toLowerCase().includes('sony') || newsItem.description.toLowerCase().includes('mastercard') || newsItem.description.toLowerCase().includes('visa') || newsItem.description.toLowerCase().includes('игра') || newsItem.description.toLowerCase().includes('apple') || newsItem.description.toLowerCase().includes('google') || newsItem.description.toLowerCase().includes('nothing') || newsItem.description.toLowerCase().includes('microsoft') || newsItem.description.toLowerCase().includes('vivo') || newsItem.description.toLowerCase().includes('oppo') || newsItem.description.toLowerCase().includes('oneplus') || newsItem.description.toLowerCase().includes('realme') || newsItem.description.toLowerCase().includes('redmi') || newsItem.description.toLowerCase().includes('miui')
                })[4].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('xiaomi') || newsItem.description.toLowerCase().includes('samsung') || newsItem.description.toLowerCase().includes('планшет') || newsItem.description.toLowerCase().includes('фитнес-браслет') || newsItem.description.toLowerCase().includes('игров') || newsItem.description.toLowerCase().includes('игрок') || newsItem.description.toLowerCase().includes('разработчик') || newsItem.description.toLowerCase().includes('ios') || newsItem.description.toLowerCase().includes('android') || newsItem.description.toLowerCase().includes('навигатор') || newsItem.description.toLowerCase().includes('яндекс') || newsItem.description.toLowerCase().includes('активы') || newsItem.description.toLowerCase().includes('смартфон') || newsItem.description.toLowerCase().includes('часы') || newsItem.description.toLowerCase().includes('sony') || newsItem.description.toLowerCase().includes('mastercard') || newsItem.description.toLowerCase().includes('visa') || newsItem.description.toLowerCase().includes('игра') || newsItem.description.toLowerCase().includes('apple') || newsItem.description.toLowerCase().includes('google') || newsItem.description.toLowerCase().includes('nothing') || newsItem.description.toLowerCase().includes('microsoft') || newsItem.description.toLowerCase().includes('vivo') || newsItem.description.toLowerCase().includes('oppo') || newsItem.description.toLowerCase().includes('oneplus') || newsItem.description.toLowerCase().includes('realme') || newsItem.description.toLowerCase().includes('redmi') || newsItem.description.toLowerCase().includes('miui')
                })[4].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('учен')
                })[0].title } })" class="newsItem newsItemMain">
              <img class="newsItemMainImg" height="75%" width="50%" :src="news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('учен')
                })[0].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('учен')
                })[1].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('учен')
                })[1].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('учен')
                })[2].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes('учен')
                  })[2].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('учен')
                })[3].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('учен')
                })[4].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('учен')
                })[4].title } })" class="newsItem">
              <span class="newsItemHeader">
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("учен")
                  })[4].title
                }}
              </span>
              <span>
                {{
                  news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes("учен")
                  })[4].description.substring(0, 45)
                }}
              </span>
              <img width="100%" :src="news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes('учен')
                  })[4].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('Skoda') || newsItem.description.toLowerCase().includes('Toyota') || newsItem.description.toLowerCase().includes('АвтоВАЗ') || newsItem.description.toLowerCase().includes('mercedes') || newsItem.description.toLowerCase().includes('dacia') || newsItem.description.toLowerCase().includes('lada') || newsItem.description.toLowerCase().includes('Tesla') || newsItem.description.toLowerCase().includes('пикап') || newsItem.description.toLowerCase().includes('Hyundai') || newsItem.description.toLowerCase().includes('Kia') || newsItem.description.toLowerCase().includes('Haval')
                })[0].title } })" class="newsItem newsItemMain">
              <img class="newsItemMainImg" height="75%" width="50%" :src="news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes('Skoda') || newsItem.description.toLowerCase().includes('Toyota') || newsItem.description.toLowerCase().includes('АвтоВАЗ') || newsItem.description.toLowerCase().includes('mercedes') || newsItem.description.toLowerCase().includes('dacia') || newsItem.description.toLowerCase().includes('lada') || newsItem.description.toLowerCase().includes('Tesla') || newsItem.description.toLowerCase().includes('пикап') || newsItem.description.toLowerCase().includes('Hyundai') || newsItem.description.toLowerCase().includes('Kia') || newsItem.description.toLowerCase().includes('Haval')
                  })[0].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('Skoda') || newsItem.description.toLowerCase().includes('Toyota') || newsItem.description.toLowerCase().includes('АвтоВАЗ') || newsItem.description.toLowerCase().includes('mercedes') || newsItem.description.toLowerCase().includes('dacia') || newsItem.description.toLowerCase().includes('lada') || newsItem.description.toLowerCase().includes('Tesla') || newsItem.description.toLowerCase().includes('пикап') || newsItem.description.toLowerCase().includes('Hyundai') || newsItem.description.toLowerCase().includes('Kia') || newsItem.description.toLowerCase().includes('Haval')
                })[1].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes('Skoda') || newsItem.description.toLowerCase().includes('Toyota') || newsItem.description.toLowerCase().includes('АвтоВАЗ') || newsItem.description.toLowerCase().includes('mercedes') || newsItem.description.toLowerCase().includes('dacia') || newsItem.description.toLowerCase().includes('lada') || newsItem.description.toLowerCase().includes('Tesla') || newsItem.description.toLowerCase().includes('пикап') || newsItem.description.toLowerCase().includes('Hyundai') || newsItem.description.toLowerCase().includes('Kia') || newsItem.description.toLowerCase().includes('Haval')
                  })[1].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('Skoda') || newsItem.description.toLowerCase().includes('Toyota') || newsItem.description.toLowerCase().includes('АвтоВАЗ') || newsItem.description.toLowerCase().includes('mercedes') || newsItem.description.toLowerCase().includes('dacia') || newsItem.description.toLowerCase().includes('lada') || newsItem.description.toLowerCase().includes('Tesla') || newsItem.description.toLowerCase().includes('пикап') || newsItem.description.toLowerCase().includes('Hyundai') || newsItem.description.toLowerCase().includes('Kia') || newsItem.description.toLowerCase().includes('Haval')
                })[2].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes('Skoda') || newsItem.description.toLowerCase().includes('Toyota') || newsItem.description.toLowerCase().includes('АвтоВАЗ') || newsItem.description.toLowerCase().includes('mercedes') || newsItem.description.toLowerCase().includes('dacia') || newsItem.description.toLowerCase().includes('lada') || newsItem.description.toLowerCase().includes('Tesla') || newsItem.description.toLowerCase().includes('пикап') || newsItem.description.toLowerCase().includes('Hyundai') || newsItem.description.toLowerCase().includes('Kia') || newsItem.description.toLowerCase().includes('Haval')
                  })[2].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('Skoda') || newsItem.description.toLowerCase().includes('Toyota') || newsItem.description.toLowerCase().includes('АвтоВАЗ') || newsItem.description.toLowerCase().includes('mercedes') || newsItem.description.toLowerCase().includes('dacia') || newsItem.description.toLowerCase().includes('lada') || newsItem.description.toLowerCase().includes('Tesla') || newsItem.description.toLowerCase().includes('пикап') || newsItem.description.toLowerCase().includes('Hyundai') || newsItem.description.toLowerCase().includes('Kia') || newsItem.description.toLowerCase().includes('Haval')
                })[3].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes('Skoda') || newsItem.description.toLowerCase().includes('Toyota') || newsItem.description.toLowerCase().includes('АвтоВАЗ') || newsItem.description.toLowerCase().includes('mercedes') || newsItem.description.toLowerCase().includes('dacia') || newsItem.description.toLowerCase().includes('lada') || newsItem.description.toLowerCase().includes('Tesla') || newsItem.description.toLowerCase().includes('пикап') || newsItem.description.toLowerCase().includes('Hyundai') || newsItem.description.toLowerCase().includes('Kia') || newsItem.description.toLowerCase().includes('Haval')
                  })[3].source" alt="">
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
            <div @click="$router.push({ name: 'NewsItem', query: { title: news.filter(newsItem => {
                  return newsItem.description.toLowerCase().includes('Skoda') || newsItem.description.toLowerCase().includes('Toyota') || newsItem.description.toLowerCase().includes('АвтоВАЗ') || newsItem.description.toLowerCase().includes('mercedes') || newsItem.description.toLowerCase().includes('dacia') || newsItem.description.toLowerCase().includes('lada') || newsItem.description.toLowerCase().includes('Tesla') || newsItem.description.toLowerCase().includes('пикап') || newsItem.description.toLowerCase().includes('Hyundai') || newsItem.description.toLowerCase().includes('Kia') || newsItem.description.toLowerCase().includes('Haval')
                })[4].title } })" class="newsItem">
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
              <img width="100%" :src="news.filter(newsItem => {
                    return newsItem.description.toLowerCase().includes('Skoda') || newsItem.description.toLowerCase().includes('Toyota') || newsItem.description.toLowerCase().includes('АвтоВАЗ') || newsItem.description.toLowerCase().includes('mercedes') || newsItem.description.toLowerCase().includes('dacia') || newsItem.description.toLowerCase().includes('lada') || newsItem.description.toLowerCase().includes('Tesla') || newsItem.description.toLowerCase().includes('пикап') || newsItem.description.toLowerCase().includes('Hyundai') || newsItem.description.toLowerCase().includes('Kia') || newsItem.description.toLowerCase().includes('Haval')
                  })[4].source" alt="">
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

import axios from 'axios'

export default {
  name: 'Home',
  mounted(){
    if(this.$route.query.rubric !== null && this.$route.query.rubric !== undefined){
      this.rubric = this.$route.query.rubric
    }
    fetch(`http://api.mediastack.com/v1/news?access_key=cc1688a90c2aa392ea8d81e6212bbf8a&limit=100&countries=ru&languages=ru`, {
    // fetch(`https://api.mediastack.com/v1/news?access_key=cc1688a90c2aa392ea8d81e6212bbf8a&limit=100&countries=ru&languages=ru`, {
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
      
      this.refreshCategory()

      setTimeout(() => {
        this.news.map((newsItem) => {
          fetch(`http://localhost:4000/data?title=${newsItem.title.split(' ')[0]}`, {
          // fetch(`https://newerse.herokuapp.com/data/?title=${newsItem.title.split(' ')[0]}`, {
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
            newsItem.source = JSON.parse(result).source
            // newsItem.source = this.getPreview(newsItem.title.split(' ')[0])
          })
        })
      }, 1000)
      
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
      rubric: 'general',
      rubricConditions: []
    }
  },
  methods: {
    refreshCategory(){
      this.rubricConditions = this.news.filter(newsItem => {
        return newsItem.category.includes('general')
      })

      if(this.rubric.includes('general')) {
        this.rubricConditions = this.news.filter(newsItem => {
          return newsItem.category.includes('general')
        })
      } else if(this.rubric.includes('Москва и область')) {
        this.rubricConditions = this.news.filter(newsItem => {
          return newsItem.description.toLowerCase().includes('московск') || newsItem.description.toLowerCase().includes('москв')
        })
      } else if(this.rubric.includes('Политика')) {
        this.rubricConditions = this.news.filter(newsItem => {
          return newsItem.description.toLowerCase().includes('nord stream') || newsItem.description.toLowerCase().includes('северный поток') || newsItem.description.toLowerCase().includes('журналист')
        })
      } else if(this.rubric.includes('Общество')) {
        this.rubricConditions = this.news.filter(newsItem => {
          return newsItem.description.toLowerCase().includes('социал') || newsItem.description.toLowerCase().includes('президент') || newsItem.description.toLowerCase().includes('пенси') || newsItem.description.toLowerCase().includes('обществ')
        })
      } else if(this.rubric.includes('Экономика')) {
        this.rubricConditions = this.news.filter(newsItem => {
          return newsItem.description.toLowerCase().includes('банк') || newsItem.description.toLowerCase().includes('эконом') || newsItem.description.toLowerCase().includes('денеж') || newsItem.description.toLowerCase().includes('монет')
        })
      } else if(this.rubric.includes('В мире')) {
        this.rubricConditions = this.news.filter(newsItem => {
          return newsItem.description.toLowerCase().includes('олимпий') || newsItem.description.toLowerCase().includes('футбол') || newsItem.description.toLowerCase().includes('волейбол') || newsItem.description.toLowerCase().includes('баскетболл')
        })
      } else if(this.rubric.includes('Спорт')) {
        this.rubricConditions = this.news.filter(newsItem => {
          return newsItem.description.toLowerCase().includes('олимпий') || newsItem.description.toLowerCase().includes('футбол') || newsItem.description.toLowerCase().includes('волейбол') || newsItem.description.toLowerCase().includes('баскетболл')
        })
      } else if(this.rubric.includes('Культура')) {
        this.rubricConditions = this.news.filter(newsItem => {
          return newsItem.description.toLowerCase().includes('сериал') || newsItem.description.toLowerCase().includes('кино') || newsItem.description.toLowerCase().includes('звезда') || newsItem.description.toLowerCase().includes('франшиза') || newsItem.description.toLowerCase().includes('премьера') || newsItem.description.toLowerCase().includes('акт')
        })
      } else if(this.rubric.includes('Проишествия')) {
        this.rubricConditions = this.news.filter(newsItem => {
          return newsItem.description.toLowerCase().includes('проишествие') || newsItem.description.toLowerCase().includes('землятресение') || newsItem.description.toLowerCase().includes('умер')
        })
      } else if(this.rubric.includes('Технологии')) {
        this.rubricConditions = this.news.filter(newsItem => {
          return newsItem.description.toLowerCase().includes('xiaomi') || newsItem.description.toLowerCase().includes('samsung') || newsItem.description.toLowerCase().includes('планшет') || newsItem.description.toLowerCase().includes('фитнес-браслет') || newsItem.description.toLowerCase().includes('игров') || newsItem.description.toLowerCase().includes('игрок') || newsItem.description.toLowerCase().includes('разработчик') || newsItem.description.toLowerCase().includes('ios') || newsItem.description.toLowerCase().includes('android') || newsItem.description.toLowerCase().includes('навигатор') || newsItem.description.toLowerCase().includes('яндекс') || newsItem.description.toLowerCase().includes('активы') || newsItem.description.toLowerCase().includes('смартфон') || newsItem.description.toLowerCase().includes('часы') || newsItem.description.toLowerCase().includes('sony') || newsItem.description.toLowerCase().includes('mastercard') || newsItem.description.toLowerCase().includes('visa') || newsItem.description.toLowerCase().includes('игра') || newsItem.description.toLowerCase().includes('apple') || newsItem.description.toLowerCase().includes('google') || newsItem.description.toLowerCase().includes('nothing') || newsItem.description.toLowerCase().includes('microsoft') || newsItem.description.toLowerCase().includes('vivo') || newsItem.description.toLowerCase().includes('oppo') || newsItem.description.toLowerCase().includes('oneplus') || newsItem.description.toLowerCase().includes('realme') || newsItem.description.toLowerCase().includes('redmi') || newsItem.description.toLowerCase().includes('miui')
        })
      } else if(this.rubric.includes('Наука')) {
        this.rubricConditions = this.news.filter(newsItem => {
          return newsItem.description.toLowerCase().includes('учен')
        })
      } else if(this.rubric.includes('Ещё')) {
        this.rubricConditions = this.news.filter(newsItem => {
          return newsItem.description.toLowerCase().includes('Skoda') || newsItem.description.toLowerCase().includes('Toyota') || newsItem.description.toLowerCase().includes('АвтоВАЗ') || newsItem.description.toLowerCase().includes('mercedes') || newsItem.description.toLowerCase().includes('dacia') || newsItem.description.toLowerCase().includes('lada') || newsItem.description.toLowerCase().includes('Tesla') || newsItem.description.toLowerCase().includes('пикап') || newsItem.description.toLowerCase().includes('Hyundai') || newsItem.description.toLowerCase().includes('Kia') || newsItem.description.toLowerCase().includes('Haval')
        })
      }
    },
    changeRubricHandler(newRubric){
      this.rubric = newRubric
      this.refreshCategory()
    },
    getPreview(title){
      
      // axios.get(`https://serpapi.com/search.json?q=${title}&tbm=isch&ijn=0&api_key=40b83165cf64850ef67c706e34f3351c5d37fc9c9e2ad8f1b9fac993cf96b949`,
      // {
      //   headers: {
      //     'Content-Type': 'text/plain',
      //     'Access-Control-Allow-Origin': '*',
      //     'Access-Control-Allow-Credentials': true,
      //     "Access-Control-Allow-Headers": "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type",
      //     "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE"
      //   }
      // }).then(response => {
      //   return response.data.suggested_searches[0].thumbnail
      // }).catch(e => {
      //   console.log("ошибка зароса на картинку")
      // })

      fetch(`https://newerse.herokuapp.com/data/?title=${title}`, {
      // fetch(`http://localhost:4000/data?title=${title}`, {
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
        return JSON.parse(result).source
      })

    },
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
    height: 50%;
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