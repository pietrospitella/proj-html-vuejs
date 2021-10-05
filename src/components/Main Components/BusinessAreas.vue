<template>
  <section>
    <div id="business_cont">
      <div id="text" class="box">
        <h6>our business areas</h6>
        <h3>Logistics Services</h3>
        <p>We are leaders in providing logistics services with a set of cutting edge technologies and a team of experienced and renowned professionals.</p>
        <div id="adjectives">
          <span>Tradition</span>
          <span>Quality</span>
          <span>Security</span>
        </div>
        <button class="full_btn">read more</button>
      </div>
      <div id="first" class="box">
          <img src="@/assets/img/gallery-3.jpg" alt="">
          <h5>Technology</h5>
          <p>Focused on developing technology solutions adapted to our client's needs.</p>
      </div>
      <div id="second" class="box">
        <img src="@/assets/img/gallery-5.jpg" alt="">
        <h5>Transport</h5>
        <p>We develop operational strategies to improve logistical efficiency.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'BusinessAreas'
}
</script>

<style scoped lang="scss">

// IMPORT MAIN CSS

@import '@/style/generals.scss';

section {
  background-color: $saltpan;
  height: 35rem;

  #business_cont{
    height: 100%;
    width: 60%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    #text {
      
      #adjectives{
        font-size: 14px;
        font-weight: 400;
        color: $elf_green;
        margin: 20px 0;

        span {
          background-color: rgba($color: $elf_green, $alpha: 0.2);
          margin-right: 10px;
          padding: 8px 10px;
          border-radius: 4px;
        }
      }
    }

    #text{
      h6 {
        color: $elf_green;
      }

      p {
        color: $dove_gray;
      }
    }

    #first, #second {
      width: 270px;
      background-color: #FFFFFF;
      border-radius: 10px;
      padding: 20px;
      display: flex;

      img {
        width: 230px;
        padding: 15px;
      }

      h5 {
        padding: 15px;
      }

      p {
        padding: 0 15px;
      }
    }
  }
}

p {
  font-size: 12px;
  font-weight: 400;
}

button {
  width: 140px;
  color: $saltpan;
}

</style>