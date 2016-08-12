var reminder = angular.module('reminder',[]);
reminder.controller('listCtrl',['$scope',function ($scope) {
    var colorIndex = 0,id;
    if(localStorage.list){
        $scope.lists = JSON.parse(localStorage.list);
        id = $scope.lists[$scope.lists.length-1].id + 1;
        $scope.currentlist = $scope.lists[0];
    }else{
        $scope.lists = [];
        id = 0;
    }

    //色彩数据
    $scope.colors = ['green','yellow','blue','orange','purple','brow','pink'];

    //将数据保存到localStorage
    $scope.saveData = function(){
        localStorage.list = JSON.stringify($scope.lists);
    }

    //新增列表
    $scope.addItem = function(){
        if(colorIndex === $scope.colors.length){
            colorIndex = 0;
        }
        var list = {id:id++,name:'新列表 '+($scope.lists.length+1),color:$scope.colors[colorIndex++],todos:[]};
        $scope.lists.push(list);
        $scope.currentlist = list;
        $scope.saveData();
    }
    //设置点击为当前列表
    $scope.setCurrent = function(li){
        $scope.currentlist = li;
    }
    $scope.show=function () {
        $('.option-detail').css({display:'block'})
    }
    $scope.cancel=function (e) {
        e.stopPropagation();
    }
    $scope.del = function(id){
        /*$scope.lists = $scope.lists.filter(function(d){
            return d.id != $scope.currentlist.id;
        })
        $scope.currentlist = $scope.lists[0];
        // $scope.isshow = false;
        $scope.saveData();*/
        var arr=[];
        for (var i=0;i<$scope.lists.length;i++){

            if ($scope.lists[i].id!==id){
                arr.push($scope.lists[i]);
            }
        }
        $scope.lists=arr;
        $scope.currentlist=$scope.lists[0];
        /*var index;
        for(var i=0;i<$scope.lists.length;i++){

            if($scope.lists[i]===id+1){
                index=i;
            }
        }
        $scope.currentlist=$scope.lists[index];*/
        $scope.saveData();
    }
    $scope.isshowdone = false;
    $scope.toggleshowdone = function(){
        $scope.isshowdone = $scope.isshowdone?false:true;
    }
    $scope.setcurrenttodo = function(todo){
        $scope.currenttodo = todo;
    }

    $scope.delete=function (ids) {
        var index;
        for (var i=0;i< $scope.currentlist.todos.length;i++){
            if ($scope.currentlist.todos[i].ids===ids){
                index=i;
            }
        }
        $scope.currentlist.todos.splice(index,1);
        $scope.saveData();
    }
    $scope.add = function(){
        if ($scope.currentlist.todos.length===0){
            var ids=0;
        }else{
            var max=-Infinity;
            for (var i=0;i<$scope.currentlist.todos.length;i++){
                var value=$scope.currentlist.todos[i];
                if (value.ids>max){
                    max=value.ids;
                }
            }
            var ids=max+1;
        }
        var newtodo = {ids:ids++,name:'',isDone:false};
        $scope.currentlist.todos.push(newtodo);
        $scope.currenttodo = newtodo;
        // document.querySelector();
        $scope.saveData();
    }
    //选项显示与关闭
   /* $scope.isshow=false;
    $scope.showhideop = function(el){
        $scope.isshow = $scope.isshow?false:true;
        el.stopPropagation();
    }
    $scope.cancle = function(){
        $scope.isshow = false;
    }

    //删除列表
    $scope.deleteItem = function(){
        $scope.lists = $scope.lists.filter(function(d){
            return d.id != $scope.currentlist.id;
        })
        $scope.currentlist = $scope.lists[0];
        $scope.isshow = false;
        $scope.saveData();
    }

    $scope.setcurrenttodo = function(todo){
        $scope.currenttodo = todo;
    }

    $scope.countdoneitem = function(){
        var r = 0;
        $scope.currentlist.todos.forEach(function(data){
            if(data.isdone){
                r += 1;
            }
        })
        return r;
    }

    $scope.isshowdone = false;
    $scope.toggleshowdone = function(){
        $scope.isshowdone = $scope.isshowdone?false:true;
    }
    $scope.deletetodo = function(){
        $scope.currentlist.todos = $scope.currentlist.todos.filter(function(data){
            return data != $scope.currenttodo;
        })
        $scope.isshow2 = false;
        $scope.saveData();
    }

    $scope.isshow2 = false;
    $scope.toggletododetail = function($event){
        document.querySelector('#todo-detail').style.top=$event.clientY - 100 + 'px'
        $scope.isshow2 = $scope.isshow2?false:true;
    }

    $scope.addtodo = function(){
        var newtodo = {name:'',time:new Date(),isdone:false};
        $scope.currentlist.todos.push(newtodo);
        $scope.currenttodo = newtodo;
        document.querySelector()
        $scope.saveData();
    }*/
}])