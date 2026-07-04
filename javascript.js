(function() {
    // Replace with your actual Public Key
    emailjs.init({
      publicKey: "qtxdINQkJAQuE55xd",
    });
})();


document.getElementById('submit-to-goggle-sheet').addEventListener('submit', function(event) {
    event.preventDefault();

    // These IDs come from your EmailJS dashboard
    const serviceID = 'service_8llhajd';
    const templateID = 'template_188tyte';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert('Message Sent Successfully!');
            this.reset(); // Clear form after success
        }, (error) => {
            alert('Failed to send message. Please try again.');
            console.log('FAILED...', error);
        });
});
 
 var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");

        function opentab(tabname) {
            for (tablink of tablinks) {
                tablink.classList.remove("active-link");
            }
            for (tabcontent of tabcontents) {
                tabcontent.classList.remove("active-tab");

            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab")
        }
        
        var sidemenu = document.getElementById("sidemenu");

        function openmenu(){
            sidemenu.style.right = "0";
        }
        function closemenu(){
            sidemenu.style.right = "-200px";
        }