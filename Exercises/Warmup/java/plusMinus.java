package Warmup.java;
// Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

// Input Format

// The first line contains an integer, , denoting the size of the array. 
// The second line contains  space-separated integers describing an array of numbers .

// Output Format

// You must print the following  lines:

// A decimal representing of the fraction of positive numbers in the array compared to its size.
// A decimal representing of the fraction of negative numbers in the array compared to its size.
// A decimal representing of the fraction of zeros in the array compared to its size.
// Sample Input

// 6
// -4 3 -9 0 4 1         
// Sample Output

// 0.500000
// 0.333333
// 0.166667
// Explanation

// There are  positive numbers,  negative numbers, and  zero in the array. 
// The proportions of occurrence are positive: , negative:  and zeros: .
/* 
public class plusMinus {
    private static final boolean var = false;
    static void plusMinus(int[] arr) {
    var arrLength = arr.length;
    var posCount = 0;
    var negCount = 0;
    var zeroCount = 0;
    float posFraction = 0;
    float negFraction = 0;
    float zeroFraction = 0;
    
    foreach(var e : arr ) {
        if (e > 0) {
            posCount++; 
        } else if (e < 0) {
            negCount++;
        } else {
            zeroCount++;
        }           
    }              
    posFraction = (float )posCount / (float) arrLength;
    negFraction = (float )negCount / (float )arrLength;
    zeroFraction = (float )zeroCount / (float )arrLength;
    
    Console.Out.WriteLine(posFraction.ToString("N6"));
    Console.Out.WriteLine(negFraction.ToString("N6"));                          
    Console.Out.WriteLine(zeroFraction.ToString("N6"));
}

}
static void Main(string[] args) {
    int n = Convert.ToInt32(Console.ReadLine());

    int[] arr = Array.ConvertAll(Console.ReadLine().Split(' '), arrTemp => Convert.ToInt32(arrTemp))
    ;
    plusMinus(arr);
}
*/