<template>
    <div class="login">
        <button @click="handleClick">登录</button>
    </div>
</template>
<script>
    export default {
        methods : {
            handleClick(){
                document.cookie = "login=true";
            }
        }
    }
</script>