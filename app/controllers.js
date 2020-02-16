app.controller('editorController', function ($scope) {

//    $("textarea").change(function () {
//        var converter = new showdown.Converter(),
//                text = $("textarea").val(),
//                html = converter.makeHtml(text);
//                
//        $("#Preview").html(html);
//    });

    $scope.SetText = function () {
        var converter = new showdown.Converter(),
                text = $("textarea").val(),
                html = converter.makeHtml(text);
        
        $scope.hh = html;
        //$("#Preview").html(html);
    };


});