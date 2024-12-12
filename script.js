function choice() {
    let productChoice = prompt("Are you looking for Hair Products? Face Cosmetics? or Body Moisturizer?");

    if (productChoice === null) {
        return; 
    }

    productChoice = productChoice.toLowerCase().trim(); 
    let page = '';

   
    if (productChoice.includes('hair')) {
        page = 'pedestal.html';
    } else if (productChoice.includes('face')) {
        page = 'pedestal2.html';
    } else if (productChoice.includes('body')) {
        page = 'pedestal3.html';
    }

    if (page) {
        window.location.href = page;
    } else {
        alert("It seems like you have not decided yet. Why don't you try to browse our site first?");
    }
}

$(document).ready(function() {
 
    $(".plus").click(function () {
        let quantity = parseInt($("#quantity").val());
        $("#quantity").val(quantity + 1);
    });

    $(".minus").click(function () {
        let quantity = parseInt($("#quantity").val());
        if (quantity > 0) {
            $("#quantity").val(quantity - 1);
        }
    });

    
    $(".atc").click(function () {
        let quantity = $("#quantity").val();
        alert("Added " + quantity + " item(s) to cart.");
    });

   
    const creatorData = {
        "Creator 1": {
            name: "Shanelle Flores",
            info: "<p>• Main Programmer </p><p>• Project Manager</p><p>• Information Gatherer</p>"
        },
        "Creator 2": {
            name: "Gherimo Liwanag",
            info: "<p>• Assistant Programmer </p><p>• Quality Assurance Tester</p><p>• Graphic Designer</p>"
        },
        "Creator 3": {
            name: "Cyril John Castillo",
            info: "<p>• System Analyst </p><p>• Quality Assurance Tester</p><p>• Graphic Designer</p>"
        },
        "Creator 4": {
            name: "Kara Debbie Ballares",
            info: "<p>• System Analyst</p><p>• Information Gatherer</p>"
        },
        "Creator 5": {
            name: "Eduard Aron Canaria",
            info: "<p>• Quality Assurance Tester </p><p>• Information Gatherer</p>"
        },
        "Creator 6": {
            name: "Jazzie Mea Nobles",
            info: "<p>• Project Manager</p><p>• Information Gatherer</p>"
        }
    };

   
    $(".name-btn").click(function () {
        const creatorName = $(this).data("creator"); 
        const creator = creatorData[creatorName]; 
        
       
        $("#creator-name").text(creator.name); 
        $("#creator-info").html(creator.info); 
    
        
        $(".info-box").fadeIn();
    });
    

    
    $(".close-btn").click(function () {
        $(".info-box").fadeOut();
    });
});
