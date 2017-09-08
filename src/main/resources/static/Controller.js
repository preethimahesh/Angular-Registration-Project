angular.module('myModule')
.controller("myController", function ($scope,Regservice) {


		$scope.newMember = {};
		$scope.updateMember = {};
		$scope.updatedid;
		$scope.members = [];
		
        //$scope.dummy={};

		/*$scope.test=function()
		{
						var updateItem={
						"id":1,
						"name":"karthikeyan",
						"email":"karthik.infotec98@gmail.com",
						"gender":"male"};
			            Regservice.updatedata(updateItem,1);
						console.log("hi");
		};*/

		getData();

        function getData() {
            return Regservice.getdetail()
                .then(function (data) {
                    $scope.members = data;
					console.log("getidddddddsss"+$scope.members);
                    return $scope.members;
                });
        }
        console.log(JSON.stringify($scope.newMember));
		$scope.saveMember = function () {
        $scope.members.push($scope.newMember);
        Regservice.postReg($scope.newMember);
        
			console.log($scope.members);
            $scope.newMember={};
            
		};


		/*$scope.editname;
		$scope.editemail;
		$scope.editgender;*/

		$scope.editMember = function (index) {
			console.log(index);
			$scope.updatedid = index;
			//console.log("updatedid" + $scope.updatedid);
			//console.log($scope.members[index]);
			//console.log($scope.members[index].name);
			//console.log($scope.name1);
			$scope.newMember.name = $scope.members[index].name;
			$scope.newMember.email = $scope.members[index].email;
			$scope.newMember.gender = $scope.members[index].gender;
			//console.log($scope.members);

		}
		$scope.saveUpdate = function () {
			console.log("saveid" + $scope.updatedid);
			//console.log(members);
			for (i = 0; i <= $scope.members.length; i++) {

				if ($scope.updatedid === i) {
					// console.log($scope.members[i].name);
					// console.log($scope.members[i].email);
					// console.log($scope.members[i].gender);

					$scope.members[i].name=$scope.newMember.name;
					$scope.members[i].email=$scope.newMember.email;
					$scope.members[i].gender=$scope.newMember.gender;
					var updateItem={
						"id":$scope.updatedid+1,
						"name":$scope.newMember.name,
						"email":$scope.newMember.email,
						"gender":$scope.newMember.gender};
			            Regservice.updatedata(updateItem,$scope.updatedid+1);
						
					
                    // Regservice.updatedata($scope.members[i],$scope.updatedid+1);
				}
			}
			console.log($scope.members.name1);

		}
		 $scope.deleteMember=function(id)
		 {
			 console.log(id);
			 Regservice.deletedata(id);
             console.log(id + " deleted");
		 };

	});

		// $scope.deleteMember = function (index) {
		// 	$scope.deleteid=index;
		// 	//console.log("deleteiddddddd"+$scope.deleteid);
		// 	//console.log($scope.members);
              
		// 	/*console.log(JSON.stringify($scope.members.slice(0, $scope.members.length)));
		// 	console.log(index);
		// 	$scope.dele={};
		// 	$scope.dele=index;
		// 	console.log("ldf"+JSON.stringify($scope.dele));*/
		// 	$scope.del = $scope.members.splice(index, 1);
		// 	/*console.log("hjsdghsdfgh"+JSON.stringify($scope.del));
		// 	console.log($scope.members);*/
		// 	Regservice.deletedata(1);
		// }


        