<template>
  <section>
    <div id="newsletter">
      <div id="nl_text">
        <h6>newsletter</h6>
        <h3><span class="highlighted">Know</span> First</h3>
        <p>Follow closely and receive content about our company and the news of the current market.</p>
      </div>
      <div id="nl_form">
        <input type="text" name="" placeholder="Name" id="">
        <input type="email" name="" placeholder="Email" id="">
        <button type="submit" class="full_btn">subscribe</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'Newsletter'
}
</script>

<style scoped lang="scss">
@import '~@fortawesome/fontawesome-free';

@import '@/style/generals.scss';

section {
  height: 25rem;
  width: 100%;
  background-image: url(~@/assets/img/bg-1.jpg);
  background-position: center;
  display: flex;
  justify-content: center;

  #newsletter{
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    #nl_text{
      width: 40%;

      h3{
        color: #FFFFFF;
        margin: 20px 0;
      }

      p {
        color: $manatee;
      }
    }

    #nl_form {
      width: 40%;
      display: flex;
      flex-direction: column;

      input {
        height: 45px;
        margin-bottom: 15px;
        padding-left: 10px;
        opacity: 0.5;
        border: none;
        outline: none;
        border-radius: 3px ;

      }

      button {
        width: 150px;
      }
    }
  }
}
</style>