$(function (){
    $( "#addContact" ).click(function() {
        var firstname = $("#firstname").val();
        var lastname = $("#lastname").val();
        var mail = $("#mail").val();

        if (CheckMail(mail) && CheckName(lastname) && CheckName(firstname)){

            var contact = new Contact.Builder().createContactWithProfessionalMail(
                Contact.Gender.MR, firstname, lastname,mail);

            Contact.Contacts.instance().add(contact);
        }else
        {
            alert("Check values !")
        }

    });

    $( "#cancelContact" ).click(function() {
        $("#firstname").val("");
        $("#lastname").val("");
        $("#mail").val("");
    });

    function CheckMail(mail)
    {
       return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
    }

    function CheckName(name)
    {
        return /^[A-Za-z ]+$/.test(name);
    }

});