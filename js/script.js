var app = new Vue ({
    el: '#app',
    
    data: {
        note: '',
        noteList: []
    },

    methods: {
        pushList: function (){
            let noteSelector = document.getElementById('note-value');
            if (noteSelector.value !=='') {
                this.noteList.push(this.note);
                this.note = "";
                console.log(this.noteList);
            } else {
                alert('Scrivi una nota nell\'input');
            }
        },
        deleteFunction: function (){
            let liElement = document.getElementById('li-element');
            liElement.remove();
        }
    }
})

Vue.config.devtools = true; 
