public class Sum {

    static long minstd(long seed) {
        return seed * 48271 % 214783647;
    }
    
    public static void main(String[] args) {
        int ndat = 1000*1000*1000;
        double sum = 0.0;

        for (int i=0; i<ndat; ++i) {
            sum += 0.01;
        }

        System.out.println("sum = " + sum);
    }
}
