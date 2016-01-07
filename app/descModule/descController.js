angular.module('desc-controller', ['desc-service'])
    .controller('descController', function($scope, descService) {

    	$scope.accessories = descService.getAccessories();

		var editor = ace.edit("editor")
		editor.setTheme("ace/theme/monokai");
        editor.getSession().setMode("ace/mode/javascript");

        editor.renderer.setShowGutter(false);
        editor.setHighlightActiveLine(false);
        editor.setReadOnly(true);

        $scope.selectItem = function(item) {
            item.selected = !item.selected;
            computeResult();
        };

        function computeResult() {
            result = "";

            for(var categoryI in $scope.accessories) {
                var category = $scope.accessories[categoryI];


                result += category.name + "\n\n";

                for(var itemI in category.list) {
                    var item = category.list[itemI];
                    if(item.selected) {
                        result += item.name + " " + item.desc + "\n";
                    }
                }

                result += "\n";
            }

            editor.setValue(result, 1);
        }
});