import java.util.Scanner;
    public class Gcd{
        public static void main(String[] args){

        Scanner input = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int numberOne = input.nextInt();

        System.out.print("Enter another number: ");
        int numberTwo = input.nextInt();

        int gcd = 1;

        for (int count = 1; count <= numberOne && count <= numberTwo; count++){
            if (numberOne % count == 0 && numberTwo % count == 0){
                    gcd = count;
                }    
            }

        System.out.println("GCD is: " + gcd);
        }

    }
