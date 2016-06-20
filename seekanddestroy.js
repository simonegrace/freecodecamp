
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.


function destroyer(arr) {
        // go through each argument (start at 1)
        for(var i = 1; i < arguments.length; i++) {
                // this is what we need to remove:
                var remove_this = arguments[i];
                // filter returns new version of array, without that:
                arr = arr.filter(function(arrItem) {
                        return (arrItem != remove_this);
                });
        }
        return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


// destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
// destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
// destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
// destroyer([2, 3, 2, 3], 2, 3) should return [].
// destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].