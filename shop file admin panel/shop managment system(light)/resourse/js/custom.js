$(function(){

    $('#sidebarCollapseIn').on('click', function(){
        $('#sidebar, #content').toggleClass('active');
        $('#sidebarCollapseIn').removeClass('collapseinbtnde');
        $('#sidebarCollapseIn').toggleClass('collapseinbtnac');

        $('#sidebarCollapseOut').removeClass('btn2');
        $('#sidebarCollapseOut').toggleClass('collapsebtnde');
    });

    $('#sidebarCollapseOut').on('click', function(){
        $('#sidebar, #content').toggleClass('active');
        $('#sidebarCollapseIn').removeClass('collapseinbtnac');
        $('#sidebarCollapseOut').removeClass('collapsebtnde');

        $('#sidebarCollapseIn').toggleClass('collapseinbtnde');
        $('#sidebarCollapseOut').toggleClass('btn2');
    });

    $('#moblileClose').on('click', function(){
        $('#sidebar, #content').toggleClass('active');

        $('#sidebarCollapseIn').removeClass('collapseinbtnac');
        $('#sidebarCollapseOut').removeClass('collapsebtnde');
        $('#sidebarCollapseIn').toggleClass('collapseinbtnde');
        $('#sidebarCollapseOut').toggleClass('btn2');
    });

    $('#homemenu').on('click', function(){
        $('#home').addClass('active');
        $('#homemenu').addClass('activemenu');
        $('#addsales, #coustomerlist, #addpurchase, #purchaselist, #addproductitems, #stock').removeClass('activemenu');
        $('#salesform, #showcustomers, #purchases, #showpurchaselist, #productsitems, #totalstock').removeClass('active');
    });

    $('#addsales').on('click', function(){
        $('#salesform').addClass('active');
        $('#addsales').addClass('activemenu');;
        $('#homemenu, #coustomerlist, #addpurchase, #purchaselist, #addproductitems, #stock').removeClass('activemenu');
        $('#home, #showcustomers, #purchases, #showpurchaselist, #productsitems, #totalstock').removeClass('active');
    });

    $('#coustomerlist').on('click', function(){
        $('#showcustomers').addClass('active');
        $('#coustomerlist').addClass('activemenu');
        $('#homemenu, #addsales, #addpurchase, #purchaselist, #addproductitems, #stock').removeClass('activemenu');
        $('#home, #salesform, #purchases, #showpurchaselist, #productsitems, #totalstock').removeClass('active');
    });

    $('#addpurchase').on('click', function(){
        $('#purchases').addClass('active');
        $('#addpurchase').addClass('activemenu');
        $('#homemenu, #addsales, #coustomerlist, #purchaselist, #addproductitems, #stock').removeClass('activemenu');
        $('#home, #salesform, #showcustomers, #showpurchaselist, #productsitems, #totalstock').removeClass('active');
    });

    $('#purchaselist').on('click', function(){
        $('#showpurchaselist').addClass('active');
        $('#purchaselist').addClass('activemenu');
        $('#homemenu, #addsales, #coustomerlist, #addpurchase, #addproductitems, #stock').removeClass('activemenu');
        $('#home, #salesform, #showcustomers, #purchases, #productsitems, #totalstock').removeClass('active');
    });

    $('#addproductitems').on('click', function(){
        $('#productsitems').addClass('active');
        $('#addproductitems').addClass('activemenu');
        $('#homemenu, #addsales, #coustomerlist, #purchaselist, #addpurchase, #stock').removeClass('activemenu');
        $('#home, #salesform, #showcustomers, #showpurchaselist, #purchases,  #totalstock').removeClass('active');
    });

    $('#stock').on('click', function(){
        $('#totalstock').addClass('active');
        $('#stock').addClass('activemenu');
        $('#homemenu, #addsales, #coustomerlist, #addpurchase, #addproductitems, #purchaselist').removeClass('activemenu');
        $('#home, #salesform, #showcustomers, #purchases, #productsitems, #showpurchaselist').removeClass('active');
    });

    $("#searchcustomers").on('keyup', function(){
        var filters = $(this).val().toUpperCase();

        $("#customerslist tr").filter(function(){
            $(this).toggle($(this).text().toUpperCase().indexOf(filters) > -1);
        });
    });

    $("#searchpurchases").on('keyup', function(){
        var filters = $(this).val().toUpperCase();

        $("#purchaseslist tr").filter(function(){
            $(this).toggle($(this).text().toUpperCase().indexOf(filters) > -1);
        });
    });

    $("#searchitem").on('keyup', function(){
        var filters = $(this).val().toUpperCase();

        $("#itemlist tr").filter(function(){
            $(this).toggle($(this).text().toUpperCase().indexOf(filters) > -1);
        });
    });

    $("#searchproduct").on('keyup', function(){
        var filters = $(this).val().toUpperCase();

        $("#productlist tr").filter(function(){
            $(this).toggle($(this).text().toUpperCase().indexOf(filters) > -1);
        });
    });

    


});