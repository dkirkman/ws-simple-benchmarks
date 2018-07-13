class Point {
    public double x;
    public double y;
};

public class Square {

    static long minstd(long seed) {
        return seed * 48271 % 214783647;
    }
    
    public static void main(String[] args) {
        int ndat = 1500000;
        int npass = 100;

        Point[] buf = new Point[ndat];
        long idev = 1;
        for (int i=0; i<ndat; ++i) {
            buf[i] = new Point();

            idev = minstd(idev);
            buf[i].x = (double)idev/214783647;

            idev = minstd(idev);
            buf[i].y = (double)idev/214783647;
        }

        double sum = 0.0;

        for (int j=0; j<npass; ++j) {
            for (int i=0; i<ndat; ++i) {
                sum += Math.sqrt(buf[i].x*buf[i].x + buf[i].y*buf[i].y);
            }
        }
        
        System.out.println("sum = " + sum);
    }
}
