<template>
    <div class="btn-add"> 
        <span>+</span>
    </div>
</template>
<style scoped>
    .btn-add{
        background: #455A64;
        width: 65px;
        height: 65px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: 2.2rem;
        -webkit-box-shadow: 0px 0px 11px -3px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 11px -3px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 11px -3px rgba(0,0,0,0.75);
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        position: fixed;
        bottom: 50px;
        right: 50px;
    }
    .btn-add span{
        display:block;
        height: calc(16px * 4);
        color: #EEEEEE;
    }

    .btn-add:hover{
        background-color: #607D8B;
        -webkit-box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.75);
        width: 67px;
        height: 67px;
        transform:  rotate(360deg);
        -webkit-transform:  rotate(360deg);
    }
</style>
