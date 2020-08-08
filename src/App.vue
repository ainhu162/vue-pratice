<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr/>
                <select v-model='alertAnimation' class='form-control'>
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>
                <br>
                <button @click='show=!show' class='btn btn-primary'>Show Alert</button>
                <br><br>
                <transition :name='alertAnimation'>
                    <div v-if='show' class="alert alert-info">This is some info</div>
                </transition>
                 <transition :name='alertAnimation' type='animation'>
                    <div v-if='show' class="alert alert-info">This is some info</div>
                </transition>
                <transition :name='alertAnimation' 
                    enter-active-class='animate__animated animate__bounce'
                    leave-active-class='animate__animated animate__shake'
                >
                    <div v-if='show' class="alert alert-info">This is some info</div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false,
                alertAnimation: 'fade'
            }
        }
    }
</script>

<style>
    .fade-enter {
        opacity: 0;
    }
    .fade-enter-active {
        transition: opacity 1s;
        opacity: 1;
    }
    .fade-leave {

    }
    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }
    .slide-enter {
        /* transform: translateY(20px) */
    }

    .slide-enter-active{
        animation: slide-in 1s ease-in-out forwards;
        
    }
    .slide-leave{
        /* transform: translateY(0px) */
    }
    .slide-leave-active{
        animation: slide-out 1s ease-in-out forwards;
        opacity: 0;
        transition: opacity 1s;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px)    
        }
        to {
            transform: translateY(0)
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(20px);
        }
    }
</style>
