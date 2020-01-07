<template>
    <div id="main">
        <div id="title">
            <h1>Nos Sponsors</h1>
        </div>
        <div class="slider" id="sld1">
            <figure>
                <img src="../assets/pictures/1test1000x760.png" alt="imgTest1"><h3 class="desc">Test1</h3>
                <img src="../assets/pictures/2test1000x760.png" alt="imgTest2"><h3 class="desc">Test2</h3>
                <img src="../assets/pictures/3test1000x760.png" alt="imgTest3"><h3 class="desc">Test3</h3>
                <img src="../assets/pictures/4test1000x760.png" alt="imgTest4"><h3 class="desc">Test4</h3>
                <img src="../assets/pictures/1test1000x760.png" alt="imgTest1"><h3 class="desc">Test1</h3>
            </figure>
        </div>
        <div class="slider" id="sld2">
            <figure>
                <img src="../assets/pictures/1test1000x760.png" alt="imgTest1">
                <img src="../assets/pictures/2test1000x760.png" alt="imgTest2">
                <img src="../assets/pictures/3test1000x760.png" alt="imgTest3">
                <img src="../assets/pictures/4test1000x760.png" alt="imgTest4">
                <img src="../assets/pictures/1test1000x760.png" alt="imgTest1">
            </figure>

            <!-- toutes les images dans les sliders doivent avoir les mêmes dimensions-->
        </div>
    </div>
</template>

<script>
export default {

}
</script>
<style scoped>

div#main div#title {
    position: absolute;
    top: 100px;
    left: 30%;
    min-width: 210px;
    width: 40%;
    background-color: rgb(252, 220, 116);
    border: 0 solid black;
    border-radius: 5em;
    text-align: center;

    color: #707070;
    font-size: 17px;
    box-shadow: 0px 2px 10px #909090; 
}

div.slider { 
    position: absolute;
    top: 220px;
    width: 40%; 
    max-width: 1000px; 
    overflow: hidden;
    box-shadow: 0px 2px 10px #909090; 
}

div.slider#sld1 {
    left: 10%;
    border: 0 solid black;
    border-top-left-radius: 5%;
    border-bottom-left-radius: 5%;
}

div.slider#sld2 {
    left: 50%;
    border-top-right-radius: 5%;
    border-bottom-right-radius: 5%
}

@keyframes slidy {
    0% { left: 0%; } /* toujours vrai */ 
    20% { left: 0%; } 
    25% { left: -100%; } /* premier pallier à 100 / nbr de slides% { left - 100%}*/
    45% { left: -100%; }
    50% { left: -200%; } /* second pallier à 2 * 100 / nbr de slides% { left - 200%} puis idem pour chaque palliers*/
    70% { left: -200%; }
    75% { left: -300%; }
    95% { left: -300%; }
    100% { left: -400%; } /* 100% { left: -(nbr de slides*100 - 100)%} */
}

div.slider figure {
    position: relative;
    width: 500%;     /* width: nbr d'images dans le carrousel *100 % */
    margin: 0;
    padding: 0;
    font-size: 0;
    left: 0;
    text-align: left;
    animation: 30s slidy infinite;
}

div.slider figure img { 
    width: 20%; 
    height: auto; 
    float: left; 
}

</style>

