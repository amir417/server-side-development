var rect = require("./rect");

function rectArea (x,y) {

    rect (x,y, (err,rectangle) => {
        if (err) {
	        console.log("ERROR: ", err.message);
	    }
        else {
            console.log("The area of the rectangle of dimensions l = "
                + x + " and b = " + y + " is " + rectangle.area());
            console.log("The perimeter of the rectangle of dimensions l = "
                + x + " and b = " + y + " is " + rectangle.perimeter());
        }
    })
};



rectArea (0,2);
rectArea (23, 2);
