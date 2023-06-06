
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
                    done : true,
                },
                {
                    text : "Portare lo zweihänder in parata",
                    done : true,
                },
                {
                    text : "Riparare l'asta della guisarma",
                    done : true,
                },
                {
                    text : "Studiare le coreografie per il montante",
                    done : true,
                },
                {
                    text : "Sostituire l'ossidiana del macuahuitl",
                    done : true,
                },
                {
                    text : "Sezionare il gaesum",
                    done : true,
                },
            ]
        }
    },
    methods:{
        removeElement(elementIndex){
            this.toDoList.splice(elementIndex, 1);
        },

        addNewListElement(newListElement){
            if (this.newListElement !== ""){
                this.toDoList.push({text:newListElement, done:false});
                this.newListElement= "";
            }
        }
    },


}).mount("#vue");