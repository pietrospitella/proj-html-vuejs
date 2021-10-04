<template>
  <section>
    <div id="partners">
      <div v-for="(partner, index) in partners" :key="index" class="item">
        <img :src="require(`../../assets/img/${partner.path}`)" :alt="partner.name">
      </div>
    </div>
  </section>
</template>

<script>
import partners from '@/data/partners.json';

export default {
    name: 'Partners',
    data(){
      return{
        partners: partners,
      }
    }
}
</script>

<style scoped lang="scss">

@import '~@fortawesome/fontawesome-free';

@import '@/style/generals.scss';

section {
  background-color: $saltpan;
  height: 15rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;


  #partners{
    width: 60%;
    height: 60%;
    display: flex;

    .item {
      width: calc(100% / 6);
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      img{
        height: 25px;
        opacity: 0.3;
      }
    }

  }
}

</style>