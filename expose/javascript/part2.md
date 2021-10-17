## A little more of a challenge section:

Question 1) this line will print the value of i which is 3.
Question 2) this line will print the final value of discounted price which in this case it is 150.
Question 3) this line will print the final value of finalPrice which is 150 w/ respect to the inputs.
Question 4) this function returns with no errors since the array that it is returning is being filled with no issues so i think that the function is basically returning true.
Question 5) this line returns an error because the var "i" is out of scope and the function call has no access.
Question 6) this line also returns an error since the variable "discountedPrice" is declared with let in the for loop yet we are trying to access the var outside of the loop so we are out of scope.
Question 7) This line returns the final value of final price which is 150.
Question 8) The function will return true since the return array is being filled with no errors and we are only returning the array.
Question 9) this line returns an error since i is declared with let and we are accessing it out of scope
Question 10) this line prints the length of the input array which in this case is of length 3.
Question 11) this function returns true even though we made the return array const we are still updating it and filling it correctly so there are no issues with the return.

## Data types:
Question 12)
A) student.name
B) student['Grad Year']
C) student.greeting()
D) student['Favorite Teacher'.name]
E) student.courseLoad[0];

## Basic Operators & Type Conversion:
Question 13)
A) ‘3’ + 2 = 32 this is because integers map to their string values so the string concatenate
B) ‘3’ - 2 = 1 this is because the three converts to an int then they subtract each other
C) 3 + null = 3 null gets converted to 0 and 3 + 0 = 0
D) ‘3’ + null = 3null the null gets converted to a string and the two get concatenated
E) true + 3 = 4 true gets converted to 1 so 3+1 = 4
F) false + null = 0 both values map to 0 so 0+0 = 0
G) '3' + undefined = 3undefined undefined converts to a string so the two get concatenated
H) '3' - undefined = NaN 3 gets converted to a number and the undefined gets converted to NaN hence 
                    the Nan output

Question 14)
A) ‘2’ > 1 = true the 2 gets converted to a number and 2 is greater than 1
B) ‘2’ < ‘12’ = false becuase it checks letter by letter since both are strings and 2 is greater than 1
C) 2 == ‘2’ = true, the 2 gets converted to a num and 2 == 2 is true
D) 2 === ‘2’ = false, the second 2 does not get converted to a comparable type and the comparison fails 
E) true == 2 = false, true is mapped to 1, and 1 does not equal 2
F) true === Boolean(2) = true because the boolean function will return true if the param is > 0 and then the comparison sees true === true so it returns true. 

Question 15) The difference between == and ==== is that the three equal signs does not convert types, so if the types mismatch then it will most often fail where ass the double equal signs will convert the types to be comparable.

## Functions:
Question 17)
Th result will be a new array where each value is multiplied by 2, so in this case we will return [2, 4, 6]. I came to this result by tracing through the code and the callback keyword takes in a function plus an array value and the function it is calling is the do something function which does the multiplication and then we take that result and push it into a new array then return that array.

Question 19)
The output is 1,3,4,2 this is because we set a 1 second wait time for the function that prints out 2 meanwhile the others had no timers so they executed first hence why 2 is last.

