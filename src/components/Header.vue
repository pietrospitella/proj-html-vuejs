<template>
  <header>
      <div id="cont">
        <div id="top_bar">
            <div id="top_info">
                <div id="top_left">
                    <span class="fas fa-clock"></span><h5>Open Hours: Mon - Sat - 9:00 - 18:00</h5>   
                </div>
                <div id="top_right">
                    <div class="top_right_item" v-for="(info, index) in topbar" :key="index">
                        <span :class="info.icon"></span><h5>{{info.text}}</h5>
                    </div>
                </div>               
            </div>
        </div>
        <div id="wrapper">
            <div id="jumbotron">
                <div id="jumbo_cont">
                    <nav>
                        <div id="logo">
                            <a href=""><span>NEX</span>GEN</a>
                        </div>
                        <div id="nav_menu">
                            <ul>
                                <li v-for="(menu, index) in menus" :key="index">
                                    <a :href="menu.link">{{menu.section}}</a>
                                </li>
                                <li>
                                    <button class="full_btn">get in touch</button>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div id="main">
                        <h1><span id="logistics">Logistics</span> that goes further.</h1>
                        <p>For 20 years working with the most innovative in the field of transport.</p>
                        <div id="main_btns">
                            <button class="full_btn">get in touch</button>
                            <button class="empty_btn">read more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
  </header>
</template>

<script>

import topBarInfo from '../data/topbar.json';
import navbarMenu from '../data/nav_menu.json';

export default {
    name: 'Header',
    data(){
        return{
            topbar: topBarInfo,
            menus: navbarMenu
        }
    }
}
</script>

<style scoped lang='scss'>

@import '~@fortawesome/fontawesome-free';

@import '../style/generals.scss';

    header {

        #cont{

            #top_bar{
                height: 40px;
                background-color: #21333E;
                display: flex;
                justify-content: center;
                align-items: center;

                #top_info{
                    width: 60%;
                    color: #C0C3D0;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    font-size: 20px;

                    #top_left, #top_right{
                        display: flex;
                        align-items: center;

                        .top_right_item{
                            display: flex;
                            margin:  0 15px;
                        }
                        
                        svg {
                        margin-right: 10px;
                        }
                    }
                   
                    
                }
            }

            #wrapper{
                height: calc(80vh - 40px);
                background-image: url(../assets/img/jumbo.jpg);
                background-repeat: no-repeat;
                background-size: cover;

                #jumbotron{
                    height: 100%;
                    background-color: rgba($color: #000000, $alpha: 0.6);

                    #jumbo_cont{
                        color: #FFFFFF;
                        margin: 0 auto;
                        width: 60%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;
                        justify-content: center;
                        position: relative;

                        nav {
                            display: flex;
                            justify-content: space-between;
                            width: 100%;
                            height: 10%;
                            position: absolute;
                            top: 10px;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;

                            #logo {
                                letter-spacing: 6px;
                                a {
                                    text-decoration: none;
                                    color: $regent_gray;
                                    font-weight: 700;
                                    font-size: 18px;

                                    span {
                                        background-color: rgba(8, 129, 129, 0.4);
                                        color: #00a6a6;
                                        border-radius: 50px 0 0 50px;
                                        padding: 10px 0px 10px 30px ;
                                    }

                                }
                                
                            }
                            
                            #nav_menu{
                                ul {
                                    list-style: none;
                                    display: flex;
                                    text-align: center;

                                    li:not(button){
                                        display: flex;
                                        text-align: center;
                                        margin: 0 20px;
                                        
                                        a {
                                        align-self: center;
                                        text-decoration: none;
                                        color: white;
                                        text-transform: uppercase;
                                        }
                                    }
                                    
                                }

                            }


                        }

                        #main{
                            width: 50%;
                            padding: 0 100px;

                            #logistics{
                                // used color $elf_green in rgba to make transparency
                                background: linear-gradient(120deg, rgba(8, 129, 129, 0.6) 0%, rgba(8, 129, 129, 0.6) 100%);
                                background-repeat: no-repeat;
                                background-size: 100% 40%;
                                background-position: 0 90%; 
                            }

                            p {
                                font-size: 18px;
                            }

                            #main_btns{
                                width: 300px;
                                button {
                                    margin-right: 10px;
                                    font-size: 14px;
                                    font-weight: 500;
                                    font-family: 'Poppins', sans-serif;
                                }
                            }
                        }
                    }
                }
            }
        }
        
    }

h5 {
    font-size: 12px;
    font-weight: 300;
}

</style>