<template>        
    <div id="testimonial" class="my-container">
        <Slick ref="slick" class="slicked" :options="slickOptions">

            <div class="slide">
                <figure>
                    <img :src="require('../assets/img/slide1.jpg')" alt="">
                    <div>
                        <figcaption>
                            Client testimonial
                        </figcaption>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eligendi nesciunt quo consequuntur magni dicta ipsa quibusdam, libero labore ducimus neque. Dolorem atque nihil repudiandae consequuntur harum soluta cupiditate deleniti. <br>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sed repellat alias quam enim aspernatur ex. Repellat voluptatem dignissimos odit quis iure mollitia, porro ut repudiandae consectetur? Recusandae, doloremque qui? <br>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eos, qui hic architecto alias possimus veritatis facilis numquam quibusdam tempora nihil quis cupiditate ex soluta minima laborum enim temporibus distinctio.
                        </p>
                    </div>
                </figure>
            </div>

            <div class="slide">
                <figure>
                    <img :src="require('../assets/img/slide2.jpg')" alt="">
                    <div>
                        <figcaption>
                            Client testimonial
                        </figcaption>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eligendi nesciunt quo consequuntur magni dicta ipsa quibusdam, libero labore ducimus neque. Dolorem atque nihil repudiandae consequuntur harum soluta cupiditate deleniti. <br>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat necessitatibus suscipit quasi officia ab! Quaerat repellat asperiores iste nihil eaque vero dicta. Sit at aspernatur assumenda eligendi earum ipsam libero? <br>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolorem cum, laudantium qui tempora eius, doloribus architecto dignissimos officiis assumenda fugit earum facere quidem beatae molestiae aliquam! Odio, nulla. Repellendus!
                        </p>
                    </div>
                </figure>
            </div>

            <div class="slide">
                <figure>
                    <img :src="require('../assets/img/slide1.jpg')" alt="">
                    <div>
                        <figcaption>
                            Client testimonial
                        </figcaption>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eligendi nesciunt quo consequuntur magni dicta ipsa quibusdam, libero labore ducimus neque. Dolorem atque nihil repudiandae consequuntur harum soluta cupiditate deleniti. <br>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sed repellat alias quam enim aspernatur ex. Repellat voluptatem dignissimos odit quis iure mollitia, porro ut repudiandae consectetur? Recusandae, doloremque qui? <br>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eos, qui hic architecto alias possimus veritatis facilis numquam quibusdam tempora nihil quis cupiditate ex soluta minima laborum enim temporibus distinctio.
                        </p>
                    </div>
                </figure>
            </div>

            <div class="slide">
                <figure>
                    <img :src="require('../assets/img/slide2.jpg')" alt="">
                    <div>
                        <figcaption>
                            Client testimonial
                        </figcaption>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eligendi nesciunt quo consequuntur magni dicta ipsa quibusdam, libero labore ducimus neque. Dolorem atque nihil repudiandae consequuntur harum soluta cupiditate deleniti. <br>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat necessitatibus suscipit quasi officia ab! Quaerat repellat asperiores iste nihil eaque vero dicta. Sit at aspernatur assumenda eligendi earum ipsam libero? <br>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolorem cum, laudantium qui tempora eius, doloribus architecto dignissimos officiis assumenda fugit earum facere quidem beatae molestiae aliquam! Odio, nulla. Repellendus!
                        </p>
                    </div>
                </figure>
            </div>
            
        </Slick>
    </div>
</template>


<script>
import Slick from 'vue-slick';
export default {
    name: 'testimonial',
    components: {
        Slick
    },
    data() {
        return {
            slickOptions: {
                //options can be used from the plugin documentation
                slidesToShow: 1,
                infinite: true,
                accessibility: true,
                adaptiveHeight: false,
                arrows: false,
                dots: true,
                draggable: true,
                edgeFriction: 0.30,
                swipe: true,          
                autoplay: true,
                autoplaySpeed: 5000,
            }
        };
    },
    method: {
        next() {
            this.$refs.slick.next()
        },
        prev() {
            this.$refs.slick.prev()
        },
        reInit() {
            // Helpful if you have to deal with v-for to update dynamic lists
            this.$refs.slick.reSlick()
        }
    }
}
</script>
