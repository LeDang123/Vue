<template>
  <header>
    <slot name="title"></slot>
    <slot name="text"></slot><hr/>
    <h1>Please fill out our form</h1>
    <form>
        <div id="form-header">
            <slot name="form-header"></slot>
        </div>
        <div id="form-fields">
            <slot name="form-fields"></slot>
        </div>
        <div id="form-controls">
            <slot name="form-controls">
                <button v-on:click="handleSubmit">Submit</button>
            </slot>
        </div>
        <div id="useful-links">
            <ul>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
                <li><a href="#">Link 4</a></li>
            </ul>
        </div>
    </form>
  </header>
</template>

<script>

</script>

<style scoped>
form{
    text-align: center;
    align-items: center;
    max-width: 100%;
    margin: 0 auto;
}
h2{
    color:brown;
}
hr{
    margin: 20px;
}
#useful-links ul{
    padding: 0;
}
#useful-links li{
    display: inline-block;
    margin-right: 10px;
}
form > div{
    padding: 20px;
    background: #eee;
    margin: 20px 0;
}
#form-header{
    background: #ddd;
    border: 1px solid #bbb;
}
#form-fields{
    background: #ddd;
    border: 1px solid #bbb;
}

#form-fields > input{
    background: #ddd;
    border: 1px solid #bbb;
}
</style>