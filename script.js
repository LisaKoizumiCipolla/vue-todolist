
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

        textDecorationToggle(){
            if(this.newListElement.done !== false){
                this.newListElement.done = true;
                console.log("You still have to do that");
            } else {
                this.newListElement.done = false;
                console.log("You already did it");
            }
        },
    },



}).mount("#vue");