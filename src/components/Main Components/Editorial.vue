<template>
  <section>
    <div id="editorial">
      <h6>our editorial content</h6>
      <h3>Lastest <span class="highlighted_txt">News</span></h3>
      <div id="sub_w_btn">
        <p id="subtitle">Every week we pulbish content about what is best in the business world.</p>
        <button class="full_btn">see all</button>
      </div>
      <div id="articles_sect">
        <div v-for="(article, index) in articles" :key="index" class="article">
          <img :src="require(`../../assets/img/${article.image}`)" :alt="article.index">
          <div class="over"></div>
          <p>{{article.title}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

// IMPORT JSON FILE WITH EDITORIAL'S STUFF

import editorial from '@/data/editorial.json';

export default {
    name: 'Editorial',
    data(){
      return{
        articles: editorial
      }
    }
}
</script>

<style scoped lang="scss">

// IMPORT MAIN CSS

@import '@/style/generals.scss';

section{

  height: 45rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;


  #editorial{
    width: 60%;
    height: 70%;
    margin-bottom: 50px;

    h3 {
      margin: 20px 0;
    }

    #sub_w_btn{
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      height: 50px;
      margin-bottom: 30px;
    }

    #articles_sect{
      width: 100%;
      height: 70%;
      display: flex;
      justify-content: space-between;

      .article{
        width: calc((100% / 3) - 10px);
        height: 100%;
        position: relative;
        border-radius: 10px ;
        overflow: hidden;

        img {
          height: 100%;
        }

        .over{
          background: rgba($color: #000000, $alpha: 0.5);
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;

        }

        p {
          position: absolute;
          bottom:  0;
          padding: 0 10px 10px;
          text-align: center;
          color: #FFFFFF;
          font-weight: 600;
          font-size: 20px;
        }
      }
    }
  }
}

</style>