public abstract class TBD1 {

            int[] arr = { 1, 5, 7, 1 };
            int k = 6;

            void getPairsCount(int[] arr, int k) {

        int count = 0;


        for (int i = 0; i < arr.length; i++)
            for (int j = i + 1; j < arr.length; j++)
                if ((arr[i] + arr[j]) == k)
                    count++;

        System.out.println(count);
    }
}


