var app = new Vue ({
    el: '#app',
    
    data: {
        note: '',
        noteList: [],
    },

    methods: {
        pushList: function (){
            
            let inputValue = document.getElementById('reset');

            this.noteList.push(this.note);
            inputValue.value = "";
            console.log(this.noteList);

        }
    }
})

Vue.config.devtools = true; 
