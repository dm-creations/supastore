<template>
  <div class="bg-gray-900 font-sans max-w-screen-lg md:mx-auto">
    <div class="flex flex-col w-full bg-no-repeat bg-top bg-contain md:flex-row">
      <div class="relative z-0 md:w-2/5 h-full">
        <img alt="Book Cover" :src="bookCover" class="top-0 w-full p-3" />
      </div>
      <div class="flex flex-col justify-center my-10 h-52 md:h-auto md:py-6 md:w-3/5 md:mb-40 md:self-end">
        <div class="title-card text-white md:text-gray-700 md:mr-3">
          <p alt="Author Name" class="block w-auto h-auto z-10 text-2xl font-bold md:self-center">{{ author }}</p>
          <h2 class="w-full z-10 text-5xl md:self-start md:text-7xl md:w-full md:px-12 md:mb-3 md:self-start">{{ title }}</h2>
        </div>
        <h3 class="text-white italic text-xl my-3">" Beauty lures the stranger <br class="md:hidden"> more easily into danger "<br/>- Septimus Heap</h3>
      </div>
    </div>
    <div class="text-white text-xl bg-gray-800 w-3/5 mx-auto my-3 py-4 rounded-xl shadow-2xl md:w-1/2">
      <div class="text-xl mb-1 underline uppercase font-bold">Buy in stores for {{ priceVal }} {{ priceCurr }}</div>
      <div class="cursor-pointer" v-for="retailer in retailers" :key="retailer">
        <a v-bind:href="retailer.path">{{ retailer.label }}</a>
      </div>
    </div>
    <div class="flex flex-col my-10 px-2 text-white content-start md:flex-row md:mt-20 md:items-center">
      <div class="md:w-2/5">
        <h2 class="w-full text-3xl text-left md:text-5xl">Description</h2>
        <hr class="mt-3 mr-auto w-full md:w-4/5 md:border-white"/>
      </div>
      <p :class="{ 'desc-show': descShow }" class="full-desc text-justify mt-5 font-normal w-4/5 mx-auto md:w-3/5" ref="descObj">{{ bookDescText }}</p>
    </div>
    <div v-on:click="toggleDesc()" class="text-white hover:underline cursor-pointer md:hidden">See Full Description</div>
    <div class="overflow-hidden mt-20 mb-10 px-2 text-white md:flex md:flex-row md:mt-20 md:items-center">
      <div class="md:w-2/5">
        <h2 class="w-full text-3xl text-left md:text-5xl">Reviews</h2>
        <hr class="mt-3 mr-auto w-full md:w-4/5 md:border-white"/>
      </div>
      <div class="reviews block w-screen h-52 overflow-x-scroll overflow-y-hidden whitespace-nowrap my-5 md:flex md:justify-between md:w-1/2 md:my-12">
        <div class="review inline-block w-screen h-full md:w-3/7 md:box-border md:mx-3 md:text-2xl" v-for="review in reviews" :key="review.id">
          <div class="flex flex-col justify-around py-6 h-full">
            <p class="my-2 whitespace-normal">{{ review.review.description }}</p>
            <strong class="italic" v-html="review.review.reviewer"></strong>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p class="w-4/5 m-auto text-white text-right hover:underline cursor-pointer">See All Reviews &#8594;</p>
    </div>
    <div class="flex flex-col my-10 px-2 text-white content-start md:flex-row md:mt-20 md:items-center">
      <div class="md:w-2/5">
        <h2 class="w-full text-3xl text-left md:text-5xl">Trailer</h2>
        <hr class="mt-3 mr-auto md:w-4/5 md:border-white"/>
      </div>
      <iframe class="w-full md:w-3/5" width="560" height="315" src="https://www.youtube.com/embed/Aa0wr0k4WDs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div class="mt-20 px-2 text-white content-start md:flex md:flex-row md:mt-20 md:items-center">
      <div class="md:w-2/5">
        <h2 class="w-full text-3xl text-left md:text-5xl">The Author</h2>
        <hr class="mt-3 mr-auto w-full md:w-4/5 md:border-white"/>
      </div>
      <div class="h-auto p-5 shadow-xl my-4 md:flex md:flex-row-reverse md:w-3/5 md:items-center">
        <p class="text-justify mt-5 font-normal w-4/6 mx-auto" v-html="authorBio"></p>
        <div class="overflow-hidden rounded-full mx-auto my-5 w-40 h-40">
          <img :alt="'image of' + this.author" class="-mt-10" v-bind:src="authorImageURL"/>
        </div>
      </div>
    </div>
    <!-- <div> -->
      <!-- <span>{{ priceCurr }}</span> -->
      <!-- <span>{{ priceVal }}</span> -->
    <!-- </div> -->
    <!-- <p>{{ saleDate }}</p> -->
  </div>
</template>

<script>
import appService from '../app.service'
export default {
  name: 'Product',
  data () {
    return {
      metaTitle: '',
      metaIcon: '',
      title: '',
      author: '',
      authorImageURL: '',
      authorBio: '',
      bookCover: '',
      bookCoverCss: '',
      bookDesc: '',
      bookDescText: '',
      priceCurr: '',
      priceVal: '',
      saleDate: '',
      reviews: [],
      retailers: [],
      descShow: false
    }
  },
  mounted () {
    this.metaTitle = 'Product: ' + appService.getProduct().title
    this.title = appService.getProduct().title
    this.author = appService.getProduct().contributors[0].contributor.name
    this.authorImageURL = appService.getProduct().contributors[0].contributor.image
    this.authorBio = appService.getProduct().contributors[0].contributor.bio
    this.bookCover = appService.getProduct().image
    this.bookDesc = appService.getProduct().description
    this.bookDescText = this.filterStyle(this.bookDesc)
    this.priceCurr = appService.getProduct().prices[1].locale
    this.priceVal = appService.getProduct().prices[1].amount
    this.saleDate = appService.getProduct().sale_date.date
    this.reviews = appService.getProduct().reviews
    this.retailers = appService.getProduct().retailers
    this.bookCoverCss = {
      backgroundImage: `url(${this.bookCover})`
    }
    document.title = this.metaTitle
    appService.getObject()
    this.bookCover = this.imageSize(this.bookCover, '400')
    this.changeIcon(this.imageSize(this.bookCover, '150'))
  },
  methods: {
    changeIcon (icon) {
      document.querySelector('link[rel=icon]').href = icon
    },
    imageSize (img, size) {
      return img.replace('145', size)
    },
    filterStyle (value) {
      var div = document.createElement("div");
      div.innerHTML = value;
      var text = div.textContent || div.innerText || "";
      return text;
    },
    toggleDesc () {
        this.descShow = !this.descShow;
    }
  }
}
</script>

<style>
p.full-desc {
  height: 30vh;
  overflow: hidden;
  transition: all 1s;
}
p.desc-show {
  height: 90vh;
}
@media screen and (min-width: 768px){
  .title-card {
    background-color: #FFFFFFEA;
    color: #2c3e50;
    border-radius: 5px;
  }
  p.full-desc {
    height: auto;
  }
}
.reviews::-webkit-scrollbar {
  /* width: 1em; */
  display: none;
}
.reviews {
  scroll-snap-type: mandatory;
}
.reviews > .review {
  scroll-snap-align: start;
}
</style>
