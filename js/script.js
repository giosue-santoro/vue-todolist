var app = new Vue ({
    el: '#app',
    
    data: {
        note: '',
        noteList: []
    },

    methods: {
        pushList: function (){
            this.noteList.push(this.note);
            this.note = "";
            console.log(this.noteList);
        },
        deleteFunction: function (){
            let liElement = document.getElementById('li-element');
            liElement.remove();
        }
    }
})

Vue.config.devtools = true; 
