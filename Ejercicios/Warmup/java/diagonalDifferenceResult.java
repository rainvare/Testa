package Warmup.java;

import java.util.List;

// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// Function Description

// Complete the diagonalDifference function described below to calculate the absolute difference between diagonal sums.

// diagonalDifference( integer: a_size_rows, integer: a_size_cols, integer array: arr)
// Parameters:
// a_size_rows: number of rows in array
// a_size_cols: number of columns in array
// a: array of integers to process
// Returns: integer value that was calculated
// Constraints

// Raw Input Format

// The first line contains a single integer,  denoting the number of rows and columns in the matrix . 
// The next  lines denote the matrix 's rows, with each line containing  space-separated integers describing the columns.

// Sample Input 0

// 3
// 11 2 4
// 4 5 6
// 10 8 -12
// Sample Output 0

// 15
// Explanation 0

// The primary diagonal is:

// 11
//    5
//      -12
// Sum across the primary diagonal: 11 + 5 - 12 = 4

// The secondary diagonal is:

//      4
//    5
// 10
// Sum across the secondary diagonal: 4 + 5 + 10 = 19 
// Difference: |4 - 19| = 15

// Note: |x| is the absolute value of x

public class diagonalDifferenceResult {
    

    public static int diagonalDifference(List<List<Integer>> arr) {
        // Write your code here
    int diagonal = 0;
            for (int i = 0; i < arr.size(); i++) {
                diagonal += arr.get(i).get(i);
                diagonal -= arr.get(i).get(arr.size() - (i + 1));
            }
    
            
           return (Math.abs (diagonal));
        }
    
}
