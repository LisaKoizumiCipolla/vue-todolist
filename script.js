
const {createApp} = Vue;

createApp({
    data(){
        return{
            toDoList: [
                {
                    text : "Affilare l'urumi",
                    done : true,
                },
                {
                    text : "Riporta in auge la spatha",
                    done : false,
                },
                {
                    text : "Portare lo zweihänder in parata",
                    done : false,
                },
                {
                    text : "Riparare l'asta della guisarma",
                    done : true,
                },
                {
                    text : "Studiare le coreografie per il montante",
                    done : false,
                },
                {
                    text : "Sostituire l'ossidiana del macuahuitl",
                    done : false,
                },
                {
                    text : "Sezionare il gaesum",
                    done : false,
                },
            ],
            newListElement : "",
        }
    },
    methods:{
        removeElement(elementIndex){
            this.toDoList.splice(elementIndex, 1);
        },

        addNewListElement(){
            if (this.newListElement !== ""){
                this.toDoList.push({text:this.newListElement, done:false});
                this.newListElement= "";
            }
        },

        textDecorationToggle(element){
            element.done = !element.done;
        },
    },



}).mount("#vue");