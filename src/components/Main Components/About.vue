<template>
  <section>
    <div id="about_left">
      <div id="infographic">
        <h6>about the network</h6>
        <h3><span class="highlighted">The</span> Company</h3>
        <p>With all of this expertise and capability comes an unrivalled commitment to customer service.</p>
        <div id="features">
          <div class="feature">
            <div class="percentage">
              <h4>0%</h4>
            </div>
            <div class="text">
              <h5>Leadership</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            </div>
          </div>
          <div class="feature">
            <div class="percentage">
              <h4>0%</h4>
            </div>
            <div class="text">
              <h5>Psycholpgy</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            </div>
          </div>
          <div class="feature">
            <div class="percentage">
                <h4>1%</h4>
              <div id="one_perc">
              </div>
            </div>
            <div class="text">
              <h5>Flexibility</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="about_right"></div>
  </section>
</template>

<script>
export default {
    name: 'About'
    
}
</script>

<style scoped lang="scss">

@import '~@fortawesome/fontawesome-free';

@import '@/style/generals.scss';

section {

  width: 100%;
  height: 60rem;
  position: relative;
  color: #FFFFFF;
  
  &::before{
    background-image: url(~@/assets/img/divider.png);
    background-size: 100px 50px;
    width: 100px;
    height: 50px;
    opacity: 0.2;
    position: absolute;
    top: -25px;
    left: 46.5%;
    content: "";
  }

  &::after{
    background-image: url(~@/assets/img/divider.png);
    background-size: 100px 50px;
    width: 100px;
    height: 50px;
    opacity: 0.2;
    position: absolute;
    bottom: -25px;
    left: 46.5%;
    content: "";
  }

  #about_left, #about_right {
    width: 50%;
    height: 100%;
    float: left;
  }

  #about_left{
    background-color: $woodsmoke;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    #infographic{
      // margin-left: 40%;

      h3 {
        margin: 30px 0;
        
      }

      p {
        width: 500px;
        margin-bottom: 50px;
      }

      #features{
        .feature{
          width: 100%;
          display: flex;
          align-items: center;
          margin-bottom: 50px;

          .percentage{
            width: 100px;
            height: 100px;
            border: 8px solid rgba($color:$dove_gray, $alpha: 0.2);
            text-align: center;
            line-height: 80px;
            border-radius: 50px;
            margin-right: 20px;
            position: relative;

            #one_perc{
              border: 8px solid $elf_green;
              width: 100px;
              height: 100px;
              border-radius: 50px;
              position: absolute;
              top: -8px;
              left:  -8px;
              clip: rect(50px,80px,55px, 0);

            }

            h3 {
              margin: 0;
            }
          }

          .text{
            
            h5 {
              width: 150px;
            }

            p{
              margin: 0;
              width: 70%;
            }
          }
        }
      }
    }
  }

  #about_right{
    background-image: url(~@/assets/img/about-5.jpg);
    background-repeat: no-repeat;
    background-size: cover;
  }
  
}


</style>