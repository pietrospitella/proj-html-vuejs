<template>
  <section>
    <div id="contact_us">
      <div id="left_form">
        <h6>send a message</h6>
        <h3>Get in <span class="highlighted_txt">Touch</span></h3>
        <p>We will respond to your message as soon as possible.</p>
        <div id="form">
          <div class="row">
            <input type="text" placeholder="Name" name="" id="name_cell">
            <input type="email" placeholder="Email" name="" id="email_cell">
          </div>
          <div class="row">
            <input type="number" placeholder="Phone" name="" id="phone_cell">
            <select name="" id="more_info">
              <option value="">More Info</option>
            </select>
          </div>
          <div class="row">
            <textarea name="" placeholder="Message" id="" cols="30" rows="10"></textarea>
          </div>
          <div class="row">
            <button class="full_btn" type="submit">send</button>
          </div>
        </div>
      </div>
      <div id="right_info">
        <h5>Example Inc.</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Praesent diam lacus, dabipus sed imperdiet consectetur.</p>
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
          <button class="empty_btn">view map</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'ContactUs'
}
</script>

<style scoped lang="scss">

// IMPORT ICONS & MAIN CSS

@import '~@fortawesome/fontawesome-free';

@import '@/style/generals.scss';

section {
  height: 45rem;
  width: 100%;
  background-color: $saltpan;
  display: flex;
  justify-content: center;
  align-items: center;

  #contact_us{
    width: 60%;
    height: 70%;
    display: flex;
    justify-content: space-between;

    #left_form{
      width: 60%;
      height: 100%;

      #form{
        width: 100%;
        display: flex;
        flex-direction: column;
        
        .row {
          display: flex;

          input, select {
            height: 40px;
            width: 50%;
            padding-left: 15px;
          }

          textarea {
            padding: 15px;
            width: 100%;
            height: 200px;
          }

          input, select, textarea {
            border: none;
            outline: none;
            border-radius: 5px;
            margin: 0 10px 10px 0;
            background: rgba($color: $dove_gray, $alpha: 0.2);
            color: $dove_gray;
            font-family: $main_font;
          }

          button {
            margin-top: 20px;
          }
        }
  
      }
    }

    #right_info{
      width: 30%;
      height: 100%;

      p {
        margin: 15px 0;        
      }

      #contacts{
        color: $elf_green;
        font-size: 14px;

        .info{
          display: flex;
          align-items: center;
          margin-bottom: 20px;

          h5 {
            font-weight: 300;
            font-size: 16px;
          }

          svg {
            width: 40px;
            height: 40px;
            padding: 12px;
            margin-right: 10px;
            background-color: rgba($color: $elf_green, $alpha: 0.2);
            border-radius: 50% ;
          }

        }

        button {
          color: $elf_green;
        }
      }
    }
  }
}
</style>