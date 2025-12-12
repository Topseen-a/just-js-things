public class LeapYearCount{
    public static void main(String[] args){

    int count = 0;

    for (int year = 1900; year <= 2025; year++){
        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
            count++;
        }
    }
    System.out.println("Number of leap years that exist is: " + count);
    }
}
