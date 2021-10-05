<template>
  <main>
    <BusinessAreas/>
    <About/>
    <Partners/>
    <Editorial/>
    <Newsletter/>
    <ContactUs/>    
  </main>
</template>

<script>

// IMPORT COMPONENTS FROM 'MAIN COMPNENTS' FOLDER

import BusinessAreas from './Main Components/BusinessAreas.vue'
import About from './Main Components/About.vue'
import Partners from './Main Components/Partners.vue'
import Editorial from './Main Components/Editorial.vue'
import Newsletter from './Main Components/Newsletter.vue'
import ContactUs from './Main Components/ContactUs.vue'

export default {
    name: 'Main',
    components: {
      BusinessAreas,
      About,
      Partners,
      Editorial,
      Newsletter,
      ContactUs
    }
}
</script>

<style scoped lang='scss'>

</style>