angular.module('desc-controller', ['desc-service'])
    .controller('descController', function($scope, descService) {

    	$scope.accessories = descService.getAccessories();
        $scope.newItems = [];

        for(var categoryI in $scope.accessories) {
            $scope.newItems.push({});
        }


            var introEditor = initEditor("introEditor", true, descService.getIntro());
        var outroEditor = initEditor("outroEditor", true, descService.getOutro());
        var resultEditor = initEditor("resultEditor", false, computeResult());

        introEditor.on('change', function() { resultEditor.setValue(computeResult(), 1); });
        outroEditor.on('change', function() { resultEditor.setValue(computeResult(), 1); });


        $scope.selectCheckBox = function(item) {
            resultEditor.setValue(computeResult(), 1);
        };
        $scope.selectItem = function(item) {
            item.selected = !item.selected;
            resultEditor.setValue(computeResult(), 1);
        };

        $scope.newItem = function(index) {
            var name = $scope.newItems[index].name;
            var desc = $scope.newItems[index].desc;
            if(name) {
                $scope.accessories[index].list.push({name: name, desc: desc});
                $scope.newItems[index].name = "";
                $scope.newItems[index].desc = "";
            }
        };

        function computeResult() {
            result = "";

            result += introEditor.getValue() + "\n";

            for(var categoryI in $scope.accessories) {
                var category = $scope.accessories[categoryI];

                for(var itemI in category.list) {
                    var item = category.list[itemI];
                    if (item.selected) {
                        result += category.name + "\n" + getSelectedItemList(category.list) + "\n";
                        break;
                    }
                }
            }

            result += outroEditor.getValue();

            return result;
        }

        function getSelectedItemList(list) {
            var result = "";

            for(var itemI in list) {
                var item = list[itemI];
                if(item.selected) {
                    result += item.name + " " + item.desc + "\n";
                }
            }

            return result;
        }

        function initEditor(editorName, modifiable, initContent) {
            var editor = ace.edit(editorName);
            editor.setTheme("ace/theme/monokai");

            editor.renderer.setShowGutter(false);
            editor.setHighlightActiveLine(false);
            editor.setReadOnly(!modifiable);
            editor.setValue(initContent, 1);

            return editor;
        }
});