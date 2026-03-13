const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab_content");

tabs.forEach(function(tab){
    tab.addEventListener("click",function(){
        //sets an id to each button
        let id = this.value;

        //remove class active from all buttons
        tabs.forEach(function(t){
            t.classList.remove("active");
        });

        //add class active to the selected button
        this.classList.add("active");

        //set display of all the content to none
        contents.forEach(function(content){
            content.style.display = "none";
        });

        //set display of the current selected content to block
        document.getElementById(id).style.display = "block";
    })
});





const faqs = document.querySelectorAll(".faq");
const faq_contents = document.querySelectorAll(".content_faq");

faqs.forEach(function(faq){
    faq.addEventListener("click",function(){
        //sets an id to each button
        let id = this.value;

        //remove class active from all buttons
        faqs.forEach(function(f){
            f.classList.remove("active");
        });

        //add class active to the selected button
        this.classList.add("active");

        //set display of all the content to none
        faq_contents.forEach(function(faq_content){
            faq_content.style.display = "none";
        });

        //set display of the current selected content to block
        document.getElementById(id).style.display = "block";
    })
});



