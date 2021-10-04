<template>
  <footer>
    <div id="footer_sect">
      <div id="footer_contacts">
        <div class="logo">
          <a href=""><span>NEX</span>GEN</a>
        </div>
        <p>A functional HTML Template for Corporate & Business.</p>
        <div id="contacts">
          <div class="info">
            <span class="fas fa-phone-alt"></span><h5>+1 (305) 1234-5678</h5>
          </div>
          <div class="info">
            <span class="fas fa-envelope"></span><h5>hello@example.com</h5>
          </div>
          <div class="info">
            <span class="fas fa-map-marker-alt"></span><h5>Main Avenue, 987</h5>
          </div>
          <button class="empty_btn">get in touch</button>
        </div>
      </div>
      <div id="footer_lists">
        <div v-for="(list, index) in lists" :key="index" class="list_box">
          <h5>{{list.group}}</h5>
          <ul>
            <li v-for="(item, index) in list.items" :key="index">
              <a href=""><i class="fas fa-chevron-right"></i> {{list.items[index].name}}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="down_bar">
      <div id="down_text">
        <p>Enjoy the low price. We are tracking any intention of piracy.</p>
        <p>&copy; 2020 NEXGEN is Proudly Powered by <a href="">Codings</a>.</p>
      </div>
    </div>
  </footer>
</template>

<script>
import footerLists from '@/data/footer_lists.json';

export default {
  name: 'Footer',
  data(){
    return{
      lists: footerLists
    }
  }
}
</script>

<style scoped lang='scss'>
@import '~@fortawesome/fontawesome-free';

@import '../style/generals.scss';

footer {
  height: 30rem;
  width: 100%;
  background-image: url(~@/assets/img/bg-10.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  #footer_sect{
    width: 60%;
    height: 60%;
    display: flex;

    #footer_contacts{
      height: 100%;
      width: 25%;

      .logo{
        margin: 10px 0;
      }

      p {
        margin: 25px 0 15px; 
        color: #FFFFFF;
        opacity: 0.5;
      }

      #contacts{
        color: #FFFFFF;
        font-size: 14px;

        .info{
          display: flex;
          align-items: center;
          margin-bottom: 5px;
          opacity: 0.5;

          h5 {
            font-weight: 300;
            font-size: 13px;
          }

          svg {
            width: 30px;
            height: 30px;
            padding: 8px;
            border-radius: 50% ;
          }

        }
      }
    }

    #footer_lists{
      height: 100%;
      width: 75%;
      display: flex;
      justify-content: space-between;

      .list_box{
        height: 100%;
        width: calc((100% / 3) - 10px);
        border-radius: 5px;
        background-color: rgba($color: $dove_gray, $alpha: 0.1);
        padding: 40px 30px;
        text-transform: capitalize;

        h5 {
          color: #FFFFFF;
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 10px;
        }

        ul {
          list-style: none;
          
          li a{
            text-decoration: none;
            color: #FFFFFF;
            opacity: 0.7;
            font-size: 12px;
          }
        }
      }
    }

  }

  #down_bar{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: #000000;
    display: flex;
    justify-content: center;
    

    #down_text{
      display: flex;
      align-items: flex-end;      
      justify-content: space-between;
      width: 60%;
      height: 100%;

      p {
        margin: 0;
        font-size: 12px;

        a {
          text-decoration: none;
          color: $elf_green;
        }
      }
    }
  }
}

</style>